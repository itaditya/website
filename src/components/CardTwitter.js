import IconTwitter from '../components/IconTwitter';

export default function CardTwitter() {
  return (
    <article className="flex flex-col items-center bg-twitter-background text-white py-8 px-6 rounded-md shadow-2xl">
      <img src="https://via.placeholder.com/150" className="w-36 h-36 rounded-full shadow-xl" />
      <ul className="mt-10 text-white">
        <li className="flex items-center">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/round-pushpin_1f4cd.png"
            alt="Location"
            className="w-6 h-6"
          />
          <span className="ml-3 text-lg">Bengaluru, India</span>
        </li>
        <li className="flex items-center mt-1">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/hourglass_231b.png"
            alt="Experience"
            className="w-6 h-6"
          />
          <span className="ml-3 text-lg">2 years of experience</span>
        </li>
        <li className="flex items-center mt-1">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/236/envelope_2709.png"
            alt="Email Address"
            className="w-6 h-6"
          />
          <span className="ml-3 text-lg">adityaa803@gmail.com</span>
        </li>
      </ul>
      <a
        href="https://twitter.com/dev__adi"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 py-1 px-4 flex items-center bg-twitter-cta hover:bg-twitter-cta-600 focus:bg-twitter-cta-700 active:bg-twitter-cta-700 rounded-md transition-colors ease-in duration-100"
      >
        <IconTwitter className="text-2xl" />
        <strong className="ml-1 font-bold">Follow</strong>
      </a>
    </article>
  );
}
