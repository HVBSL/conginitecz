import aboutImage from '../assets/about-image.jpeg';
import { Shield, Zap, Users, Award } from 'lucide-react';

const About = () => {

  const features = [
    {
      icon: Shield,
      title: 'Reliable Solutions',
      description: 'Trusted by over 1500+ clients for consistent, high-quality tech support and hardware solutions.'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Average response time under 2 hours for urgent issues, ensuring minimal downtime for your business.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified technicians with extensive experience in hardware, software, and networking solutions.'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: '98% repair success rate with comprehensive warranties on all our services and products.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tech Solutions
              <span className="block text-blue-600 dark:text-blue-400">Built For You</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We offer top-tier computer sales and expert tech support designed to keep your technology running smoothly. From new system setups to complex troubleshooting, our certified technicians provide reliable assistance for all your hardware and software needs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We also specialize in server setup and maintenance, ensuring your business infrastructure is robust and efficient. Trust us for comprehensive IT solutions that scale with your growth.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1500+</div>
                <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
              
          <div className="relative animate-fade-in-right">
            <img 
              src={aboutImage}
              alt="Tech Solutions"
              className="rounded-2xl shadow-2xl hover-lift"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;