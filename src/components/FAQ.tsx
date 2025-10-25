import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, isVisible] = useScrollAnimation();

  const faqs = [
    {
      question: 'What computer issues do you fix?',
      answer: 'We offer comprehensive support for desktops, laptops, and servers, including hardware diagnostics, software troubleshooting, virus removal, data recovery, and performance optimization.'
    },
    {
      question: 'What services do you offer?',
      answer: 'Our services include computer repair, server management, network setup, virus removal, data recovery, IT consulting, and hardware sales. We also provide ongoing maintenance contracts.'
    },
    {
      question: 'Do you offer on-site support?',
      answer: 'Yes, we provide on-site support for businesses and individuals within the metropolitan area. We also offer remote support for many issues to provide faster resolution.'
    },
    {
      question: 'What\'s your response time?',
      answer: 'Our typical response time for urgent issues is under 2 hours. For non-urgent matters, we respond within 24 hours. Emergency support is available 24/7 for critical business systems.'
    },
    {
      question: 'What operating systems do you support?',
      answer: 'We support all major operating systems including Windows (all versions), macOS, Linux distributions, and various server operating systems. Our team is certified in multiple platforms.'
    },
    {
      question: 'Do you offer warranties on repairs?',
      answer: 'Yes, all our repairs come with a comprehensive warranty. Hardware replacements include manufacturer warranties, and our service work is guaranteed for 90 days.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className={`py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our services and support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`bg-white dark:bg-slate-700 rounded-2xl shadow-lg overflow-hidden hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;