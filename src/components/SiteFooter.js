export default function SiteFooter() {
  return (
    <footer className="col-span-12 py-3 px-4 mt-24 flex justify-center md:justify-between items-center">
      <span className="flex items-center">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/htc/37/envelope_2709.png"
          alt="Email Address"
          className="w-6 h-6"
        />
        <span className="ml-2 text-lg">adityaa803@gmail.com</span>
      </span>
      <ul className="hidden md:flex">
        <li>
          <a href="/labs" className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in">
            Experiments
          </a>
        </li>
        <li className="ml-10">
          <a
            href="/social"
            className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in"
          >
            Connect with me
          </a>
        </li>
      </ul>
    </footer>
  );
}
