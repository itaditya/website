import cn from 'classnames';

import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';
import IconExternalLink from '_components/icons/IconExternalLink';
import SectionPackages from '_components/SectionPackages';
import { useDeviceWidth } from '_utils/deviceDetails';
import myProjects from '../staticData/myProjects.json';

const Projects = () => {
  const deviceWidth = useDeviceWidth();

  return (
    <div
      className="relative min-h-screen font-body bg-gray-200 px:4 sm:px-24 lg:px-32 xl:px-40 py-8 grid grid-cols-12 col-gap-4"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <SiteHead pageName="Projects" />
      <SiteNavbar activeLink="projects" />
      <main className="col-span-12 md:col-start-3 md:col-span-8 px-8 mt-12">
        <h2 className="font-heading font-bold text-gray-800 text-center text-5xl mb-40">Projects</h2>
        <ul className="grid grid-cols-1 row-gap-8 md:row-gap-40">
          {myProjects.map((project, index) => (
            <li
              key={project.name}
              className={cn('flex flex-col-reverse items-center', {
                'md:flex-row': index % 2 === 0,
                'md:flex-row-reverse': index % 2 !== 0,
              })}
            >
              <div
                className={cn('pl-2 mt-3 md:mt-0 min-w-1/3', {
                  'md:mr-8': index % 2 === 0,
                  'md:ml-8': index % 2 !== 0,
                })}
              >
                <h3 className="text-xl md:text-3xl text-gray-700">{project.name}</h3>
                <span className="inline-block mb-1 text-sm bg-blue-200 rounded-md px-2 text-blue-600 border border-blue-300">
                  {project.label}
                </span>
                <p className="text-gray-600 mt-2 text-lg">{project.description}</p>
                {project.anchorLink && (
                  <span className="inline-block mt-3">
                    <a
                      className="group flex items-center text-base text-primary-600 leading-relaxed"
                      target="_blank"
                      rel="noreferrer noopener"
                      href={project.anchorLink}
                    >
                      <span className="text-xl mr-2 group-hover:text-primary-700 transition-colors duration-200">
                        {project.anchorText}
                      </span>
                      <IconExternalLink
                        className="text-primary group-hover:text-primary-700 group-hover:font-bold transition-colors duration-300"
                        strokeWidth={3}
                      />
                    </a>
                  </span>
                )}
              </div>
              <img src={project.pictureUrl} className="w-full rounded-md shadow-md" width={420} height={200} />
            </li>
          ))}
        </ul>
        <SectionPackages size={['xs', 'sm'].includes(deviceWidth) ? 'sm' : 'lg'} />
      </main>
      <SocialBar />
      <SiteFooter />
    </div>
  );
};

export default Projects;
