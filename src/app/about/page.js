
export default function About() {
  const values = [
    {
      title: "Customer-Centricity",
      description: "We put our users at the heart of everything we do, striving to understand their needs and exceed their expectations with every interection."
    },
    {
      title: "Innovation",
      description: "We continuously seek new and better ways to deliver services, embracing technology to solve complex problems and create value."
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical conduct, building trust with our customers, partners, and employees."
    },
    {
      title: "Community Impact",
      description: "We are dedicated to making a postive difference in the communities we serve,  contributing to local ecnomies and social well-being."
    },
    {
      title: "Excellence",
      description: "We are committed to delivering high-quality services and achieving exceptional results in all aspects of our operations."
    }
  ];

  const team = [
    {
      name: "Mike Ikechukwu",
      role: "Founder & CEO",
      experience: "20+ years",
      bio: "Master technician with a passion for safety and customer service. Founded Stove to bring professional stove services to every home.",
      image: "/aboutImage/team-3.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      experience: "15+ years",
      bio: "Ensures every project runs smoothly and every customer receives the exceptional service they deserve.",
      image: "/aboutImage/team-5.png"
    },
    {
      name: "Zola Dlamini",
      role: "Lead Technician",
      experience: "18+ years",
      bio: "Certified expert in all stove types with specialized training in gas safety and modern induction technology.",
      image: "/aboutImage/Selection (2).png"
    },
    {
      name: "Luke Thompson",
      role: "Customer Experience Lead",
      experience: "12+ years",
      bio: "Dedicated to ensuring every customer has a positive experience from first contact to final service completion.",
      image: "/aboutImage/team-2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 md:py-40 to-blue-100 py-30 ">
        <div className="max-w-7xl flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Stove
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in stove safety and performance for over 15 years.
            We're committed to keeping your kitchen running smoothly and safely.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:px-16 px-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-sm">
                <p>
                  Founded with a vision to revolutionize access to essential
                  services across Africa, Stove Africa began its journey in
                  2023. We recognized the daily challenges individuals and
                  businesses faced in managing their utilities - from fuel
                  procurement to bill payments and waste management.
                  Our founders envisioned a unified, accessible platform
                  that leverages technology to bridge these gaps, fostering
                  convenience and efficiency in everyday life.
                </p>
                <p>
                  From humble beginnings, we've grown into a dynamic
                  team committed to innovation and community impact.
                  Our commitment extends beyond mere transactions; we
                  aim to empower our users, enhance urban living, and
                  contribute positively to the economic development of
                  the continent. Every service we offer is a step towards a
                  more connected and streamlined Africa.
                </p>
              </div>
            </div>
            <div className="">
              <img src="/aboutImage/Selection.png" className='rounded-xl w-full' />
            </div>
          </div>
        </div>
      </section>

      {/*Our Mission Our Values */}
      <section className="bg-gray-50 py-20">
        <div className="flex w-full justify-between max-w-[1100px] items-center md:flex-row flex-row mx-auto px-4 sm:px-6 gap-6 lg:px-8">
              <div className="max-w-[500px]">
                <h3 className="text-[1.5rem] font-bold text-[#006400] mb-4 ">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide reliable, accessibe,and innovative
                  utility services that simplify daily life for every individual and business
                  in Africa, fostering convenience, growth, and sustainable community development.
                </p>
              </div>
              <div className="max-w-[500px]">
                <h3 className="text-[1.5rem] font-bold text-[#000080] mb-4">
                  Our vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading digital platform for integrated utility solutions across Affica,
                  recognized for our seamless service delivery, technological excellence, and profound positive impact on society
                </p>
              </div>
        </div>
      </section>
      {/* Our Core Value */}
      <section className="flex flex-col gap-7 items-center px-2 lg:px-16 py-10">
        <h2 className="text-[#006400] font-bold text-xl">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {values.map((value, index) => (
              <div key={index} className="px-5 py-1 border-l-3 odd:border-[#006400] bg-white hover:border-3 transition-[0.5s] ease-in rounded-3xl">
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
      </section>
      

      {/* Team */}
      <section className="py-20 bg-blue-100 flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1000px]  justify-center">
            {team.map((member, index) => (
              <div key={index} className="text-center flex-col flex gap-2 rounded-t-md border-b-3 py-2 px-4 max-w-[200px] border-[#006400] bg-white">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <img src={member.image} width='100%'/>
                </div>
                <h3 className="text-md font-semibold text-gray-700">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium text-xs">
                  {member.role}
                </p>
                {/* <p className="text-gray-500 text-xs">
                  {member.experience} experience
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}

      {/* CTA Section */}
      <section className="py-20 bg-green-50 md:px-16 ">
        <div className="flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-">
          <div className="rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Work with Us?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Experience the Stove difference. Contact us today for professional,
              reliable stove services you can trust.
            </p>
            <div className="flex flex-col gap-4">
              <button className="bg-[#000080] hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-50">
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <img src="/aboutImage/bizwomen.png"/>
          </div>
        </div>
      </section>

    </div>
  );
}
