// @ts-check

/**
 * @typedef { import('_types/posts').PostsList } PostsList
 * @typedef { import('_types/posts').Categories } Categories
 * @typedef { import('_types/posts').CategoriesList } CategoriesList
 * @typedef { import('_types/posts').CategoryNamesMap } CategoryNamesMap
 * @typedef { import('_types/posts').PostsMap } PostsMap
 * @typedef { import('_types/posts').CategoryMap } CategoryMap
 * @typedef { import('_types/posts').PostsByCategory } PostsByCategory
 */

/**
 * tag key to label mapping
 * @type { CategoryNamesMap }
 */
const categoryNameMapping = {
  all: 'All Posts',
  javascript: 'JavaScript',
  react: 'React',
  state_management: 'State Management',
  engineering: 'Engineering',
  mongodb: 'MongoDB',
  tailwindcss: 'TailwindCSS',
  design_systems: 'Design Systems',
  redux: 'Redux',
  testing: 'Testing',
  git: 'Git',
  github: 'GitHub',
};

/** @param { Categories } category */
export function getCategoryName(category) {
  return categoryNameMapping[category];
}

/**
 * @param { PostsList } posts
 * @return { PostsByCategory }
 */
export function getPostsByCategory(posts) {
  /** @type { PostsMap } */
  const postsMap = {};

  /** @type { CategoryMap } */
  // @ts-ignore
  const categoryMap = {
    all: [],
  };

  posts.forEach((post) => {
    postsMap[post.slug] = post;
    categoryMap.all.push(post.slug);
    post.tags.forEach((tag) => {
      if (!categoryMap[tag]) {
        categoryMap[tag] = [];
      }
      categoryMap[tag].push(post.slug);
    });
  });

  return { postsMap, categoryMap };
}

/**
 * get list of all categories
 * @returns { CategoriesList }
 */
export function getCategories() {
  const categories = Object.keys(categoryNameMapping);

  // @ts-ignore
  return categories;
}
