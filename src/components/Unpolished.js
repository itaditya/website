import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import { PublishAndReadTime } from '_components/PostExtraInfo';
import cn from '_utils/classnames';

import renderContentfulMarkup from '_utils/renderContentfulMarkup';

function PostContent(props) {
  const { post } = props;
  const [stateExpanded, setStateExpanded] = useState(false);
  const markup = renderContentfulMarkup(post.content);
  return (
    <div data-post-id={post.id} className="py-4 mb-4">
      <article className="relative px-8 py-5 bg-white rounded-md shadow-lg overflow-hidden">
        <div className={cn({ 'line-clamp': !stateExpanded })}>
          <Link href={`?id=${post.id}`}>
            <a>
              <h2 className="mt-4 text-2xl text-gray-700 font-heading">{post.title}</h2>
            </a>
          </Link>
          <PublishAndReadTime post={post} />
          <p className="mt-4 mb-6 text-lg text-gray-600">{post.description}</p>
          <div dangerouslySetInnerHTML={{ __html: markup }}></div>
        </div>
        <div
          className={cn({ "bottom-0 left-0 flex justify-center w-full": true, "absolute pt-16 pb-4": !stateExpanded })}
          style={stateExpanded ? {} : { backgroundImage: 'linear-gradient(to bottom, hsla(0, 0%, 100%, 0.1), hsl(0, 0%, 100%))' }}
        >
          <button className="px-3 py-1 text-gray-700 hover:bg-gray-200 focus:bg-gray-300 active:bg-gray-300 rounded-md transition ease-in-out duration-200" onClick={() => setStateExpanded((oldState) => !oldState)}>
            {stateExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
        {!stateExpanded && <div className="pb-10"></div>}
      </article>
    </div>
  );
}

function Unpolished(props) {
  const { posts } = props;
  const router = useRouter();
  const linkedPostId = router.query.id;

  useEffect(() => {
    if (linkedPostId) {
      const elem = document.querySelector(`[data-post-id="${linkedPostId}"]`);
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [linkedPostId]);

  return (
    <div
      className="grid min-h-screen grid-cols-12 py-8 bg-gray-100 px:4 sm:px-24 lg:px-32 xl:px-40 font-body"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <SiteHead pageName="Unpolished" />
      <SiteNavbar />
      <aside className="top-0 col-span-10 col-start-2 pt-8 mt-10 lg:h-64 lg:sticky lg:col-start-9 lg:col-span-5 lg:row-start-2 xl:col-start-8 xl:col-span-4">
        <h2 className="mb-8 text-4xl font-bold text-gray-700 xl:text-5xl font-heading">Adi's unpolished thoughts...</h2>
        <p className="text-lg text-gray-700 lg:text-xl">
          These posts are my unpolished thoughts. They lack nuance and are not well researched. If I'm wrong about
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
        {posts.map((post) => (
          <PostContent key={post.id} post={post} />
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}

export default Unpolished;
