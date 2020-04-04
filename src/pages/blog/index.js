import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { PostsPopularList } from '_components/PostsSuggestion';
import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import { PublishAndReadTime } from '_components/PostExtraInfo';
import IconCross from '_components/icons/IconCross';
import { useDeviceWidth } from '_utils/deviceDetails';
import getPosts from '_utils/getPosts';
import postsByCategory, { tagNameMapping } from '_utils/postsByCategory';

export async function getStaticProps() {
  const posts = await getPosts();
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
  const { postsMap, categoryMap } = postsByCategory(sortedPosts);
  return { props: { postsMap, categoryMap } };
}

const Blog = props => {
  const { postsMap, categoryMap } = props;
  const [stateActiveCategory, setStateActiveCategory] = useState('all');
  const deviceWidth = useDeviceWidth();

  const shownPosts = categoryMap[stateActiveCategory] || [];

  return (
    <div
      className="relative min-h-screen font-body bg-gray-200 px:4 sm:px-24 lg:px-32 xl:px-40 py-8 grid grid-cols-12 col-gap-4"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <SiteHead pageName="Blog" />
      <SiteNavbar activeLink="blog" />
      <main className="col-start-2 col-span-10 row-auto mt-24">
        <section>
          <h2 className="text-2xl md:text-4xl mb-8 font-bold text-gray-800">Popular Posts</h2>
          <PostsPopularList />
        </section>
        <div className="mt-16 flex flex-col-reverse lg:flex-row justify-between">
          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Latest Posts</h2>
            <ul className="lg:w-3/4 xl:w-1/2">
              {shownPosts.map(slug => {
                const post = postsMap[slug];
                return (
                  <li key={post.slug} className="mt-8 pl-3">
                    <h3 className="text-xl md:text-2xl font-medium text-gray-800 hover:underline">
                      <Link href={'/blog/' + post.slug}>
                        <a>{post.title}</a>
                      </Link>
                    </h3>
                    <PublishAndReadTime post={post} />
                    {['lg', 'xl'].includes(deviceWidth) && (
                      <p className="hidden lg:block text-base md:text-lg text-gray-700 mt-3">{post.description}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
          {['xs', 'sm', 'md'].includes(deviceWidth) && (
            <section className="flex items-center mb-8 lg:hidden">
              <h4 className="text-base text-gray-800 mr-4">Filter By Category</h4>
              <select
                className="px-2 py-1 shadow-md bg-gray-200"
                value={stateActiveCategory}
                onChange={event => setStateActiveCategory(event.target.value)}
              >
                {Object.keys(categoryMap).map(category => (
                  <option key={category} value={category}>
                    {tagNameMapping[category] || category}
                  </option>
                ))}
              </select>
            </section>
          )}
          {['lg', 'xl'].includes(deviceWidth) && (
            <section className="hidden lg:block">
              <h4 className="text-xl md:text-2xl mb-1 text-gray-800">Categories</h4>
              <ul className="text-gray-700 text-lg mt-3 transition-colors duration-200">
                {Object.keys(categoryMap)
                  .filter(category => category !== 'all')
                  .map(category => (
                    <li
                      key={category}
                      className={cn('mt-1 ml-2', {
                        'text-primary-600': stateActiveCategory === category,
                        'hover:text-gray-900': stateActiveCategory !== category,
                      })}
                    >
                      <button onClick={() => setStateActiveCategory(category)}>
                        {tagNameMapping[category] || category}
                      </button>
                    </li>
                  ))}
                <li className="text-base mt-3 text-blue-600">
                  <button className="flex items-center" onClick={() => setStateActiveCategory('all')}>
                    <IconCross className="text-lg mr-1" />
                    Clear Filter
                  </button>
                </li>
              </ul>
            </section>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Blog;
