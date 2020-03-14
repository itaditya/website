import Head from 'next/head';

import IconWebpack from '../components/IconWebpack';
import IconBabel from '../components/IconBabel';
import IconVue from '../components/IconVue';
import IconJS from '../components/IconJS';
import IconHTML from '../components/IconHTML';
import IconCSS from '../components/IconCSS';
import IconReact from '../components/IconReact';
import IconCircleArrow from '../components/IconCircleArrow';

const Home = () => (
  <div
    className="relative min-h-screen bg-gray-200 px-10 py-8 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 col-gap-4"
    style={{ gridTemplateRows: 'auto 1fr auto' }}
  >
    <Head>
      <title>Homepage | Aditya Agarwal</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <nav className="col-span-12 py-4 px-6 flex items-center justify-between">
      <h4 className="text-2xl font-bold" aria-label="@dev__adi">
        <span>@dev_</span>
        <span className="ml-1">_adi</span>
      </h4>
      <ul className="flex items-center">
        <li>Projects</li>
        <li className="ml-8">Open Source</li>
        <li className="ml-8">
          <a href="/blog" className="bg-white border border-gray-500 block py-2 px-5">
            My Blog
          </a>
        </li>
      </ul>
    </nav>

    <main className="col-start-2 col-span-10 row-auto py-8 mt-10">
      <div className="flex items-center" style={{ height: '50vh' }}>
        <div className="w-7/12">
          <h1 className="text-6xl font-sans font-heading font-bold tracking-tighter text-gray-700">
            Hey, I'm <span className="text-gray-900 underline">Aditya.</span>
          </h1>
          <p className="mt-2 text-xl">
            Currently working at <span className="font-bold text-primary-700">HackerRank</span> as a frontend web
            developer.
            <br />I love open-sourcing my knowledge, be it through building projects on GitHub, giving talks or writing
            blogs.
          </p>
          <button className="bg-primary hover:bg-primary-600 mt-6 py-3 px-5 rounded-md font-bold text-primary-800 border border-primary-600 text-lg shadow-lg transition-colors ease-in duration-200">
            Go to Portfolio
          </button>
        </div>
      </div>
      <div className="absolute right-0 pr-10 text-gray-400 text-6xl animation-fade-in" style={{ top: '20vh' }}>
        <div className="flex justify-center text-gray-500">
          <IconReact width="4em" height="4em" />
        </div>
        <div className="mt-10 overflow-x-hidden" style={{ width: '440px' }}>
          <ul className="flex animation-sliding">
            <li>
              <IconHTML width="2em" height="2em" />
            </li>
            <li>
              <IconCSS width="2em" height="2em" />
            </li>
            <li className="ml-5">
              <IconVue width="2em" height="2em" />
            </li>
            <li className="ml-5">
              <IconWebpack width="2em" height="2em" />
            </li>
            <li className="ml-5">
              <IconBabel width="2em" height="2em" />
            </li>
            <li className="ml-8">
              <IconJS width="2em" height="2em" />
            </li>
          </ul>
        </div>
      </div>
      <section className="mt-32 flex justify-between">
        <div>
          <h2 className="text-4xl font-bold">Popular Articles</h2>
          <ul className="mt-4">
            <li className="py-2 pl-3 pr-6 rounded-md">
              <a href="/blog" className="flex items-center">
                <img src="https://via.placeholder.com/20" alt="" className="rounded-full w-10 h-10" />
                <span className="hover:underline text-2xl text-gray-800 ml-4 max-w-2xl">
                  Escaping from Async/Await Hell
                </span>
                <span className="ml-4 text-sm bg-blue-200 rounded-md px-2 text-blue-800 border border-blue-300">
                  20 mins read
                </span>
              </a>
            </li>
            <li className="py-2 pl-3 pr-6 rounded-md mt-4">
              <a href="/blog" className="flex items-center">
                <img src="https://via.placeholder.com/20" alt="" className="rounded-full w-10 h-10" />
                <span className="hover:underline text-2xl text-gray-800 ml-4 max-w-2xl">
                  Things I wish I knew before using MongoDB
                </span>
                <span className="ml-4 text-sm bg-blue-200 rounded-md px-2 text-blue-800 border border-blue-300">
                  14 mins read
                </span>
              </a>
            </li>
            <li className="py-2 pl-3 pr-6 rounded-md mt-4">
              <a href="/blog" className="flex items-center">
                <img src="https://via.placeholder.com/20" alt="" className="rounded-full w-10 h-10" />
                <span className="hover:underline text-2xl text-gray-800 ml-4 max-w-2xl">
                  Building a game with React Hooks
                </span>
                <span className="ml-4 text-sm bg-blue-200 rounded-md px-2 text-blue-800 border border-blue-300">
                  9 mins read
                </span>
              </a>
            </li>
          </ul>
        </div>
        <a
          href="/blog"
          className="bg-blue-300 w-56 mt-4 rounded-lg flex flex-col opacity-1 text-center items-center justify-center text-3xl shadow-xl"
        >
          <span className="text-4xl text-gray-800">
            <IconCircleArrow />
          </span>
          <span className="mt-3 font-bold text-gray-900">
            Checkout
            <br />
            more articles
          </span>
        </a>
      </section>
      <section className="mt-8 text-xl flex">
        <h1 className="font-bold text-primary-600">Hot off the press:</h1>
        <a href="/blog" className="ml-2 hover:underline">
          How to do Visual Testing in React
        </a>
      </section>
      <section className="mt-40 flex flex-col items-center">
        <h2 className="text-4xl font-bold">Open Source Tools</h2>
        <div className="grid grid-cols-4 col-gap-8 row-gap-12 w-full mt-16">
          {Array(8)
            .fill({})
            .map(() => (
              <article className="bg-white shadow-xl p-4 rounded-lg text-center">
                <h3 className="w-full text-2xl">Birla</h3>
                <p className="text-gray-700 mt-3">Generate React components in one command</p>
                <ul className="flex justify-evenly px-8 mt-6">
                  <li className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in"></li>
                  <li className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in"></li>
                  <li className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in"></li>
                </ul>
              </article>
            ))}
        </div>
      </section>
    </main>

    <aside className="fixed left-0 h-screen px-4 flex flex-col justify-center items-center" style={{ top: '0' }}>
      <ul>
        <li className="bg-white rounded-full w-10 h-10 shadow-md"></li>
        <li className="bg-white rounded-full w-10 h-10 mt-4 shadow-md"></li>
        <li className="bg-white rounded-full w-10 h-10 mt-4 shadow-md"></li>
      </ul>
    </aside>

    <footer className="col-span-12 py-3 px-4 mt-16">
      <span className="flex items-center">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/htc/37/envelope_2709.png"
          alt="Email Address"
          className="w-6 h-6"
        />
        <span className="ml-2 text-lg">adityaa803@gmail.com</span>
      </span>
    </footer>
  </div>
);

export default Home;
