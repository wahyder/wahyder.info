const LINKEDIN = 'https://www.linkedin.com/in/waheed-ahmed-hyder'
const CREDLY = 'https://www.credly.com/users/waheed-ahmed-hyder.07aa0191'

// Timeline scale: bars are placed on a 2007–2027 axis
const AXIS_START = 2007
const AXIS_SPAN = 20
const pos = (from: number, to: number) => ({
  left: `${((from - AXIS_START) / AXIS_SPAN) * 100}%`,
  width: `${((to - from) / AXIS_SPAN) * 100}%`,
})

const experience = [
  { dates: 'Apr 2021 — Present', from: 2021.25, to: 2026.75, role: 'Technical Lead Manager', company: 'IBM India Pvt. Limited', current: true, summary: 'Directing a high-performing technical team to design and deliver scalable, robust web applications. Implemented and championed Agile methodologies.' },
  { dates: 'Oct 2019 — Mar 2021', from: 2019.75, to: 2021.17, role: 'Software Engineer', company: 'Wells Fargo', summary: 'Led UI development for multiple projects utilizing Angular, ReactJS, and NodeJS/Python frameworks, and QA automation using Ranorex.' },
  { dates: 'Jul 2017 — Jul 2019', from: 2017.5, to: 2019.5, role: 'Senior Associate', company: 'Cognizant Technology Solutions', summary: 'Spearheaded full stack web development and served as technical lead for multiple high-impact web applications. Designed and implemented scalable RESTful APIs.' },
  { dates: 'Jul 2012 — May 2017', from: 2012.5, to: 2017.33, role: 'Consultant', company: 'Capgemini India Pvt. Ltd.', summary: 'Developed dynamic frontend applications using AngularJS and NodeJS. Onsite engagements with ABN AMRO (Netherlands) and Euroclear (Brussels).' },
  { dates: 'Feb 2011 — May 2012', from: 2011.08, to: 2012.33, role: 'Team Lead & Manager', company: 'Thrikasa Software Solutions', summary: 'Led development teams in building web applications, managed business requirements, and coordinated with stakeholders.' },
  { dates: 'Jan 2010 — Jan 2011', from: 2010, to: 2011, role: 'Software Developer', company: 'DFI InfoTech', summary: 'Developed web applications using PHP and JavaScript. Focused on frontend development and database integration.' },
  { dates: '2009 — 2010', from: 2009, to: 2010, role: 'Freelance Web Developer', company: 'Self-employed', summary: 'Provided web development services as an independent contractor, building custom web solutions for various clients.' },
  { dates: 'Aug 2008 — May 2009', from: 2008.58, to: 2009.33, role: 'Web Developer', company: 'Cappella Interactive', summary: 'Developed interactive web applications using Flash and JavaScript. Worked on diverse projects showcasing company services and solutions.' },
  { dates: 'Jun 2007 — May 2008', from: 2007.42, to: 2008.33, role: 'Part-time Web Developer', company: 'Ashrafi Associates', summary: 'Developed frontend web applications on a part-time basis while building expertise in web technologies and client requirements.' },
]

const projects = [
  { client: 'Chubb', sector: 'Insurance', title: 'Claims Intake Portal', body: 'Scalable insurance claim intake portal that streamlined claim processing workflows and reduced claim handling time.', tech: ['React.js', 'Node.js', 'Cloud'] },
  { client: 'IBM', sector: 'Supply chain', title: 'ADRP — Automated Discrepancy Resolution', body: 'Platform to track and reconcile disputes, facilitating collaboration among suppliers and vendors for faster resolution.', tech: ['MEAN', 'Kafka', 'PostgreSQL'] },
  { client: 'Delta Air Lines', title: 'Zulu', body: "Modernization of Delta's cloud applications for performance and scalability, alongside UX/UI improvements.", tech: ['Angular', 'Cloud', 'UX/UI'] },
  { client: 'Fidelity USA', title: 'fidelity.com', body: 'Front-end development, widget and plug-in development, and unit testing in an eight-person UI team.', tech: ['AngularJS', 'Sails', 'HighCharts'] },
  { client: 'ABN AMRO', sector: 'Netherlands', title: 'Soft Logon & SEPA Address Book', body: 'Scrum developer on two banking channel applications, including Single Euro Payments Area (SEPA) address book.', tech: ['JavaScript', 'jQuery', 'Jasmine'] },
  { client: 'Euroclear', sector: 'Brussels', title: 'Easyway', body: 'UI development for the Easyway capital-markets applications as part of an onsite Scrum team.', tech: ['MVC 4.5', 'Telerik', 'TFS'] },
  { client: 'Ominto Inc.', title: 'Ominto Platform', body: 'Frontend development for a dynamic user engagement platform. Built UI components, implemented advanced JavaScript coding.', tech: ['AngularJS', 'Node.js', 'REST API'] },
  { client: 'Sprint.com', title: 'Sprint Application', body: 'Full-stack development of frontend and backend services. Implemented UI components with advanced JavaScript.', tech: ['AngularJS', 'Sails', 'HighCharts'] },
  { client: 'GE', sector: 'USA', title: 'Protractor Module', body: 'Developed UI components and data visualization for GE industrial analytics platform. Implemented SVG graphics.', tech: ['AngularJS', 'Handlebars', 'SVG'] },
  { client: 'Remarque', sector: 'USA', title: 'Systems Platform', body: 'Full-stack development for enterprise management system. Built scalable backend services and responsive UI components.', tech: ['ASP.NET', 'MVC', 'Angular'] },
]

const skills = [
  { group: 'Frontend', items: ['React.js', 'Next.js', 'Redux', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Backend', items: ['Node.js', 'MEAN / MERN', 'Loopback', '.NET Core', 'ASP.NET', 'Kafka'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'SQL Server', 'Oracle', 'MySQL'] },
  { group: 'Cloud', items: ['AWS', 'Azure', 'Azure Functions', 'IBM Cloud', 'OpenShift'] },
  { group: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Nexus', 'Git'] },
  { group: 'Quality & Design', items: ['Playwright', 'Jasmine', 'Figma', 'Axure', 'Agile Scrum'] },
]

const certifications = [
  'Project Management Professional (PMP)®', 'IBM Generative & Agentic AI Expert', 'IBM Bob Intermediate', '2026 IBMer watsonx Challenge',
  'IBM Generative & Agentic AI Developer', 'IBM Generative & Agentic AI Foundation', 'watsonx.governance Sales Foundation', 'Lifelong Learning 2026',
  'IBM Growth Behaviors', 'IBM Consulting - Core Experienced', 'Insurance Insights (Silver)', 'Insurance Insights (Bronze)',
  'Insurance Industry Jumpstart', 'IBM Delivery Platform Foundations', 'Method Essential', 'AWS Partner: Gen AI Essentials',
  'AWS Certified Developer', 'Professional Scrum Master™ I', 'IBM Microsoft Copilot Summit', 'Docker Essentials',
  'Digital Product Engineering', 'Red Hat OpenShift Developer I', 'IBM watsonx Essentials', 'IBM Certified Advocate Cloud v2',
  'IBM Garage Foundation', 'IBM Garage Essentials', 'Celonis Foundations', 'Advancing Accessibility',
  'IBM Agile Explorer', 'Scrum Foundation (SFPC™)',
]

function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  )
}

function Download({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
    </svg>
  )
}

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

export default function Home() {
  return (
    <>
      <nav className="nav">
        <span className="nav-brand">wahyder.info</span>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="/cover-letter">Cover letter</a>
        <a className="btn btn-primary" href="#contact">Get in touch</a>
      </nav>

      <main className="wrap">
        <section className="hero" id="about">
          <div className="hero-copy">
            <span className="kicker">Welcome to my portfolio</span>
            <h1><span>Waheed Ahmed</span><span>Hyder</span></h1>
            <p className="role">Technical Lead Manager at IBM</p>
            <p className="lede">18+ years building scalable web and enterprise applications. Expert in MEAN/MERN stack, software architecture, and engineering leadership.</p>
            <div className="actions">
              <a className="btn btn-primary" href="#contact">Get in touch</a>
              <a className="btn btn-secondary" href={LINKEDIN} {...ext}>LinkedIn <Arrow /></a>
              <a className="btn btn-secondary" href="/Waheed-Ahmed-Hyder-Resume.pdf" download>Download CV <Download /></a>
            </div>
          </div>
          <figure className="hero-fig">
            <div className="grayscale"><img src="/portrait.jpg" alt="Waheed Ahmed Hyder" /></div>
            <figcaption>Waheed Ahmed Hyder</figcaption>
          </figure>
        </section>

        <section className="stats" aria-label="At a glance">
          <div className="stat"><b>18+</b><span>Years in engineering</span></div>
          <div className="stat"><b>8</b><span>Companies</span></div>
          <div className="stat"><b>{certifications.length}</b><span>Certifications</span></div>
        </section>

        <section id="experience">
          <div className="sec-head"><span className="kicker">01 — Experience</span><h2>Experience</h2></div>
          <div className="axis">
            <span />
            <div className="axis-ticks">{[2007, 2012, 2017, 2022, 2027].map((y) => <span key={y}>{y}</span>)}</div>
          </div>
          {experience.map((j) => (
            <article key={j.company + j.role} className={j.current ? 'job now' : 'job'}>
              <div className="when">
                <span>{j.dates}</span>
                <div className="bar"><i style={pos(j.from, j.to)} /></div>
              </div>
              <div><h3>{j.role}</h3><p className="org">{j.company}</p></div>
              <p className="d">{j.summary}</p>
            </article>
          ))}
        </section>

        <section id="projects">
          <div className="sec-head"><span className="kicker">02 — Work</span><h2>Featured Projects</h2></div>
          <div className="grid">
            {projects.map((p) => (
              <div key={p.title} className="cell">
                <div className="n"><b>{p.client}</b>{p.sector && <span>{p.sector}</span>}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="stack">{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="sec-head"><span className="kicker">03 — Stack</span><h2>Skills</h2></div>
          <div className="grid">
            {skills.map((s, i) => (
              <div key={s.group} className="cell">
                <div className="n"><span>{String(i + 1).padStart(2, '0')}</span></div>
                <h3>{s.group}</h3>
                <div className="chips">{s.items.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="row2 domains">
            <span className="kicker">Domains</span>
            <span>Insurance · Capital Markets · Banking · Health Care · Onsite: ABN AMRO (Netherlands), Euroclear (Brussels)</span>
          </div>
        </section>

        <section id="certifications">
          <div className="sec-head">
            <span className="kicker">04 — Credentials</span>
            <div>
              <h2>Certifications</h2>
              <p className="count">{certifications.length} Credly badges · <a href={CREDLY} {...ext}>View all on Credly</a></p>
            </div>
          </div>
          <ol className="certs">
            {certifications.map((c) => <li key={c}><a href={`${CREDLY}/badges`} {...ext}>{c}</a></li>)}
          </ol>
          <div className="row2 edu">
            <span className="kicker">Education</span>
            <div>
              <h3>B.Tech / B.E., Electronics and Telecommunication Engineering</h3>
              <p>Jawaharlal Nehru University, 2005</p>
            </div>
          </div>
        </section>
      </main>

      <section className="close" id="contact">
        <div className="wrap">
          <span className="kicker">05 — Contact</span>
          <h2><span>Let&apos;s build</span><span>something great</span></h2>
          <div className="links">
            <a href={LINKEDIN} {...ext}><span><b>LinkedIn Profile</b><small>Connect and follow</small></span><Arrow size={28} /></a>
            <a href={CREDLY} {...ext}><span><b>View Certifications</b><small>{certifications.length} Credly badges</small></span><Arrow size={28} /></a>
          </div>
          <div className="meta">
            <span>For direct contact, use LinkedIn. Email and phone protected from bots.</span>
            <span>Languages: English, Hindi, Telugu, Urdu</span>
          </div>
        </div>
      </section>

      <footer className="wrap foot"><span>© 2026 Waheed Ahmed Hyder</span><span><a href="/Waheed-Ahmed-Hyder-Resume.pdf" download>Download CV</a> · <a href="/cover-letter">Cover letter</a> · wahyder.info</span></footer>
    </>
  )
}
