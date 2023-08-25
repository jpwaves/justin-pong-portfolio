import format from 'date-fns/format';

export const formatDates = (startDate: Date, endDate: Date | null): string => {
  const dateFormat = 'MMM yyyy';
  return `${format(startDate, dateFormat)} - ${
    endDate ? format(endDate, dateFormat) : 'Present'
  }`;
};
