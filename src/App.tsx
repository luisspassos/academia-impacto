import { AboutUs } from './components/AboutUs';
import { Blurry } from './components/Blurry';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Plans } from './components/Plans';
import { SvgGradient } from './components/SvgGradient';
import { WhatsappButton } from './components/WhatsappButton';

function App() {
  return (
    <>
      <SvgGradient />
      <Blurry />
      <Header />
      <Home />
      <AboutUs />
      <Plans />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
