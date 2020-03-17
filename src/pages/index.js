import Head from 'next/head';
import Link from 'next/link';

import { PostsPopular } from '_components/PostsList';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';

import IconWebpack from '_components/IconWebpack';
import IconBabel from '_components/IconBabel';
import IconVue from '_components/IconVue';
import IconJS from '_components/IconJS';
import IconHTML from '_components/IconHTML';
import IconCSS from '_components/IconCSS';
import IconReact from '_components/IconReact';
import IconNpm from '_components/IconNpm';
import IconGitHub from '_components/IconGitHub';
import IconGlobe from '_components/IconGlobe';
import IconCircleArrow from '_components/IconCircleArrow';
import IconTwitter from '_components/IconTwitter';
import IconMedium from '_components/IconMedium';
import IconYouTube from '_components/IconYouTube';

const myPackages = [
  {
    name: 'Birla',
    description: 'Generate React component files in one command',
    links: {
      github: 'https://github.com/itaditya/birla',
      website: 'https://github.com/itaditya/birla/blob/master/README.md',
      npm: 'https://www.npmjs.com/package/birla',
    },
  },
  {
    name: 'Circlebars',
    description: 'Circular progress bars made easy',
    links: {
      github: 'https://github.com/itaditya/circlebars',
      website: 'http://circlebar.surge.sh/',
      npm: 'https://www.npmjs.com/package/circlebars',
    },
  },
  {
    name: 'Optimisitc Toggle',
    description: 'Respond to user actions without waiting on API',
    links: {
      github: 'https://github.com/interviewstreet/react-optimistic-toggle',
      website: 'https://react-optimistic-toggle.netlify.com/',
      npm: 'https://www.npmjs.com/package/react-optimistic-toggle',
    },
  },
  {
    name: 'Mentions Plugin',
    description: 'Detects if a GitHub user is mentioned in a comment.',
    links: {
      github: 'https://github.com/itaditya/probot-on-mention',
      website: 'https://github.com/itaditya/probot-on-mention/blob/master/README.md',
      npm: 'https://www.npmjs.com/package/probot-on-mention',
    },
  },
  {
    name: 'Windows Hotspot',
    description: 'Setup a Wi-Fi Hotspot with ease',
    links: {
      github: 'https://github.com/itaditya/hotspot',
      website: 'https://github.com/itaditya/hotspot/blob/master/README.md',
      npm: 'https://www.npmjs.com/package/whotspot',
    },
  },
  {
    name: 'Material React Icons',
    description: 'Import Material Icons as React components',
    links: {
      github: 'https://github.com/itaditya/material-design-icons',
      website: 'https://github.com/itaditya/material-design-icons/blob/master/README.md',
      npm: 'https://www.npmjs.com/package/material-svg-react-icons',
    },
  },
];

const Home = () => (
  <div
    className="relative min-h-screen font-body bg-gray-200 px-10 py-8 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 col-gap-4"
    style={{ gridTemplateRows: 'auto 1fr auto' }}
  >
    <Head>
      <title>Home | Aditya Agarwal</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <SiteNavbar />

    <main className="col-start-2 col-span-10 row-auto mt-24">
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
          <button className="bg-primary hover:bg-primary-600 mt-6 py-3 px-5 rounded-md font-bold text-primary-800 border border-primary-600 text-lg shadow-lg hover:shadow-xl transition ease-in duration-200">
            Go to Portfolio
          </button>
        </div>
      </div>
      <div className="absolute pr-10 text-gray-400 text-6xl animation-fade-in" style={{ top: '50vh', right: '100px' }}>
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
            <li className="ml-8">
              <IconReact width="2em" height="2em" />
            </li>
          </ul>
        </div>
      </div>
      <section className="mt-32 flex justify-between">
        <div>
          <h2 className="text-4xl font-bold">Popular Articles</h2>
          <PostsPopular />
        </div>
        <Link href="/blog">
          <a className="bg-blue-300 hover:bg-blue-400 w-56 mt-auto py-16 rounded-lg flex flex-col opacity-1 text-center items-center justify-center text-3xl shadow-xl hover:shadow-2xl transition duration-200 ease-in">
            <span className="text-4xl text-blue-700">
              <IconCircleArrow />
            </span>
            <span className="mt-3 font-bold text-blue-800">
              Checkout
              <br />
              more articles
            </span>
          </a>
        </Link>
      </section>
      <section className="mt-8 text-xl flex">
        <h1 className="font-bold text-primary-600">Hot off the press:</h1>
        <Link href="/blog">
          <a className="ml-2 hover:underline">
            How to do Visual Testing in React
          </a>
        </Link>
      </section>
      <section className="mt-56 flex flex-col items-center">
        <h2 className="text-4xl font-bold">Open Source Tools</h2>
        <div className="grid grid-cols-4 col-gap-8 row-gap-12 w-full mt-16">
          {myPackages.map(pkg => (
            <article className="p-4 bg-white shadow-xl rounded-lg text-center" key={pkg.name}>
              <h3 className="w-full text-2xl">{pkg.name}</h3>
              <p className="text-gray-700 mt-3">{pkg.description}</p>
              <ul className="flex justify-evenly items-center px-8 mt-6">
                <li>
                  <a
                    href={pkg.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2 text-white text-2xl"
                  >
                    <span className="block p-1 bg-blue-500 rounded-full hover:shadow-lg transition duration-200 ease-in">
                      <IconGlobe />
                    </span>
                  </a>
                </li>
                <li>
                  <a href={pkg.links.npm} target="_blank" rel="noopener noreferrer" className="block p-2 text-2xl">
                    <span
                      className="block p-1 rounded-full hover:shadow-lg transition duration-200 ease-in"
                      style={{ backgroundColor: 'hsl(3.2, 52.4%, 48.6%)' }}
                    >
                      <IconNpm />
                    </span>
                  </a>
                </li>
                <li>
                  <a href={pkg.links.github} target="_blank" rel="noopener noreferrer" className="block p-2 text-3xl">
                    <span className="rounded-full hover:shadow-lg transition duration-200 ease-in">
                      <IconGitHub />
                    </span>
                  </a>
                </li>
              </ul>
            </article>
          ))}
          <article
            className="py-4 px-8 col-span-2 bg-blue-700 shadow-xl rounded-lg"
            style={{ background: 'linear-gradient(to right, #2f80ed 30%, #56ccf2)' }}
          >
            <h3 className="w-full text-2xl text-white font-bold">Other Projects</h3>
            <p className="text-gray-100 text-lg mt-1">
              I make lots of side projects whenever I'm <br /> learning new things.
            </p>
            <a
              href="/projects"
              className="inline-block bg-white shadow-md hover:shadow-xl text-gray-700 mt-3 py-3 px-5 rounded-md font-bold text-lg transition-shadow ease-in duration-200"
            >
              See All Projects
            </a>
          </article>
        </div>
      </section>
      <section className="mt-56 flex items-center justify-between">
        <div className="max-w-md">
          <h3 className="text-3xl font-bold text-gray-700">I'm running a newsletter</h3>
          <p className="mt-3">Subscribe if you want to read stuff about React, JavaScript, CSS and Design Systems</p>
        </div>
        <iframe
          title="Subscribe to Aditya's newsletter"
          scrolling="no"
          src="https://buttondown.email/itaditya?as_embed=true"
          className="w-full md:w-3/4 lg:w-1/2 h-56 bg-gray-300"
        ></iframe>
      </section>
    </main>

    <aside className="fixed left-0 h-screen px-4 flex flex-col justify-center items-center" style={{ top: '0' }}>
      <ul>
        <li>
          <a
            href="https://twitter.com/dev__adi"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-white text-3xl"
          >
            <span
              className="block p-1 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in"
              style={{ backgroundColor: 'hsl(202.8, 89.1%, 53.1%)' }}
            >
              <IconTwitter />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@adityaa803"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-gray-700 text-3xl"
          >
            <span
              className="block p-1 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in"
              style={{ backgroundColor: '#12100E' }}
            >
              <IconMedium />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCk5cWNVIgtW_rpR7J_VSiWw?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-gray-700 text-3xl"
          >
            <span
              className="block p-1 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in"
              style={{ backgroundColor: 'hsl(0, 75.4%, 50.6%)' }}
            >
              <IconYouTube />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/itaditya"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-white text-4xl"
          >
            <span
              className="rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in"
            >
              <IconGitHub />
            </span>
          </a>
        </li>
      </ul>
    </aside>
    <SiteFooter />
  </div>
);

export default Home;
