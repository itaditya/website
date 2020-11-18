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
    className="relative min-h-screen py-8 bg-gray-200 font-body px:4 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12"
    style={{ gridTemplateRows: 'auto 1fr auto' }}
  >
    <SiteHead pageName="Social" />
    <SiteNavbar />
    <main className="mt-24 col-start-2 col-span-10 row-auto">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 md:text-4xl">Social Links</h2>
      <div className="space-y-5">
        {links.map((link) => (
          <div>
            <span className="mr-4 font-medium text-gray-800 md:text-xl">{link.title}:</span>
            <a
              className="flex items-center leading-relaxed text-gray-700 hover:text-gray-900 hover:underline"
              target="_blank"
              rel="noreferrer noopener"
              href={link.href}
            >
              <span className="mr-2 text-lg truncate md:text-xl">{link.href}</span>
              <IconExternalLink className="hidden text-gray-600 md:block" />
            </a>
          </div>
        ))}
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default Social;
