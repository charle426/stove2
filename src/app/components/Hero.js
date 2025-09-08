import Link from 'next/link';
import Image from "next/image";

export default function Hero() {
  return (
    <section>
    <div className="relative bg-gradient-to-br from-[#000080]/5 via-white to-[#006400]/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000080\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#000080]/10 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#006400]/10 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-[#000080]/10 rounded-full opacity-20 animate-pulse delay-500" />

      <div className="relative w-full px-4 sm:px-6 lg:px-20 pt-32 lg:pt-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
          {/* Left Content */}
          <div>
            {/* Main Headline */}
            <h1 className="text-4xl *:flex *:flex-row lg:text-5xl font-bold text-[#006400] mb-6 leading-tight flex flex-col">
             <span>Your Everyday</span>
             <span>Utility Services,</span>
             <span>Simplified.</span>
            </h1>
      </div>


          {/* Right Content - Image/Illustration */}
          <div className="relative lg:left-26 flex justify-center lg:justify-end">
           <Image src="/servicesImage/hero.png" alt="Stove Services" width={600} height={400} className="w-full max-w-[600px]" />
          </div>
        </div>
    </div>
              {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 px-4 sm:px-6 lg:px-20">
              <a 
                href="https://stove.com.ng/register.php" target='_blank'
                className="bg-[#006400] hover:bg-[#006400e1] text-white px-7 py-3 rounded-[60px] text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Order Gas Now
              </a>
              <a
                 href="https://stove.com.ng/register.php" 
                 target='_blank'
                className="border-2 border-[#2b2b2ddc] hover:border-[#006400] text-[#2b2b2ddc] rounded-[60px] hover:text-[#006400] px-7 py-3 text-lg font-semibold transition-all duration-200 hover:bg-gray-50"
                >
                Download Our App
              </a>
            </div>
                </div>
   
    </section>
  );
}