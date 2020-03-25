import cn from 'classnames';

import IconNpm from '_components/icons/IconNpm';
import IconGitHub from '_components/icons/IconGitHub';
import IconGlobe from '_components/icons/IconGlobe';
import myPackages from '../staticData/myPackages.json';

export default function SectionPackages(props) {
  const { children, size = 'small' } = props;
  return (
    <section className="mt-56 flex flex-col items-center">
      <h2 className="text-4xl font-bold">Open Source Tools</h2>
      <div className={cn("grid col-gap-8 row-gap-12 w-full mt-16", {
        'grid-cols-3': size === 'big',
        'grid-cols-4': size === 'small',
      })}>
        {myPackages.map(pkg => (
          <article className="p-4 bg-white shadow-xl rounded-lg text-center" key={pkg.name}>
            <h3 className="w-full text-2xl">{pkg.name}</h3>
            <p className="text-gray-700 mt-3">{pkg.description}</p>
            <ul className="flex justify-evenly items-center px-8 mt-6">
              <li>
                <a
                  href={pkg.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 text-white text-2xl"
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
