# SethDev - About Me Website Project

This repository holds the source code for my personal page—an interactive and animated single-page experience, crafted with [SvelteKit](https://kit.svelte.dev/). It's designed to be my digital business card for anyone who wants to get to know me better, offering a glimpse into my interests, passions, and the skills I've gathered along the way.

### [➡️ View Live Demo](https://sethdev.pages.dev)

---

## ✨ Key Features

- **Dynamic Profile Animation**: A fluid animation that reveals information about me, featuring a smooth animation effect created with pure CSS.
- **Automated Projects via GitHub API**: The projects section updates automatically by fetching my latest public repositories directly from my GitHub account, eliminating the need for manual updates.
- **Multi-Language Support**: The site automatically detects the visitor's browser language and displays content in either Romanian or English.
- **Modern Design (Glassmorphism)**: The interface uses a "frosted glass" style (glassmorphism) for a clean and modern look.
- **SEO & Social Media Optimized**: Comprehensive meta tags (Open Graph, Twitter Cards, JSON-LD) for optimal Google indexing and perfect link previews on social platforms like Discord or Twitter.
- **Fully Responsive**: The design seamlessly adapts to any device, from desktop to mobile.

## 🚀 Tech Stack

- **Framework**: [**SvelteKit**](https://kit.svelte.dev/)
- **Styling**: **[Pure CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** (with modern features like Flexbox, Grid, and CSS Variables)
- **Hosting**: [**Cloudflare Pages**](https://pages.cloudflare.com/)

## ⚙️ Setup & Local Development (developer instructions)

The following instructions assume a fresh clone and cover three common environments:

- PowerShell (Windows native Node)
- WSL / Ubuntu (Linux inside Windows — recommended if using WSL)
- CI / build servers (Linux)

Follow the section that matches your development environment.

### Prerequisites
- Node.js (recommended >= 18)
- npm
- If using WSL, install Node inside WSL and run the commands from the WSL shell (do not mix Windows Node with WSL).

### Clone the repository
```bash
git clone https://github.com/sethdev17/about-me.git
cd about-me
```

### 1) PowerShell (Windows native Node)
Use these commands if Node is installed on Windows and you run commands from PowerShell. These steps avoid installing optional native binaries that may fail on Windows:

```powershell
# install dependencies without optional native packages
npm install --no-optional

# generate Svelte language / TSX helper files
npx svelte-kit sync

# run dev server
npm run dev
```

### 2) WSL / Ubuntu (recommended if you use WSL)
If you have WSL (Ubuntu) available, this is the recommended flow because it matches typical CI/production Linux environments:

```bash
# install strictly from package-lock (reproducible)
npm ci

# generate Svelte language / TSX helper files
npx svelte-kit sync

# run dev server
npm run dev
```

What is `npm ci`?
- `npm ci` installs exactly the versions listed in `package-lock.json`. It's faster and more reproducible than `npm install` and is intended for CI and clean installs.
- Use `npm install` when adding or updating packages locally; use `npm ci` in CI and when you want a clean, reproducible install.

### 3) CI / build server (Linux)
Include these steps in your CI workflow (e.g. GitHub Actions with `runs-on: ubuntu-latest`):

```bash
npm ci
npx svelte-kit sync
npm run build
```

### Environment variables (`.env`)
- Create a `.env` file in the project root (same folder as `package.json`).
- Example:
```
# .env
GITHUB_TOKEN=ghp_YOUR_TOKEN_HERE
```
- `GITHUB_TOKEN` is used server-side (in `+page.server.js`) to fetch GitHub repositories. Make sure the token is available before build in CI.
- Do NOT commit `.env` to git. Use your CI secret storage for tokens.

### Troubleshooting & common issues
- EBADPLATFORM during install: the lockfile may reference native packages for a different OS/arch. Fixes:
  - Use `npm install --no-optional` (Windows) or
  - Remove `node_modules` + `package-lock.json` and run `npm ci` in the appropriate environment (Linux).
- `npx svelte-kit sync` throws "Cannot find module @rollup/rollup-win32-x64-msvc": this can happen on Windows. Temporary local workaround (NOT for commit):
  - Create `node_modules/@rollup/rollup-win32-x64-msvc/index.js` that exports an empty object (or simple stub), then re-run `npx svelte-kit sync`.
  - Prefer using WSL or CI to avoid this problem. Do not commit stub files in `node_modules`.

### Notes about `prepare` and CI
- The repository temporarily changes the `prepare` script in `package.json` to skip running `svelte-kit sync` during `npm install` on Windows (to avoid local install crashes).
- In CI, explicitly run `npx svelte-kit sync` (as shown above) before `npm run build` so generated helper files exist.
- Alternatively, re-enable `prepare` to `svelte-kit sync` and ensure your CI runs on Linux where optional native packages can be installed correctly.

### Quick start summary
- PowerShell (Windows):
```powershell
npm install --no-optional
npx svelte-kit sync
npm run dev
```
- WSL / Ubuntu (recommended):
```bash
npm ci
npx svelte-kit sync
npm run dev
```

---

©️ Copyright and License
Copyright © 2024 SethDev. All Rights Reserved.
This project is private intellectual property. You do not have permission to copy, modify, distribute, or use this source code in any way, in whole or in part, without the express written consent of the author (SethDev).
Any unauthorized use of this code constitutes a violation of copyright law and will be addressed accordingly.

📫 Contact
- **Discord** - [kurumi362](https://discord.com/users/602431963688730624)
- **Email** - gg079331@gmail.com
