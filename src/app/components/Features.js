import Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#006400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      image: '/heroImage/Selection (2).png',
      title: "Gasoline Delivery",
      description: "On-demand, reliable gasoline delivery directly to your location, saving you time and hassle.",
      color: "navy",
      link: "/services#installation"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#006400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      image: '/heroImage/Selection (3).png',
      title: "Bill Payments",
      description: "Conveniently pay your utility bills, airtime, and data subscriptions from the comfort of your home.",
      color: "navy",
      link: "/services#repair"
    },
    {
      icon: (
       <svg className="w-6 h-6 text-[#006400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: '/heroImage/Selection (4).png',
      title: "Waste Management",
      description: "Efficient and environmentally friendly waste collection and disposal services for homes and businesses.",
      color: "green",
      link: "/services#emergency"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#006400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: '/heroImage/Selection (5).png',
      title: "Logistics Services",
      description: "Comprehensive safety inspections and gas leak detection to ensure your stove operates safely.",
      color: "navy",
      link: "/services#safety"
    }
  ];

  return (
    <section>
          {/* About Stove */}

            <div className='bg-blue-50 py-16 px-8 lg:px-16'>
              <h2 className='text-2xl font-bold text-center w-full flex justify-center items-center mb-8'>About Stove Africa</h2>
              <div className='flex flex-col lg:flex-row justify-between w-full *:w-full items-center gap-10 lg:gap-20'>
                <div className='max-w-[450px] flex flex-col gap-3'>
                  <p>
                    We envision a future where accessing daily necessities and managing logistics is effortless, empowering communities and fostering growth through innovative solutions. We are dedicated to providing seamless, trustworthy, and affordable services that improve quality of life.
                  </p>
                  <Link 
                href="/about" 
                className="bg-[#006400] w-fit hover:bg-[#006400e1] text-white px-4 py-2 mt-4 rounded-[20px] font-medium text-sm transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                More About Us
              </Link>
                </div>
                <div>
                  <img src="/heroImage/Selection (1).png" alt="About Stove Africa" className="w-full max-w-md flex justify-end lg:float-right h-auto mt-5 lg:mt-0 rounded-2xl shadow-b-lg" />
                </div>
              </div>
            </div>
    <div className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional stove services tailored to meet your needs with expertise and care
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="h-full bg-white transition-shadow flex flex-col">
                <img src={feature.image} alt={feature.title} className="w-full rounded-t-lg h-auto mb-4 group-hover:shadow-b-lg" />
                <div className='flex w-full gap-1 mb-2'>
                  <div className="">{feature.icon}</div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">{feature.title}</h3>
                </div>
                <p className="text-gray-600 flex-grow mb-4 text-xs">{feature.description}</p>
                {/* <Link 
                  href={feature.link} 
                  className="text-[#000080] hover:text-[#006400] font-medium inline-flex items-center group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
      {/* Why Choose Stove? Section */}
      <div className="bg-[#E8F5E9] py-16 px-4 sm:px-6 lg:px-8 my-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Stove?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-[#000080]">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast</h3>
              <p className="text-sm text-gray-600">Swift service ensuring your needs are met promptly.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-[#000080]">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Reliable</h3>
              <p className="text-sm text-gray-600">Consistent and dependable service you can always count on.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-[#000080]">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Affordable</h3>
              <p className="text-sm text-gray-600">Competitive pricing without compromising on quality.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-[#000080]">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure</h3>
              <p className="text-sm text-gray-600">Your transactions and data are protected with top-tier security.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download App Section */}
      <div className="bg-[#E8EAF6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Download the Stove App Today!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience unparalleled convenience. Order gas, pay bills, manage waste, and access deliveries all from your smartphone. Available on both Android and iOS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="bg-[#006400] text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-gray-800 transition-colors">
                  <div>
                    <div className="text-sm font-semibold">Download on Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="/heroImage/Selection (6).png" alt="Stove App Preview" className="w-full max-w-md rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
        </div>
      </section>
  );
}
