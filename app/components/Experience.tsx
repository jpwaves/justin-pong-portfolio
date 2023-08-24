import { ExperienceItem } from './ExperienceItem';

const experiences = [
  {
    role: 'Full-Stack Software Engineering Co-op',
    company: 'Wellframe',
    description:
      "Implemented a new feature in Wellframe's care manager web application to improve the user experience for filtering a list of patients using React and Java Spring Boot. Redesigned a shared time picker UI component to use a new text masking package and improve formatting while maintaining the existing component interface to have backward compatibility.Upgraded multiple areas within the React application to use a more modern date library while refactoring and tracing usages to prevent regression.",
    startDate: new Date(2022, 0),
    endDate: new Date(2022, 12),
  },
  {
    role: 'Software Developer',
    company: 'Northeastern Electric Racing',
    description:
      'Revamp React front-end design of projects page to increase readability and provide users with more precise details and general project information. Spearheaded drive to upgrade forms to with React Hook Forms for more customizability with creating form components.',
    startDate: new Date(2021, 8),
    endDate: new Date(2022, 8),
  },
  {
    role: 'Secretary',
    company: 'NU Society of Asian Scientists and Engineers',
    description:
      'Document and manage the club’s priority goals and weekly objectives, including general meeting planning, mentor program timelines, and to-do tasks for each board member, to ensure all deadlines are not missed. Update and compose the weekly newsletters advertising the club’s weekly events and programs, increasing the readership audience by 36%.',
    startDate: new Date(2021, 5),
    endDate: new Date(2022, 5),
  },
];

export const Experience: React.FC = () => {
  return (
    <div className='container mx-auto max-w-2xl flex flex-col gap-y-3'>
      <h2 className='font-extralight text-4xl uppercase'>Experience</h2>
      <div className='container mx-auto w-full flex flex-col items-center gap-y-2'>
        {experiences.map((experience, index) => (
          <ExperienceItem
            role={experience.role}
            company={experience.company}
            description={experience.description}
            startDate={experience.startDate}
            endDate={experience.endDate}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
