import Link from 'next/link';

import IconReact from '_components/icons/IconReact';
import IconJS from '_components/icons/IconJS';
import IconMongoDB from '_components/icons/IconMongoDB';

export function PostsPopular() {
  return (
    <ul className="">
      <li className="py-2 pl-3 pr-6 rounded-md">
        <Link href="/blog/async-await-hell">
          <a className="flex items-start">
            <span className="rounded-full text-2xl mt-1" style={{ color: 'hsl(52.2, 84.3%, 62.5%)', backgroundColor: 'hsl(80, 3%, 19.4%)' }}>
              <IconJS />
            </span>
            <span className="hover:underline text-2xl text-gray-800 ml-4 max-w-2xl">
              Escaping from Async/Await Hell
            </span>
            <span className="hidden sm:block ml-4 mt-1 text-sm bg-blue-200 rounded-md px-2 text-blue-800 border border-blue-300">
              10 mins read
            </span>
          </a>
        </Link>
      </li>
      <li className="py-2 pl-3 pr-6 rounded-md mt-4">
        <Link href="/blog/10-mongo-things-i-wished-i-knew">
          <a className="flex items-start">
            <span className="rounded-sm text-3xl mt-1">
              <IconMongoDB />
            </span>
            <span className="hover:underline text-2xl text-gray-800 ml-4 max-w-2xl">
              Things I wish I knew before using MongoDB
            </span>
            <span className="hidden sm:block ml-4 mt-1 text-sm bg-blue-200 rounded-md px-2 text-blue-800 border border-blue-300">
              14 mins read
            </span>
          </a>
        </Link>
      </li>
      <li className="py-2 pl-3 pr-6 rounded-md mt-4">
        <Link href="/blog/first-post">
          <a className="flex items-start">
            <span className="rounded-full text-2xl mt-2" style={{ color: 'hsl(192.7, 63.5%, 54.9%)' }}>
              <IconReact />
            </span>
            <span className="hover:underline text-2xl text-gray-800 ml-4 max-w-2xl">
              Building a game with React Hooks
            </span>
            <span className="hidden sm:block ml-4 mt-1 text-sm bg-blue-200 rounded-md px-2 text-blue-800 border border-blue-300">
              9 mins read
            </span>
          </a>
        </Link>
      </li>
    </ul>
  );
}
