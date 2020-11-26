import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';

import IconExternalLink from '_components/icons/IconExternalLink';
import IconDownload from '_components/icons/IconDownload';

const About = () => (
  <div
    className="relative min-h-screen py-8 bg-gray-100 font-body px:4 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12"
    style={{ gridTemplateRows: 'auto 1fr auto' }}
  >
    <SiteHead pageName="About" />
    <SiteNavbar activeLink="about" />
    <main className="mt-16 col-start-2 col-span-10 lg:col-start-2 lg:col-span-5 row-auto">
      <h2 className="mb-8 text-5xl font-bold text-gray-700 font-heading">About Me</h2>
      <p className="text-2xl leading-relaxed text-gray-600">
        I am a <span className="text-gray-800">Web Developer</span> working as an SDE 1 at{' '}
        <a
          className="text-blue-600 underline hover:text-blue-700 visited:text-indigo-600"
          target="_blank"
          rel="noreferrer noopener"
          href="https://hackerrank.com"
        >
          HackerRank
        </a>
        .
      </p>
      <p className="mt-6 text-xl leading-relaxed text-gray-600">
        I'm experienced in building rich JavaScript applications with technologies like{' '}
        <span className="text-gray-800">React.js</span>, Vue.js, Node.js & MongoDB. In the past I worked with GitHub's
        Probot team to build various GitHub apps during the Google Summer of Code program.
      </p>
      <p className="mt-6 text-xl leading-relaxed text-gray-600">
        Apart from coding, I love reading fandom about my favorite series like Harry Potter, Naruto and the MCU.
      </p>
      <div className="items-center justify-between xl:flex">
        <a
          className={`
            flex items-center mt-8 text-lg leading-relaxed text-primary-600 hover:text-primary-700 transition
            focus:outline-none focus:ring-2 focus:ring-primary ring-offset-8 ring-offset-gray-100 focus:ring-opacity-60
          `}
          target="_blank"
          rel="noreferrer noopener"
          href="https://fayz.in/stories/s/1435/0/?ckt_id=ZGL1ZGVk&title=How_Aditya_got_his_dream_job"
        >
          <span className="mr-2 text-xl">Read my story on Fayz.in</span>
          <IconExternalLink className="text-primary" />
        </a>
        <a
          className={`
            flex items-center mt-8 text-lg leading-relaxed text-primary-600 hover:text-primary-700 transition md:mr-8
            focus:outline-none focus:ring-2 focus:ring-primary ring-offset-8 ring-offset-gray-100 focus:ring-opacity-60
          `}
          target="_blank"
          rel="noreferrer noopener"
          href="https://docs.google.com/document/d/1cfV1T7_WnY1LKWfdIgo34CDpU7_ne97mUfqqDdvixc8/export?format=pdf"
        >
          <span className="mr-2 text-xl">Download Resume</span>
          <IconDownload className="text-primary" />
        </a>
      </div>
    </main>
    <aside className="items-center hidden mt-16 md:flex col-start-8 col-span-4">
      <img className="rounded-lg shadow-lg" src="/talk.jpg" alt="" />
    </aside>
    <SocialBar />
    <SiteFooter />
  </div>
);

export default About;
