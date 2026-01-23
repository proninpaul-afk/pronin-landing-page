import Hero from './components/Hero';
import WhyNow from './components/WhyNow';
import ForWhom from './components/ForWhom';
import VideoTestimonial from './components/VideoTestimonial';
import AhaMoment from './components/AhaMoment';
import Results from './components/Results';
import Process from './components/Process';
import Cases from './components/Cases';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhyNow />
      <ForWhom />
      <VideoTestimonial />
      <AhaMoment />
      <Results />
      <Process />
      <Cases />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
