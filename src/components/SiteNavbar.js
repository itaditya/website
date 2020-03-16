export default function SiteNavbar() {
  return (
    <nav className="col-span-12 py-4 px-6 flex items-center justify-between">
      <h4 className="text-2xl font-bold" aria-label="@dev__adi">
        <a href="/">
          <span>@dev_</span>
          <span className="ml-1">_adi</span>
        </a>
      </h4>
      <ul className="flex items-center">
        <li className="">
          <a
            href="/work"
            className="block text-xl text-gray-800 hover:text-primary-600 border-b-2 border-transparent hover:border-primary py-2 px-2 transition-colors duration-200 ease-in"
          >
            Work
          </a>
        </li>
        <li className="ml-8">
          <a
            href="/projects"
            className="block text-xl text-gray-800 hover:text-primary-600 border-b-2 border-transparent hover:border-primary py-2 px-2 transition-colors duration-200 ease-in"
          >
            Projects
          </a>
        </li>
        <li className="ml-8">
          <a
            href="/blog"
            className="block text-xl text-gray-800 hover:text-primary-600 border-b-2 border-transparent hover:border-primary py-2 px-2 transition-colors duration-200 ease-in"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}
