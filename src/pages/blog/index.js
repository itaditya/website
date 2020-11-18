import { useState } from 'react';
import Link from 'next/link';

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
import postsByCategory, { tagNameMapping } from '_utils/postsByCategory';

export async function getStaticProps() {
  const posts = await getPosts();
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
  const { postsMap, categoryMap } = postsByCategory(sortedPosts);
  return { props: { postsMap, categoryMap } };
}

const Blog = (props) => {
  const { postsMap, categoryMap } = props;
  const [stateActiveCategory, setStateActiveCategory] = useState('all');
  const deviceWidth = useDeviceWidth();

  const shownPosts = categoryMap[stateActiveCategory] || [];

  return (
    <div
      className="relative grid min-h-screen grid-cols-12 py-8 bg-gray-200 font-body px:4 sm:px-24 lg:px-32 xl:px-40"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <SiteHead pageName="Blog" />
      <SiteNavbar activeLink="blog" />
      <main className="col-span-10 col-start-2 row-auto mt-24">
        <section>
          <h2 className="mb-8 text-2xl font-bold text-gray-800 md:text-4xl">Popular Posts</h2>
          <PostsPopularList />
        </section>
        <div className="flex flex-col-reverse justify-between mt-16 lg:flex-row">
          <section className="lg:w-3/4 xl:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">Latest Posts</h2>
            <ul>
              {shownPosts.map((slug) => {
                const post = postsMap[slug];
                return (
                  <li key={post.slug} className="pl-3 mt-8">
                    <h3 className="text-xl font-medium text-gray-800 md:text-2xl hover:underline">
                      <Link href={'/blog/' + post.slug}>
                        <a>{post.title}</a>
                      </Link>
                    </h3>
                    <PublishAndReadTime post={post} />
                    {['lg', 'xl'].includes(deviceWidth) && (
                      <p className="hidden mt-3 text-base text-gray-700 lg:block md:text-lg">{post.description}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
          {['xs', 'sm', 'md'].includes(deviceWidth) && (
            <section className="flex items-center mb-8 lg:hidden">
              <h4 className="mr-4 text-base text-gray-800">Filter By Category</h4>
              <select
                className="px-2 py-1 bg-gray-200 shadow-md"
                value={stateActiveCategory}
                onChange={(event) => setStateActiveCategory(event.target.value)}
              >
                {Object.keys(categoryMap).map((category) => (
                  <option key={category} value={category}>
                    {tagNameMapping[category] || category}
                  </option>
                ))}
              </select>
            </section>
          )}
          {['lg', 'xl'].includes(deviceWidth) && (
            <section className="hidden lg:block">
              <div>
                <h4 className="mb-1 text-xl text-gray-800 md:text-2xl">Categories</h4>
                <ul className="mt-3 text-lg text-gray-700 transition-colors duration-200">
                  {Object.keys(categoryMap)
                    .filter((category) => category !== 'all')
                    .map((category) => (
                      <li
                        key={category}
                        className={cn({
                          'mt-1 ml-2': true,
                          'text-primary-600': stateActiveCategory === category,
                          'hover:text-gray-900': stateActiveCategory !== category,
                        })}
                      >
                        <button onClick={() => setStateActiveCategory(category)}>
                          {tagNameMapping[category] || category}
                        </button>
                      </li>
                    ))}
                  <li className="mt-3 text-base text-blue-600">
                    <button className="flex items-center" onClick={() => setStateActiveCategory('all')}>
                      <IconCross className="mr-1 text-lg" />
                      Clear Filter
                    </button>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <Link href="/unpolished">
                  <a className="flex items-center px-4 py-3 transition duration-200 bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className="text-lg font-medium text-gray-700">
                      Unpolished <br/> Thoughts
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
