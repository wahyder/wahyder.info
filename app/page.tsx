'use client'

import { useState } from 'react'

const LINKEDIN = 'https://www.linkedin.com/in/waheed-ahmed-hyder'
const CREDLY = 'https://www.credly.com/users/waheed-ahmed-hyder.07aa0191'

const Y = '#FFB400'

const icons: Record<string, React.ReactNode> = {
  code: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />,
  server: <path d="M3 4h18v6H3zM3 14h18v6H3zM7 7h.01M7 17h.01" />,
  cloud: <path d="M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z" />,
  users: <path d="M9 11a4 4 0 100-8 4 4 0 000 8zM2 21v-1a6 6 0 0112 0v1M17 11a3 3 0 100-6M22 21v-1a5 5 0 00-4-4.9" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4" />,
  loop: <path d="M21 12a9 9 0 01-15.5 6.2M3 12A9 9 0 0118.5 5.8M18 2v4h-4M6 22v-4h4" />,
  home: <path d="M3 11l9-8 9 8M5 10v10h14V10" />,
  briefcase: <path d="M3 7h18v13H3zM8 7V4h8v3M3 13h18" />,
  grid: <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />,
  award: <path d="M12 15a6 6 0 100-12 6 6 0 000 12zM8.5 14l-1.5 8 5-3 5 3-1.5-8" />,
  mail: <path d="M3 5h18v14H3zM3 6l9 7 9-7" />,
  check: <path d="M5 4h14v16H5zM9 12l2 2 4-4" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  pin: <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" />,
}

function Icon({ name, className = 'w-6 h-6', stroke = 1.8 }: { name: string; className?: string; stroke?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

const services = [
  { icon: 'code', title: 'Frontend Engineering', sub: 'React, Next.js, Angular, TypeScript' },
  { icon: 'server', title: 'Backend & APIs', sub: 'Node.js, MEAN/MERN, .NET, Kafka' },
  { icon: 'cloud', title: 'Cloud & DevOps', sub: 'AWS, Azure, IBM Cloud, Docker, Kubernetes' },
  { icon: 'users', title: 'Engineering Leadership', sub: 'Teams of up to 32, mentoring, delivery' },
  { icon: 'shield', title: 'Quality & Testing', sub: 'Playwright, Jasmine, unit and E2E automation' },
  { icon: 'loop', title: 'Agile Delivery', sub: 'Scrum, sprint planning, continuous process improvement' },
]

const experience = [
  { dates: 'Apr 2021 — Present', role: 'Technical Lead Manager', company: 'IBM India Pvt. Limited', summary: 'Directing a high-performing technical team to design and deliver scalable, robust web applications. Implemented and championed Agile methodologies, increasing team productivity and driving continuous process improvements.' },
  { dates: 'Oct 2019 — Mar 2021', role: 'Software Engineer', company: 'Wells Fargo', summary: 'Led UI development for multiple projects utilizing Angular, ReactJS, and NodeJS/Python frameworks, and QA automation using Ranorex.' },
  { dates: 'Jul 2017 — Jul 2019', role: 'Senior Associate', company: 'Cognizant Technology Solutions', summary: 'Spearheaded full stack web development and served as technical lead for multiple high-impact web applications. Designed and implemented scalable RESTful APIs using Angular, ZendPHP, and Node.js.' },
  { dates: 'Jul 2012 — May 2017', role: 'Consultant', company: 'Capgemini India Pvt. Ltd.', summary: 'Developed dynamic frontend applications using AngularJS and NodeJS. Onsite engagements with ABN AMRO (Netherlands) and Euroclear (Brussels).' },
  { dates: 'Feb 2011 — May 2012', role: 'Team Lead & Manager', company: 'Thrikasa Software Solutions', summary: 'Led development teams in building web applications, managed business requirements, and coordinated with stakeholders. Promoted to Manager role overseeing team operations and deliverables.' },
  { dates: 'Jan 2010 — Jan 2011', role: 'Software Developer', company: 'DFI InfoTech', summary: 'Developed web applications using PHP and JavaScript. Focused on frontend development and database integration.' },
  { dates: '2009 — 2010', role: 'Freelance Web Developer', company: 'Self-employed', summary: 'Provided web development services as an independent contractor, building custom web solutions for various clients.' },
  { dates: 'Aug 2008 — May 2009', role: 'Web Developer', company: 'Cappella Interactive', summary: 'Developed interactive web applications using Flash and JavaScript. Worked on diverse projects showcasing company services and solutions.' },
  { dates: 'Jun 2007 — May 2008', role: 'Part-time Web Developer', company: 'Ashrafi Associates', summary: 'Developed frontend web applications on a part-time basis while building expertise in web technologies and client requirements.' },
]

const projects = [
  { cat: 'Insurance', client: 'Chubb · Insurance', title: 'Claims Intake Portal', body: 'Scalable insurance claim intake portal that streamlined claim processing workflows and reduced claim handling time.', tech: ['React.js', 'Node.js', 'Cloud'] },
  { cat: 'Enterprise', client: 'IBM · Supply chain', title: 'ADRP — Automated Discrepancy Resolution', body: 'Platform to track and reconcile disputes, facilitating collaboration among suppliers and vendors for faster resolution.', tech: ['MEAN', 'Kafka', 'PostgreSQL'] },
  { cat: 'Web Platforms', client: 'Delta Air Lines', title: 'Zulu', body: "Modernization of Delta's cloud applications for performance and scalability, alongside UX/UI improvements.", tech: ['Angular', 'Cloud', 'UX/UI'] },
  { cat: 'Banking & Finance', client: 'Fidelity USA', title: 'fidelity.com', body: 'Front-end development, widget and plug-in development, and unit testing in an eight-person UI team.', tech: ['AngularJS', 'Sails', 'HighCharts'] },
  { cat: 'Banking & Finance', client: 'ABN AMRO · Netherlands', title: 'Soft Logon & SEPA Address Book', body: 'Scrum developer on two banking channel applications, including the SEPA address book.', tech: ['JavaScript', 'jQuery', 'Jasmine'] },
  { cat: 'Banking & Finance', client: 'Euroclear · Brussels', title: 'Easyway', body: 'UI development for the Easyway capital-markets applications as part of an onsite Scrum team.', tech: ['MVC 4.5', 'Telerik', 'TFS'] },
  { cat: 'Web Platforms', client: 'Ominto Inc.', title: 'Ominto Platform', body: 'Frontend development for a dynamic user engagement platform with advanced JavaScript, widgets and Jasmine unit tests.', tech: ['AngularJS', 'Node.js', 'REST API'] },
  { cat: 'Web Platforms', client: 'Sprint.com', title: 'Sprint Application', body: 'Full-stack development of frontend and backend services with HighCharts data visualisation widgets.', tech: ['AngularJS', 'Sails', 'HighCharts'] },
  { cat: 'Enterprise', client: 'GE · USA', title: 'Protractor Module', body: 'UI components and data visualization for the GE industrial analytics platform, including SVG graphics and Handlebars templating.', tech: ['AngularJS', 'Handlebars', 'SVG'] },
  { cat: 'Enterprise', client: 'Remarque · USA', title: 'Systems Platform', body: 'Full-stack development for an enterprise management system with data grids and analytics dashboards.', tech: ['ASP.NET', 'MVC', 'Angular'] },
]
const categories = ['All Categories', 'Insurance', 'Banking & Finance', 'Enterprise', 'Web Platforms']

// Bar values are visual estimates; edit to taste.
const skillBars = [
  { name: 'Frontend (React, Angular)', v: 95 },
  { name: 'Node.js / MEAN / MERN', v: 90 },
  { name: 'Cloud (AWS, Azure, IBM)', v: 80 },
  { name: 'DevOps (Docker, K8s, CI/CD)', v: 75 },
  { name: 'Databases', v: 80 },
  { name: 'Engineering Leadership', v: 90 },
]
const extraSkills = ['TypeScript, Next.js, Redux', 'Kafka, Loopback, .NET Core', 'GitHub Actions, Jenkins, Nexus', 'Playwright, Jasmine, Figma, Axure']

const certs = [
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
  { name: 'Scrum Foundation (SFPC™)', image: 'https://images.credly.com/images/4e3d6f9f-55d7-4ea7-b0e6-f4d4ff543e22/image.png' },
]

const companies = ['IBM', 'Wells Fargo', 'Cognizant', 'Capgemini', 'Thrikasa', 'DFI InfoTech', 'Cappella', 'Ashrafi']

const nav = [
  { id: 'home', icon: 'home', label: 'Home' },
  { id: 'services', icon: 'grid', label: 'Services' },
  { id: 'resume', icon: 'briefcase', label: 'Resume' },
  { id: 'portfolio', icon: 'code', label: 'Portfolio' },
  { id: 'certifications', icon: 'award', label: 'Certifications' },
  { id: 'contact', icon: 'mail', label: 'Contact' },
]

function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-[#282828]">{title}</h2>
      {sub && <p className="text-sm text-[#707070] max-w-xl mx-auto mt-3 leading-relaxed">{sub}</p>}
      <div className="flex justify-center gap-1.5 mt-4">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: Y }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: Y }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: Y }} />
      </div>
    </div>
  )
}

function Divider() {
  return <div className="border-t border-[#EDEDED] my-6" />
}

function SocialDot({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-[#282828] hover:scale-110 transition" style={{ background: Y }}>
      {children}
    </a>
  )
}

export default function Home() {
  const [cat, setCat] = useState('All Categories')
  const shown = projects.filter((p) => cat === 'All Categories' || p.cat === cat)

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#282828]">
      {/* Left sidebar */}
      <aside className="hidden xl:block fixed top-0 left-0 bottom-0 w-[305px] bg-white overflow-y-auto px-10 py-12 z-30">
        <div className="relative w-[150px] h-[150px] mx-auto">
          <img src="/portrait.jpg" alt="Waheed Ahmed Hyder" className="w-full h-full rounded-full object-cover object-top" />
          <span className="absolute bottom-3 right-1 w-4 h-4 rounded-full bg-[#7CB82F] border-2 border-white" />
        </div>
        <h2 className="text-center text-lg font-semibold mt-6">Waheed Ahmed Hyder</h2>
        <p className="text-center text-sm text-[#707070] mt-2">Technical Lead Manager</p>
        <div className="flex justify-center gap-3 mt-5">
          <SocialDot href={LINKEDIN} label="LinkedIn">in</SocialDot>
          <SocialDot href={CREDLY} label="Credly"><Icon name="award" className="w-3.5 h-3.5" stroke={2.2} /></SocialDot>
        </div>

        <Divider />
        <dl className="space-y-3 text-sm">
          {[
            ['Experience:', '18+ years', false],
            ['Company:', 'IBM', false],
            ['Freelance:', 'Open to leadership roles', true],
            ['Location:', 'Hyderabad, India', false],
          ].map(([k, v, green]) => (
            <div key={k as string} className="flex items-center justify-between gap-3">
              <dt className="px-1.5 py-0.5" style={{ background: Y }}>{k}</dt>
              <dd className={`text-right ${green ? 'text-[#7CB82F]' : ''}`}>{v}</dd>
            </div>
          ))}
        </dl>

        <Divider />
        <h3 className="font-semibold text-lg mb-4">Languages</h3>
        <ul className="space-y-2 text-sm text-[#707070]">
          {['English', 'Hindi', 'Telugu', 'Urdu'].map((l) => <li key={l}>{l}</li>)}
        </ul>

        <Divider />
        <h3 className="font-semibold text-lg mb-4">Skills</h3>
        <div className="space-y-4">
          {skillBars.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm text-[#707070] mb-1.5"><span>{s.name}</span><span>{s.v}%</span></div>
              <div className="h-2 rounded-full border" style={{ borderColor: Y }}>
                <div className="h-full rounded-full" style={{ width: `${s.v}%`, background: Y }} />
              </div>
            </div>
          ))}
        </div>

        <Divider />
        <h3 className="font-semibold text-lg mb-4">Extra Skills</h3>
        <ul className="space-y-3 text-sm text-[#707070]">
          {extraSkills.map((s) => (
            <li key={s} className="flex items-start gap-3"><span style={{ color: Y }}><Icon name="check" className="w-4 h-4 mt-0.5" /></span>{s}</li>
          ))}
        </ul>

        <Divider />
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase hover:brightness-95 transition" style={{ background: Y }}>
          Connect on LinkedIn <Icon name="arrow" className="w-4 h-4" />
        </a>
      </aside>

      {/* Right icon rail */}
      <nav aria-label="Sections" className="hidden xl:flex fixed top-1/2 -translate-y-1/2 right-4 w-12 bg-white rounded-full py-3 flex-col items-center gap-1 shadow-sm z-30">
        {nav.map((n, i) => (
          <a key={n.id} href={`#${n.id}`} title={n.label} aria-label={n.label}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition ${i === 0 ? 'text-[#282828]' : 'text-[#707070] hover:text-[#282828]'}`}
            style={i === 0 ? { background: Y } : undefined}>
            <Icon name={n.icon} className="w-[18px] h-[18px]" />
          </a>
        ))}
      </nav>

      {/* Mobile top bar */}
      <header className="xl:hidden sticky top-0 z-40 bg-white border-b border-[#EDEDED]">
        <div className="px-4 py-3 flex items-center gap-3 overflow-x-auto">
          <img src="/portrait.jpg" alt="" className="w-9 h-9 rounded-full object-cover object-top flex-shrink-0" />
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm whitespace-nowrap text-[#707070] hover:text-[#282828]">{n.label}</a>
          ))}
        </div>
      </header>

      <main className="xl:ml-[305px] xl:mr-[72px]">
        <div className="max-w-[970px] mx-auto px-4 sm:px-8 xl:px-0 xl:pl-[30px] xl:pr-[30px]">
          {/* Hero */}
          <section id="home" className="relative bg-white overflow-hidden">
            <span className="absolute top-8 left-10 w-4 h-4 rounded-full border-2" style={{ borderColor: Y }} />
            <span className="absolute top-[52px] left-[56%] w-4 h-4 rounded-full border-2 border-[#2EE92E]" />
            <span className="absolute bottom-10 left-16 w-4 h-4 rounded-full border-2 border-[#2EE92E]" />
            <span className="absolute top-[40%] left-[38%] w-5 h-5 border-2 border-[#3D5AFE] rotate-12" />
            <span className="absolute top-12 right-10 w-5 h-5 border-2 rotate-12" style={{ borderColor: Y }} />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_330px] items-end gap-6 px-6 sm:px-[60px] pt-14 md:pt-[93px] md:min-h-[467px]">
              <div className="pb-10 md:pb-[70px]">
                <h1 className="text-3xl sm:text-4xl xl:text-[40px] font-bold leading-[1.2]">
                  I’m Waheed Ahmed Hyder<br />
                  <span style={{ color: Y }}>Technical Lead</span> Manager
                </h1>
                <p className="text-[#707070] leading-relaxed mt-6 max-w-[430px]">
                  18+ years designing and delivering scalable web and enterprise applications. MEAN/MERN, architecture and agile engineering leadership at IBM.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded text-sm font-medium uppercase hover:brightness-95 transition" style={{ background: Y }}>
                  Get in touch <Icon name="arrow" className="w-4 h-4" />
                </a>
              </div>
              <div className="relative h-[360px] md:h-[459px] self-end">
                <img src="/portrait.jpg" alt="Waheed Ahmed Hyder" className="absolute bottom-0 inset-x-0 w-full h-full object-cover object-top rounded-t-[28px]" />
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[['18+', 'Years in engineering'], ['8', 'Companies'], ['32', 'Largest team led'], ['30', 'Certifications']].map(([n, l]) => (
              <div key={l} className="bg-white p-6 text-center shadow-sm">
                <div className="text-3xl font-bold" style={{ color: Y }}>{n}</div>
                <div className="text-xs text-[#707070] mt-1">{l}</div>
              </div>
            ))}
          </section>

          {/* Services */}
          <section id="services" className="pt-20 scroll-mt-4">
            <SectionTitle title="What I Do" sub="Hands-on engineering and leadership across the stack, from UI to cloud delivery." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {services.map((s) => (
                <div key={s.title} className="bg-white p-8 text-center shadow-sm hover:shadow-md transition group">
                  <div className="flex justify-center mb-5" style={{ color: Y }}><Icon name={s.icon} className="w-12 h-12" stroke={1.4} /></div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-[#707070] mt-3 leading-relaxed">{s.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Resume: Education + Work History */}
          <section id="resume" className="pt-20 scroll-mt-4">
            <SectionTitle title="Education" />
            <div className="bg-white p-6 sm:p-10 shadow-sm">
              <div className="grid md:grid-cols-[250px_1fr] gap-4 md:gap-10">
                <div>
                  <h3 className="font-semibold">Jawaharlal Nehru University</h3>
                  <p className="text-sm text-[#707070] mt-2">Graduate</p>
                  <span className="inline-block mt-2 px-2 py-0.5 text-xs" style={{ background: Y }}>2005</span>
                </div>
                <div>
                  <h3 className="font-semibold">B.Tech / B.E., Electronics and Telecommunication Engineering</h3>
                  <p className="text-sm text-[#707070] mt-2 leading-relaxed">Foundation in electronics and telecommunication engineering, followed by a career in software engineering and engineering leadership.</p>
                </div>
              </div>
            </div>

            <div className="pt-20">
              <SectionTitle title="Work History" sub="Nine roles across 18+ years, from freelance web developer to Technical Lead Manager." />
              <div className="bg-white p-6 sm:p-10 shadow-sm">
                {experience.map((e, i) => (
                  <div key={e.role + e.company}>
                    {i > 0 && <div className="border-t border-[#EDEDED] my-8" />}
                    <div className="grid md:grid-cols-[250px_1fr] gap-4 md:gap-10">
                      <div>
                        <h3 className="font-semibold">{e.role}</h3>
                        <p className="text-sm text-[#707070] mt-2">{e.company}</p>
                        <span className="inline-block mt-2 px-2 py-0.5 text-xs" style={{ background: Y }}>{e.dates}</span>
                      </div>
                      <p className="text-sm text-[#707070] leading-relaxed md:pt-0.5">{e.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section id="portfolio" className="pt-20 scroll-mt-4">
            <SectionTitle title="Portfolio" sub="Selected enterprise projects across insurance, banking, aviation and supply chain." />
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm">
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`transition ${cat === c ? 'font-medium' : 'text-[#707070] hover:text-[#282828]'}`} style={cat === c ? { color: Y } : undefined}>
                  {c}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {shown.map((p) => (
                <article key={p.title} className="bg-white shadow-sm hover:shadow-md transition flex flex-col">
                  <div className="h-28 flex items-end p-5" style={{ background: Y }}>
                    <span className="text-xs font-semibold uppercase tracking-wide">{p.client}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-[#707070] mt-3 leading-relaxed flex-grow">{p.body}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tech.map((t) => <span key={t} className="text-xs px-2 py-0.5 bg-[#F5F5F5] text-[#707070]">{t}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section id="certifications" className="pt-20 scroll-mt-4">
            <SectionTitle title="Certifications" sub="30 verified credentials, issued through Credly." />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[30px]">
              {certs.map((c) => (
                <a key={c.name} href={`${CREDLY}/badges`} target="_blank" rel="noopener noreferrer" className="bg-white shadow-sm hover:shadow-md transition flex flex-col">
                  <div className="aspect-square bg-[#FAFAFA] flex items-center justify-center p-4">
                    <img src={c.image} alt={c.name} loading="lazy" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between gap-2">
                    <h3 className="text-sm font-semibold leading-snug">{c.name}</h3>
                    <span className="text-xs inline-flex items-center gap-1" style={{ color: Y }}>View badge <Icon name="arrow" className="w-3 h-3" /></span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="pt-20 scroll-mt-4">
            <div className="grid md:grid-cols-2 gap-[30px]">
              <div className="bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold">Let’s <span style={{ color: Y }}>connect</span></h2>
                <p className="text-sm text-[#707070] leading-relaxed mt-4">
                  The best way to reach me is LinkedIn. Email and phone are intentionally not published on this page to keep them away from scrapers.
                </p>
                <div className="flex flex-col gap-3 mt-6">
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase hover:brightness-95 transition" style={{ background: Y }}>
                    Message on LinkedIn <Icon name="arrow" className="w-4 h-4" />
                  </a>
                  <a href={CREDLY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase border hover:bg-[#FFF8E6] transition" style={{ borderColor: Y }}>
                    View Credly profile
                  </a>
                </div>
              </div>
              <div className="bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold">Contact <span style={{ color: Y }}>information</span></h2>
                <dl className="mt-6 space-y-4 text-sm">
                  {[
                    ['Country:', 'India'],
                    ['City:', 'Hyderabad'],
                    ['Company:', 'IBM India Pvt. Limited'],
                    ['Languages:', 'English, Hindi, Telugu, Urdu'],
                    ['Domains:', 'Insurance, Capital Markets, Banking, Health Care'],
                    ['Onsite:', 'ABN AMRO (Netherlands), Euroclear (Brussels)'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-[#EDEDED] pb-3 last:border-0">
                      <dt className="text-[#707070]">{k}</dt>
                      <dd className="text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          {/* Companies */}
          <section className="pt-20">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-lg font-bold text-[#B5B5B5] uppercase tracking-wide">
              {companies.map((c) => <span key={c}>{c}</span>)}
            </div>
          </section>

          <footer className="mt-16 py-6 text-center text-xs text-[#707070] border-t border-[#E5E5E5]">
            © 2026 All Rights Reserved · Waheed Ahmed Hyder · wahyder.info
          </footer>
        </div>
      </main>
    </div>
  )
}
