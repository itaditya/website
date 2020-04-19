import { useEffect } from 'react';
import Link from 'next/link';

import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import { PublishAndReadTime } from '_components/PostExtraInfo';

import renderContentfulMarkup from '_utils/renderContentfulMarkup';
import getUnpolishedPosts from '_utils/getUnpolishedPosts';

const Unpolished = (props) => {
  const { posts, linkedPostId } = props;

  useEffect(() => {
    if (linkedPostId) {
      const elem = document.querySelector(`[data-post-id="${linkedPostId}"]`);
      if(elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [linkedPostId]);

  return (
    <div
      className="grid grid-cols-12 col-gap-4 py-8 bg-gray-200 px:4 sm:px-24 lg:px-32 xl:px-40 font-body"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <SiteHead pageName="Unpolished" />
      <SiteNavbar />
      <aside className="top-0 lg:h-64 col-span-10 col-start-2 pt-8 mt-10 lg:sticky lg:col-start-9 lg:col-span-5 lg:row-start-2 xl:col-start-8 xl:col-span-4">
        <h2 className="mb-8 text-4xl font-bold text-gray-700 xl:text-5xl font-heading">Adi's unpolished thoughts...</h2>
        <p className="text-lg text-gray-700 lg:text-xl">
          These posts are my unpolished thought. They lack nuance and are not well researched. If I'm wrong about
          anything please correct me on{' '}
          <a
            href="https://twitter.com/dev__adi"
            className="text-blue-600 underline hover:text-blue-700 visited:text-indigo-800"
            style={{ textDecorationColor: 'currentColor' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter.
          </a>
        </p>
      </aside>
      <main className="col-span-10 col-start-2 py-8 mt-10 lg:col-span-7 lg:row-start-2 xl:col-span-6">
        {posts.map((post) => {
          const markup = renderContentfulMarkup(post.content);
          return (
            <div key={post.id} data-post-id={post.id} className="py-4 mb-4">
              <article className="px-8 py-5 bg-white rounded-md shadow-lg">
                <Link href={`?id=${post.id}`}>
                  <a><h2 className="mt-4 text-2xl text-gray-800 font-heading">{post.title}</h2></a>
                </Link>
                <PublishAndReadTime post={post} />
                <p className="mt-4 mb-6 text-lg text-gray-600">{post.description}</p>
                <div dangerouslySetInnerHTML={{ __html: markup }}></div>
              </article>
            </div>
          );
        })}
      </main>
      <SiteFooter />
    </div>
  );
};

Unpolished.getInitialProps = async function (context) {
  const { query } = context;
  const { drafts = 'false', id } = query;

  const loadDrafts = drafts === 'true';

  const posts = await getUnpolishedPosts({ loadDrafts });
  return {
    posts,
    linkedPostId: id,
  };
};

export default Unpolished;
