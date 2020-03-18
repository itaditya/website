import IconTwitter from '_components/icons/IconTwitter';

export default function CardTwitter() {
  return (
    <article className="flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-twitter-background text-white py-8 px-8 md:px-12 rounded-md shadow-2xl">
      <div className="md:w-4/6 md:mr-4">
        <p className="text-xl">
          I solve real problems by building simple user experiences.
        </p>
        <p className="mt-3 text-gray-400 w-4/6 mx-auto md:mx-0">
          #function_over_design, #reactjs, #javascript, #node
        </p>
        <ul className="text-white mt-4 ml-3">
          <li className="flex items-center justify-center md:justify-start">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/220/office-building_1f3e2.png"
              alt="Work"
              className="w-6 h-6"
            />
            <span className="ml-3 text-lg">HackerRank</span>
          </li>
          <li className="flex items-center justify-center md:justify-start mt-2">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/round-pushpin_1f4cd.png"
              alt="Location"
              className="w-6 h-6"
            />
            <span className="ml-3 text-lg">Bengaluru, India</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center mt-6 md:mt-0">
        <img src="/dp_twitter.jpg" className="w-32 h-32 rounded-full object-cover object-center shadow-xl" />
        <div className="inline-block">
          <a
            href="https://twitter.com/dev__adi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 py-1 px-4 flex items-center bg-twitter-cta hover:bg-twitter-cta-600 focus:bg-twitter-cta-700 active:bg-twitter-cta-700 rounded-md transition-colors ease-in duration-100"
          >
            <IconTwitter className="text-2xl" />
            <strong className="ml-1 font-bold">Follow</strong>
          </a>
        </div>
      </div>
    </article>
  );
}
