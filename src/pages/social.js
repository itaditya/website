import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';

import IconExternalLink from '_components/icons/IconExternalLink';

const links = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/dev__adi',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/itaditya',
  },
  {
    title: 'Medium',
    href: 'https://medium.com/@adityaa803',
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/itsaditya',
  },
  {
    title: 'YouTube',
    href: 'https://www.youtube.com/channel/UCk5cWNVIgtW_rpR7J_VSiWw?view_as=subscriber',
  },
  {
    title: 'Dribbble',
    href: 'https://dribbble.com/dev__adi',
  },
  {
    title: 'Email',
    href: 'mailto:adityaa803@gmail.com',
  },
];

const Social = () => (
  <div
    className="relative min-h-screen font-body bg-gray-200 px:4 sm:px-24 lg:px-32 xl:px-40 py-8 grid grid-cols-12 col-gap-4"
    style={{ gridTemplateRows: 'auto 1fr auto' }}
  >
    <SiteHead pageName="Social" />
    <SiteNavbar />
    <main className="col-start-2 col-span-10 row-auto mt-24">
      <h2 className="text-2xl md:text-4xl mb-8 font-bold text-gray-800">Social Links</h2>
      <div className="md:grid row-gap-3" style={{ gridTemplateColumns: 'auto 1fr' }}>
        {
          links.map(link => (
            <>
              <span className="mr-4 md:text-xl text-gray-800 font-medium">{link.title}:</span>
              <a
              className="flex items-center text-gray-800 leading-relaxed hover:text-gray-900 hover:underline"
              target="_blank"
              rel="noreferrer noopener"
              href={link.href}
            >
              <span className="text-lg md:text-xl mr-2 truncate">{link.href}</span>
              <IconExternalLink className="text-gray-700 hidden md:block" />
            </a>
            </>
          ))
        }
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default Social;
