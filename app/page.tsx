'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
          <div className="font-bold text-2xl tracking-tight">
            <span className="text-yellow-400">w</span>ahyder<span className="text-gray-500">.</span>info
          </div>
          <div className="flex gap-8 flex-wrap text-sm font-medium">
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#experience" className="hover:text-yellow-400 transition">Experience</a>
            <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
            <a href="#skills" className="hover:text-yellow-400 transition">Skills</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section id="about" className="py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400/20 to-transparent border border-yellow-400/30">
                <img
                  src="/portrait.jpg"
                  alt="Waheed Ahmed Hyder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-sm text-yellow-300">
                  Welcome to my portfolio
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Waheed Ahmed<br /><span className="text-yellow-400">Hyder</span>
                </h1>
                <p className="text-xl text-gray-400">Technical Lead Manager at IBM</p>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                18+ years building scalable web and enterprise applications. Expert in MEAN/MERN stack, software architecture, and engineering leadership.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a href="#contact" className="px-8 py-3 bg-yellow-400 text-gray-950 font-semibold rounded-lg hover:bg-yellow-300 transition">
                  Get in touch
                </a>
                <a href="https://www.linkedin.com/in/waheed-ahmed-hyder" target="_blank" rel="noopener" className="px-8 py-3 border border-gray-700 hover:border-yellow-400 rounded-lg font-semibold transition">
                  LinkedIn
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">18+</div>
                  <div className="text-sm text-gray-500 mt-1">Years in engineering</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">8</div>
                  <div className="text-sm text-gray-500 mt-1">Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">30</div>
                  <div className="text-sm text-gray-500 mt-1">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Experience</h2>
              <div className="h-1 w-12 bg-yellow-400"></div>
            </div>

            <div className="space-y-6">
              {[
                { dates: 'Apr 2021 — Present', role: 'Technical Lead Manager', company: 'IBM India Pvt. Limited', summary: 'Directing a high-performing technical team to design and deliver scalable, robust web applications. Implemented and championed Agile methodologies.' },
                { dates: 'Oct 2019 — Mar 2021', role: 'Software Engineer', company: 'Wells Fargo', summary: 'Led UI development for multiple projects utilizing Angular, ReactJS, and NodeJS/Python frameworks, and QA automation using Ranorex.' },
                { dates: 'Jul 2017 — Jul 2019', role: 'Senior Associate', company: 'Cognizant Technology Solutions', summary: 'Spearheaded full stack web development and served as technical lead for multiple high-impact web applications. Designed and implemented scalable RESTful APIs.' },
                { dates: 'Jul 2012 — May 2017', role: 'Consultant', company: 'Capgemini India Pvt. Ltd.', summary: 'Developed dynamic frontend applications using AngularJS and NodeJS. Onsite engagements with ABN AMRO (Netherlands) and Euroclear (Brussels).' },
                { dates: 'Feb 2011 — May 2012', role: 'Team Lead & Manager', company: 'Thrikasa Software Solutions', summary: 'Led development teams in building web applications, managed business requirements, and coordinated with stakeholders.' },
                { dates: 'Jan 2010 — Jan 2011', role: 'Software Developer', company: 'DFI InfoTech', summary: 'Developed web applications using PHP and JavaScript. Focused on frontend development and database integration.' },
                { dates: 'Aug 2008 — May 2009', role: 'Web Developer', company: 'Cappella Interactive', summary: 'Developed interactive web applications using Flash and JavaScript. Worked on diverse projects showcasing company services and solutions.' },
                { dates: 'Jun 2007 — May 2008', role: 'Part-time Web Developer', company: 'Ashrafi Associates', summary: 'Developed frontend web applications on a part-time basis while building expertise in web technologies and client requirements.' },
                { dates: '2009 — 2010', role: 'Freelance Web Developer', company: 'Self-employed', summary: 'Provided web development services as an independent contractor, building custom web solutions for various clients.' }
              ].map((exp, i) => (
                <div key={i} className="border-l-2 border-yellow-400/30 pl-6 pb-6 hover:border-yellow-400 transition-colors">
                  <div className="text-sm text-yellow-400 font-semibold mb-1">{exp.dates}</div>
                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-gray-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
              <div className="h-1 w-12 bg-yellow-400"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { client: 'Chubb · Insurance', title: 'Claims Intake Portal', body: 'Scalable insurance claim intake portal that streamlined claim processing workflows and reduced claim handling time.', tech: ['React.js', 'Node.js', 'Cloud'] },
                { client: 'IBM · Supply chain', title: 'ADRP — Automated Discrepancy Resolution', body: 'Platform to track and reconcile disputes, facilitating collaboration among suppliers and vendors for faster resolution.', tech: ['MEAN', 'Kafka', 'PostgreSQL'] },
                { client: 'Delta Air Lines', title: 'Zulu', body: "Modernization of Delta's cloud applications for performance and scalability, alongside UX/UI improvements.", tech: ['Angular', 'Cloud', 'UX/UI'] },
                { client: 'Fidelity USA', title: 'fidelity.com', body: 'Front-end development, widget and plug-in development, and unit testing in an eight-person UI team.', tech: ['AngularJS', 'Sails', 'HighCharts'] },
                { client: 'ABN AMRO · Netherlands', title: 'Soft Logon & SEPA Address Book', body: 'Scrum developer on two banking channel applications, including Single Euro Payments Area (SEPA) address book.', tech: ['JavaScript', 'jQuery', 'Jasmine'] },
                { client: 'Euroclear · Brussels', title: 'Easyway', body: 'UI development for the Easyway capital-markets applications as part of an onsite Scrum team.', tech: ['MVC 4.5', 'Telerik', 'TFS'] },
                { client: 'Ominto Inc.', title: 'Ominto Platform', body: 'Frontend development for a dynamic user engagement platform. Built UI components, implemented advanced JavaScript coding.', tech: ['AngularJS', 'Node.js', 'REST API'] },
                { client: 'Sprint.com', title: 'Sprint Application', body: 'Full-stack development of frontend and backend services. Implemented UI components with advanced JavaScript.', tech: ['AngularJS', 'Sails', 'HighCharts'] },
                { client: 'GE · USA', title: 'Protractor Module', body: 'Developed UI components and data visualization for GE industrial analytics platform. Implemented SVG graphics.', tech: ['AngularJS', 'Handlebars', 'SVG'] },
                { client: 'Remarque · USA', title: 'Systems Platform', body: 'Full-stack development for enterprise management system. Built scalable backend services and responsive UI components.', tech: ['ASP.NET', 'MVC', 'Angular'] }
              ].map((project, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 hover:border-yellow-400/50 rounded-lg p-6 hover:shadow-xl transition-all group">
                  <div className="text-xs text-yellow-400 font-semibold uppercase tracking-wide mb-2">{project.client}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400 transition">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.body}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-xs px-2 py-1 bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Skills</h2>
              <div className="h-1 w-12 bg-yellow-400"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { group: 'Frontend', items: ['React.js', 'Next.js', 'Redux', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
                { group: 'Backend', items: ['Node.js', 'MEAN / MERN', 'Loopback', '.NET Core', 'ASP.NET', 'Kafka'] },
                { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'SQL Server', 'Oracle', 'MySQL'] },
                { group: 'Cloud', items: ['AWS', 'Azure', 'Azure Functions', 'IBM Cloud', 'OpenShift'] },
                { group: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Nexus', 'Git'] },
                { group: 'Quality & Design', items: ['Playwright', 'Jasmine', 'Figma', 'Axure', 'Agile Scrum'] }
              ].map((skill, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-4">{skill.group}</h3>
                  <div className="flex gap-2 flex-wrap">
                    {skill.items.map((item, j) => (
                      <span key={j} className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-500 pt-8">
              Domains: Insurance · Capital Markets · Banking · Health Care · Onsite: ABN AMRO (Netherlands), Euroclear (Brussels)
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Certifications</h2>
              <div className="h-1 w-12 bg-yellow-400"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Project Management Professional (PMP)®', image: 'https://images.credly.com/images/731e7ef4-9b0c-4d7b-ab65-23cc699c0aa3/blob' },
                { name: 'IBM Generative & Agentic AI Expert', image: 'https://images.credly.com/images/3ca1feea-7209-462f-8b97-c4db28f597b9/IBM-Generative-Agentic-AI-Expert---Developer.png' },
                { name: 'IBM Bob Intermediate', image: 'https://images.credly.com/images/df4fe6f4-2060-45d4-9a09-160688785dbc/IBM_Bob_TS_Intermediate.png' },
                { name: '2026 IBMer watsonx Challenge', image: 'https://images.credly.com/images/703c1e3c-800f-4050-b9c0-d6d259e3b187/2026-IBMer-watsonx-Challenge.png' },
                { name: 'IBM Generative & Agentic AI Developer', image: 'https://images.credly.com/images/d610767c-c268-49a3-af8d-1b0e7ad8940b/IBM-Generative-and-Agentic-AI-Developer---Intermediate.png' },
                { name: 'IBM Generative & Agentic AI Foundation', image: 'https://images.credly.com/images/95ae9d80-bc45-40fa-84a1-45cba63bd44b/IBM-Generative-and-Agentic-AI-Foundation.png' },
                { name: 'watsonx.governance Sales Foundation', image: 'https://images.credly.com/images/d41c463b-ef21-4bbc-8933-d7c5321c52b7/image.png' },
                { name: 'Lifelong Learning 2026', image: 'https://images.credly.com/images/5e2afabf-62f3-48ae-bbed-7e57c2e78c6a/blob' },
                { name: 'IBM Growth Behaviors', image: 'https://images.credly.com/images/7bdbf172-7abf-4335-93de-f357a04b8903/69eb775cc80a2549e6edea71.png' },
                { name: 'IBM Consulting - Core Experienced', image: 'https://images.credly.com/images/5eaf1016-1e65-4960-8c55-a24e15c12f31/image.png' },
                { name: 'Insurance Insights (Silver)', image: 'https://images.credly.com/images/a022933c-c5bf-40be-a239-d864ff698e05/Insurance-Industry-Silver.png' },
                { name: 'Insurance Insights (Bronze)', image: 'https://images.credly.com/images/3d918cea-3f96-45f5-a272-109a909c2f4c/Insurance-Industry-Bronze.png' },
                { name: 'Insurance Industry Jumpstart', image: 'https://images.credly.com/images/1c518f83-871e-47cb-9eaa-e33dc6b3c841/Insurance-Industry-Jumpstart.png' },
                { name: 'IBM Delivery Platform Foundations', image: 'https://images.credly.com/images/bef4952f-f3d5-49e8-895f-072149aad1a7/image.png' },
                { name: 'Method Essential', image: 'https://images.credly.com/images/d94b8fbd-cb6a-4726-83e8-c9f328514dec/69e9d3d8becc0c6c0c5df678.png' },
                { name: 'AWS Partner: Gen AI Essentials', image: 'https://images.credly.com/images/4b547104-5ce9-43d5-8708-a7abb4b0c7ec/blob' },
                { name: 'AWS Certified Developer', image: 'https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png' },
                { name: 'Professional Scrum Master™ I', image: 'https://images.credly.com/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png' },
                { name: 'IBM Microsoft Copilot Summit', image: 'https://images.credly.com/images/8ad28495-0c01-4d78-a15b-1f4639d34445/image.png' },
                { name: 'Docker Essentials', image: 'https://images.credly.com/images/b0c5445a-72a2-46ce-a599-96147e210efb/blob' },
                { name: 'Digital Product Engineering', image: 'https://images.credly.com/images/bb461953-ba43-489e-9389-282bfa8af482/digital-product-engineering-foundation-v2.png' },
                { name: 'Red Hat OpenShift Developer I', image: 'https://images.credly.com/images/77237989-36a2-4eb5-853f-bcceeb2999b8/Red_Hat_OpenShift_Developer_I__Introduction_to_Containers_with_Podman.png' },
                { name: 'IBM watsonx Essentials', image: 'https://images.credly.com/images/47a15e48-3fd7-4c36-8f7e-639a65945ad8/image.png' },
                { name: 'IBM Certified Advocate Cloud v2', image: 'https://images.credly.com/images/f5d671fd-e31b-461d-ae41-479753bf451f/image.png' },
                { name: 'IBM Garage Foundation', image: 'https://images.credly.com/images/9beccf39-df2f-4025-b971-3a7ec6dfdbfa/image.png' },
                { name: 'IBM Garage Essentials', image: 'https://images.credly.com/images/fb718a87-6d0d-4a6d-8068-677f1bec78f2/IBM_Garage_Essentials.png' },
                { name: 'Celonis Foundations', image: 'https://images.credly.com/images/4ff66a5e-7ca4-4018-a50a-621d1075c1bc/Foundations-Learning-Foundational.png' },
                { name: 'Advancing Accessibility', image: 'https://images.credly.com/images/c7444263-2fd4-4936-a5f3-1b17bfac065a/image.png' },
                { name: 'IBM Agile Explorer', image: 'https://images.credly.com/images/a972f054-be07-4845-85c7-95c8d11852f5/IBM-Agile-Explorer.png' },
                { name: 'Scrum Foundation (SFPC™)', image: 'https://images.credly.com/images/4e3d6f9f-55d7-4ea7-b0e6-f4d4ff543e22/image.png' }
              ].map((cert, i) => (
                <a key={i} href="https://www.credly.com/users/waheed-ahmed-hyder.07aa0191/badges" target="_blank" rel="noopener" className="group relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-yellow-400/50 transition-all">
                  <div className="aspect-square bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="text-xs text-white font-semibold text-center p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {cert.name}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-lg p-6">
              <div className="text-sm">
                <div className="text-yellow-400 font-semibold mb-2">Education</div>
                <div className="text-gray-400">B.Tech / B.E., Electronics and Telecommunication Engineering</div>
                <div className="text-gray-500 text-xs mt-1">Jawaharlal Nehru University, 2005</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-2xl p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold leading-tight mb-6">Let's build<br /><span className="text-yellow-400">something great</span></h2>
                <p className="text-gray-400">Languages: English, Hindi, Telugu, Urdu</p>
              </div>

              <div className="space-y-6">
                <a href="https://www.linkedin.com/in/waheed-ahmed-hyder" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-yellow-400/50 hover:bg-yellow-400/5 transition group">
                  <div className="w-6 h-6 flex items-center justify-center text-yellow-400 flex-shrink-0 font-bold text-sm">in</div>
                  <div>
                    <div className="font-semibold group-hover:text-yellow-400 transition">LinkedIn Profile</div>
                    <div className="text-xs text-gray-500">Connect and follow</div>
                  </div>
                </a>

                <a href="https://www.credly.com/users/waheed-ahmed-hyder.07aa0191" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-yellow-400/50 hover:bg-yellow-400/5 transition group">
                  <div className="text-2xl flex-shrink-0">🏆</div>
                  <div>
                    <div className="font-semibold group-hover:text-yellow-400 transition">View Certifications</div>
                    <div className="text-xs text-gray-500">30 Credly badges</div>
                  </div>
                </a>

                <div className="pt-6 border-t border-gray-800">
                  <p className="text-gray-500 text-sm mb-3">📧 For direct contact, use LinkedIn</p>
                  <p className="text-gray-400 font-medium">Email and phone protected from bots</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between gap-4 flex-wrap text-sm text-gray-500">
          <span>© 2026 Waheed Ahmed Hyder</span>
          <span>wahyder.info</span>
        </div>
      </footer>
    </main>
  )
}
