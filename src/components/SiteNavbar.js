import Link from 'next/link';
import cn from 'classnames';

export default function SiteNavbar(props) {
  const { activeLink } = props;

  const links = [
    {
      href: 'blog',
      name: 'Blog',
    },
    {
      href: 'projects',
      name: 'Projects',
    },
    {
      href: 'about',
      name: 'About',
    },
  ];

  return (
    <nav className="col-span-12 py-4 px-6 flex items-center justify-between">
      <h4 className="text-2xl font-bold" aria-label="@dev__adi">
        <Link href="/">
          <a>
            <span>@dev_</span>
            <span className="ml-1">_adi</span>
          </a>
        </Link>
      </h4>
      <ul className="flex items-center text-center">
        {links.map(link => (
          <li key={link.href} className="md:ml-12">
            <Link href={`/${link.href}`}>
              <a
                className={cn(
                  'block text-md md:text-xl text-gray-700 py-1 px-2 transition-colors duration-200 ease-in',
                  {
                    'border-b-2 border-primary-400 text-primary-700': activeLink === link.href,
                    'rounded-md hover:text-primary-800 hover:bg-primary-300': activeLink !== link.href,
                    'hidden md:block': link.href !== 'blog',
                  },
                )}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
