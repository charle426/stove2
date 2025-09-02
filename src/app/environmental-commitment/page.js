import { Leaf, Recycle, Sprout } from "lucide-react";
import Link from "next/link";

export default function EnvironmentalCommitment() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-blue-50 py-30 lg:py-40 flex justify-center items-center" style={{ backgroundImage: "url('/envCommImage/Selection.png')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey Towards a Greener Africa</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">At Stove Africa, our commitment to sustainability drives every decision. We
            believe in powering communities responsibly, protecting our planet for future
            generations, and pioneering eco-friendly utility solutions.</p>
        </div>
      </section>

      <section className="md:px-16 px-2 my-16">
        <h2 className="font-bold text-2xl md:text-3xl w-full text-center mb-10">Our Core Environmental Initiatives</h2>
        <div className="space-y-20">
          <div className="flex flex-col md:flex-row gap- w-full items-center justify-between">
            <div className="w-full">
              <img src="/envCommImage/Selection (1).png" className='w-full rounded-md max-w-[500px]' />
            </div>
            <div className="w-full max-w-[600px]">
              <h3 className="text-xl md:text-2xl font-semibold mb-5">Sustainable Sourcing & Operations</h3>
              <p>
                We meticulously select suppliers who share our commitment to
                environmental responsibility, opting for locally sourced
                materials whenever possible to reduce our carbon footprint.
                Our operational processes are optimized for energy efficiency,
                from our facilities to our delivery routes, ensuring every step
                minimizes waste and maximizes green impact.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse gap-8 w-full items-center justify-between">
            <div className="w-full flex lg:justify-end justify-center">
              <img src="/envCommImage/Selection (2).png" className='w-full rounded-md max-w-[500px]' />
            </div>
            <div className="w-full max-w-[600px]">
              <h3 className="text-xl md:text-2xl font-semibold mb-5">Waste Reduction & Recycling
                Programs</h3>
              <p>
                Stove Africa is dedicated to minimizing waste across all service
                lines. Our waste disposal service emphasizes recycling and
                disposal service emp
                responsible waste management, diverting materials from
                resperistole we
                e management,
                landfills. We also implement
                also implement robust internal recycling programs
                and strive for a paperless operation to further reduce our
                ecological impact.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-between">
            <div className="w-full flex">
              <img src="/envCommImage/Selection (3).png" className='w-full rounded-md max-w-[500px]' />
            </div>
            <div className="w-full max-w-[600px]">
              <h3 className="text-xl md:text-2xl font-semibold mb-5">Community & Eco-Education
                Initiatives</h3>
              <p>
                Beyond our core services, Stove Africa invests in community
                education on sustainable living practices. We organize
                workshops on energy conservation, responsible waste
                management, and the benefits of eco-friendly utilities, fostering
                a culture of environmental consciousness within the
                communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tangible Impact */}
      <section className="md:px-16 px-2 my-16 bg-[#00000006] py-10">
        <h2 className="font-bold text-2xl md:text-3xl w-full text-center mb-10">Making a Tangible Impact</h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center pb-10">
          {/* Waste Recycled */}
          <div className="bg-white rounded-xl shadow-sm flex-1 min-w-[220px] max-w-xs flex flex-col items-center py-8 px-4 mx-2">
            <Recycle className="w-10 h-10 mb-3 text-[#009944]"/>
            <div className="text-3xl font-extrabold text-[#009944] mb-1">30,000+</div>
            <div className="text-gray-600 text-center text-base">Waste Recycled (kg)</div>
          </div>
          {/* Community Members Educated */}
          <div className="bg-white rounded-xl shadow-sm flex-1 min-w-[220px] max-w-xs flex flex-col items-center py-8 px-4 mx-2">
            <Leaf className="w-10 h-10 mb-3 text-[#009944]"/>
            <div className="text-3xl font-extrabold text-[#009944] mb-1">4,000+</div>
            <div className="text-gray-600 text-center text-base">Community Members Educated</div>
          </div>
          {/* Carbon Footprint Reduction */}
          <div className="bg-white rounded-xl shadow-sm flex-1 min-w-[220px] max-w-xs flex flex-col items-center py-8 px-4 mx-2">
            <Sprout className="w-10 h-10 mb-3 text-[#009944]"/>
            <div className="text-3xl font-extrabold text-[#009944] mb-1">15%</div>
            <div className="text-gray-600 text-center text-base">Carbon Footprint Reduction</div>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-16 px-2 my-16">
        <div className="flex flex-col md:flex-row gap-8 w-full mb-10 items-center justify-between">
          <div className="w-full flex">
            <img src="/envCommImage/Selection (4).png" className='w-full rounded-md max-w-[500px]' />
          </div>
          <div className="w-full max-w-[600px]">
            <h3 className="text-xl md:text-2xl font-semibold mb-5">Investing in a Sustainable Future</h3>
            <p className="mb-5">
              Stove Africa actively participates in and sponsors local
              community programs focused on environmental conservation
              and sustainable development. We collaborate with NGOs and
              local authorities to implement tree-planting campaigns, river
              clean-ups, and provide resources for eco-conscious
              entrepreneurship.
            </p>
            <p>
              Our vision extends to the future, where we continuously
              le Tuture, where w
              innovate to bring even more sustainable technologies and
              practices into every African home and business. We are
              committed to leading by example, proving that economic
              growth and environmental stewardship can go hand-in-hand.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Practices</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Responsible disposal of old appliances and parts</li>
              <li>Recycling packaging and materials</li>
              <li>Recommending energy-efficient appliances</li>
              <li>Optimized routing to lower emissions</li>
            </ul>
          </div>
        </div>
      </section>


      <section className="md:px-16 px-2 my-16">
        <div className="bg-[#006400] rounded-2xl sm:py-12 py-8 flex flex-col items-center justify-center text-white w-full">

          <h3 className="text-xl md:text-3xl font-semibold mb-5">Join Us in Building a Sustainable Tomorrow</h3>
          <p className="max-w-[700px] text-center mb-6">
            Your choices make a difference. Partner with Stove Africa and contribute to
            a healthier planet while enjoying reliable, eco-conscious utility services.
          </p>
          <Link href={'/contact'} className="bg-white text-black px-4 py-2 rounded-lg hover:bg[#006400] hover:text-white">
              Contact Our Team
          </Link>
        </div>
      </section>

    </div>
  );
}


