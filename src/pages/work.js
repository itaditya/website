import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';

const Work = () => (
  <div className="relative min-h-screen py-8 bg-gray-100 font-body px:4 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 grid-rows-main-fill">
    <SiteHead pageName="Work" />
    <SiteNavbar />
    <main className="flex flex-col justify-center mt-16 col-start-2 col-span-10 xl:col-start-3 lg:col-span-5">
      <h2 className="mb-4 text-lg text-gray-700 md:text-2xl">
        Currently employed as Senior SDE at
      </h2>
      <img src="/razorpay_logo.png" alt="Razorpay" width="400" />
    </main>
    <aside className="flex flex-col justify-center mt-16 col-start-2 col-span-10 lg:col-start-8 lg:col-span-4">
      <h2 className="mb-4 text-3xl font-bold">Past Experience</h2>
      <ul className="pl-2 text-gray-700 grid grid-cols-1 gap-y-4">
        <li className="text-xl">Intern to SDE 2 at HackerRank.</li>
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
