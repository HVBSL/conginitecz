import { useState } from 'react';
import { Code, Globe, Smartphone, ArrowRight, X } from 'lucide-react';

const Products = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  
  const phoneNumber = "9150351005";
  const message = "Hello! May I know more about the ";

  const handleWhatsAppClick = (title: string, isService = false) => {
    const encodedMessage = encodeURIComponent(message);
    const encodedtitle = encodeURIComponent(isService ? `${title} service` : `${title} product`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}${encodedtitle}`;
    console.log(whatsappUrl);
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      id: 'web',
      title: 'Web Applications',
      icon: Globe,
      iconColor: 'green',
      summary: 'Custom web applications tailored to your business needs - from simple websites to complex business management systems.',
      description: 'Custom web applications tailored to your business needs - from simple websites to complex business management systems.',
      features: [
        'Business Management Systems',
        'E-commerce Platforms',
        'Custom Dashboards',
        'API Development'
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
      icon: Smartphone,
      iconColor: 'blue',
      summary: 'Native and cross-platform mobile applications for iOS and Android devices with modern UI/UX design.',
      description: 'Native and cross-platform mobile applications for iOS and Android devices with modern UI/UX design.',
      features: [
        'iOS & Android Apps',
        'Cross-Platform Solutions',
        'App Store Deployment',
        'Push Notifications'
      ]
    },
    {
      id: 'custom',
      title: 'Custom Solutions',
      icon: Code,
      iconColor: 'purple',
      summary: 'Tailored software solutions designed specifically for your business processes and requirements.',
      description: 'Tailored software solutions designed specifically for your business processes and requirements.',
      features: [
        'Desktop Applications',
        'Database Design',
        'System Integration',
        'Process Automation'
      ]
    }
  ];
  // const products = [
  //   {
  //     name: 'Biometrics',
  //     image: biometricsImg,
  //     specs: ['Fingerprint & Face Access', 'Attendance Systems', 'Cloud & On-Prem', 'Installation & Support'],
  //     rating: 4.8,
  //     reviews: 112
  //   },
  //   {
  //     name: 'CCTV',
  //     image: cctvImg,
  //     specs: ['IP & Analog Cameras', 'NVR/DVR Solutions', 'Remote Monitoring', 'Indoor & Outdoor'],
  //     rating: 4.7,
  //     reviews: 156
  //   },
  //   {
  //     name: 'Printer',
  //     image: printerImg,
  //     specs: ['Laser & Ink Tank', 'Mono & Color', 'Network Printing', 'Toner & Cartridge Supply'],
  //     rating: 4.6,
  //     reviews: 98
  //   },
  //   {
  //     name: 'Computer Parts',
  //     image: computerPartsImg,
  //     specs: ['CPUs, RAM, SSDs', 'Motherboards & GPUs', 'PSUs & Cabinets', 'Peripherals & Accessories'],
  //     rating: 4.9,
  //     reviews: 203
  //   }
  // ];

  const getIconColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hoverBg: string; hoverText: string; arrow: string }> = {
      green: {
        bg: 'bg-green-100 dark:bg-green-900',
        text: 'text-green-600 dark:text-green-400',
        hoverBg: 'group-hover:bg-green-600',
        hoverText: 'group-hover:text-white',
        arrow: 'text-green-600'
      },
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900',
        text: 'text-blue-600 dark:text-blue-400',
        hoverBg: 'group-hover:bg-blue-600',
        hoverText: 'group-hover:text-white',
        arrow: 'text-blue-600'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900',
        text: 'text-purple-600 dark:text-purple-400',
        hoverBg: 'group-hover:bg-purple-600',
        hoverText: 'group-hover:text-white',
        arrow: 'text-purple-600'
      }
    };
    return colors[color] || colors.green;
  };

  const selectedService = services.find(s => s.id === openModal);

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Web & Mobile App Development Section */}
        <div>
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-green-600 dark:text-green-400">Software Development</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We also develop custom web applications and mobile apps according to your specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = getIconColorClasses(service.iconColor);
              
              return (
                <div 
                  key={service.id} 
                  className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2 animate-fade-in-up hover-lift" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.bg} ${colorClasses.text} rounded-full mb-6 ${colorClasses.hoverBg} ${colorClasses.hoverText} transition-colors duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ">
                    {service.summary}
                  </p>
                  <button
                    onClick={() => setOpenModal(service.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                  >
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModal && selectedService && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setOpenModal(null)}
        >
          <div 
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center space-x-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${getIconColorClasses(selectedService.iconColor).bg} ${getIconColorClasses(selectedService.iconColor).text} rounded-full`}>
                  <selectedService.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setOpenModal(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedService.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <ArrowRight className={`h-4 w-4 ${getIconColorClasses(selectedService.iconColor).arrow} mr-2`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Section in Modal */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Ready to Build Your Custom Solution?
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                  Whether you need a simple website, complex web application, or mobile app - we're here to bring your ideas to life with professional development services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      handleWhatsAppClick('Software Development Consultation', true);
                      setOpenModal(null);
                    }}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    Get Free Consultation
                  </button>
                  <button 
                    onClick={() => {
                      handleWhatsAppClick('Software Development Quote', true);
                      setOpenModal(null);
                    }}
                    className="border-2 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;