import React from 'react';

const Team = () => {
  const team = [
    {
      name: 'Marcus Chen',
      role: 'Lead Technician',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      description: 'Hardware specialist with 10+ years experience in enterprise solutions.'
    },
    {
      name: 'Sarah Williams',
      role: 'Service Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      description: 'Customer service expert ensuring seamless support experiences.'
    },
    {
      name: 'David Rodriguez',
      role: 'Network Specialist',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      description: 'Certified network engineer specializing in security and optimization.'
    },
    {
      name: 'Emily Johnson',
      role: 'System Architect',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      description: 'Server infrastructure expert with cloud computing expertise.'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified team of technology professionals is dedicated to providing exceptional service and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;