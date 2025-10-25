import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import ProcessCTA from './components/ProcessCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <Hero />
      <Services />
      <CaseStudies />
      <ProcessCTA />
      <Footer />
    </div>
  );
}

export default App;
