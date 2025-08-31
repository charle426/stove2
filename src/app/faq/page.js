        'use client';

'use client';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-gray-800">{question}</span>
        <ChevronDown
          className={`text-[#006400] transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

function FAQSection({ title, questions, openQuestion, setOpenQuestion }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-2">
        {questions.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openQuestion === `${title}-${index}`}
            onClick={() => setOpenQuestion(openQuestion === `${title}-${index}` ? '' : `${title}-${index}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState('');

  const faqData = {
    'General Services': [
      {
        question: "What services does Stove Africa provide?",
        answer: "Stove Africa provides comprehensive gas delivery, stove maintenance, repair services, waste disposal solutions, and eco-friendly energy solutions. We offer both residential and commercial services with a focus on safety, reliability, and environmental sustainability."
      },
      {
        question: "How do I get started with Stove Africa?",
        answer: "Getting started is easy! Simply download our mobile app from the App Store or Google Play Store, create an account, and you can immediately start ordering gas, scheduling maintenance, or requesting our services. You can also contact our support team for assistance with registration."
      },
      {
        question: "Is Stove Africa available in my area?",
        answer: "Stove Africa currently operates in major cities across Kenya with plans for expansion. You can check service availability in your area by entering your location in our app or website, or by contacting our customer service team."
      },
      {
        question: "What makes Stove Africa different from other utility providers?",
        answer: "We stand out through our integrated digital platform, commitment to environmental sustainability, reliable service delivery, competitive pricing, and professional technicians. Our app provides real-time tracking, easy payments, and 24/7 customer support."
      }
    ],
    'Billing & Payments': [
      {
        question: "What payment methods are accepted?",
        answer: "We accept various payment methods including M-Pesa, credit/debit cards, bank transfers, and in-app payments. All transactions are secure and you'll receive instant confirmation of your payment."
      },
      {
        question: "How can I view my past bills and payment history?",
        answer: "You can easily access your complete billing and payment history through our mobile app or website. Simply log in to your account and navigate to the 'Billing History' section to view or download your past transactions."
      },
      {
        question: "What if I have an issue with a payment?",
        answer: "If you experience any payment issues, please contact our support team immediately. We'll help resolve any problems with transactions, refunds, or billing discrepancies within 24-48 hours."
      }
    ],
    'Technical Support & App Usage': [
      {
        question: "I'm having trouble logging into my account. What should I do?",
        answer: "First, ensure you're using the correct email and password. You can reset your password using the 'Forgot Password' link. If issues persist, clear your app cache or try accessing through our website. Our support team is available 24/7 for assistance."
      },
      {
        question: "How do I update my personal information in the app?",
        answer: "Log into your account, go to 'Profile Settings', and you can update your personal information, delivery address, and contact details. Make sure to save your changes before exiting."
      },
      {
        question: "My app is crashing or not responding. What steps can I take?",
        answer: "Try closing and reopening the app, check for updates in your device's app store, or clear the app cache. If problems continue, uninstall and reinstall the app. Contact our technical support if you need further assistance."
      }
    ],
    'Environmental Impact & Sustainability': [
      {
        question: "How does Stove Africa contribute to environmental sustainability?",
        answer: "We implement eco-friendly practices through efficient gas delivery routes, waste recycling programs, and promoting energy-efficient appliances. Our commitment includes reducing carbon emissions, proper waste disposal, and community environmental education."
      },
      {
        question: "Are your gas products environmentally friendly?",
        answer: "Yes, we supply high-quality LPG gas which is one of the cleanest-burning fossil fuels. Our cylinders are regularly inspected and maintained to prevent leaks, and we offer trade-ins for old cylinders to ensure proper recycling."
      }
    ]
  };

  return (
    <section>
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#000080]/5 min-h-[90vh] flex items-center justify-center via-white to-[#006400]/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Stove Africa's services, billing,
            support, and environmental commitments.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {Object.entries(faqData).map(([category, questions]) => (
          <FAQSection
            key={category}
            title={category}
            questions={questions}
            openQuestion={openQuestion}
            setOpenQuestion={setOpenQuestion}
          />
        ))}

        {/* Still have questions? */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            If you couldn't find the answers you were looking for, our support team is ready to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#006400] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#005500] transition-colors"
          >
            Contact Our Support
          </a>
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-white">
      {/* Common Issues Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Common Stove Issues
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about common problems and when to call a professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gas Leaks</h3>
              <p className="text-gray-600 text-sm">
                If you smell gas or hear a hissing sound, turn off the gas supply immediately and call us. 
                This is a safety emergency that requires immediate attention.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Uneven Heating</h3>
              <p className="text-gray-600 text-sm">
                This often indicates worn burners or electrical issues. Regular maintenance can prevent 
                this problem and ensure consistent cooking performance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ignition Problems</h3>
              <p className="text-gray-600 text-sm">
                Difficulty lighting burners can be caused by dirty igniters, gas flow issues, or electrical problems. 
                We can diagnose and fix these issues quickly.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Temperature Control</h3>
              <p className="text-gray-600 text-sm">
                Inconsistent temperatures can affect cooking results. This may be due to faulty thermostats, 
                sensor issues, or calibration problems that we can resolve.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cleaning & Maintenance</h3>
              <p className="text-gray-600 text-sm">
                Regular cleaning and maintenance prevent most common issues and extend your stove's lifespan. 
                Our maintenance plans keep your stove running efficiently.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h12a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2m6 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m6 0v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Installation Issues</h3>
              <p className="text-gray-600 text-sm">
                Proper installation is crucial for safety and performance. Our certified technicians ensure 
                your stove is installed correctly and meets all safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized assistance with your stove needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={'/contact'}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl text-lg font-semibold transition-colors duration-200">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
    </section>
  );
}

 
