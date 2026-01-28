import Hero from './components/Hero';
import WhyNow from './components/WhyNow';
import Results from './components/Results';
import Cases from './components/Cases';
import About from './components/About';
import Packages from './components/Packages';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhyNow />
      <Results />
      <Cases />
      <About />
      <Packages />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
