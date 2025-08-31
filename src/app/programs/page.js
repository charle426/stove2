
export default function Programs() {
  const programs = [
    {
      title: "Education & Literacy",
      subtitle: 'Future Leaders Scholarship Program',
      description: "Supporting bright young minds in underserved communities by providing scholarships and educational resources.",
      image: '/programsImage/Selection (1).png'
    },
    {
      title: "Environmental Sustainability",
      subtitle: 'Green Africa Initiative',
      description: "Promoting ecological balance through tree planting campaigns waste reduction education, and sustainable",
      image: '/programsImage/Selection (2).png'
    },
    {
      title: "Community Health",
      subtitle: 'Healthy Homes Project',
      description:'Providing access to clean water, sanitation facilities, and basic health education to improve well being',
     image: '/programsImage/Selection (3).png'
    },
    {
      title: 'Digital Empowerment',
      subtitle: "Tech for All Program",
      description:'Bridging the digital divide by offering free computer literacy courses and internet access, enabling communties',
     image: '/programsImage/Selection (4).png'
    },
    {
      title: "Economic Empowerment",
      subtitle: 'Local Business Growth Accelerator',
      description:'Supporting small and medium-size enterprises with training, mentorship and micro-financing to boost local',
     image: '/programsImage/Selection (5).png'
    },
    {
      title: "Clean Energy Solutions",
      subtitle: 'Sustainable Energy Solutions',
      description:'Introducing affordable and clean cooking solutions and solar energy systems to households',
     image: '/programsImage/Selection (6).png'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-20 lg:pt-30 min-h-[90vh] flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#006400] mb-6">
            Our Impactful Community Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Stove Africa, we believe in giving back to the communities we serve,
            Explore our initiatives focused on education, environmental sustainablilty,
            and economic empowerment, driving positive change across Africa.
          </p>
          <div>
            <img src="/programsImage/Selection.png" className='w-full rounded-md mt-10 mx-auto max-w-3xl' />
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006400] mb-10 w-full text-center">Explore Our initiatives</h2>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className='relative space-y-2 overflow-hidden bg-white rounded-t-2xl group transition-all duration-300 hover:-translate-y-2'
              >
                <div>
                  <img src={program.image} className="group-hover:scale-105 duration-300 transition-all"/>
                </div>
                <div className="space-y-2 px-3">
                  <h3 className="w-full text-center rounded-[50px] py-1 text-white bg-[#000080] font-medium">{program.title}</h3>
                  <h4 className="font-semibold text-md">{program.subtitle}</h4>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed Technicians</h3>
              <p className="text-gray-600">All work performed by certified professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Emergency assistance whenever you need it</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Warranty Coverage</h3>
              <p className="text-gray-600">All services backed by our guarantee</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Your satisfaction is our top priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
