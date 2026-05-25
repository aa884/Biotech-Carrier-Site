import React from "react";

export default function App() {
  const careers = [
    {
      title: "Bioinformatics",
      skills: ["Python", "NGS Analysis", "R Programming"],
      tools: ["BLAST", "Bioconductor", "Galaxy"],
      salary: "₹5–18 LPA",
      description:
        "Analyze biological data using computational tools and genomic databases.",
    },
    {
      title: "Synthetic Biology",
      skills: ["Genetic Engineering", "CRISPR", "Lab Techniques"],
      tools: ["Benchling", "SnapGene", "Geneious"],
      salary: "₹6–20 LPA",
      description:
        "Design and engineer biological systems for medicine and agriculture.",
    },
    {
      title: "Drug Discovery",
      skills: ["Molecular Docking", "Medicinal Chemistry", "AI in Pharma"],
      tools: ["AutoDock", "PyMOL", "Schrodinger"],
      salary: "₹7–25 LPA",
      description:
        "Use biotechnology and AI to discover and optimize new medicines.",
    },
    {
      title: "Genomics",
      skills: ["DNA Sequencing", "Data Analysis", "Genetics"],
      tools: ["Illumina", "GATK", "IGV"],
      salary: "₹5–15 LPA",
      description:
        "Study genes and genomes to understand diseases and biological functions.",
    },
    {
      title: "Computational Biology",
      skills: ["Machine Learning", "Python", "Biological Modeling"],
      tools: ["TensorFlow", "PyTorch", "MATLAB"],
      salary: "₹8–28 LPA",
      description:
        "Combine AI, mathematics and biology to solve biological problems.",
    },
  ];

  const [selectedCareer, setSelectedCareer] = React.useState(careers[0]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800 sticky top-0 bg-black z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Bio<span className="text-green-400">AI</span>
          </h1>

          <div className="flex gap-8 text-gray-300">
            <a href="#" className="hover:text-green-400 transition">
              Home
            </a>

            <a href="#careers" className="hover:text-green-400 transition">
              Careers
            </a>

            <a href="#resources" className="hover:text-green-400 transition">
              Resources
            </a>

            <a href="#about" className="hover:text-green-400 transition">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-5">
            AI Powered Biotechnology Platform
          </p>

          <h1 className="text-6xl font-black leading-tight mb-8">
            Explore Careers <br />
            In <span className="text-green-400">Biotechnology</span>
          </h1>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Discover biotech domains, required skills, AI tools, salary ranges
            and curated learning resources.
          </p>

          <div className="flex gap-5">
            <button className="bg-green-400 text-black px-7 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Explore Careers
            </button>

            <button className="border border-gray-700 px-7 py-4 rounded-2xl hover:border-green-400 hover:text-green-400 transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14">
            <div>
              <h2 className="text-4xl font-bold text-green-400">50+</h2>
              <p className="text-gray-400">Career Paths</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-400">120+</h2>
              <p className="text-gray-400">Resources</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-400">AI</h2>
              <p className="text-gray-400">Powered</p>
            </div>
          </div>
        </div>

        {/* Hero Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-[40px]" />

          <div className="relative bg-zinc-900 border border-gray-800 rounded-[40px] p-10 h-[500px] flex flex-col justify-center items-center overflow-hidden">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-6xl animate-pulse shadow-[0_0_50px_rgba(34,197,94,0.6)]">
              🧬
            </div>

            <h2 className="text-4xl font-bold mt-10 mb-4 text-center">
              AI + Biotechnology
            </h2>

            <p className="text-gray-400 text-center leading-7 max-w-md">
              Explore futuristic biotech careers powered by artificial
              intelligence, genomics and computational research.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10 w-full">
              <div className="bg-black/40 border border-gray-800 rounded-2xl p-4 text-center">
                <h3 className="text-green-400 font-bold">ML</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Machine Learning
                </p>
              </div>

              <div className="bg-black/40 border border-gray-800 rounded-2xl p-4 text-center">
                <h3 className="text-green-400 font-bold">DNA</h3>
                <p className="text-xs text-gray-400 mt-1">Genomics</p>
              </div>

              <div className="bg-black/40 border border-gray-800 rounded-2xl p-4 text-center">
                <h3 className="text-green-400 font-bold">AI</h3>
                <p className="text-xs text-gray-400 mt-1">Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section
        id="careers"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black mb-4">
            Biotechnology <span className="text-green-400">Domains</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Select a domain to explore skills, tools and salaries.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {careers.map((career) => (
            <button
              key={career.title}
              onClick={() => setSelectedCareer(career)}
              className={`px-6 py-4 rounded-2xl border transition ${
                selectedCareer.title === career.title
                  ? "bg-green-400 text-black border-green-400"
                  : "bg-zinc-900 border-gray-700 hover:border-green-400 hover:text-green-400"
              }`}
            >
              {career.title}
            </button>
          ))}
        </div>

        {/* Career Card */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-zinc-900 border border-gray-800 rounded-[40px] p-10">
            <h2 className="text-5xl font-black text-green-400 mb-6">
              {selectedCareer.title}
            </h2>

            <p className="text-gray-400 leading-8 text-lg mb-10">
              {selectedCareer.description}
            </p>

            {/* Skills */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-5">
                Required Skills
              </h3>

              <div className="flex flex-wrap gap-4">
                {selectedCareer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-black border border-gray-700 px-5 py-3 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-5">
                Beginner Tools
              </h3>

              <div className="flex flex-wrap gap-4">
                {selectedCareer.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-green-400/10 border border-green-400/20 text-green-300 px-5 py-3 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Salary */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Salary Range
              </h3>

              <p className="text-5xl font-black text-green-400">
                {selectedCareer.salary}
              </p>
            </div>
          </div>

          {/* Side Cards */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Career Opportunities
              </h3>

              <ul className="space-y-4 text-gray-400">
                <li>• Research Scientist</li>
                <li>• Bioinformatics Analyst</li>
                <li>• AI Biotech Engineer</li>
                <li>• Clinical Data Scientist</li>
                <li>• Genomics Research Associate</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-5">
                Learning Platforms
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black rounded-2xl p-5 border border-gray-800">
                  <h4 className="font-bold">Coursera</h4>
                  <p className="text-sm text-gray-400 mt-2">
                    Biotech Courses
                  </p>
                </div>

                <div className="bg-black rounded-2xl p-5 border border-gray-800">
                  <h4 className="font-bold">edX</h4>
                  <p className="text-sm text-gray-400 mt-2">
                    University Programs
                  </p>
                </div>

                <div className="bg-black rounded-2xl p-5 border border-gray-800">
                  <h4 className="font-bold">YouTube</h4>
                  <p className="text-sm text-gray-400 mt-2">
                    Free Tutorials
                  </p>
                </div>

                <div className="bg-black rounded-2xl p-5 border border-gray-800">
                  <h4 className="font-bold">Khan Academy</h4>
                  <p className="text-sm text-gray-400 mt-2">
                    Biology Basics
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-3xl p-8 text-black">
              <h3 className="text-3xl font-black mb-4">
                Start Your Biotech Journey 🚀
              </h3>

              <p className="leading-7 mb-6">
                Learn modern biotech skills and prepare for future AI-powered
                biotechnology careers.
              </p>

              <button className="bg-black text-white px-6 py-3 rounded-2xl hover:scale-105 transition">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="border-t border-gray-800 mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-black mb-4">
              Bio<span className="text-green-400">AI</span>
            </h2>

            <p className="text-gray-400 leading-7">
              AI-powered biotechnology career exploration platform.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Navigation</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Home</li>
              <li>Careers</li>
              <li>Resources</li>
              <li>About</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Domains</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Bioinformatics</li>
              <li>Synthetic Biology</li>
              <li>Genomics</li>
              <li>Drug Discovery</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Email: rajaadesh464@gmail.com</li>
              <li>Phone: +91 9876543210</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 text-center py-5 text-gray-500 text-sm">
          © 2026 BioAI — Designed for biotech innovators.
        </div>
      </footer>
    </div>
  );
}