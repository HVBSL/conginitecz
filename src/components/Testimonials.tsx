import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const testimonials = [
    {
      name: 'Ramakrishnan',
      company: 'TechStart Inc.',
      text: 'Fantastic service! My computer runs faster than ever. The team was professional and completed the repair in record time.',
      rating: 5
    },
    {
      name: 'Kiran Kumar',
      company: 'DataFlow Solutions',
      text: 'Reliable and quick tech support. They solved our server issue in no time and prevented major downtime.',
      rating: 5
    },
    {
      name: 'Santhosh Kumar',
      company: 'Creative Studio',
      text: 'Great value for money. The team is knowledgeable, friendly, and always available when we need support.',
      rating: 5
    },
    {
      name: 'Suresh Kumar',
      company: 'Legal Associates',
      text: 'They saved our business with their prompt and effective IT solutions. Highly recommend for any tech needs.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      company: 'Medical Practice',
      text: 'The best computer sales and service we\'ve experienced. Professional, reliable, and reasonably priced.',
      rating: 5
    },
    {
      name: 'Vijay Kumar',
      company: 'Consulting Group',
      text: 'Top-tier support for all our tech needs. Their expertise has been invaluable to our business operations.',
      rating: 5
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-white dark:bg-slate-800 transition-colors duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our <span className="text-blue-600 dark:text-blue-400">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-gray-50 dark:bg-slate-700 rounded-2xl p-8 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                <div className="text-blue-600 dark:text-blue-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;