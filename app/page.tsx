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
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-12">
            <h2 className="text-5xl font-bold uppercase">Experience</h2>
            <span className="text-xs tracking-widest text-gray-600 uppercase">01 / 2007 — Present</span>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400 md:ml-[-2px]"></div>

            <div className="space-y-12">
              {[
                { dates: 'Apr 2021 — Present', role: 'Technical Lead Manager', company: 'IBM India Pvt. Limited', summary: 'Directing a high-performing technical team to design and deliver scalable, robust web applications. Implemented and championed Agile methodologies, increasing team productivity and driving continuous process improvements.' },
                { dates: 'Oct 2019 — Mar 2021', role: 'Software Engineer', company: 'Wells Fargo', summary: 'Led UI development for multiple projects utilizing Angular, ReactJS, and NodeJS/Python frameworks, and QA automation using Ranorex.' },
                { dates: 'Jul 2017 — Jul 2019', role: 'Senior Associate', company: 'Cognizant Technology Solutions', summary: 'Spearheaded full stack web development and served as technical lead for multiple high-impact web applications. Designed and implemented scalable RESTful APIs using Angular, ZendPHP, and Node.js.' },
                { dates: 'Jul 2012 — May 2017', role: 'Consultant', company: 'Capgemini India Pvt. Ltd.', summary: 'Developed dynamic frontend applications using AngularJS and NodeJS. Onsite engagements with ABN AMRO (Netherlands) and Euroclear (Brussels).' },
                { dates: 'Feb 2011 — May 2012', role: 'Team Lead & Manager', company: 'Thrikasa Software Solutions', summary: 'Led development teams in building web applications, managed business requirements, and coordinated with stakeholders. Promoted to Manager role overseeing team operations and deliverables.' },
                { dates: 'Jan 2010 — Jan 2011', role: 'Software Developer', company: 'DFI InfoTech', summary: 'Developed web applications using PHP and JavaScript. Focused on frontend development and database integration.' },
                { dates: 'Aug 2008 — May 2009', role: 'Web Developer', company: 'Cappella Interactive', summary: 'Developed interactive web applications using Flash and JavaScript. Worked on diverse projects showcasing company services and solutions.' },
                { dates: 'Jun 2007 — May 2008', role: 'Part-time Web Developer', company: 'Ashrafi Associates', summary: 'Developed frontend web applications on a part-time basis while building expertise in web technologies and client requirements.' },
                { dates: '2009 — 2010', role: 'Freelance Web Developer', company: 'Self-employed', summary: 'Provided web development services as an independent contractor, building custom web solutions for various clients.' }
              ].map((exp, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 -translate-y-1/2 top-6 w-5 h-5 bg-white border-4 border-blue-600 rounded-full z-10"></div>

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:w-1/2'} md:w-1/2`}>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">{exp.dates}</span>
                      <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                      <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-700 leading-relaxed text-sm">{exp.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              { client: 'Euroclear · Brussels', title: 'Easyway', body: 'UI development for the Easyway capital-markets applications as part of an onsite Scrum team.', tech: ['MVC 4.5', 'Telerik', 'TFS'] },
              { client: 'Ominto Inc.', title: 'Ominto Platform', body: 'Frontend development for a dynamic user engagement platform. Built UI components, implemented advanced JavaScript coding, developed widgets, and wrote comprehensive unit tests using Jasmine framework.', tech: ['AngularJS', 'Node.js', 'REST API', 'Jasmine'] },
              { client: 'Sprint.com', title: 'Sprint Application', body: 'Full-stack development of frontend and backend services. Implemented UI components with advanced JavaScript, created data visualization widgets using HighCharts, and participated in demo sessions with stakeholders.', tech: ['AngularJS', 'Sails', 'HighCharts', 'REST'] },
              { client: 'GE · USA', title: 'Protractor Module', body: 'Developed UI components and data visualization for GE industrial analytics platform. Implemented SVG graphics, created complex interactive features using Handlebars templating engine.', tech: ['AngularJS', 'Handlebars', 'SVG', 'Bootstrap'] },
              { client: 'Remarque · USA', title: 'Systems Platform', body: 'Full-stack development for enterprise management system. Built scalable backend services and responsive UI components with advanced data grids and charting capabilities for analytics dashboard.', tech: ['ASP.NET', 'MVC', 'Angular', 'Azure', 'HighCharts'] }
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {[
              { name: 'Project Management Professional (PMP)®', note: 'Expires Jun 4, 2029', image: 'https://images.credly.com/images/731e7ef4-9b0c-4d7b-ab65-23cc699c0aa3/blob' },
              { name: 'IBM Generative & Agentic AI Expert', note: 'Expires Jul 14, 2027', image: 'https://images.credly.com/images/3ca1feea-7209-462f-8b97-c4db28f597b9/IBM-Generative-Agentic-AI-Expert---Developer.png' },
              { name: 'IBM Bob Intermediate', note: 'Expires Jul 14, 2027', image: 'https://images.credly.com/images/df4fe6f4-2060-45d4-9a09-160688785dbc/IBM_Bob_TS_Intermediate.png' },
              { name: '2026 IBMer watsonx Challenge', note: 'Issued Jul 28, 2026', image: 'https://images.credly.com/images/703c1e3c-800f-4050-b9c0-d6d259e3b187/2026-IBMer-watsonx-Challenge.png' },
              { name: 'IBM Generative & Agentic AI Developer', note: 'Expires Mar 1, 2027', image: 'https://images.credly.com/images/d610767c-c268-49a3-af8d-1b0e7ad8940b/IBM-Generative-and-Agentic-AI-Developer---Intermediate.png' },
              { name: 'IBM Generative & Agentic AI Foundation', note: 'Expires Mar 1, 2027', image: 'https://images.credly.com/images/95ae9d80-bc45-40fa-84a1-45cba63bd44b/IBM-Generative-and-Agentic-AI-Foundation.png' },
              { name: 'watsonx.governance Sales Foundation', note: 'Expires Mar 28, 2027', image: 'https://images.credly.com/images/d41c463b-ef21-4bbc-8933-d7c5321c52b7/image.png' },
              { name: 'Lifelong Learning 2026', note: 'Expires Apr 25, 2027', image: 'https://images.credly.com/images/5e2afabf-62f3-48ae-bbed-7e57c2e78c6a/blob' },
              { name: 'IBM Growth Behaviors', note: 'Expires Dec 1, 2035', image: 'https://images.credly.com/images/7bdbf172-7abf-4335-93de-f357a04b8903/69eb775cc80a2549e6edea71.png' },
              { name: 'IBM Consulting - Core Experienced', note: 'Issued Dec 26, 2025', image: 'https://images.credly.com/images/5eaf1016-1e65-4960-8c55-a24e15c12f31/image.png' },
              { name: 'Insurance Insights (Silver)', note: 'Issued Nov 28, 2025', image: 'https://images.credly.com/images/a022933c-c5bf-40be-a239-d864ff698e05/Insurance-Industry-Silver.png' },
              { name: 'Insurance Insights (Bronze)', note: 'Issued Nov 27, 2025', image: 'https://images.credly.com/images/3d918cea-3f96-45f5-a272-109a909c2f4c/Insurance-Industry-Bronze.png' },
              { name: 'Insurance Industry Jumpstart', note: 'Issued Nov 26, 2025', image: 'https://images.credly.com/images/1c518f83-871e-47cb-9eaa-e33dc6b3c841/Insurance-Industry-Jumpstart.png' },
              { name: 'IBM Delivery Platform Foundations', note: 'Issued Feb 23, 2025', image: 'https://images.credly.com/images/bef4952f-f3d5-49e8-895f-072149aad1a7/image.png' },
              { name: 'Method Essential', note: 'Issued Sep 2, 2025', image: 'https://images.credly.com/images/d94b8fbd-cb6a-4726-83e8-c9f328514dec/69e9d3d8becc0c6c0c5df678.png' },
              { name: 'AWS Partner: Gen AI Essentials', note: 'Issued Aug 25, 2025', image: 'https://images.credly.com/images/4b547104-5ce9-43d5-8708-a7abb4b0c7ec/blob' },
              { name: 'AWS Certified Developer', note: 'Expired Jul 29, 2026', image: 'https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png' },
              { name: 'Professional Scrum Master™ I', note: 'Issued Dec 5, 2021', image: 'https://images.credly.com/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png' },
              { name: 'IBM Microsoft Copilot Summit', note: 'Issued Oct 15, 2024', image: 'https://images.credly.com/images/8ad28495-0c01-4d78-a15b-1f4639d34445/image.png' },
              { name: 'Docker Essentials', note: 'Issued Oct 8, 2024', image: 'https://images.credly.com/images/b0c5445a-72a2-46ce-a599-96147e210efb/blob' },
              { name: 'Digital Product Engineering', note: 'Issued Jun 30, 2024', image: 'https://images.credly.com/images/bb461953-ba43-489e-9389-282bfa8af482/digital-product-engineering-foundation-v2.png' },
              { name: 'Red Hat OpenShift Developer I', note: 'Issued Jun 28, 2024', image: 'https://images.credly.com/images/77237989-36a2-4eb5-853f-bcceeb2999b8/Red_Hat_OpenShift_Developer_I__Introduction_to_Containers_with_Podman.png' },
              { name: 'IBM watsonx Essentials', note: 'Issued Mar 28, 2024', image: 'https://images.credly.com/images/47a15e48-3fd7-4c36-8f7e-639a65945ad8/image.png' },
              { name: 'IBM Certified Advocate Cloud v2', note: 'Issued Jun 4, 2023', image: 'https://images.credly.com/images/f5d671fd-e31b-461d-ae41-479753bf451f/image.png' },
              { name: 'IBM Garage Foundation', note: 'Issued May 29, 2022', image: 'https://images.credly.com/images/9beccf39-df2f-4025-b971-3a7ec6dfdbfa/image.png' },
              { name: 'IBM Garage Essentials', note: 'Issued May 23, 2022', image: 'https://images.credly.com/images/fb718a87-6d0d-4a6d-8068-677f1bec78f2/IBM_Garage_Essentials.png' },
              { name: 'Celonis Foundations', note: 'Issued Apr 20, 2022', image: 'https://images.credly.com/images/4ff66a5e-7ca4-4018-a50a-621d1075c1bc/Foundations-Learning-Foundational.png' },
              { name: 'Advancing Accessibility', note: 'Issued Apr 13, 2022', image: 'https://images.credly.com/images/c7444263-2fd4-4936-a5f3-1b17bfac065a/image.png' },
              { name: 'IBM Agile Explorer', note: 'Issued Apr 10, 2022', image: 'https://images.credly.com/images/a972f054-be07-4845-85c7-95c8d11852f5/IBM-Agile-Explorer.png' },
              { name: 'Scrum Foundation (SFPC™)', note: 'Expired Aug 2, 2022', image: 'https://images.credly.com/images/4e3d6f9f-55d7-4ea7-b0e6-f4d4ff543e22/image.png' }
            ].map((cert, i) => (
              <a key={i} href="https://www.credly.com/users/waheed-ahmed-hyder.07aa0191/badges" target="_blank" rel="noopener" className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl hover:border-blue-400 transition cursor-pointer group">
                <div className="aspect-square bg-gray-100 flex items-center justify-center hover:scale-105 transition relative overflow-hidden">
                  {/* Actual Credly badge image */}
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center">
                  <div className="font-semibold text-gray-900 text-xs line-clamp-2">{cert.name}</div>
                  <div className="text-xs text-gray-600 mt-1">{cert.note}</div>
                </div>
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

            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/waheed-ahmed-hyder" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>

              <a href="https://www.credly.com/users/waheed-ahmed-hyder.07aa0191" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Credly Badges
              </a>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm mb-4">📧 Email & 📱 Phone protected from bots</p>
                <p className="text-gray-700 font-semibold">Connect via LinkedIn for direct communication</p>
              </div>
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
