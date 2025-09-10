export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#000080]/5 via-white to-[#006400]/5 py-16 px-4 sm:px-6 min-h-[90vh] flex justify-center items-center lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#006400] mb-4">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-gray-600 max-w-3xl">
            At Stove Africa, we are committed to protecting your privacy and ensuring a
            transparent and secure experience. This document outlines how we collect, use,
            and protect your personal information, as well as the terms governing your use
            of our services.
          </p>
          <p className="font-bold text-[#000080] mt-5">Effective: 06th September 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Privacy Policy Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#006400] mb-8">Privacy Policy</h2>
          
          <div className="space-y-8">
            {/* 0. Information We Collect */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h3>
              <p className="text-gray-600 mb-4">Stove Africa Limited("we", "our", "us",) values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Stove App. By using our App, you agree to the terms outlined in this policy</p>
             
            </div>
            {/* 1. Information We Collect */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h3>
              <p className="text-gray-600 mb-4">When you use Stove App, we may collect the following information:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><span className="font-medium">Personal Identifiable Information (PII):</span> Full name, email address, phone number, home address, billing address and images.</li>
                <li><span className="font-medium">Location Information:</span> With your consent, we may collect GPS data for gas delivery, waste disposal, and logistics services.</li>
                <li><span className="font-medium">Payment Information:</span> Processed securely via third-party providers(e.g, Paystack, Flutterwave). We do not store your card details.</li>
                <li><span className="font-medium">Usage Data:</span> Device type, app version, and usage patterns for app improvement.</li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h3>
               <p className="text-gray-600 mb-4">We use collected data to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>To verify your identity and contact you when necessary.</li>
                <li>Improve our app performance, security and user experience.</li>
                <li>Send important updates and push notifications about you order and transaction.</li>
                <li>Comply with legal or regulatory obligations.</li>
              </ul>
            </div>
            {/* 2. How We Share your infomation */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. How We Share Your Information</h3>
               <p className="text-gray-600 mb-4">We do not share or rent your data. However we may share your information with:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><span className="font-medium">Delivery Partners/Riders:</span> To fulfill your delivery requests.</li>
                <li><span className="font-medium">Payment Processors:</span> To complete transactions securely.</li>
                <li><span className="font-medium">Regulators or Law Enforcement:</span> If required by law.</li>
                <li><span className="font-medium">Service Providers:</span> For analytics, SMS/Email/WhatsApp notifications, and app hosting.</li>
              </ul>
            </div>

            {/* 3. Sharing Your Data */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Data Security</h3>
              <p className="text-gray-600 mb-4">We implement strict security measures to protect your data, including encrypting, secure servers, and restricted access. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security</p>
      
            </div>

            {/* 5. Your Data Protection Rights */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Your Rights</h3>
              <p className="text-gray-600 mb-4">You have rights to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Access, update, or correct your personal informaion.</li>
                <li>Request deletion of your account and data.</li>
                <li>Opt out of marketing messages.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">To exercise your rights, contact us at info@stove.com.ng</p>

            </div>
            {/* 6. Children Privacy */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Children Privacy</h3>
              <p className="text-gray-600 mb-4">Stove App is not intended for children under 13. we do not knowingly collect data from minors. if you believe a child has provided us with personal data, please <Link href="/contact" className="text-[#006400] hover:underline">contact us</Link> for removal</p>
            </div>
            {/* 7. Cookies and Tracking */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking</h3>
              <p className="text-gray-600 mb-4">Stove App may use cookies, Firebase, or similar tools to improve performance, analytics and user experence. You can manage cookies through your device setting</p>
            </div>
            {/* 8. Cookies and Tracking */}

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">9. Changes to this Privacy Policy</h3>
              <p className="text-gray-600 mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated "Effective Date"</p>
            </div>
            {/* 9.Contact Us */}
        
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">10. Contact Us</h3>
              <p className="text-gray-600">If you have any questions about this Privacy Policy or Terms of Service, please contact us:</p>
              <p className="text-gray-600">By email: support@stoveafrica.com</p>
              <p className="text-gray-600">By visiting this page on our website: <Link href="/contact" className="text-[#000080] hover:underline">Contact Us</Link></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

     

