import { Star, Code, Globe, Smartphone, Database, ArrowRight } from 'lucide-react';
import biometricsImg from '../assets/Biometrics.jpg';
import cctvImg from '../assets/Camera.jpg';
import printerImg from '../assets/Printer.jpg';
import computerPartsImg from '../assets/ComputerParts.jpg';

const Products = () => {
  
  const phoneNumber = "9150351005";
  const message = "Hello! May I know more about the ";

  const handleWhatsAppClick = (title: string, isService = false) => {
    const encodedMessage = encodeURIComponent(message);
    const encodedtitle = encodeURIComponent(isService ? `${title} service` : `${title} product`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}${encodedtitle}`;
    console.log(whatsappUrl);
    window.open(whatsappUrl, '_blank');
  };
  const products = [
    {
      name: 'Biometrics',
      image: biometricsImg,
      specs: ['Fingerprint & Face Access', 'Attendance Systems', 'Cloud & On-Prem', 'Installation & Support'],
      rating: 4.8,
      reviews: 112
    },
    {
      name: 'CCTV',
      image: cctvImg,
      specs: ['IP & Analog Cameras', 'NVR/DVR Solutions', 'Remote Monitoring', 'Indoor & Outdoor'],
      rating: 4.7,
      reviews: 156
    },
    {
      name: 'Printer',
      image: printerImg,
      specs: ['Laser & Ink Tank', 'Mono & Color', 'Network Printing', 'Toner & Cartridge Supply'],
      rating: 4.6,
      reviews: 98
    },
    {
      name: 'Computer Parts',
      image: computerPartsImg,
      specs: ['CPUs, RAM, SSDs', 'Motherboards & GPUs', 'PSUs & Cabinets', 'Peripherals & Accessories'],
      rating: 4.9,
      reviews: 203
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-blue-600 dark:text-blue-400">Hardware</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Security and office hardware solutions: biometrics, CCTV, printers, and quality computer parts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2 animate-fade-in-up hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">({product.reviews})</span>
                </div>

                <ul className="space-y-1 mb-6">
                  {product.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-sm text-gray-600 dark:text-gray-300">• {spec}</li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <button onClick={() => handleWhatsAppClick(product.name)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Web & Mobile App Development Section */}
        <div className="mt-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-green-600 dark:text-green-400">Software Development</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We also develop custom web applications and mobile apps according to your specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Application Development */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2 animate-fade-in-up hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Web Applications</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Custom web applications tailored to your business needs - from simple websites to complex business management systems.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                  Business Management Systems
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                  E-commerce Platforms
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                  Custom Dashboards
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                  API Development
                </li> 
              </ul>
            </div>

            {/* Mobile App Development */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2 animate-fade-in-up hover-lift" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mobile Apps</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Native and cross-platform mobile applications for iOS and Android devices with modern UI/UX design.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  iOS & Android Apps
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  Cross-Platform Solutions
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  App Store Deployment
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  Push Notifications
                </li>
              </ul>
            </div>

            {/* Custom Software Solutions */}
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2 animate-fade-in-up hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Tailored software solutions designed specifically for your business processes and requirements.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                  Desktop Applications
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                  Database Design
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                  System Integration
                </li>
                <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                  Process Automation
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Your Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need a simple website, complex web application, or mobile app - we're here to bring your ideas to life with professional development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleWhatsAppClick('Software Development Consultation', true)} 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </button>
              <button 
                onClick={() => handleWhatsAppClick('Software Development Quote', true)} 
                className="border-2 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;