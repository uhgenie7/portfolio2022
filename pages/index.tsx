import AppLayout from '@src/components/AppLayout';
import About from '@src/components/sections/About';
import Carrer from '@src/components/sections/Carrer';
import Projects from '@src/components/sections/Projects';
import Contact from '@src/components/sections/Contact';

const Home = () => {
  return (
    <AppLayout>
      <About />
      <Carrer />
      <Projects />
      <Contact />
    </AppLayout>
  );
};

export default Home;
