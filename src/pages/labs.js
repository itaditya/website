import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';

const Home = () => (
  <div
    className="relative min-h-screen font-body bg-gray-200 px-10 py-8 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 col-gap-4"
    style={{ gridTemplateRows: 'auto 1fr auto' }}
  >
    <SiteHead pageName="Labs" />
    <SiteNavbar />
    <main className="col-start-2 col-span-10 row-auto mt-24">
      <section className="mt-32 flex justify-between"></section>
    </main>
    <SocialBar />
    <SiteFooter />
  </div>
);

export default Home;
