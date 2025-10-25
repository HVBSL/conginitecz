import { Star } from 'lucide-react';
import biometricsImg from '../assets/Biometrics.jpg';
import cctvImg from '../assets/Camera.jpg';
import printerImg from '../assets/Printer.jpg';
import computerPartsImg from '../assets/ComputerParts.jpg';

const Products = () => {
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
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;