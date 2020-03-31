import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="col-span-12 py-3 px-4 mt-24 flex justify-center md:justify-between items-center">
      <span className="flex items-center">
        <img
          src="/envelope.png"
          alt="Email Address"
          className="w-6 h-6"
        />
        <span className="ml-2 text-lg">adityaa803@gmail.com</span>
      </span>
      <ul className="hidden md:flex">
        <li>
          <Link href="/labs">
            <a className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in">
              Experiments
            </a>
          </Link>
        </li>
        <li className="ml-10">
          <Link href="/social">
            <a className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in">
              Connect with me
            </a>
          </Link>
        </li>
        <li className="ml-10">
          <Link href="/work">
            <a className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in">Work</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
