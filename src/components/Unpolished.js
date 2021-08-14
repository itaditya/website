// @ts-check

/**
 * @typedef { import('./types/Unpolished').PostContentComp } PostContentComp
 * @typedef { import('./types/Unpolished').UnpolishedProps } UnpolishedProps
 */

import { useState } from 'react';
import Link from 'next/link';

import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import { PublishDate } from '_components/PostExtraInfo';
import cn from '_utils/classnames';

import renderContentfulMarkup from '_utils/renderContentfulMarkup';

/** @type { PostContentComp } */
const PostContent = (props) => {
  const { post } = props;
  const [stateExpanded, setStateExpanded] = useState(false);
  const markup = renderContentfulMarkup(post.content);
  return (
    <article
      id={post.id}
      className="relative px-8 py-5 mb-12 bg-white rounded-md shadow-lg scroll-mt overflow-hidden"
    >
      <div className={cn({ 'line-clamp': !stateExpanded })}>
        <Link href={`#${post.id}`}>
          <a>
            <h2 className="mt-4 text-2xl text-gray-700 font-heading">{post.title}</h2>
          </a>
        </Link>
        <PublishDate post={post} className="mt-1" />
        <p className="mt-4 mb-6 text-lg text-gray-600">{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: markup }}></div>
      </div>
      <div
        className={cn({
          'bottom-0 left-0 flex justify-center w-full': true,
          'absolute pt-16 pb-4': !stateExpanded,
        })}
        style={
          stateExpanded
            ? {}
            : {
                backgroundImage:
                  'linear-gradient(to bottom, hsla(0, 0%, 100%, 0.1), hsl(0, 0%, 100%))',
              }
        }
      >
        <button
          className="px-3 py-1 text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 ring-offset-4 rounded-md transition"
          onClick={() => setStateExpanded((oldState) => !oldState)}
        >
          {stateExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      {!stateExpanded && <div className="pb-10"></div>}
    </article>
  );
}

/** @param { UnpolishedProps } props */
const Unpolished = (props) => {
  const { posts } = props;

  return (
    <div className="grid min-h-screen grid-cols-12 grid-rows-main-fill py-8 bg-gray-100 px:4 sm:px-24 lg:px-32 xl:px-40 font-body">
      <SiteHead pageName="Unpolished" />
      <SiteNavbar />
      <aside className="top-0 col-span-10 col-start-2 pt-8 mt-10 lg:h-64 lg:sticky lg:col-start-9 lg:col-span-5 lg:row-start-2 xl:col-start-8 xl:col-span-4">
        <h2 className="mb-8 text-4xl font-bold text-gray-700 xl:text-5xl font-heading">
          Adi's unpolished thoughts...
        </h2>
        <p className="text-lg text-gray-700 lg:text-xl">
          These posts are my unpolished thoughts. They lack nuance and are not well researched. If
          I'm wrong about anything please correct me on{' '}
          <a
            href="https://twitter.com/dev__adi"
            className="text-blue-600 underline hover:text-blue-700 visited:text-indigo-600"
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
