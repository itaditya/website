import IconTwitter from '_components/icons/IconTwitter';

export default function CardTwitter() {
  return (
    <article className="flex flex-col items-center justify-center px-8 py-8 text-center text-white shadow-2xl md:flex-row md:text-left bg-twitter-background md:px-12 rounded-md">
      <div className="md:w-4/6 md:mr-4">
        <p className="text-xl">
          Follow me on Twitter to get updates for new articles.
        </p>
        <p className="w-4/6 mx-auto mt-3 text-gray-400 md:mx-0">
          #reactjs, #javascript, #node, #css, #design_systems
        </p>
        <ul className="items-center mt-6 text-white md:flex">
          <li className="flex items-center justify-center md:justify-start">
            <img
              src="/office-building.png"
              alt="Work"
              className="w-6 h-6"
            />
            <span className="ml-2 text-lg">Razorpay</span>
          </li>
          <li className="flex items-center justify-center ml-4 md:justify-start">
            <img
              src="/pushpin.png"
              alt="Location"
              className="w-6 h-6"
            />
            <span className="ml-1 text-lg">Bengaluru, India</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center mt-6 md:mt-0">
        <img src="/dp_twitter.png" alt="" className="object-cover object-center w-32 h-32 rounded-full shadow-xl" />
        <div className="inline-block">
          <a
            href="https://twitter.com/dev__adi"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center px-4 py-1 mt-4 bg-twitter-cta rounded-md hover:bg-twitter-cta-600 active:bg-twitter-cta-700
              focus:outline-none focus:ring-2 focus:ring-twitter-cta focus:ring-opacity-80 ring-offset-4 ring-offset-twitter-background transition
            `}
          >
            <IconTwitter className="text-2xl" />
            <strong className="ml-1 font-bold">Follow</strong>
          </a>
        </div>
      </div>
    </article>
  );
}
