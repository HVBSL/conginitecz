import { Monitor, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={ref} className={`bg-gray-900 dark:bg-slate-950 text-white transition-colors duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Monitor className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">ConginteTZ</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted partner for comprehensive computer hardware, networking solutions, and expert technical support. 
              We keep your technology running smoothly so you can focus on what matters most.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                // { name: 'Team', id: 'team' },
                { name: 'Products', id: 'products' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 91503 51005</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">conginiteczteam@conginitecz.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  Block No: 10, Door No. 881<br />
                  Elango Salai, Mogappair East,<br />
                  Chennai - 600037
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2025 ConginteTZ. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {/* <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;