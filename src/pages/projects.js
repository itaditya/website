import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';
import IconExternalLink from '_components/icons/IconExternalLink';
import SectionPackages from '_components/SectionPackages';
import cn from '_utils/classnames';
import myProjects from '../staticData/myProjects.json';

const Projects = () => {
  return (
    <div
      className="relative min-h-screen py-8 bg-gray-200 font-body px:4 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 col-gap-4"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <SiteHead pageName="Projects" />
      <SiteNavbar activeLink="projects" />
      <main className="px-8 mt-12 col-span-12 md:col-start-3 md:col-span-8">
        <h2 className="mb-40 text-5xl font-bold text-center text-gray-800 font-heading">Projects</h2>
        <ul className="grid grid-cols-1 row-gap-8 md:row-gap-40">
          {myProjects.map((project, index) => (
            <li
              key={project.name}
              className={cn({
                'flex flex-col-reverse items-center': true,
                'md:flex-row': index % 2 === 0,
                'md:flex-row-reverse': index % 2 !== 0,
              })}
            >
              <div
                className={cn({
                  'pl-2 mt-3 md:mt-0 min-w-1/3': true,
                  'md:mr-8': index % 2 === 0,
                  'md:ml-8': index % 2 !== 0,
                })}
              >
                <h3 className="text-xl text-gray-700 md:text-3xl">{project.name}</h3>
                <span className="inline-block px-2 mb-1 text-sm text-blue-600 bg-blue-200 border border-blue-300 rounded-md">
                  {project.label}
                </span>
                <p className="mt-2 text-lg text-gray-600">{project.description}</p>
                {project.anchorLink && (
                  <span className="inline-block mt-3">
                    <a
                      className="flex items-center text-base leading-relaxed group text-primary-600"
                      target="_blank"
                      rel="noreferrer noopener"
                      href={project.anchorLink}
                    >
                      <span className="mr-2 text-xl group-hover:text-primary-700 transition-colors duration-200">
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
              <img src={project.pictureUrl} className="w-full shadow-md rounded-md" width={420} height={200} />
            </li>
          ))}
        </ul>
        <SectionPackages />
      </main>
      <SocialBar />
      <SiteFooter />
    </div>
  );
};

export default Projects;
