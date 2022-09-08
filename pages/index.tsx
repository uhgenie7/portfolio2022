import AppLayout from '@src/components/AppLayout';
import About from '@src/components/sections/About';
import Carrer from '@src/components/sections/Carrer';
import Projects from '@src/components/sections/Projects';
import Skills from '@src/components/sections/Skills';

const Home = () => {
  return (
    <AppLayout>
      <About />
      <Skills />
      <Carrer />
      <Projects />
    </AppLayout>
  );
};

export default Home;
