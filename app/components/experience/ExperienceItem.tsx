import format from 'date-fns/format';

interface ExperienceItemProps {
  role: string;
  company: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  description,
  startDate,
  endDate,
}) => {
  const dateFormat = 'MMM yyyy';
  const formattedDates = `${format(startDate, dateFormat)} - ${
    endDate ? format(endDate, dateFormat) : 'Present'
  }`;
  return (
    <div className='container flex flex-col items-start gap-y-1 w-full'>
      <div className='flex flex-row justify-between w-full font-semibold'>
        <h3>
          {role} | {company}
        </h3>
        <p>{formattedDates}</p>
      </div>
      <p className='text-sm'>{description}</p>
    </div>
  );
};
