import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative group p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-110"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-500 ease-in-out ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-0'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-500 ease-in-out ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0'
          }`} 
        />
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
      
      {/* Tooltip */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800 dark:border-l-gray-200"></div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
