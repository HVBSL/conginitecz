import { useState, useEffect } from 'react';
import heroBackground from '../assets/hero-background.jpeg';
import aboutImage from '../assets/about-image.jpeg';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';
import laptopServiceImg from '../assets/Laptop-service.jpg';
import serverServiceImg from '../assets/server-services.jpg';
import biometricDevicesImg from '../assets/Biometrics.jpg';
import cctvSecurityImg from '../assets/Camera.jpg';
import networkSetupImg from '../assets/Network-setup.jpg';
import printerServiceImg from '../assets/Printer.jpg';
import dataRecoveryImg from '../assets/data-recovery.jpg';
import amcServicesImg from '../assets/AMC-Sevices.jpg';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToAbout = () => {
    
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    { src: aboutImage, alt: 'Tech solutions workspace' },
    { src: heroBackground, alt: 'Hardware showcase background' },
    { src: product1, alt: 'Featured product 1' },
    { src: product2, alt: 'Featured product 2' },
    { src: product3, alt: 'Featured product 3' },
    { src: product4, alt: 'Featured product 4' },
    { src: laptopServiceImg, alt: 'Laptop service' },
    { src: serverServiceImg, alt: 'Server service' },
    { src: biometricDevicesImg, alt: 'Biometric devices' },
    { src: cctvSecurityImg, alt: 'CCTV security' },
    { src: networkSetupImg, alt: 'Network setup' },
    { src: printerServiceImg, alt: 'Printer service' },
    { src: dataRecoveryImg, alt: 'Data recovery' },
    { src: amcServicesImg, alt: 'AMC services' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    const total = slides.length;
    const nextIndex = ((index % total) + total) % total;
    setCurrentIndex(nextIndex);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <div className="overflow-hidden w-full h-full">
          <div
            className="flex transition-transform duration-700 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="min-w-full h-full relative">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/60"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg backdrop-blur transition-all duration-300"
      >
        <span className="text-2xl">‹</span>
      </button>
      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg backdrop-blur transition-all duration-300"
      >
        <span className="text-2xl">›</span>
      </button>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
            className={`${idx === currentIndex ? 'bg-white' : 'bg-white/50'} w-3 h-3 rounded-full shadow-lg transition-all duration-300`}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Tech Excellence
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Delivered
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Your premier destination for cutting-edge computer solutions, expert tech assistance, and reliable hardware support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={scrollToContact}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Get Support</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Our Services
          </button>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce" onClick={scrollToAbout}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;