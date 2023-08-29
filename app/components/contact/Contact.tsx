export const Contact: React.FC = () => {
  return (
    <div className='container mx-auto max-w-2xl flex flex-col gap-y-3'>
      <h2 className='font-extralight text-4xl uppercase'>Contact Me</h2>
      <div className='container mx-auto w-full flex flex-col items-start gap-y-8'>
        <p className='text-sm text-left'>Feel free to reach out and say hi!</p>
        <a
          className='w-36 mx-auto border-2 border-slate-800 rounded-md py-4 px-6 text-center text-lg font-medium'
          href='mailto:pong.justinn@gmail.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          Email Me!
        </a>
      </div>
    </div>
  );
};
