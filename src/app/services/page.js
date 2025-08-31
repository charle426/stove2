
import Link from 'next/link'
export default function Services() {
  const services = [
    {
      image: '/servicesImage/Selection.png',
      title: "Gasoline Delivery",
      description: "Never run out of fuel again. Order gasoline directly to your location quickly and safely, whenever you need it.",
      features: [
        "Convenient doorstep delivery",
        "24/7 availability",
        "Competitive pricing",
        "Safe and secure handling",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h12a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2m6 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m6 0v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
        </svg>
      ),
      color: "orange"
    },
    {
      image: '/servicesImage/Selection (1).png',
      title: "Bill Payment",
      description: "Simplify your life by paying all your utility bills, airtime, data subscriptions instantly and securely through our platform.",
      features: [
        "One-stop bill payment",
        "Instant transaction confirmation",
        "Secure payment gateway",
        "Reminders for due dates",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "red"
    },
    {
      image: '/servicesImage/Selection (2).png',
      title: "Waste Disposal",
      description: "Efficient and eco-friendly waste collection services designed to keep your environment clean and healthy. Schedule pickups with ease.",
      features: [
        "24/7 availability",
        "Same-day response",
        "Emergency diagnostics",
        "Quick fixes",
        "Safety first approach"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "green"
    },
    {
      image: '/servicesImage/Selection (3).png',
      title: "Courier Services",
      description: "Reliable and fast delivery for packages and documents. From small parcels to critical documents, we ensure secure and timely transport.",
      features: [
        "Gas leak detection",
        "Carbon monoxide testing",
        "Ventilation assessment",
        "Safety compliance check",
        "Detailed inspection report"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "yellow"
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
      <section className="bg-blue-50 pb-20 pt-40 md:h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Stove Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive stove services to keep your kitchen running smoothly. 
            From installation to emergency repairs, we've got you covered.
          </p>
        </div>
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
                  <img src={service.image} w-full/>
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
            Don't let stove problems disrupt your kitchen. Contact us today for professional service.
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
