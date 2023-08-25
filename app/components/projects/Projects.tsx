import { ProjectItem } from './ProjectItem';

const projects = [
  {
    name: 'PM-Dashboard-v2',
    description:
      'Open-source project management dashboard that organizes and documents project deadlines so users can optimize and streamline component projects for the Northeastern Electric Racing club.',
    startDate: new Date(2021, 9),
    endDate: new Date(2022, 8),
    url: 'https://github.com/Northeastern-Electric-Racing/PM-Dashboard-v2',
  },
  {
    name: 'JustCatsBot',
    description:
      'A Discord bot that shares cute images of my cat in a designated channel on a regular schedule.',
    startDate: new Date(2021, 1),
    endDate: new Date(2021, 7),
    url: 'https://github.com/jpwaves/sase-pet-bot',
  },
];

export const Projects: React.FC = () => {
  return (
    <div className='container mx-auto max-w-2xl flex flex-col gap-y-3'>
      <h2 className='font-extralight text-4xl uppercase'>Projects</h2>
      <div className='container mx-auto w-full flex flex-col items-center gap-y-2'>
        {projects.map((project, index) => (
          <ProjectItem
            name={project.name}
            description={project.description}
            startDate={project.startDate}
            endDate={project.endDate}
            url={project.url}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
