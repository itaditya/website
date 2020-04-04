import IconTwitter from '_components/icons/IconTwitter';
import IconMedium from '_components/icons/IconMedium';
import IconYouTube from '_components/icons/IconYouTube';
import IconGitHub from '_components/icons/IconGitHub';
import { useDeviceWidth } from '_utils/deviceDetails';

export default function SocialBar() {
  const deviceWidth = useDeviceWidth();
  if(['server', 'xs', 'sm'].includes(deviceWidth)) {
    return null;
  }

  return (
    <aside className="md:fixed left-0 md:h-screen px-4 flex md:flex-col justify-center items-center animation-fade-in" style={{ top: '0' }}>
      <ul className="flex md:block">
        <li>
          <a
            href="https://twitter.com/dev__adi"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-white text-3xl"
          >
            <span
              className="block p-1 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in"
              style={{ backgroundColor: 'hsl(202.8, 89.1%, 53.1%)' }}
            >
              <IconTwitter />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@adityaa803"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-gray-700 text-3xl"
          >
            <span
              className="block p-1 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in"
              style={{ backgroundColor: '#12100E' }}
            >
              <IconMedium />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCk5cWNVIgtW_rpR7J_VSiWw?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-gray-700 text-3xl"
          >
            <span
              className="block p-1 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in"
              style={{ backgroundColor: 'hsl(0, 75.4%, 50.6%)' }}
            >
              <IconYouTube />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/itaditya"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-white text-4xl"
          >
            <span className="rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in">
              <IconGitHub />
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
