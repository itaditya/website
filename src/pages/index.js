import Head from 'next/head';
import Link from 'next/link';

import { PostsPopularList } from '_components/PostsSuggestion';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';

import IconWebpack from '_components/icons/IconWebpack';
import IconBabel from '_components/icons/IconBabel';
import IconVue from '_components/icons/IconVue';
import IconJS from '_components/icons/IconJS';
import IconHTML from '_components/icons/IconHTML';
import IconCSS from '_components/icons/IconCSS';
import IconReact from '_components/icons/IconReact';
import IconNpm from '_components/icons/IconNpm';
import IconGitHub from '_components/icons/IconGitHub';
import IconGlobe from '_components/icons/IconGlobe';
import IconCircleArrow from '_components/icons/IconCircleArrow';

import myPackages from '../staticData/myPackages.json';

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
        <div className="w-1/2">
          <h1 className="text-6xl font-sans font-heading font-bold tracking-tighter text-gray-700">
            Hey, I'm <span className="text-gray-900 underline">Aditya.</span>
          </h1>
          <p className="mt-2 text-xl">
            Frontend developer at <span className="font-bold text-primary-700">HackerRank.</span>
            <br />I love open-sourcing my knowledge through building projects, giving talks or writing
            blogs.
          </p>
          <button className="text-primary-700 hover:text-primary-800 hover:bg-primary mt-6 py-3 px-5 rounded-md font-bold border border-primary-600 text-lg shadow-md hover:shadow-lg transition ease-in duration-200">
            Visit Portfolio
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
          <h2 className="text-4xl font-bold mb-8">Popular Articles</h2>
          <PostsPopularList />
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
        <Link href="/blog/better-components-with-tailwindcss">
          <a className="ml-2 hover:underline">Better Components with TailwindCSS</a>
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
    <SocialBar />
    <SiteFooter />
  </div>
);

export default Home;
