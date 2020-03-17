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
      <ul className="flex items-center">
        <li className="">
          <Link href="/work">
            <a className="block text-xl text-gray-800 hover:text-primary-600 border-b-2 border-transparent hover:border-primary py-2 px-2 transition-colors duration-200 ease-in">
              Work
            </a>
          </Link>
        </li>
        <li className="ml-8">
          <Link href="/projects">
            <a className="block text-xl text-gray-800 hover:text-primary-600 border-b-2 border-transparent hover:border-primary py-2 px-2 transition-colors duration-200 ease-in">
              Projects
            </a>
          </Link>
        </li>
        <li className="ml-8">
          <Link href="/blog">
            <a
              className={cn(
                'block text-xl text-gray-800 hover:text-primary-600 border-b-2 border-transparent hover:border-primary py-2 px-2 transition-colors duration-200 ease-in',
                {
                  'border-primary-600 text-primary-700': activeLink === 'blog',
                },
              )}
            >
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
