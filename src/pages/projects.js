import SiteHead from '_components/SiteHead';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import SocialBar from '_components/SocialBar';
import IconExternalLink from '_components/icons/IconExternalLink';
import SectionPackages from '_components/SectionPackages';
import cn from '_utils/classnames';
import myProjects from '_staticData/myProjects.json';

const Projects = () => {
  return (
    <div className="relative min-h-screen py-8 bg-gray-100 font-body px:4 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 grid-rows-main-fill">
      <SiteHead pageName="Projects" />
      <SiteNavbar activeLink="projects" />
      <main className="px-8 mt-12 col-span-12 md:col-start-2 md:col-span-10">
        <h2 className="mb-20 lg:mb-40 text-5xl font-bold text-center text-gray-800 font-heading">
          Projects
        </h2>
        <ul className="grid grid-cols-1 gap-y-12 lg:gap-y-40">
          {myProjects.map((project, index) => (
            <li
              key={project.name}
              className={cn({
                'flex flex-col-reverse items-center lg:space-x-10': true,
                'lg:flex-row': index % 2 === 0,
                'lg:flex-row-reverse lg:space-x-reverse': index % 2 !== 0,
              })}
            >
              <div className="pl-2 mt-3 lg:mt-0">
                <h3 className="text-xl text-gray-700 md:text-3xl md:leading-relaxed">
                  {project.name}
                </h3>
                <span className="inline-block px-2 mb-1 text-sm text-blue-800 bg-blue-100 border border-blue-300 rounded-md">
                  {project.label}
                </span>
                <p className="mt-2 text-lg text-gray-600 max-w-xs">{project.description}</p>
                {project.anchorLink && (
                  <span className="inline-block mt-3">
                    <a
                      className={`
                        flex items-center text-base group text-primary-600 rounded-sm
                        focus:outline-none focus:ring-2 focus:ring-primary-400 ring-offset-8 ring-offset-gray-100
                      `}
                      target="_blank"
                      rel="noreferrer noopener"
                      href={project.anchorLink}
                    >
                      <span className="mr-2 text-xl group-hover:text-primary-700 transition">
                        {project.anchorText}
                      </span>
                      <IconExternalLink
                        className="text-primary group-hover:text-primary-700 group-hover:font-bold transition duration-300"
                        strokeWidth={3}
                      />
                    </a>
                  </span>
                )}
              </div>
              <img
                src={project.pictureUrl}
                alt=""
                className="flex-1 shadow-md rounded-md"
                width={420}
                height={200}
              />
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
