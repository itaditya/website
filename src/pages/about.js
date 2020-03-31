import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';

import IconExternalLink from '_components/icons/IconExternalLink';
import IconDownload from '_components/icons/IconDownload';

const About = () => (
  <div
    className="relative min-h-screen font-body bg-gray-200 px:4 sm:px-24 lg:px-32 xl:px-40 py-8 grid grid-cols-12 col-gap-4"
    style={{ gridTemplateRows: 'auto 1fr auto' }}
  >
    <SiteHead pageName="About" />
    <SiteNavbar activeLink="about" />
    <main className="col-start-2 col-span-10 lg:col-start-2 lg:col-span-5 row-auto mt-16">
      <h2 className="font-heading font-bold text-gray-800 text-5xl mb-8">About Me</h2>
      <p className="text-2xl text-gray-700 leading-relaxed">
        I am a <span className="text-gray-800">Web Developer</span> working as an SDE 1 at{' '}
        <a
          className="underline text-blue-600 hover:text-blue-700 visited:text-indigo-800"
          target="_blank"
          rel="noreferrer noopener"
          href="https://hackerrank.com"
        >
          HackerRank
        </a>
        .
      </p>
      <p className="text-xl text-gray-700 leading-relaxed mt-6">
        I'm experienced in building rich JavaScript applications with technologies like{' '}
        <span className="text-gray-800">React.js</span>, Vue.js, Node.js & MongoDB. In the past I worked with GitHub's
        Probot team to build various GitHub apps during the Google Summer of Code program.
      </p>
      <p className="text-xl text-gray-700 leading-relaxed mt-6">
        Apart from coding, I love reading fandom about my favorite series like Harry Potter, Naruto and the MCU.
      </p>
      <div className="xl:flex justify-between items-center">
        <a
          className="flex items-center text-lg text-primary-600 leading-relaxed mt-8"
          target="_blank"
          rel="noreferrer noopener"
          href="https://fayz.in/stories/s/1435/0/?ckt_id=ZGL1ZGVk&title=How_Aditya_got_his_dream_job"
        >
          <span className="text-xl mr-2">Read my story on Fayz.in</span>
          <IconExternalLink className="text-primary" />
        </a>
        <a
          className="flex items-center text-lg text-primary-600 leading-relaxed mt-8 md:mr-8"
          target="_blank"
          rel="noreferrer noopener"
          href="https://docs.google.com/document/d/1cfV1T7_WnY1LKWfdIgo34CDpU7_ne97mUfqqDdvixc8/export?format=pdf"
        >
          <span className="text-xl mr-2">Download Resume</span>
          <IconDownload className="text-primary" />
        </a>
      </div>
    </main>
    <aside className="hidden md:flex items-center col-start-8 col-span-4 mt-16">
      <img className="shadow-lg rounded-lg" src="/talk.jpg" />
    </aside>
    <SocialBar />
    <SiteFooter />
  </div>
);

export default About;
