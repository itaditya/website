import Head from 'next/head';

import IconTwitter from '../components/IconTwitter';

const Home = () => (
  <div
    className="relative min-h-screen bg-gray-200 px-10 py-8 sm:px-24 lg:px-32 xl:px-48 grid grid-cols-12 col-gap-4"
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
      <ul className="flex">
        <li>My Projects</li>
        <li className="ml-8">Reading List</li>
        <li className="ml-8">Blog</li>
      </ul>
    </nav>

    <main className="col-start-2 col-span-10 row-auto py-8 mt-10">
      <div className="flex items-center justify-center">
        <div className="w-7/12">
          <h1 className="text-6xl font-sans font-heading font-bold tracking-tighter text-gray-700">
            Hey, I'm <span className="text-gray-900">Aditya!</span>
          </h1>
          <p className="mt-2 text-xl">
            I'm a frontend web developer working on React.js, Node.js.
            <br />I love open-sourcing my knowledge, be it through building projects on GitHub, giving talks or writing
            blogs.
          </p>
          <button className="bg-primary hover:bg-primary-600 mt-6 py-3 px-5 rounded-md font-bold text-primary-900 text-lg shadow-lg transition-colors ease-in duration-200">
            Check my work
          </button>
        </div>
        <div className="w-4/12 ml-20 px-8">
          <article className="flex flex-col items-center bg-twitter-background text-white py-8 px-6 rounded-md shadow-2xl">
            <img src="https://via.placeholder.com/150" className="w-36 h-36 rounded-full shadow-xl" />
            <ul className="mt-5 text-white">
              <li className="flex items-center">
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/round-pushpin_1f4cd.png"
                  alt="Location"
                  className="w-6 h-6"
                />
                <span className="ml-3 text-lg">Bengaluru, India</span>
              </li>
              <li className="flex items-center mt-1">
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/hourglass_231b.png"
                  alt="Experience"
                  className="w-6 h-6"
                />
                <span className="ml-3 text-lg">2 years of experience</span>
              </li>
              <li className="flex items-center mt-1">
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/236/envelope_2709.png"
                  alt="Email Address"
                  className="w-6 h-6"
                />
                <span className="ml-3 text-lg">adityaa803@gmail.com</span>
              </li>
            </ul>
            <a
              href="https://twitter.com/dev__adi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 py-1 px-4 flex items-center bg-twitter-cta hover:bg-twitter-cta-600 focus:bg-twitter-cta-700 active:bg-twitter-cta-700 rounded-md"
            >
              <IconTwitter className="text-2xl" />
              <strong className="ml-1 font-bold">Follow</strong>
            </a>
          </article>
        </div>
      </div>
      <section>
        <h2 className="text-4xl">
          My Articles
        </h2>
      </section>
    </main>

    <aside className="fixed left-0 h-screen px-4 flex flex-col justify-center items-center" style={{ top: '0' }}>
      <ul>
        <li className="bg-white rounded-full w-10 h-10 shadow-md"></li>
        <li className="bg-white rounded-full w-10 h-10 mt-4 shadow-md"></li>
        <li className="bg-white rounded-full w-10 h-10 mt-4 shadow-md"></li>
      </ul>
    </aside>

    <footer className="col-span-12 py-3 bg-gray-400 px-4">footer</footer>
  </div>
);

export default Home;
