import cn from '_utils/classnames';
import IconNpm from '_components/icons/IconNpm';
import IconGitHub from '_components/icons/IconGitHub';
import IconGlobe from '_components/icons/IconGlobe';
import myPackages from '_staticData/myPackages.json';

export default function SectionPackages(props) {
  const { children, className = '' } = props;
  return (
    <section
      className={cn({ 'mt-56 flex md:flex flex-col items-center': true, [className]: true })}
    >
      <h2 className="text-4xl font-bold text-center text-gray-700">Open Source Tools</h2>
      <div className="grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 w-full mt-16">
        {myPackages.map((pkg) => (
          <article className="px-4 py-6 text-center bg-white rounded-lg shadow-xl" key={pkg.name}>
            <h3 className="w-full text-2xl text-gray-700">{pkg.name}</h3>
            <p className="mt-3 text-gray-500">{pkg.description}</p>
            <ul className="flex items-center px-8 mt-6 justify-evenly">
              <li>
                <a
                  href={pkg.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 text-2xl text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400"
                >
                  <span className="sr-only">Docs</span>
                  <span className="block p-1 bg-blue-500 rounded-full hover:shadow-lg transition">
                    <IconGlobe />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={pkg.links.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 text-2xl rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400"
                >
                  <span className="sr-only">NPM</span>
                  <span
                    className="block p-1 rounded-full hover:shadow-lg transition"
                    style={{ backgroundColor: 'hsl(3.2, 52.4%, 48.6%)' }}
                  >
                    <IconNpm />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={pkg.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 text-3xl rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400"
                >
                  <span className="sr-only">GitHub</span>
                  <span className="rounded-full hover:shadow-lg transition">
                    <IconGitHub />
                  </span>
                </a>
              </li>
            </ul>
          </article>
        ))}
        {children}
      </div>
    </section>
  );
}
