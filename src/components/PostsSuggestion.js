import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';

import IconReact from '_components/icons/IconReact';
import IconJS from '_components/icons/IconJS';
import IconMongoDB from '_components/icons/IconMongoDB';
import IconChevronRight from '_components/icons/IconChevronRight';

export function PostsPopularList() {
  return (
    <ul className="space-y-4">
      <li className="pl-3 pr-6 md:py-2 rounded-md">
        <Link href="/blog/async-await-hell">
          <a className="flex items-start lg:items-center">
            <span
              className="mt-1 lg:mt-0 text-2xl rounded-full"
              style={{ color: 'hsl(52.2, 84.3%, 62.5%)', backgroundColor: 'hsl(80, 3%, 19.4%)' }}
            >
              <IconJS />
            </span>
            <h3 className="max-w-2xl ml-4 text-base text-gray-700 hover:underline sm:text-lg xl:text-2xl">
              Escaping from Async/Await Hell
            </h3>
            <span className="hidden px-2 ml-4 text-sm text-blue-800 bg-blue-100 border border-blue-300 sm:block rounded-md">
              10 mins read
            </span>
          </a>
        </Link>
      </li>
      <li className="pl-3 pr-6 md:py-2 rounded-md">
        <Link href="/blog/10-mongo-things-i-wished-i-knew">
          <a className="flex items-start lg:items-center">
            <span className="mt-1 lg:mt-0 text-3xl rounded-sm">
              <IconMongoDB />
            </span>
            <h3 className="max-w-2xl ml-4 text-base text-gray-700 hover:underline sm:text-lg xl:text-2xl">
              Things I wish I knew before using MongoDB
            </h3>
            <span className="hidden px-2 ml-4 text-sm text-blue-800 bg-blue-100 border border-blue-300 sm:block rounded-md">
              5 mins read
            </span>
          </a>
        </Link>
      </li>
      <li className="pl-3 pr-6 md:py-2 rounded-md">
        <Link href="/blog/optimize-your-react-app-with-react-memo">
          <a className="flex items-start lg:items-center">
            <span className="mt-2 lg:mt-0 text-2xl rounded-full" style={{ color: 'hsl(192.7, 63.5%, 54.9%)' }}>
              <IconReact />
            </span>
            <h3 className="max-w-2xl ml-4 text-base text-gray-700 hover:underline sm:text-lg xl:text-2xl">
              Optimize Your React App with React.memo
            </h3>
            <span className="hidden px-2 ml-4 text-sm text-blue-800 bg-blue-100 border border-blue-300 sm:block rounded-md">
              11 mins read
            </span>
          </a>
        </Link>
      </li>
    </ul>
  );
}

const popularPosts = [
  {
    slug: 'async-await-hell',
    title: <Fragment>How to escape from async/await<br /> hell</Fragment>,
  },
  {
    slug: 'optimize-your-react-app-with-react-memo',
    title: <Fragment>Optimize Your React App<br /> with React.memo</Fragment>,
  },
  {
    slug: 'react-renderprops-hoc',
    title: <Fragment>Understanding React Render <br /> Props and HOC</Fragment>,
  },
];

function getNextArticle(currentPostSlug) {
  const n = popularPosts.length - 1; // because the current slug post shouldn't be counted
  const index = Math.floor(Math.random() * n);
  const posts = popularPosts.filter(post => post.slug !== currentPostSlug);
  return posts[index];
}

export function PostNextRead(props) {
  const { currentPostSlug } = props;
  const [stateNextArticle, setStateNextArticle] = useState(null);

  useEffect(() => {
    const nextArticle = getNextArticle(currentPostSlug);
    setStateNextArticle(nextArticle);
  }, [currentPostSlug]);

  return (
    <div className="py-10 mt-20">
      {
        stateNextArticle && (
          <Link href={'/blog/' + stateNextArticle.slug}>
            <a className="flex flex-col items-center text-center group" data-percy-hidden>
              <span className="text-3xl text-center text-gray-600 md:text-5xl group-hover:text-blue-500"><IconChevronRight /></span>
              <h3 className="mt-4 text-2xl font-medium text-gray-700 group-hover:text-blue-500 transition">Next Up: {stateNextArticle.title}</h3>
            </a>
          </Link>
        )
      }
    </div>
  );
}
