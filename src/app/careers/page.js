'use client'
import{ Briefcase, Lightbulb, Recycle, Users, Home } from "lucide-react";
export default function Careers() {
  const openings = [
    { role: "Field Technician", type: "Full-time", location: "On-site", id: 1 },
    { role: "Customer Support", type: "Full-time", location: "On-site", id: 2 },
    { role: "Operations Coordinator", type: "Contract", location: "On-site", id: 3 }
  ];
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-50 to-red-50 pb-20 pt-40">
        <div className='flex flex-col lg:flex-row justify-between items-center px-5 lg:px-16 *:w-full'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Mission: Innovate for a sustainable Future</h1>
          <p className="text-gray-600 max-w-3xl text-sm">At Stove Africa, we believe in empowering our people to
drive change, foster innovation, and contribute to a
greener tomorrow. Discover a dynamic environment
where your ideas matter, your growth is valued, and your
work makes a real impact.</p>
        </div>
        <img src={'/heroImage/careers.png'} width={100} alt={'Careers Image join us'}/>
        </div>
      </section>

        <h2 className="font-bold md:text-4xl text-3xl mt-20 mb-7 w-full mx-auto text-center">Our Culture & Value</h2>
    
        <section style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', display: 'grid' }} className="gap-5 *:py-7 *:px-5 px-5 lg:px-20">
          <div className="flex flex-col items-center gap-4 shadow-lg rounded-lg bg-green-50">
            <Lightbulb className="text-[#006400]" />
            <h4 className="font-semibold text-lg">Innovation & Growth</h4>
            <p className="opacity-80">
              We foster a culture of continuous
              learning and development, encouraging
              bold ideas and providing opportunities to
              grow with us.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 shadow-lg rounded-lg bg-green-50">
            <Recycle className="text-[#006400]" />
            <h4 className="font-semibold text-lg">Sustainable Impact</h4>
            <p className="opacity-80">
              Be part of a team dedicated to creating
              eco-friendly utility solutions and making
              a positive difference in African
              communities.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 shadow-lg rounded-lg bg-green-50">
            <Users className="text-[#006400]" />
            <h4 className="font-semibold text-lg">Inclusive Environment</h4>
            <p className="opacity-80">
              We celebrate diversity and champion an
              inclusive workplace where every voice is
              heard and valued, fostering collaboration
              and respect.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 shadow-lg rounded-lg bg-green-50">
            <Briefcase className="text-[#006400]" />
            <h4 className="font-semibold text-lg">Career development</h4>
            <p className="opacity-80">
              Invest in your future with access to
              mentorship, training programs, and clear
              pathways for career advancement.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 shadow-lg rounded-lg bg-green-50">
            <Home className="text-[#006400]" />
            <h4 className="font-semibold text-lg">Work-Life Balance</h4>
            <p className="opacity-80">
              We support our employees in achieving a
              healthy balance between their
              professional ambitions and personal

              informed and engaged.

              well-being.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 shadow-lg rounded-lg bg-green-50">
            <Home className="text-[#006400]" />
            <h4 className="font-semibold text-lg">Transparent Communication</h4>
            <p className="opacity-80">
              Open and honest dialogue is at the core
              of our operations, ensuring everyone is
              informed and engaged.
            </p>
          </div>
        </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.id} className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-xl p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.role}</h3>
                  <p className="text-gray-600 text-sm">{job.type} • {job.location}</p>
                </div>
                <button className="mt-4 md:mt-0 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold">Apply</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
