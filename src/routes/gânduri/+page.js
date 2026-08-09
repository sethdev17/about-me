// src/routes/gânduri/+page.js
export async function load() {
  const posts = import.meta.glob('$lib/posts/*.md', { eager: true });
  
  const summaries = Object.entries(posts)
    .filter(([_, post]) => post && post.metadata)
    .map(([path, post]) => {
      const slug = path.split('/').pop().replace('.md', '');
      return {
        slug,
        title: post.metadata.title || 'Gând fără titlu', // Fallback în caz că lipsește doar titlul
        date: post.metadata.date,
        themeColor: post.metadata.themeColor || '#60a5fa',
        themeColors: post.metadata.themeColors
      };
    });

  return { summaries };
}