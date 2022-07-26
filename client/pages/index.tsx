import AppLayout from '@src/components/AppLayout';
import About from '@src/components/sections/About';
import Carrer from '@src/components/sections/Carrer';

const Home = () => {
  return (
    <AppLayout>
      <About />
      <Carrer />
    </AppLayout>
  );
};

export default Home;
