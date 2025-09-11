'use client'
import Link from 'next/link'
import Image from "next/image";

export default function Services() {
  const services = [
    {
      image: '/servicesImage/Selection.png',
      title: "Gasoline Delivery",
      description: "Never run out of cooking gas again. Order LPG, petrol, diesel, or CNG from your phone and get it delivered straight to your doorstep.",
      features: [
        "Safe & reliable refills",
        "Fast delivery within minutes",
        "Verified suppliers for trusted service",
      ],
      cta: "Order Gas Now"
    },
    {
      image: '/servicesImage/Selection (1).png',
      title: "Bill Payment",
      description: "Pay bills in seconds, Electrity, water, internet, TV subscribtions all in one secure app.",
      features: [
        "Instant confirmation",
        "Easy cashless payment",
        "Available 24/7",
      ],
      cta: "Pay Your Bills"
    },
    {
      image: '/servicesImage/Selection (2).png',
      title: "Waste Disposal",
      description: "Cleaner cities, healthier living. Book on-demand or schedule waste collection right from your phone.",
      features: [
        "Eco-friendly disposal methods",
        "Reliable collection network",
        "Recycling and Reuseables",
      ],
      cta: "Book Waste Pickup"
    },
    {
      image: '/servicesImage/Selection (3).png',
      title: "Logistics & Shipping",
      description: "Move anything, anywhere, From local deliveries to interstate cargo and even air shipping, Stove Africa makes logistics seamless.",
      features: [
        "Door-to-door delivery",
        "Transparent pricing",
        "Secure & fast shipping",
      ],
      cta: 'Send a Package'
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: "bg-orange-50 text-orange-600 border-orange-200",
      red: "bg-red-50 text-red-600 border-red-200",
      green: "bg-green-50 text-green-600 border-green-200",
      yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      indigo: "bg-indigo-50 text-indigo-600 border-indigo-200"
    };
    return colors[color] || colors.orange;
  };

  return (
    <div className=" bg-white">
      
      {/* Hero Section */}
      <section className="bg-blue-50 pb-20 md:pt-30 pt-30 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Utility Services, Unified For You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            At Stove Africa, we simplify everyday living by bringing essential services into one smart platform. Whether its energy, payments, waste, or logistics, we've got you covered.
          </p>
        </div>
  <Image src="/heroImage/hero.png" alt="Stove Services" width={700} height={400} className="w-full h-auto max-w-[700px]" />
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-full rounded-xl ${getColorClasses(service.color)} flex items-center justify-center mb-6`}>
                  <Image src={service.image} alt="Service" width={400} height={300} className="w-full" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold px-2 text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-xs px-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 text-xs px-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                  <div className='my-6 flex justify-end'>
 <a 
                href="https://stove.com.ng/register.php" target='_blank'
                className="bg-[#006400] hover:bg-[#006400e1] mr-5 text-white px-4 py-2 rounded-[60px] text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {service.cta}
              </a>
                  </div>
                  
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-md mx-auto">
           Join millions of users experience the convenience of everyday lifestyle utility services. Download app and Signup now
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href='/contact'>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
