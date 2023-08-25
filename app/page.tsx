import { Experience } from './components/experience/Experience';
import { Hero } from './components/Hero';
import { Projects } from './components/projects/Projects';
import { HorizontalLine } from './components/styled-components/HorizontalLine';

const Page: React.FC = () => {
  return (
    <main className='container max-w-xl mx-auto py-20 grid gap-y-8'>
      <Hero />
      <HorizontalLine />
      <Experience />
      <HorizontalLine />
      <Projects />
    </main>
  );
};

export default Page;
