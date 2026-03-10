import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Menu from './components/Menu';

import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-brand-light text-brand-dark scroll-smooth selection:bg-brand-accent selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <div className="relative z-20 bg-brand-light">
          <Highlights />
          <Menu />
        </div>

        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
