 "use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  Heart,
  Home,
  Linkedin,
  Mail,
  Menu,
  Moon,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TestTube2,
  UserRound,
  X,
  Zap,
} from "lucide-react";

const projects = [
  {
    title: "AI Resume Screening Tool",
    category: "AI / NLP",
    description:
      "Ranks resumes using semantic embeddings, skill overlap and explainable matching.",
    github: "https://github.com/th0mas69/Resume-Screening-AI",
    tags: ["Python", "NLP", "Streamlit", "ML"],
    icon: BrainCircuit,
    gradient: "purple",
  },
  {
    title: "CoffeeGuard",
    category: "Android / ML",
    description:
      "Android application for detecting coffee leaf diseases with TensorFlow Lite.",
    github: "https://github.com/th0mas69/CoffeeGuard",
    tags: ["Kotlin", "TensorFlow Lite", "Android"],
    icon: Sparkles,
    gradient: "green",
  },
  {
    title: "BioFood BI",
    category: "Data / Analytics",
    description:
      "Business intelligence solution for food analytics with interactive dashboards.",
    github : "https://www.researchgate.net/publication/415287830_Case_Study_Sustainable_Business_Intelligence_System_for_BioFood",
    tags: ["Power BI", "KNIME", "SQL"],
    icon: Database,
    gradient: "blue",
  },
  {
    title: "Risk-Based Authentication",
    category: "Security / UX",
    description:
      "Research project exploring usability improvements through risk-based authentication.",
    github : "https://www.researchgate.net/publication/415270910_Balancing_Security_and_User_Experience_How_Risk-Based_Authentication_Can_Improve_End-User_Usability",
    tags: ["Security", "UX", "Research"],
    icon: ShieldCheck,
    gradient: "pink",
  },
];

const skills = [
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "purple",
    items: ["Python", "TensorFlow / PyTorch", "Scikit-learn", "NLP & Embeddings", "Sentence Transformers"],
  },
  {
    title: "Software Development",
    icon: Code2,
    color: "blue",
    items: ["Kotlin / Android", "Streamlit / FastAPI", "REST APIs", "Git & GitHub", "Clean Architecture"],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    color: "cyan",
    items: ["SQL", "Power BI", "KNIME", "Pandas / NumPy", "Data Visualization"],
  },
  {
    title: "UX & Design",
    icon: PenTool,
    color: "pink",
    items: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Usability Testing"],
  },
];

const process = [
  { number: "01", title: "Understand", text: "Analyze the problem, users and business goals.", icon: UserRound },
  { number: "02", title: "Research", text: "Explore data, existing solutions and useful insights.", icon: Search },
  { number: "03", title: "Build", text: "Design and build efficient, scalable solutions.", icon: Code2 },
  { number: "04", title: "Test", text: "Validate through experiments and real-world testing.", icon: TestTube2 },
  { number: "05", title: "Improve", text: "Iterate using feedback and keep improving.", icon: Rocket },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <main>
      <aside className="sidebar">
        <a href="#home" className="brand" aria-label="Thomas Luke home">
          <span>T</span>
        </a>

        <nav className="side-nav">
          {[
            ["Home", "#home", Home],
            ["Projects", "#projects", BriefcaseBusiness],
            ["Case Studies", "#case-studies", Search],
            ["Skills", "#skills", Code2],
            ["About", "#about", UserRound],
            ["Contact", "#contact", Mail],
          ].map(([label, href, Icon]) => {
            const NavIcon = Icon as React.ElementType;
            return (
              <a href={href as string} key={label as string}>
                <NavIcon size={17} />
                <span>{label as string}</span>
              </a>
            );
          })}
        </nav>

        <div className="side-bottom">
          <span className="availability-dot" />
          <span>Open to opportunities</span>
          <div className="social-row">
            <a href="https://github.com/th0mas69" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href="https://www.linkedin.com/in/thomas-luke-9871a5a6/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="mailto:tzluke01@gmail.com" aria-label="Email"><Mail size={17} /></a>
          </div>
        </div>
      </aside>

      <header className="mobile-header">
        <a href="#home" className="mobile-brand" onClick={closeMobile}>TL</a>
        <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      {mobileOpen && (
        <div className="mobile-menu">
          {["Home", "Projects", "Case Studies", "Skills", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={closeMobile}>
              {item}
            </a>
          ))}
        </div>
      )}


      <div className="page">
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> AI · SOFTWARE · DATA · UX</div>
            <p className="hello">Hi, I&apos;m</p>
            <h1>Thomas <span> Luke. </span></h1>
            <h2 className="font-reveal">
            Building{" "}
            <span className="animated-gradient">
            intelligent digital experiences.
            </span>
            </h2>
            <p className="font-reveal font-reveal-delay-1">
              AI / ML · Software Engineering · Data · Human-Centered Design
            </p>
            <div className="hero-actions">
              <a className="btn primary" className="animated-link" href="#projects">View My Work <ArrowRight size={18} /></a>
              <a className="btn secondary" href="#contact">Let&apos;s Connect <Mail size={17} /></a>
            </div>
     
          <div className="hero-visual" aria-hidden="true">
            <div className="orbital orbital-one" />
            <div className="orbital orbital-two" />
            <div className="brain">
              <BrainCircuit size={112} strokeWidth={1.1} />
            </div>
            <div className="metric metric-top">
              <small>NLP</small><strong>94%</strong><span>Accuracy</span>
            </div>
            <div className="metric metric-right">
              <small>RANKING</small><strong>98.6%</strong><span>Top Match</span>
            </div>
            <div className="metric metric-bottom">
              <small>SKILL MATCH</small><strong>82%</strong><span>Python · ML · NLP</span>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading
            kicker="FEATURED PROJECTS"
            title="Things I&apos;ve built."
            text="A selection of projects combining technology, problem solving and user experience."
            action="View all projects"
          />
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.title}>
                  <div className={`project-preview ${project.gradient}`}>
                    <Icon size={68} strokeWidth={1} />
                    <div className="preview-lines"><i /><i /><i /></div>
                  </div>
                  <div className="project-body">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <a href={project.github}target= "_blank"  rel="noopener noreferrer" className="project-link">Explore case study/github respository <ArrowRight size={15} /></a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="case-studies" className="section process-section">
          <SectionHeading
            kicker="HOW I WORK"
            title="From problem to product."
            text="A practical process for turning ideas into useful solutions."
          />
          <div className="process">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="process-step" key={step.number}>
                  <div className="process-icon"><Icon size={23} /></div>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {index < process.length - 1 && <div className="process-line" />}
                </div>
              );
            })}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeading
            kicker="SKILLS & TECHNOLOGIES"
            title="My toolkit."
            text="Technologies I use to research, design, build and analyze."
          />
          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article className="skill-card" key={skill.title}>
                  <div className={`skill-icon ${skill.color}`}><Icon size={23} /></div>
                  <h3>{skill.title}</h3>
                  <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-copy">
            <SectionHeading
              kicker="ABOUT ME"
              title="Curious about AI. Serious about building."
              text=""
            />
            <p className="about-text">
              I&apos;m a Computer Science postgraduate interested in AI, software development,
              data and human-centered technology. I enjoy turning complex problems into
              practical, understandable and usable solutions.
            </p>
            <div className="facts">
              <span>📍 Berlin, Germany</span>
              <span>✉ tzluke01@gmail.com</span>
            </div>

            <a className="btn primary small" href="/Thomas Luke (A).pdf" >
              Download CV <Download size={16} />
            </a>
            <a className="btn secondary small"
  href="/Thomas Luke (A).pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  View CV
</a>
          </div>

          <div className="stats">
            <div className="stat"><strong>10+</strong><span>Projects</span><BriefcaseBusiness /></div>
            <div className="stat"><strong>5+</strong><span>Tech areas</span><Code2 /></div>
            <div className="stat"><strong>AI</strong><span>Core focus</span><BrainCircuit /></div>
            <div className="stat"><strong>100%</strong><span>Curiosity</span><Heart /></div>
          </div>
        </section>

        <section id="contact" className="contact-card">
          <div>
            <p className="eyebrow"><span /> LET&apos;S BUILD SOMETHING</p>
            <h2>Great <span>together.</span></h2>
            <p>I&apos;m open to exciting opportunities, collaborations and interesting projects.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:tzluke01@gmail.com"><Mail /><span><small>Email</small>tzluke01@gmail.com</span></a>
            <a href="https://www.linkedin.com/in/thomas-luke-9871a5a6/" target="_blank" rel="noreferrer"><Linkedin /><span><small>LinkedIn</small>linkedin.com/in/thomas-luke-9871a5a6/</span></a>
            <a href="https://github.com/th0mas69" target="_blank" rel="noreferrer"><Github /><span><small>GitHub</small>github.com/th0mas69</span></a>
          </div>
        </section>

        <footer>
          <span>© 2026 Thomas Luke. All rights reserved.</span>
          <span>Built with <Heart size={13} /> using Next.js</span>
        </footer>
      </div>
    </main>
  );
}

function SectionHeading({
  kicker,
  title,
  text,
  action,
}: {
  kicker: string;
  title: string;
  text: string;
  action?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span /> {kicker}</p>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {action && <a href="#projects">{action} <ArrowRight size={16} /></a>}
    </div>
  );
}
