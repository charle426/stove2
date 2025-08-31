
export default function Pricing() {
  const services = [
    {
      category: "Installation Services",
      items: [
        { service: "Gas Stove Installation", price: "$299", description: "Includes gas line connection, testing, and safety certification" },
        { service: "Electric Stove Installation", price: "$199", description: "Electrical connection, testing, and safety checks" },
        { service: "Induction Stove Installation", price: "$349", description: "Advanced installation with electrical upgrades if needed" },
        { service: "Stove Removal & Disposal", price: "$99", description: "Safe removal and eco-friendly disposal of old units" }
      ]
    },
    {
      category: "Repair Services",
      items: [
        { service: "Diagnostic Service Call", price: "$89", description: "Professional assessment of stove issues" },
        { service: "Burner Replacement", price: "$79-149", description: "Varies by burner type and complexity" },
        { service: "Igniter Repair", price: "$69-129", description: "Fix ignition problems for gas stoves" },
        { service: "Thermostat Repair", price: "$119-199", description: "Temperature control system repair" },
        { service: "Gas Valve Replacement", price: "$149-249", description: "Critical safety component replacement" },
        { service: "Electrical Component Repair", price: "$99-179", description: "Wiring and electrical system fixes" }
      ]
    },
    {
      category: "Maintenance Services",
      items: [
        { service: "Basic Cleaning & Tune-up", price: "$129", description: "Deep cleaning and basic maintenance" },
        { service: "Comprehensive Maintenance", price: "$199", description: "Full service including parts inspection" },
        { service: "Safety Inspection", price: "$79", description: "Gas leak detection and safety assessment" },
        { service: "Performance Optimization", price: "$149", description: "Calibration and efficiency improvements" }
      ]
    },
    {
      category: "Emergency Services",
      items: [
        { service: "Emergency Service Call", price: "$199", description: "24/7 urgent repair service" },
        { service: "Gas Leak Emergency", price: "$299", description: "Immediate safety response and repair" },
        { service: "Weekend/Holiday Service", price: "+$100", description: "Additional fee for off-hours service" }
      ]
    }
  ];

  const packages = [
    {
      name: "Basic Maintenance Package",
      price: "$299",
      period: "/year",
      description: "Essential maintenance for residential stoves",
      features: [
        "2 safety inspections per year",
        "Basic cleaning and tune-up",
        "Priority scheduling",
        "10% discount on repairs",
        "Emergency hotline access"
      ],
      popular: false
    },
    {
      name: "Premium Care Package",
      price: "$599",
      period: "/year",
      description: "Comprehensive care for busy kitchens",
      features: [
        "4 safety inspections per year",
        "Full cleaning and maintenance",
        "Priority emergency service",
        "20% discount on all services",
        "Parts replacement coverage",
        "Annual performance optimization",
        "24/7 dedicated support"
      ],
      popular: true
    },
    {
      name: "Commercial Package",
      price: "$999",
      period: "/year",
      description: "Complete solution for restaurants and businesses",
      features: [
        "Monthly safety inspections",
        "Professional cleaning service",
        "Immediate emergency response",
        "30% discount on all services",
        "Full parts and labor coverage",
        "Performance monitoring",
        "Compliance documentation",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for all our stove services. Get professional service 
            at competitive rates with no hidden fees.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect maintenance package for your needs and save on regular services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular 
                    ? 'border-red-500 shadow-lg scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="text-center">
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    pkg.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Individual Service Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed pricing for specific services. All prices include parts and labor unless otherwise noted.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {item.service}
                        </h4>
                        <span className="text-2xl font-bold text-orange-600">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">All necessary parts and materials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Professional labor and expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Safety testing and certification</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Warranty coverage on all work</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Clean-up and site restoration</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Payment Options
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-gray-700">Cash, check, or credit card</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-gray-700">Financing available for large projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-gray-700">Payment plans for service packages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-gray-700">Invoices provided for all services</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">
                  Get a Free Quote
                </h3>
                <p className="text-orange-700 text-sm mb-4">
                  Contact us for a personalized quote based on your specific needs and location.
                </p>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                  Request Quote
                </button>
              </div>
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
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a detailed quote and professional stove service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
