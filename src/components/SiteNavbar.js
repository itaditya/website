import { useState } from 'react';
import Link from 'next/link';

import cn from '_utils/classnames';
import IconMenu from '_components/icons/IconMenu';
import IconCross from '_components/icons/IconCross';
import SocialBar from '_components/SocialBar';
import { useDeviceWidth } from '_utils/deviceDetails';

export default function SiteNavbar(props) {
  const { activeLink } = props;
  const deviceWidth = useDeviceWidth();
  const [stateIsExpanded, setStateIsExpanded] = useState(false);

  function handleOpenMenu() {
    setStateIsExpanded(true);
  }

  function handleCloseMenu() {
    setStateIsExpanded(false);
  }

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

  const linksExpanded = [
    {
      href: 'projects',
      name: 'Projects',
    },
    {
      href: 'about',
      name: 'About',
    },
    {
      href: 'labs',
      name: 'Experiments',
    },
    {
      href: 'social',
      name: 'Connect with me',
    },
    {
      href: 'work',
      name: 'Work',
    },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 col-span-12">
      <h4 className="text-2xl font-bold" aria-label="@dev__adi">
        <Link href="/">
          <a className="text-gray-600 hover:text-gray-700 transition rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-400 ring-offset-8 ring-offset-gray-100">
            <span>@dev_</span>
            <span className="ml-1">_adi</span>
          </a>
        </Link>
      </h4>
      <ul className="flex items-center text-center">
        {links.map((link) => (
          <li key={link.href} className="md:ml-12">
            <Link href={`/${link.href}`}>
              <a
                className={cn({
                  'block text-md md:text-xl text-gray-700 py-1 px-2 transition duration-200 ease-in': true,
                  'focus:outline-none focus:ring-2 focus:ring-primary-400 ring-offset-2 ring-offset-gray-100': true,
                  'border-b-2 border-primary-400 text-primary-700': activeLink === link.href,
                  'rounded-md hover:text-primary-800 hover:bg-primary-300':
                    activeLink !== link.href,
                  'hidden md:block': link.href !== 'blog',
                })}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
        {['xs', 'sm'].includes(deviceWidth) && (
          <li className="flex items-center pr-1 ml-6 md:hidden">
            <button className="text-xl text-gray-700" onClick={handleOpenMenu} aria-label="More">
              <IconMenu />
            </button>
            {stateIsExpanded && (
              <nav
                className="fixed flex flex-col justify-center bg-gray-50"
                style={{ top: 0, height: '100vh', width: '100%', left: 0 }}
              >
                <button
                  className="absolute flex items-center text-lg"
                  style={{ top: '20px', right: '20px' }}
                  onClick={handleCloseMenu}
                >
                  <IconCross className="text-2xl text-gray-700" />
                  <span className="ml-1 text-gray-900">Close</span>
                </button>
                <ul>
                  {linksExpanded.map((link) => (
                    <li key={link.href} className="py-2 text-3xl" onClick={handleCloseMenu}>
                      <Link href={`/${link.href}`}>
                        <a className="block px-2 py-1 text-gray-700 text-md md:text-xl">
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <SocialBar isInsideMenu={true} />
                </div>
              </nav>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
