import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-blue-50 dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 relative z-40 border-b-2 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 sm:py-3">
          {/* Desktop View - Horizontal Layout */}
          <div className="hidden md:flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              {/* Location */}
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="truncate max-w-xs">No: 10, 881, Elango Salai, Mogappair East, Chennai</span>
              </div>

              {/* Working Hours */}
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Mon-Sat: 10:30 AM - 9:00 PM</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {/* Phone */}
              <a 
                href="tel:+919150351005" 
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>+91 91503 51005</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:conginiteczteam@conginitecz.com" 
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="truncate max-w-xs">conginiteczteam@conginitecz.com</span>
              </a>
            </div>
          </div>

          {/* Mobile View - Stacked Layout */}
          <div className="md:hidden space-y-2">
            {/* Row 1: Location */}
            <div className="flex items-start space-x-2 text-xs text-gray-700 dark:text-gray-300">
              <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <span>No: 10, 881, Elango Salai, Mogappair East, Chennai</span>
            </div>

            {/* Row 2: Working Hours and Contact */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center space-x-2 text-xs text-gray-700 dark:text-gray-300">
                <Clock className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>Mon-Fri: 10:30 AM - 9:00 PM</span>
              </div>

              <div className="flex items-center space-x-3">
                {/* Phone */}
                <a 
                  href="tel:+919150351005" 
                  className="flex items-center space-x-1 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  <span>+91 91503 51005</span>
                </a>

                {/* Email */}
                <a 
                  href="mailto:conginiteczteam@conginitecz.com" 
                  className="flex items-center space-x-1 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  <span className="truncate max-w-[120px]">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

