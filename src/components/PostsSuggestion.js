import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';

import IconReact from '_components/icons/IconReact';
import IconJS from '_components/icons/IconJS';
import IconMongoDB from '_components/icons/IconMongoDB';
import IconChevronRight from '_components/icons/IconChevronRight';

export function PostsPopularList() {
  return (
    <ul className="">
      <li className="md:py-2 pl-3 pr-6 rounded-md">
        <Link href="/blog/async-await-hell">
          <a className="flex items-start">
            <span
              className="rounded-full text-2xl mt-1"
              style={{ color: 'hsl(52.2, 84.3%, 62.5%)', backgroundColor: 'hsl(80, 3%, 19.4%)' }}
            >
              <IconJS />
            </span>
            <span className="hover:underline text-base sm:text-lg md:text-2xl text-gray-800 ml-4 max-w-2xl">
              Escaping from Async/Await Hell
            </span>
            <span className="hidden sm:block ml-4 mt-1 text-sm bg-blue-200 rounded-md px-2 text-blue-800 border border-blue-300">
              10 mins read
            </span>
          </a>
        </Link>
      </li>
      <li className="md:py-2 pl-3 pr-6 rounded-md mt-4">
        <Link href="/blog/10-mongo-things-i-wished-i-knew">
          <a className="flex items-start">
            <span className="rounded-sm text-3xl mt-1">
              <IconMongoDB />
            </span>
            <span className="hover:underline text-base sm:text-lg md:text-2xl text-gray-800 ml-4 max-w-2xl">
              Things I wish I knew before using MongoDB
            </span>
            <span className="hidden sm:block ml-4 mt-1 text-sm bg-blue-200 rounded-md px-2 text-blue-800 border border-blue-300">
              5 mins read
            </span>
          </a>
        </Link>
      </li>
      <li className="md:py-2 pl-3 pr-6 rounded-md mt-4">
        <Link href="/blog/react-renderprops-hoc">
          <a className="flex items-start">
            <span className="rounded-full text-2xl mt-2" style={{ color: 'hsl(192.7, 63.5%, 54.9%)' }}>
              <IconReact />
            </span>
            <span className="hover:underline text-base sm:text-lg md:text-2xl text-gray-800 ml-4 max-w-2xl">
              Understanding React Render Props and HOC
            </span>
            <span className="hidden sm:block ml-4 mt-1 text-sm bg-blue-200 rounded-md px-2 text-blue-800 border border-blue-300">
              7 mins read
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
    slug: '10-mongo-things-i-wished-i-knew',
    title: <Fragment>Things I wish I knew before using<br /> MongoDB</Fragment>,
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
    <div className="mt-20 py-10">
      {
        stateNextArticle && (
          <Link href={'/blog/' + stateNextArticle.slug}>
            <a className="group flex flex-col items-center text-center">
              <span className="text-3xl md:text-5xl text-center text-gray-600 group-hover:text-blue-700"><IconChevronRight /></span>
              <h3 className="font-medium mt-4 text-2xl text-gray-700 group-hover:text-blue-700 transition-colors duration-200">Next Up: {stateNextArticle.title}</h3>
            </a>
          </Link>
        )
      }
    </div>
  );
}
