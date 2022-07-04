// @ts-check

/**
 * @typedef { import('next').GetStaticProps } GetStaticProps
 * @typedef { import('_types/posts').Categories } Categories
 * @typedef { import('./types/blog').BlogPageProps } BlogPageProps
 * @typedef { import('./types/blog').SelectChangeHandler } SelectChangeHandler
 */

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { PostsPopularList } from '_components/PostsSuggestion';
import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import { PublishAndReadTime } from '_components/PostExtraInfo';
import IconCross from '_components/icons/IconCross';
import IconCircleArrow from '_components/icons/IconCircleArrow';
import { useDeviceWidth } from '_utils/deviceDetails';
import cn from '_utils/classnames';
import getPosts from '_utils/getPosts';
import { getPostsByCategory, getCategories, getCategoryName } from '_utils/postsCategory';

/** @type { GetStaticProps } */
export function getStaticProps() {
  const posts = getPosts();
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
  const { postsMap, categoryMap } = getPostsByCategory(sortedPosts);
  return { props: { postsMap, categoryMap } };
}

/** @param { BlogPageProps } props */
const Blog = (props) => {
  const { postsMap, categoryMap } = props;
  // const [stateActiveCategory, setStateActiveCategory] = useState(
  //   /** @type { Categories } */
  //   ('all'),
  // );
  const router = useRouter();
  console.log(`router.query`, router.query); // aditodo remove this
  const deviceWidth = useDeviceWidth();
  const categories = getCategories();

  /** @type { Categories } */
  const stateActiveCategory = router.query.category || 'all';
  const shownPosts = categoryMap[stateActiveCategory] || [];

  function setStateActiveCategory(selectedCategory) {
    router.push({
      query: {
        category: selectedCategory,
      },
    }, undefined, {
      scroll: false,
    });
  }

  /** @type { SelectChangeHandler } */
  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;

    // @ts-ignore
    setStateActiveCategory(selectedCategory);
  };

  return (
    <div className="relative grid min-h-screen grid-cols-12 py-8 bg-gray-100 font-body px:4 sm:px-24 lg:px-32 xl:px-40 grid-rows-main-fill">
      <SiteHead pageName="Blog" />
      <SiteNavbar activeLink="blog" />
      <main className="col-span-10 col-start-2 row-auto mt-24">
        <section className="lg:w-max">
          <h2 className="mb-8 text-2xl font-bold text-gray-700 md:text-4xl">Popular Posts</h2>
          <PostsPopularList />
        </section>
        <div className="flex flex-col-reverse justify-between mt-16 lg:flex-row">
          <section className="lg:w-3/4 xl:w-1/2">
            <h2 className="text-2xl font-bold text-gray-700 md:text-4xl">Latest Posts</h2>
            <ul>
              {shownPosts.map((slug) => {
                const post = postsMap[slug];
                return (
                  <li key={post.slug} className="pl-3 mt-8 lg:mt-12">
                    <h3 className="text-xl font-medium text-gray-700 md:text-2xl hover:underline">
                      <Link href={'/blog/' + post.slug}>
                        <a>{post.title}</a>
                      </Link>
                    </h3>
                    <PublishAndReadTime post={post} className="mt-1" />
                    <p className="hidden mt-3 text-base text-gray-600 lg:block lg:text-base">
                      {post.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
          {['xs', 'sm', 'md'].includes(deviceWidth) && (
            <section className="flex items-center mb-8 lg:hidden">
              <h4 className="mr-4 text-base text-gray-800">Filter By Category</h4>
              <select
                className="px-2 py-1 bg-gray-100 shadow-md"
                value={stateActiveCategory}
                onChange={handleSelectChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {getCategoryName(category)}
                  </option>
                ))}
              </select>
            </section>
          )}
          {['lg', 'xl', '2xl'].includes(deviceWidth) && (
            <section className="hidden lg:block">
              <div>
                <h4 className="mb-1 text-xl text-gray-800 md:text-2xl">Categories</h4>
                <ul className="mt-5 text-lg text-gray-700 space-y-2">
                  {categories
                    .filter((category) => category !== 'all')
                    .map((category) => (
                      <li
                        key={category}
                        className={cn({
                          'ml-2 transition ease-out': true,
                          'text-primary-600': stateActiveCategory === category,
                          'hover:text-gray-900 hover:translate-x-1':
                            stateActiveCategory !== category,
                        })}
                      >
                        <button onClick={() => setStateActiveCategory(category)}>
                          {getCategoryName(category)}
                        </button>
                      </li>
                    ))}
                  <li className="pt-1">
                    <button
                      className={`
                        flex items-center text-base transition text-blue-600 hover:bg-gray-200 hover:text-blue-500 py-1 px-2 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-opacity-70 focus:ring-primary-400
                      `}
                      onClick={() => setStateActiveCategory('all')}
                    >
                      <IconCross className="mr-1 text-lg" />
                      Clear Filter
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <Link href="/unpolished">
                  <a
                    className={`
                      flex items-center px-4 py-3 transition bg-white rounded-lg shadow-md hover:shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-opacity-70 focus:ring-primary-400 ring-offset-4 ring-offset-gray-100
                    `}
                  >
                    <div className="text-lg font-medium text-gray-700">
                      Unpolished <br /> Thoughts
                    </div>
                    <div className="ml-4 text-4xl text-gray-600">
                      <IconCircleArrow />
                    </div>
                  </a>
                </Link>
              </div>
            </section>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Blog;
