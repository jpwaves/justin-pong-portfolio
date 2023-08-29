import Image from 'next/image';

// the hero should contain profile pic, name, and intro quip
export const Hero: React.FC = () => {
  const introduction = `
  An enthusiastic software engineer with a deep passion for fullstack development and a keenness for work-life life balance, all while being a casual VTuber and anime enjoyer!  
  `;

  return (
    <div className='container mx-auto w-full flex flex-col items-center gap-y-4'>
      <div className='w-48 h-48 overflow-hidden rounded-full my-10'>
        <Image
          src='/images/profile-pic-v1.jpg'
          width={150}
          height={100}
          alt='Profile picture of me.'
          quality={100}
          className='object-cover object-center h-full w-full'
        />
      </div>
      <h1 className='text-5xl font-semibold'>Justin Pong</h1>
      <p className='text-center text-base font-normal'>{introduction}</p>
    </div>
  );
};
