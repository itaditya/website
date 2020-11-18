export const tagNameMapping = {
  all: 'All Posts',
  javascript: 'JavaScript',
  react: 'React',
  mongodb: 'MongoDB',
  tailwindcss: 'TailwindCSS',
  design_systems: 'Design Systems',
};

export default function postsByCategory(posts) {
  const postsMap = {};
  const categoryMap = {
    all: [],
  };

  posts.forEach(post => {
    postsMap[post.slug] = post;
    categoryMap.all.push(post.slug);
    post.tags.forEach(tag => {
      if (!categoryMap[tag]) {
        categoryMap[tag] = [];
      }
      categoryMap[tag].push(post.slug);
    });
  });

  return { postsMap, categoryMap };
}
