import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';

const Work = () => (
  <div
    className="relative min-h-screen font-body bg-gray-200 px-10 py-8 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 col-gap-4"
    style={{ gridTemplateRows: 'auto 1fr auto' }}
  >
    <SiteHead pageName="Work" />
    <SiteNavbar />
    <main className="col-start-2 col-span-10 xl:col-start-3 lg:col-span-5 mt-16 flex flex-col justify-center">
      <h2 className="text-gray-700 text-2xl mb-4">Currently employed at</h2>
      <img src="/hackerrank_logo.png" alt="HackerRank" width="400" />
    </main>
    <aside className="col-start-2 col-span-10 lg:col-start-8 lg:col-span-4 mt-16 flex flex-col justify-center">
      <h2 className="font-bold text-3xl mb-4">Past Experience</h2>
      <ul className="grid grid-cols-1 row-gap-4 text-gray-700 pl-2">
        <li className="text-xl">GSoC student at Probot(GitHub).</li>
        <li className="text-xl">Fullstack Intern at Equifin United Pvt. Ltd.</li>
        <li className="text-xl">Frontend Intern at Elvento Labs.</li>
        <li className="text-xl">UI/UX Intern at JustWravel Pvt. Ltd.</li>
      </ul>
    </aside>
    <SocialBar />
    <SiteFooter />
  </div>
);

export default Work;
