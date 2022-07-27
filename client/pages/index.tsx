import AppLayout from '@src/components/AppLayout';
import About from '@src/components/sections/About';
import Carrer from '@src/components/sections/Carrer';
import Projects from '@src/components/sections/Projects';

const Home = () => {
  return (
    <AppLayout>
      <About />
      <Carrer />
      <Projects />
    </AppLayout>
  );
};

export default Home;
