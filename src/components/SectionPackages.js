import cn from '_utils/classnames';
import IconNpm from '_components/icons/IconNpm';
import IconGitHub from '_components/icons/IconGitHub';
import IconGlobe from '_components/icons/IconGlobe';
import myPackages from '../staticData/myPackages.json';

export default function SectionPackages(props) {
  const { children, className } = props;
  return (
    <section className={cn({ 'mt-56 flex md:flex flex-col items-center': true, [className]: true })}>
      <h2 className="text-4xl font-bold text-center">Open Source Tools</h2>
      <div
        className="grid col-gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 row-gap-12 w-full mt-16"
      >
        {myPackages.map(pkg => (
          <article className="p-4 text-center bg-white rounded-lg shadow-xl" key={pkg.name}>
            <h3 className="w-full text-2xl">{pkg.name}</h3>
            <p className="mt-3 text-gray-700">{pkg.description}</p>
            <ul className="flex items-center px-8 mt-6 justify-evenly">
              <li>
                <a
                  href={pkg.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 text-2xl text-white"
                >
                  <span className="block p-1 bg-blue-500 rounded-full hover:shadow-lg transition duration-200 ease-in">
                    <IconGlobe />
                  </span>
                </a>
              </li>
              <li>
                <a href={pkg.links.npm} target="_blank" rel="noopener noreferrer" className="block p-2 text-2xl">
                  <span
                    className="block p-1 rounded-full hover:shadow-lg transition duration-200 ease-in"
                    style={{ backgroundColor: 'hsl(3.2, 52.4%, 48.6%)' }}
                  >
                    <IconNpm />
                  </span>
                </a>
              </li>
              <li>
                <a href={pkg.links.github} target="_blank" rel="noopener noreferrer" className="block p-2 text-3xl">
                  <span className="rounded-full hover:shadow-lg transition duration-200 ease-in">
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
