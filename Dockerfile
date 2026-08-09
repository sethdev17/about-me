# ============================================================
# Stage 1: Build (compilăm proiectul)
# ============================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copiem doar package-urile mai întâi (pentru Docker cache)
COPY package*.json ./

# Instalam dependențele
RUN npm ci --no-audit --no-fund

# Copiem restul codului sursă
COPY . .

# Setăm flag ca să folosească adapter-node (pentru Docker/Node)
ENV USE_DOCKER=1

# Compilăm SvelteKit în producție
RUN npm run build

# ============================================================
# Stage 2: Production (doar ce ne trebuie)
# ============================================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production \
    PORT=3001 \
    HOST=0.0.0.0 \
    BODY_SIZE_LIMIT=Infinity

# Utilizator non-root (siguranță)
RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 sveltekit

# Copiem din stage-ul builder DOAR ce avem nevoie
COPY --from=builder /app/build-node ./build-node
COPY --from=builder /app/package*.json ./

# Instalam DOAR dependințele de producție (dacă ar fi vreuna)
RUN npm ci --omit=dev --no-audit --no-fund && \
    npm cache clean --force

# Setăm proprietatea pe fișiere
RUN chown -R sveltekit:nodejs /app

USER sveltekit

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3001/ || exit 1

CMD ["node", "build-node"]
