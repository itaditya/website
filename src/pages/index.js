import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { PostsPopularList } from '_components/PostsSuggestion';
import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';
import SectionPackages from '_components/SectionPackages';
import IconWebpack from '_components/icons/IconWebpack';
import IconBabel from '_components/icons/IconBabel';
import IconVue from '_components/icons/IconVue';
import IconJS from '_components/icons/IconJS';
import IconHTML from '_components/icons/IconHTML';
import IconCSS from '_components/icons/IconCSS';
import IconReact from '_components/icons/IconReact';
import IconCircleArrow from '_components/icons/IconCircleArrow';
import { useDeviceWidth } from '_utils/deviceDetails';

function Newsletter() {
  return (
    <iframe
      title="Subscribe to Aditya's newsletter"
      loading="lazy"
      scrolling="no"
      src="https://buttondown.email/itaditya?as_embed=true"
      className="w-full h-full animate-fade-in"
    ></iframe>
  );
}

const Home = () => {
  const deviceWidth = useDeviceWidth();
  const [stateSeenNl, setStateSeenNl] = useState('unseen');
  const [stateSeenLatestArticle, setStateSeenLatestArticle] = useState('unseen');
  const latestArticleRef = useRef();
  const newsletterRef = useRef();

  useEffect(() => {
    function callBack(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (latestArticleRef.current === entry.target) {
            setStateSeenLatestArticle('seen');
          }

          if (newsletterRef.current === entry.target) {
            setStateSeenNl('seen');
          }
        }
      });
    }

    const observer = new IntersectionObserver(callBack);
    observer.observe(latestArticleRef.current);
    observer.observe(newsletterRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen py-8 bg-gray-100 font-body px:4 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 grid-rows-main-fill">
      <SiteHead />
      <SiteNavbar />
      <main className="mt-8 col-start-2 col-span-10 row-auto md:mt-24">
        <div className="flex items-center justify-between min-h-[50vh]">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold tracking-tight text-gray-500 md:text-5xl xl:text-6xl font-heading">
              Hey, I'm <span className="text-gray-700 underline">Aditya.</span>
            </h1>
            <p className="mt-4 lg:mt-6 text-gray-600 text-base lg:text-lg xl:text-xl">
              Senior Frontend Engineer at Razorpay.
              <br />I love open-sourcing my knowledge through building projects, giving talks and
              writing blogs.
            </p>
          </div>
          <div className="hidden mt-4 text-5xl text-gray-300 md:block animate-fade-in">
            <div className="overflow-x-hidden w-[360px]">
              <ul className="flex animate-slide">
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
        </div>
        <section className="justify-between mt-10 md:mt-32 md:flex">
          <div>
            <h2 className="mb-8 text-2xl font-bold text-gray-700 md:text-4xl">Popular Articles</h2>
            <PostsPopularList />
          </div>
          <Link href="/blog">
            <a
              className={`
                flex flex-col items-center justify-center w-full py-8 mt-8 text-3xl text-center bg-blue-300
                rounded-lg shadow-xl hover:bg-blue-400 md:w-56 md:mt-auto md:py-16 opacity-1 hover:shadow-2xl
                focus:outline-none focus:ring-4 focus:ring-blue-300 ring-offset-8 ring-offset-gray-100 transition
              `}
            >
              <span className="text-4xl text-sky-700">
                <IconCircleArrow />
              </span>
              <span className="mt-3 font-bold text-sky-800">
                Checkout
                <br />
                more articles
              </span>
            </a>
          </Link>
        </section>
        <section className="mt-8 text-lg md:text-xl md:flex" ref={latestArticleRef}>
          <h1 className="font-bold text-primary-600">Hot off the press:</h1>
          <Link href="/blog/edge-case-product-checklist">
            <a className="max-w-lg md:ml-2 hover:underline">
              Checklist to spot edge cases in API contracts, design mockups & product behaviour
            </a>
          </Link>
        </section>
        <SectionPackages>
          <article className="px-8 py-6 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg shadow-xl col-span-1 md:col-span-2">
            <h3 className="w-full text-2xl font-bold text-white">Other Projects</h3>
            <p className="mt-1 text-lg text-gray-100">
              I make lots of side projects whenever I'm <br /> learning new things.
            </p>
            <Link href="/projects">
              <a
                className={`
                  inline-block px-5 py-3 mt-3 text-lg font-bold text-gray-700 bg-white shadow-md hover:shadow-xl rounded-md
                  focus:outline-none focus:ring-2 ring-offset-8 focus:ring-white ring-offset-blue-500 transition
                `}
              >
                See All Projects
              </a>
            </Link>
          </article>
        </SectionPackages>
        <section className="items-center justify-between mt-20 md:mt-56 md:flex">
          <div className="max-w-md mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-gray-700">I'm running a newsletter</h3>
            <p className="mt-3">
              Subscribe if you want to read stuff about React, JavaScript, CSS and Design Systems
            </p>
          </div>
          <div className="w-full h-56 bg-gray-200 md:w-3/4 lg:w-1/2" ref={newsletterRef}>
            {(stateSeenNl === 'seen' || stateSeenLatestArticle === 'seen') && <Newsletter />}
          </div>
        </section>
      </main>
      {!['server', 'xs', 'sm'].includes(deviceWidth) && stateSeenLatestArticle === 'seen' && (
        <SocialBar />
      )}
      <SiteFooter />
    </div>
  );
};

export default Home;
