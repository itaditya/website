import Link from 'next/link';
import cn from 'classnames';

export default function SiteNavbar(props) {
  const { activeLink } = props;

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
        <li className="">
          <Link href="/blog">
            <a
              className={cn(
                'block text-md md:text-xl text-gray-700 py-1 px-4 transition-colors duration-200 ease-in',
                {
                  'border-b-2 border-primary-400 text-primary-700': activeLink === 'blog',
                },
                {
                  'rounded-md hover:text-primary-800 hover:bg-primary-300': activeLink !== 'blog',
                }
              )}
            >
              Blog
            </a>
          </Link>
        </li>
        <li className="ml-6 hidden md:block">
          <Link href="/projects">
            <a className="block text-md md:text-xl text-gray-700 hover:text-primary-800 hover:bg-primary-300 rounded-md py-1 px-4 transition-colors duration-200 ease-in">
              Projects
            </a>
          </Link>
        </li>
        <li className="ml-6 hidden md:block">
          <Link href="/about">
            <a className="block text-md md:text-xl text-gray-700 hover:text-primary-800 hover:bg-primary-300 rounded-md py-1 px-4 transition-colors duration-200 ease-in">
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
