// src/routes/gânduri/+page.js
export async function load() {
  const posts = import.meta.glob('$lib/posts/*.md', { eager: true });
  
  const summaries = Object.entries(posts).map(([path, post]) => {
    const slug = path.split('/').pop().replace('.md', '');
    return {
      slug,
      title: post.metadata.title
    };
  });

  return { summaries };
}
