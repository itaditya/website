import IconTwitter from '_components/icons/IconTwitter';
import IconMedium from '_components/icons/IconMedium';
import IconYouTube from '_components/icons/IconYouTube';
import IconGitHub from '_components/icons/IconGitHub';
import cn from '_utils/classnames';

export default function SocialBar(props) {
  const { isInsideMenu = false } = props;

  const className = {
    'left-0 flex items-center justify-center px-4 md:fixed md:h-screen md:flex-col animation-fade-in': true,
    'flex': isInsideMenu,
    'hidden md:flex': !isInsideMenu,
  };

  return (
    <aside className={cn(className)} style={{ top: '0' }}>
      <ul className="flex space-x-2 md:block md:space-x-0 md:space-y-2">
        <li>
          <a
            href="https://twitter.com/dev__adi"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-3xl text-white rounded-full transition focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': 'hsl(202.8, 89.1%, 53.1%)' }}
          >
            <span className="sr-only">Twitter</span>
            <span
              className="block p-1 rounded-full shadow-md hover:shadow-lg transition"
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
            className="block p-2 text-3xl text-gray-700 rounded-full transition focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': '#12100E' }}
          >
            <span
              className="block p-1 rounded-full shadow-md hover:shadow-lg transition"
              style={{ backgroundColor: '#12100E' }}
            >
              <span className="sr-only">Medium</span>
              <IconMedium />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCk5cWNVIgtW_rpR7J_VSiWw?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-3xl text-gray-700 rounded-full transition focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': 'hsl(0, 75.4%, 50.6%)' }}
          >
            <span
              className="block p-1 rounded-full shadow-md hover:shadow-lg transition"
              style={{ backgroundColor: 'hsl(0, 75.4%, 50.6%)' }}
            >
              <span className="sr-only">YouTube</span>
              <IconYouTube />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/itaditya"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-4xl text-white rounded-full transition focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': '#12100E' }}
          >
            <span className="sr-only">GitHub</span>
            <span className="rounded-full shadow-md hover:shadow-lg transition">
              <IconGitHub />
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
