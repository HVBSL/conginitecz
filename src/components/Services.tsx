import { Monitor, Server, Camera, Shield, HardDrive, Printer, Laptop, Network, Settings, X } from 'lucide-react';
import { useState } from 'react';
import laptopServiceImg from '../assets/Laptop-service.jpg';
import serverServiceImg from '../assets/server-services.jpg';
import biometricDevicesImg from '../assets/Biometrics.jpg';
import cctvSecurityImg from '../assets/Camera.jpg';
import networkSetupImg from '../assets/Network-setup.jpg';
import printerServiceImg from '../assets/Printer.jpg';
import dataRecoveryImg from '../assets/data-recovery.jpg';
import amcServicesImg from '../assets/AMC-Sevices.jpg';
interface Service {
  icon: any;
  title: string;
  description: string;
}

interface ServiceDetail {
  emoji: string;
  title: string;
  image: string;
  content: string[];
}

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: Service[] = [
    {
      icon: Laptop,
      title: 'Laptop Sales & Service',
      description: 'All brand laptop sales, repairs, upgrades, and maintenance. Free diagnosis & transparent pricing.',
    },
    {
      icon: Server,
      title: 'Server Sales & Service',
      description: 'Enterprise server solutions, maintenance, and configuration. Custom-built and refurbished options.',
    },
    {
      icon: Shield,
      title: 'Biometric Devices',
      description: 'Fingerprint scanners, face recognition, and access control systems with professional installation.',
    },
    {
      icon: Camera,
      title: 'CCTV & Security',
      description: 'IP cameras, NVR/DVR setup, remote access, and complete surveillance solutions.',
    },
    {
      icon: Network,
      title: 'Network Setup',
      description: 'Office LAN, Wi-Fi optimization, firewall configuration, and structured cabling services.',
    },
    {
      icon: Printer,
      title: 'Printer Sales & Service',
      description: 'All major printer brands, installation, maintenance, and cartridge services.',
    },
    {
      icon: Monitor,
      title: 'Desktop Sales & Service',
      description: 'Custom-built desktops, repairs, upgrades, and comprehensive maintenance services.',
    },
    {
      icon: HardDrive,
      title: 'Data Recovery',
      description: 'Laptop and server data recovery from hardware failures and accidental deletion.',
    },
    {
      icon: Settings,
      title: 'AMC Services',
      description: 'Annual maintenance contracts with priority support and preventive maintenance.',
    }
  ];

  const serviceDetails: Record<string, ServiceDetail> = {
    'Laptop Sales & Service': {
      emoji: '🖥️',
      title: 'Laptop Sales & Service',
      image: laptopServiceImg,
      content: [
        'All Brand Laptop Sales: Dell, HP, Lenovo, Asus, Acer, Apple, and more.',
        'Spare Part Replacement: Battery, screen, keyboard, RAM, SSD, etc.',
        'Motherboard Chip-Level Service: Advanced diagnostics and board-level repairs.',
        'Operating System Installation: Windows, Linux, macOS setup and recovery.',
        'Antivirus Installation & Security Setup: Protection against viruses, malware, and online threats.',
        'Laptop Upgrades: RAM, SSD, HDD, and graphics upgrades for better performance.',
        'Laptop Cleaning & Maintenance: Internal dust cleaning, thermal paste replacement, fan servicing.',
        'Data Backup & Recovery: Secure backup solutions and recovery from accidental deletion or drive failure.',
        'Software Installation & Troubleshooting: Installation of productivity tools, drivers, and troubleshooting software issues.',
        'Refurbished Laptop Sales: Certified pre-owned laptops with warranty.',
        'Free Diagnosis & Quotation: No-cost initial checkup and transparent pricing.'
      ]
    },
    'Server Sales & Service': {
      emoji: '🖥️',
      title: 'Server Sales & Service',
      image: serverServiceImg,
      content: [
        'All Brand Server Sales: Dell, HP, Lenovo, Supermicro, and custom-built servers.',
        'Server Spare Part Replacement: Hard drives, power supplies, RAM, RAID controllers, fans, and more.',
        'Motherboard & Hardware-Level Service: Advanced diagnostics and chip-level repairs.',
        'Server OS Installation & Configuration: Windows Server, Linux, VMware ESXi setup and optimization.',
        'Security & Antivirus Setup: Server-grade antivirus, firewall configuration, and vulnerability hardening.',
        'Server Performance Upgrades: RAM expansion, SSD/HDD upgrades, CPU enhancements, and RAID configuration.',
        'Server Cleaning & Maintenance: Dust removal, thermal paste replacement, fan servicing, and uptime optimization.',
        'Data Backup & Disaster Recovery: Automated backup solutions, RAID recovery, and business continuity planning.',
        'Software & Application Deployment: Installation and configuration of server applications.',
        'Refurbished Server Sales: Certified pre-owned servers with warranty.',
        'Free Diagnosis & Quotation: Initial inspection and transparent pricing.'
      ]
    },
    'Biometric Devices': {
      emoji: '🔐',
      title: 'Biometric Device Sales & Configuration',
      image: biometricDevicesImg,
      content: [
        'All Brand Biometric Device Sales: Fingerprint scanners, face recognition terminals, RFID card readers, and more.',
        'Device Installation & Setup: On-site installation and configuration for attendance and access control.',
        'User Enrollment & Management: Register users and configure access levels.',
        'Software Integration: Integration with HRMS, payroll, and access control platforms.',
        'Security Configuration: Secure authentication protocols and data protection policies.',
        'Troubleshooting & Maintenance: Servicing, firmware updates, and issue resolution.',
        'Free Consultation & Quotation: Expert advice and transparent pricing.'
      ]
    },
    'CCTV & Security': {
      emoji: '📸',
      title: 'Camera Sales & Configuration',
      image: cctvSecurityImg,
      content: [
        'All Brand Camera Sales: CCTV, IP cameras, PTZ cameras, dome cameras, and wireless systems.',
        'Installation & Setup: Professional mounting and configuration for various environments.',
        'NVR/DVR Configuration: Setup and optimization for video storage and playback.',
        'Remote Access Setup: Live viewing and playback via mobile apps and cloud platforms.',
        'Security & Motion Detection Settings: Configure alerts and privacy zones.',
        'Maintenance & Troubleshooting: Servicing, firmware updates, and issue resolution.',
        'Free Site Survey & Quotation: On-site inspection and customized planning.'
      ]
    },
    'Network Setup': {
      emoji: '🖥️',
      title: 'Office Network Setup & Configuration',
      image: networkSetupImg,
      content: [
        'Network Design & Planning: Customized layout for wired and wireless networks.',
        'Router, Switch & Access Point Installation: Seamless connectivity and performance.',
        'Firewall & Security Configuration: Protection against unauthorized access and cyber threats.',
        'Wi-Fi Coverage Optimization: Strong and stable wireless coverage throughout the office.',
        'LAN & WAN Setup: Internal communication and internet access configuration.',
        'Server & Device Integration: Connect servers, printers, biometric devices, cameras, and more.',
        'Troubleshooting & Maintenance: Ongoing support and updates.',
        'Free Site Survey & Quotation: Tailored network solutions with transparent pricing.',
        'Rack Server Installation: Expert setup and configuration of rack-mounted servers.',
        'Structured cabling and power management.',
        'Cooling and airflow optimization.',
        'Server room planning and deployment.'
      ]
    },
    'Printer Sales & Service': {
      emoji: '🖨️',
      title: 'Printer Sales & Service',
      image: printerServiceImg,
      content: [
        'Sales of All Major Printer Brands: Inkjet, laser, multifunction, and thermal printers.',
        'Installation, Configuration & Setup: On-site and remote setup, network configuration.',
        'Troubleshooting & Maintenance: Diagnosis, repair, and regular servicing.',
        'Cartridge Replacement & Refilling: Genuine and compatible cartridges, ink and toner refilling.'
      ]
    },
    'Desktop Sales & Service': {
      emoji: '🖥️',
      title: 'Desktop Sales & Service',
      image: laptopServiceImg, // Using laptop image as placeholder for desktop
      content: [
        'All Brand Desktop Sales: Dell, HP, Lenovo, Asus, Acer, and custom-built systems.',
        'Spare Part Replacement: Power supplies, motherboards, RAM, SSDs, hard drives, graphics cards, fans, and more.',
        'Installation & Configuration: OS setup, driver installation, and essential software configuration.',
        'Maintenance & Troubleshooting: Hardware/software diagnostics, cleaning, and performance tuning.',
        'Free Diagnosis & Quotation: Transparent pricing with no hidden charges.'
      ]
    },
    'Data Recovery': {
      emoji: '🧠',
      title: 'Data Recovery Services',
      image: dataRecoveryImg,
      content: [
        'Laptop Data Recovery: Recovery from accidental deletion, corrupted drives, and hardware failure.',
        'Server Data Recovery: RAID recovery, server crash recovery, and secure data restoration.',
        'Office LAN Cable Services:',
        'LAN Cable Laying: Professional installation of structured LAN cabling for offices, ensuring optimal network performance and minimal interference.',
        'I/O Crimping: Precise crimping and termination of LAN cables with high-quality I/O ports and connectors.',
        'LAN Cable Sales: Supply of high-grade CAT5e, CAT6, and CAT7 LAN cables for various networking needs.'
      ]
    },
    'AMC Services': {
      emoji: '🔧',
      title: 'AMC Services',
      image: amcServicesImg,
      content: [
        'Annual Maintenance Contracts: Comprehensive service agreements for all your IT infrastructure.',
        'Priority Support: Dedicated support team with faster response times.',
        'Preventive Maintenance: Regular checkups and maintenance to prevent issues.',
        'Scheduled Service Visits: Planned maintenance visits to keep systems running smoothly.',
        'Emergency Support: 24/7 emergency support for critical issues.',
        'Cost-Effective Solutions: Predictable monthly costs with comprehensive coverage.'
      ]
    }
  };

  const handleLearnMore = (service: Service) => {
    setSelectedService(serviceDetails[service.title]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to keep your business running smoothly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2 animate-fade-in-up hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-4 sm:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => handleLearnMore(service)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center animate-fade-in-up">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 bg-white dark:bg-slate-700 rounded-xl sm:rounded-2xl px-6 sm:px-8 lg:px-12 py-6 sm:py-8 shadow-lg hover-lift">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">1500+</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Happy Clients</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">2Hr</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Response Time</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2">98%</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto modal-content"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-2xl max-w-7xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden animate-modal-in my-4 sm:my-0 flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-xl sm:text-3xl">{selectedService.emoji}</span>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-1 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row flex-1 min-h-0">
              {/* Mobile: Scrollable container with image and content */}
              <div className="flex flex-col lg:hidden overflow-y-auto flex-1 min-h-0 modal-content">
                {/* Image Section - Mobile */}
                <div className="flex-shrink-0">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title}
                    className="w-full h-64 sm:h-80 object-cover object-center"
                  />
                </div>
                
                {/* Content Section - Mobile */}
                <div className="p-3 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    {selectedService.content.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mt-2"></div>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Call to Action */}
                  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg sm:rounded-xl">
                    <h4 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Ready to Get Started?
                    </h4>
                    <p className="text-sm sm:text-base text-blue-700 dark:text-blue-200 mb-4">
                      Contact us today for a free consultation and transparent pricing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 text-sm sm:text-base">
                        Get Quote
                      </button>
                      <button className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop: Side-by-side layout */}
              <div className="hidden lg:flex lg:w-1/2 lg:h-full flex-shrink-0">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content Section - Desktop */}
              <div className="hidden lg:flex lg:w-1/2 p-6 overflow-y-auto flex-1 min-h-0 modal-content">
              <div >
                <div className="space-y-4">
                  {selectedService.content.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Ready to Get Started?
                  </h4>
                  <p className="text-blue-700 dark:text-blue-200 mb-4">
                    Contact us today for a free consultation and transparent pricing.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-full font-medium transition-all duration-200">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;