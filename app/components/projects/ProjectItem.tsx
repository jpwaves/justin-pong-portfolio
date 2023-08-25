import { formatDates } from '@/app/util/dateFormatter';

interface ProjectItemProps {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  url?: string;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  description,
  startDate,
  endDate,
  url,
}) => {
  return (
    <div className='container flex flex-col items-start gap-y-1 w-full'>
      <div className='flex flex-row justify-between w-full font-semibold'>
        <h3>{name}</h3>
        <p>{formatDates(startDate, endDate)}</p>
      </div>
      <p className='text-sm'>{description}</p>
      {url && (
        <a
          className='text-sm italic underline'
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
      )}
    </div>
  );
};
