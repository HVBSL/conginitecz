import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Services />
        {/* <Team /> */}
        <Products />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;