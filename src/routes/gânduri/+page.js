// src/routes/gânduri/+page.js
export async function load() {
  const posts = import.meta.glob('$lib/posts/*.md', { eager: true });
  
  const postMap = {};

  Object.entries(posts).forEach(([path, post]) => {
    if (!post || !post.metadata) return;
    
    const fileName = path.split('/').pop();
    const isEn = fileName.endsWith('.en.md');
    const slug = isEn ? fileName.replace('.en.md', '') : fileName.replace('.md', '');

    if (!postMap[slug]) {
      postMap[slug] = { slug };
    }

    if (isEn) {
      postMap[slug].titleEn = post.metadata.title;
    } else {
      postMap[slug].titleRo = post.metadata.title || 'Gând fără titlu';
      postMap[slug].date = post.metadata.date;
      postMap[slug].themeColor = post.metadata.themeColor || '#60a5fa';
      postMap[slug].themeColors = post.metadata.themeColors;
    }
  });

  const summaries = Object.values(postMap);

  return { summaries };
}