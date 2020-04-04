import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

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
        {['xs', 'sm'].includes(deviceWidth) && (
          <li className="md:hidden ml-6 pr-1 flex items-center">
            <button className="text-xl text-gray-700" onClick={handleOpenMenu} aria-label="More"><IconMenu /></button>
            {stateIsExpanded && (
              <nav
                className="fixed flex flex-col justify-center bg-gray-100"
                style={{ top: 0, height: '100vh', width: '100%', left: 0 }}
              >
                <button className="absolute text-lg flex items-center" style={{ top: '20px', right: '20px' }} onClick={handleCloseMenu}>
                  <IconCross className="text-2xl text-gray-700" />
                  <span className="ml-1 text-gray-900">Close</span>
                </button>
                <ul>
                  {linksExpanded.map(link => (
                    <li key={link.href} className="py-2 text-3xl" onClick={handleCloseMenu}>
                      <Link href={`/${link.href}`}>
                        <a className="block text-md md:text-xl text-gray-700 py-1 px-2">{link.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <SocialBar />
                </div>
              </nav>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
