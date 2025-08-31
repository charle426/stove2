export default function Blog() {
  const posts = [
    { title: "Stove Safety Tips", excerpt: "Keep your kitchen safe with these essential tips.", date: "Aug 2025" },
    { title: "Gas vs Electric vs Induction", excerpt: "Pros and cons to help you choose.", date: "Aug 2025" },
    { title: "Maintenance Checklist", excerpt: "A simple schedule to extend lifespan.", date: "Jul 2025" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resources & Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Guides, tips, and updates from our team.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


