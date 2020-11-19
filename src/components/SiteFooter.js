import Link from 'next/link';

export default function SiteFooter() {
  const links = [
    {
      href: '/labs',
      text: 'Experiments',
    },
    {
      href: '/social',
      text: 'Connect with me',
    },
    {
      href: '/work',
      text: 'Work',
    },
  ];

  return (
    <footer className="flex items-center justify-center px-4 py-3 mt-24 col-span-12 md:justify-between">
      <span className="flex items-center">
        <img src="/envelope.png" alt="Email Address" className="w-6 h-6" />
        <span className="ml-2 text-lg">adityaa803@gmail.com</span>
      </span>
      <ul className="hidden md:flex space-x-10">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a
                className={`
                  text-lg text-gray-600 hover:text-gray-900 transition rounded-sm
                  focus:outline-none focus:ring-2 focus:ring-primary-400 ring-offset-8 ring-offset-gray-100
                `}
              >
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
