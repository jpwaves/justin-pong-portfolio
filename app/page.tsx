import { Experience } from './components/experience/Experience';
import { Hero } from './components/Hero';
import { HorizontalLine } from './components/styled-components/HorizontalLine';

const Page: React.FC = () => {
  return (
    <main className='container max-w-xl mx-auto py-20 grid gap-y-8'>
      <Hero />
      <HorizontalLine />
      <Experience />
      <HorizontalLine />
    </main>
  );
};

export default Page;
