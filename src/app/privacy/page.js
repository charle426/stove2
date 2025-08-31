export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#000080]/5 via-white to-[#006400]/5 py-16 px-4 sm:px-6 min-h-[90vh] flex justify-center items-center lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#000080] mb-4">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-gray-600 max-w-3xl">
            At Stove Africa, we are committed to protecting your privacy and ensuring a
            transparent and secure experience. This document outlines how we collect, use,
            and protect your personal information, as well as the terms governing your use
            of our services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Privacy Policy Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#006400] mb-8">Privacy Policy</h2>
          
          <div className="space-y-8">
            {/* 1. Information We Collect */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h3>
              <p className="text-gray-600 mb-4">We collect various types of information to provide and improve our services to you:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><span className="font-medium">Personal Identifiable Information (PII):</span> Name, email address, phone number, physical address, and payment information (e.g., credit card details) when you register for an account, order services, or contact us.</li>
                <li><span className="font-medium">Usage Data:</span> Information about how you access and use our services, including IP address, browser type, operating system, pages visited, and time spent on our app or website.</li>
                <li><span className="font-medium">Location Data:</span> With your consent, we may collect precise location data for gas delivery, waste disposal, and logistics services.</li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>To provide and maintain our services.</li>
                <li>To process transactions and send related notifications.</li>
                <li>To improve, personalize, and expand our services.</li>
                <li>To communicate with you, respond to inquiries, and provide customer support.</li>
                <li>To monitor the usage of our services and detect, prevent, and address technical issues.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>

            {/* 3. Sharing Your Data */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Sharing Your Data</h3>
              <p className="text-gray-600 mb-4">We do not sell your personal data to third parties. We may share your information with:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Service providers who assist us in operating our business (e.g., payment processors, delivery partners).</li>
                <li>Law enforcement or government agencies when required by law to protect our rights.</li>
                <li>Third parties in connection with a merger, acquisition, or asset sale.</li>
              </ul>
            </div>

            {/* 4. Your Data Protection Rights */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Your Data Protection Rights</h3>
              <p className="text-gray-600 mb-4">Depending on your location, you may have the following data protection rights:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>The right to access, update, or delete the information we have on you.</li>
                <li>The right to rectify any inaccurate or incomplete information.</li>
                <li>The right to object to our processing of your personal data.</li>
                <li>The right to withdraw your consent at any time.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Terms of Service Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#006400] mb-8">Terms of Service</h2>
          
          <div className="space-y-8">
            {/* 1. Acceptance of Terms */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-600">By accessing or using the Stove Africa website or mobile application (the "Service"), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree to these Terms, please do not use the Service.</p>
            </div>

            {/* 2. User Accounts */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. User Accounts</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</li>
                <li>You are responsible for safeguarding the password that you use to access the Service.</li>
                <li>You agree not to disclose your password to any third party.</li>
                <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
              </ul>
            </div>

            {/* 3. Service Availability and Modifications */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Service Availability and Modifications</h3>
              <p className="text-gray-600">Stove Africa reserves the right to withdraw or amend our Service, and any service or material we provide on the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.</p>
            </div>

            {/* 4. Prohibited Uses */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Prohibited Uses</h3>
              <p className="text-gray-600 mb-4">You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material.</li>
                <li>To impersonate or attempt to impersonate Stove Africa, a Stove Africa employee, another user, or any other person or entity.</li>
              </ul>
            </div>

            {/* 5. Intellectual Property */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h3>
              <p className="text-gray-600">The Service and its original content, features, and functionality are and will remain the exclusive property of Stove Africa and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Stove Africa.</p>
            </div>
          </div>
        </section>

        {/* General Provisions Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#006400] mb-8">General Provisions</h2>
          
          <div className="space-y-8">
            {/* 1. Changes to This Policy & Terms */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Changes to This Policy & Terms</h3>
              <p className="text-gray-600">We may update our Privacy Policy and Terms of Service from time to time. We will notify you of any changes by posting the new Policy and Terms on this page. You are advised to review these documents periodically for any changes.</p>
            </div>

            {/* 2. Governing Law */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Governing Law</h3>
              <p className="text-gray-600">These Terms shall be governed and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.</p>
            </div>

            {/* 3. Contact Us */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Contact Us</h3>
              <p className="text-gray-600">If you have any questions about this Privacy Policy or Terms of Service, please contact us:</p>
              <p className="text-gray-600">By email: support@stoveafrica.com</p>
              <p className="text-gray-600">By visiting this page on our website: <a href="/contact" className="text-[#006400] hover:underline">Contact Us</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

     

