import PrintButton from './PrintButton'

export const metadata = {
  title: 'Cover Letter - Waheed Ahmed Hyder',
  description: 'Cover letter of Waheed Ahmed Hyder, Technical Lead Manager.',
}

const LINKEDIN = 'https://www.linkedin.com/in/waheed-ahmed-hyder'

export default function CoverLetter() {
  return (
    <>
      <nav className="nav no-print">
        <a className="nav-brand" href="/" style={{ textDecoration: 'none', color: 'inherit' }}>wahyder.info</a>
        <a href="/">Home</a>
        <a className="btn btn-primary" href="/Waheed-Ahmed-Hyder-Resume.pdf" download>Download CV</a>
      </nav>

      <main className="wrap">
        <article className="letter">
          <header>
            <h1>Waheed Ahmed Hyder</h1>
            <p className="role">Technical Lead Manager</p>
            <p className="meta">
              Hyderabad, India · <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">linkedin.com/in/waheed-ahmed-hyder</a>
            </p>
          </header>

          <p>Dear Hiring Manager,</p>

          <p>
            I am writing to express my interest in an engineering leadership role with your team. With more than 18 years of experience
            designing and delivering scalable web and enterprise applications, I bring a blend of hands-on technical depth and people
            leadership that I believe would help your organisation deliver reliably and grow its engineers.
          </p>

          <p>
            I currently work as a Technical Lead Manager at IBM, where I direct a high-performing team building robust web applications,
            keep clients and cross-functional teams aligned on requirements, and resolve complex technical issues quickly so projects
            land on time. I introduced and championed Agile practices that raised team productivity and drove continuous process
            improvement. Earlier, as Technical Lead at Thrikasa Software Solutions, I coordinated a cross-functional product team of 32.
          </p>

          <p>
            My technical foundation is full stack: the MEAN and MERN stacks, React, Angular, Next.js, Node.js and .NET, backed by
            PostgreSQL, MongoDB and SQL Server, and delivered through Docker, Kubernetes, Jenkins and GitHub Actions on AWS, Azure
            and IBM Cloud. Recent work includes a scalable claims intake portal for Chubb, an automated discrepancy resolution
            platform for IBM, and the modernisation of Delta Air Lines cloud applications. Onsite engagements with ABN AMRO in the
            Netherlands and Euroclear in Brussels gave me experience working closely with international banking and capital-markets teams.
          </p>

          <p>
            I hold certifications including AWS Certified Developer, Professional Scrum Master I, PMP and IBM Generative &amp; Agentic AI,
            and I stay current through continuous learning. What I enjoy most is turning ambiguous requirements into dependable
            software while mentoring engineers to do their best work.
          </p>

          <p>
            I would welcome the chance to discuss how I can contribute to your team. My resume is available for download on this site,
            and the best way to reach me is through LinkedIn. Thank you for your time and consideration.
          </p>

          <p className="sign">Sincerely,<br /><b>Waheed Ahmed Hyder</b></p>

          <div className="actions no-print">
            <a className="btn btn-primary" href="/Waheed-Ahmed-Hyder-Resume.pdf" download>Download CV</a>
            <PrintButton />
          </div>
        </article>
      </main>
    </>
  )
}
