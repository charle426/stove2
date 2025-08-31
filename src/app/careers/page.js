export default function Careers() {
  const openings = [
    { role: "Field Technician", type: "Full-time", location: "On-site", id: 1 },
    { role: "Customer Support", type: "Full-time", location: "Remote", id: 2 },
    { role: "Operations Coordinator", type: "Contract", location: "Hybrid", id: 3 }
  ];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Careers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join a safety-first team committed to excellent service.</p>
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


