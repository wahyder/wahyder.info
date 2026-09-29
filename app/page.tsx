'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
          <div className="font-bold text-xl tracking-widest uppercase">
            wahyder<span className="text-blue-600">.info</span>
          </div>
          <div className="flex gap-6 flex-wrap font-heading text-sm tracking-wider uppercase">
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#certifications" className="hover:text-blue-600 transition">Certifications</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-end">
            {/* Portrait */}
            <div className="relative aspect-video lg:aspect-auto lg:row-span-2">
              <img
                src="/portrait.jpg"
                alt="Waheed Ahmed Hyder"
                className="w-full h-full object-cover border border-gray-300 rounded"
              />
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <div className="inline-flex w-fit gap-2 px-3 py-1 bg-gray-100 rounded text-xs tracking-widest">
                <span>📍 Hyderabad, India</span>
                <span>·</span>
                <span>Open to leadership roles</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase">
                Waheed Ahmed<br />Hyder
              </h1>

              <p className="text-2xl lg:text-3xl font-semibold text-blue-600 tracking-wider uppercase">
                Technical Lead Manager · IBM
              </p>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              <p className="text-lg leading-relaxed">
                Seasoned Tech Lead and Engineering Manager with 18+ years of experience in designing and delivering scalable web and enterprise applications. Expert in MEAN stack development, software architecture, and agile methodologies.
              </p>

              <div className="flex gap-3 flex-wrap">
                <a href="mailto:w_a_hyder@yahoo.com" className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition font-semibold text-sm">
                  Get in touch
                </a>
                <a href="https://www.linkedin.com/in/waheed-ahmed-hyder" target="_blank" rel="noopener" className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition font-semibold text-sm">
                  LinkedIn
                </a>
                <a href="https://www.credly.com/users/waheed-ahmed-hyder.07aa0191" target="_blank" rel="noopener" className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition font-semibold text-sm">
                  Credly
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4">
            {[
              { value: '18+', label: 'Years in engineering' },
              { value: '8', label: 'Companies' },
              { value: '32', label: 'Largest team led' },
              { value: '12', label: 'Certifications' }
            ].map((stat, i) => (
              <div key={i} className="py-8 px-4 border-l border-gray-700 first:border-l-0">
                <div className="text-5xl font-bold">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-8">
            <h2 className="text-5xl font-bold uppercase">Experience</h2>
            <span className="text-xs tracking-widest text-gray-600 uppercase">01 / 2007 — Present</span>
          </div>

          <div className="border-t border-gray-300">
            {[
              { dates: 'Apr 2021 — Present', role: 'Technical Lead Manager', company: 'IBM India Pvt. Limited', summary: 'Directing a high-performing technical team to design and deliver scalable, robust web applications. Implemented and championed Agile methodologies, increasing team productivity and driving continuous process improvements.' },
              { dates: 'Oct 2019 — Mar 2021', role: 'Software Engineer', company: 'Wells Fargo', summary: 'Led UI development for multiple projects utilizing Angular, ReactJS, and NodeJS/Python frameworks, and QA automation using Ranorex.' },
              { dates: 'Jul 2017 — Jul 2019', role: 'Senior Associate', company: 'Cognizant Technology Solutions', summary: 'Spearheaded full stack web development and served as technical lead for multiple high-impact web applications. Designed and implemented scalable RESTful APIs using Angular, ZendPHP, and Node.js.' },
              { dates: 'Jul 2012 — May 2017', role: 'Consultant', company: 'Capgemini India Pvt. Ltd.', summary: 'Developed dynamic frontend applications using AngularJS and NodeJS. Onsite engagements with ABN AMRO (Netherlands) and Euroclear (Brussels).' }
            ].map((exp, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-5 gap-6 py-6 border-b border-gray-300 last:border-b-0">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">{exp.dates}</span>
                <div className="lg:col-span-4 flex flex-col gap-2">
                  <div className="flex gap-2 flex-wrap items-baseline">
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <span className="text-gray-600">{exp.company}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-8">
            <h2 className="text-5xl font-bold uppercase">Selected Projects</h2>
            <span className="text-xs tracking-widest text-gray-600 uppercase">02 / Enterprise</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { client: 'Chubb · Insurance', title: 'Claims Intake Portal', body: 'Scalable insurance claim intake portal that streamlined claim processing workflows and reduced claim handling time, with an intuitive UI that raised customer satisfaction.', tech: ['React.js', 'Node.js', 'Cloud'] },
              { client: 'IBM · Supply chain', title: 'ADRP — Automated Discrepancy Resolution', body: 'Platform to track and reconcile disputes, facilitating collaboration among suppliers and vendors for faster resolution.', tech: ['MEAN', 'Kafka', 'PostgreSQL'] },
              { client: 'Delta Air Lines', title: 'Zulu', body: "Modernization of Delta's cloud applications for performance and scalability, alongside UX/UI improvements that increased customer engagement.", tech: ['Angular', 'Cloud', 'UX/UI'] },
              { client: 'Fidelity USA', title: 'fidelity.com', body: 'Front-end development, widget and plug-in development, and unit testing in an eight-person UI team.', tech: ['AngularJS', 'Sails', 'HighCharts'] },
              { client: 'ABN AMRO · Netherlands', title: 'Soft Logon & SEPA Address Book', body: 'Scrum developer on two banking channel applications, including Single Euro Payments Area (SEPA) address book, working with Specification by Example.', tech: ['JavaScript', 'jQuery', 'Jasmine'] },
              { client: 'Euroclear · Brussels', title: 'Easyway', body: 'UI development for the Easyway capital-markets applications as part of an onsite Scrum team.', tech: ['MVC 4.5', 'Telerik', 'TFS'] }
            ].map((project, i) => (
              <div key={i} className="border border-gray-300 p-6 flex flex-col gap-4 rounded">
                <div className="text-xs font-semibold text-gray-600 uppercase tracking-widest">{project.client}</div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">{project.body}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-gray-100 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-8">
            <h2 className="text-5xl font-bold uppercase">Skills</h2>
            <span className="text-xs tracking-widest text-gray-600 uppercase">03 / Stack</span>
          </div>

          <div className="border border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { group: 'Frontend', items: ['React.js', 'Next.js', 'Redux', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
              { group: 'Backend', items: ['Node.js', 'MEAN / MERN', 'Loopback', '.NET Core', 'ASP.NET', 'Kafka'] },
              { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'SQL Server', 'Oracle', 'MySQL'] },
              { group: 'Cloud', items: ['AWS', 'Azure', 'Azure Functions', 'IBM Cloud', 'OpenShift', 'SSO'] },
              { group: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Nexus', 'Git'] },
              { group: 'Quality & Design', items: ['Playwright', 'Jasmine', 'Figma', 'Axure', 'Agile Scrum'] }
            ].map((skill, i) => (
              <div key={i} className="p-6 border-r border-b border-gray-300 last:border-r-0 odd:lg:border-r-0">
                <h3 className="text-lg font-semibold text-blue-600 uppercase tracking-widest mb-4">{skill.group}</h3>
                <div className="flex gap-2 flex-wrap">
                  {skill.items.map((item, j) => (
                    <span key={j} className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-700 text-sm">
            Domains: Insurance · Capital Markets · Banking · Health Care · Onsite: ABN AMRO (Netherlands), Euroclear (Brussels)
          </p>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-8">
            <h2 className="text-5xl font-bold uppercase">Certifications</h2>
            <a href="https://www.credly.com/users/waheed-ahmed-hyder.07aa0191" target="_blank" rel="noopener" className="text-sm font-semibold hover:text-blue-600 transition flex items-center gap-2">
              <span>🏆 View on Credly</span>
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              { name: 'Project Management Professional (PMP)®', note: 'Expires Jun 4, 2029', icon: '📊' },
              { name: 'IBM Generative & Agentic AI Expert - Developer', note: 'Expires Jul 14, 2027', icon: '🤖' },
              { name: 'IBM Bob Intermediate', note: 'Expires Jul 14, 2027', icon: '🎓' },
              { name: '2026 IBMer watsonx Challenge', note: 'Issued Jul 28, 2026', icon: '🏆' },
              { name: 'IBM Generative & Agentic AI Developer', note: 'Expires Mar 1, 2027', icon: '🤖' },
              { name: 'IBM Generative & Agentic AI Foundation', note: 'Expires Mar 1, 2027', icon: '📚' },
              { name: 'watsonx.governance Sales Foundation', note: 'Expires Mar 28, 2027', icon: '⚙️' },
              { name: 'Lifelong Learning 2026', note: 'Expires Apr 25, 2027', icon: '📖' },
              { name: 'IBM Growth Behaviors', note: 'Expires Dec 1, 2035', icon: '📈' },
              { name: 'IBM Consulting - Core Experienced', note: 'Issued Dec 26, 2025', icon: '💼' },
              { name: 'Insurance Insights and Solutions (Silver)', note: 'Issued Nov 28, 2025', icon: '🛡️' },
              { name: 'Insurance Insights and Solutions (Bronze)', note: 'Issued Nov 27, 2025', icon: '🛡️' },
              { name: 'Insurance Industry Jumpstart', note: 'Issued Nov 26, 2025', icon: '🎯' },
              { name: 'IBM Delivery Central Platform Foundations', note: 'Issued Feb 23, 2025', icon: '🏗️' },
              { name: 'Method Essential', note: 'Issued Sep 2, 2025', icon: '✅' },
              { name: 'AWS Partner: Generative AI Essentials', note: 'Issued Aug 25, 2025', icon: '☁️' },
              { name: 'AWS Certified Developer – Associate', note: 'Expired Jul 29, 2026', icon: '☁️' },
              { name: 'Professional Scrum Master™ I (PSM I)', note: 'Issued Dec 5, 2021', icon: '📋' },
              { name: 'IBM Microsoft Copilot Summit', note: 'Issued Oct 15, 2024', icon: '🎤' },
              { name: 'Docker Essentials: A Developer Introduction', note: 'Issued Oct 8, 2024', icon: '🐳' },
              { name: 'Digital Product Engineering Essentials', note: 'Issued Jun 30, 2024', icon: '🔧' },
              { name: 'Red Hat OpenShift Developer I', note: 'Issued Jun 28, 2024', icon: '🔴' },
              { name: 'IBM watsonx Essentials', note: 'Issued Mar 28, 2024', icon: '🤖' },
              { name: 'IBM Certified Advocate - Cloud v2', note: 'Issued Jun 4, 2023', icon: '☁️' },
              { name: 'IBM Garage Foundation', note: 'Issued May 29, 2022', icon: '🏭' },
              { name: 'IBM Garage Essentials', note: 'Issued May 23, 2022', icon: '🛠️' },
              { name: 'Celonis Foundations', note: 'Issued Apr 20, 2022', icon: '📊' },
              { name: 'Advancing Accessibility', note: 'Issued Apr 13, 2022', icon: '♿' },
              { name: 'IBM Agile Explorer', note: 'Issued Apr 10, 2022', icon: '🚀' },
              { name: 'Scrum Foundation Professional Certification (SFPC™)', note: 'Expired Aug 2, 2022', icon: '📋' }
            ].map((cert, i) => (
              <a key={i} href="https://www.credly.com/users/waheed-ahmed-hyder.07aa0191/badges" target="_blank" rel="noopener" className="border border-gray-300 p-5 rounded hover:shadow-md hover:border-blue-400 transition cursor-pointer">
                <div className="text-3xl mb-3">{cert.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{cert.name}</div>
                <div className="text-xs text-gray-600 mt-2">{cert.note}</div>
              </a>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded p-6">
            <div className="flex gap-6 flex-wrap items-baseline">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">📚 Education</span>
              <span className="text-gray-700">B.Tech / B.E., Electronics and Telecommunication Engineering — Jawaharlal Nehru University, 2005</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
          <div className="border border-gray-300 p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl font-bold uppercase leading-tight">Let's build something</h2>
              <p className="text-gray-700">Languages: English, Hindi, Telugu, Urdu</p>
            </div>

            <div className="flex flex-col gap-4 text-lg">
              <a href="mailto:w_a_hyder@yahoo.com" className="text-blue-600 hover:underline">w_a_hyder@yahoo.com</a>
              <a href="tel:+919652183010" className="text-blue-600 hover:underline">+91 96521 83010</a>
              <a href="https://www.linkedin.com/in/waheed-ahmed-hyder" target="_blank" rel="noopener" className="text-blue-600 hover:underline">linkedin.com/in/waheed-ahmed-hyder</a>
              <a href="https://www.credly.com/users/waheed-ahmed-hyder.07aa0191" target="_blank" rel="noopener" className="text-blue-600 hover:underline">credly.com/users/waheed-ahmed-hyder</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between gap-4 flex-wrap text-sm text-gray-600">
          <span>© 2026 Waheed Ahmed Hyder</span>
          <span>wahyder.info</span>
        </div>
      </footer>
    </main>
  )
}
