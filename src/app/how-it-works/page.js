
import { CreditCard, Download, ShoppingCart, Truck, UserPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HowItWorks() {
  const how = [
   {
      number: "03",
      title: "Professional Assessment",
      description: "Our certified technician will diagnose the issue and provide you with a detailed explanation and quote.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Service Execution",
      description: "We'll complete the work efficiently and safely, using quality parts and following all safety protocols.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Testing & Safety Check",
      description: "We thoroughly test your stove to ensure it's working perfectly and meets all safety standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: "06",
      answer: "Follow-up & Support",
      description: "We provide ongoing support and follow up to ensure your complete satisfaction with our service.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const serviceTypes = [
    {
      type: "Installation",
      description: "Professional installation of new stoves with proper safety checks and testing.",
      timeline: "2-4 hours",
      includes: [
        "Site preparation and assessment",
        "Gas line or electrical connection",
        "Safety testing and certification",
        "Clean-up and site restoration"
      ]
    },
    {
      type: "Repair",
      description: "Expert diagnosis and repair of stove issues using quality parts and professional techniques.",
      timeline: "1-3 hours",
      includes: [
        "Problem diagnosis",
        "Parts replacement if needed",
        "Testing and calibration",
        "Safety verification"
      ]
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Download App",
      description: "Get the Stove Africa app on your smartphone, available for both Android and iOS devices. Simple, quick, and free to get started.",
      icon: (
        <Download/>
      )
    },
    {
      number: "02",
      title: "Sign Up",
      description: "Create your secure account in minutes. Provide basic details and set up your preferences to personalize your experience.",
      icon: (
        <UserPlus/>
      )
    },
    {
      number: "03",
      title: "Order",
      description: "Browse our range of utility services. Select what you need, specify your location, and confirm your request with a few taps.",
      icon: (
        <ShoppingCart/>
      )
    },
    {
      number: "04",
      title: "Get Delivered",
      description: "Relax as we process your order. Our reliable team will ensure timely and efficient delivery or service provision to your doorstep.",
      icon: (
        <Truck/>
      )
    },
    {
      number: "05",
      title: "Pay",
      description: "Complete your transaction securely within the app using various payment methods, including mobile money and card payments.",
      icon: (
        <CreditCard/>
      )
    }
  ];

  return (
    <section>

    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 to-white lg:pt-40 pt-30 flex justify-center items-center pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              How It <span className="text-green-600">Works</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Simple, transparent process for all your stove service needs
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our 6-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial contact to final follow-up, we make the entire process smooth and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 not-first:*:border-t-3 md:not-[2]:*:border-t-3 gap-x-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8  border-gray-200 hover: transition-shadow duration-300">
                <div className="flex flex-col mb-6">
                  <div className=" flex items-center gap-2 text-2xl text-green-600">
                    {step.icon}
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <div className="ml-">
                    <p className="mt-1 text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to get started?
                  <span className="block text-xl mt-2 font-normal">Contact us today.</span>
                </h2>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-white">
      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Types & Timelines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different services have different timelines. Here's what to expect for each type of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.type}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {service.timeline}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {service.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Stove?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">All work meets the highest safety standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Emergency service when you need it most</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Warranty Guaranteed</h3>
              <p className="text-gray-600">All work backed by our guarantee</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Licensed and certified technicians</p>
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
            Experience our streamlined process and professional service today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Schedule Service
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
    </section>

    
  );
  
}
