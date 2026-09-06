import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  LineChart,
  Mail,
  PlayCircle,
  X,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const technicalExperience = [
  {
    role: "Accounting Software Developer Intern",
    company: "All Good Accounting",
    period: "May - Jul 2026",
    summary:
      "Developed accounting software features across financial workflows, including the chart of accounts, journal entries, account registers, transaction records, and reporting.",
    details: [
      "Expanded functionality for account types, tax codes, subaccounts, and debit/credit behavior.",
      "Built frontend and backend features using React, TypeScript, Node.js, MongoDB, and GitHub.",
      "NDA-protected accounting software work, so project screenshots are not shown publicly.",
    ],
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Accounting systems"],
  },
  {
    role: "Website Developer Intern",
    company: "IFSS Inc.",
    period: "Jan - Mar 2026",
    summary:
      "Developed and deployed a survey platform prototype supporting digital technology adoption research.",
    details: [
      "Implemented a PostgreSQL schema for survey data and built the platform with React and Django.",
      "Designed a mobile-responsive interface focused on accessibility, usability, and stakeholder clarity.",
      "The platform included administrative tools for creating surveys, editing drafts, viewing responses, and sharing public survey links.",
      "SurveyJS was used for survey forms, with the frontend deployed through Vercel, backend through Render, and database hosted on Neon.",
    ],
    tags: ["React", "Django", "PostgreSQL", "SurveyJS", "Accessibility"],
    screenshots: [
      {
        src: "/portfolio/survey-login.png",
        alt: "IFSS Survey Platform admin login screen.",
      },
      {
        src: "/portfolio/survey-management.png",
        alt: "IFSS Survey Platform survey management dashboard.",
      },
      {
        src: "/portfolio/survey-editor.png",
        alt: "IFSS Survey Platform survey editor screen.",
      },
      {
        src: "/portfolio/survey-results.png",
        alt: "IFSS Survey Platform survey response results screen.",
      },
    ],
  },
];

const supportingExperience = [
  {
    role: "Accounting & Business Teaching Assistant",
    company: "Simon Fraser University",
    period: "May - Aug 2025",
    summary:
      "Led weekly tutorials for 80+ students on managerial accounting, financial statements, financial analysis, and business problem-solving.",
    details: [
      "Developed class materials and managed grading workflows using Microsoft Excel.",
      "Translated technical business concepts into practical examples for students.",
    ],
    tags: ["Accounting", "Excel", "Teaching", "Financial analysis"],
  },
  {
    role: "Private Tutor",
    company: "Self-employed",
    period: "Sep 2019 - May 2025",
    summary:
      "Delivered mathematics tutoring while independently managing scheduling, invoicing, and business finances.",
    details: [
      "Adapted explanations to different learning styles and built long-term client relationships.",
      "Used Excel to track finances, payments, and operations.",
    ],
    tags: ["Mathematics", "Client communication", "Excel", "Operations"],
  },
];

const projects = [
  {
    title: "Restaurant Location Analysis",
    type: "AI, Machine Learning & Data Analytics",
    period: "Jun - Aug 2026",
    icon: LineChart,
    summary:
      "Built a data analysis project exploring how demographic factors relate to restaurant performance across Metro Vancouver.",
    points: [
      "Combined Yelp and Statistics Canada Census API data into an analysis-ready dataset.",
      "Developed a regression model in Python using scikit-learn, pandas, and NumPy.",
      "Created an interactive interface to help explore location and demographic insights visually.",
    ],
    tags: ["Python", "scikit-learn", "pandas", "NumPy", "APIs"],
    links: [
      {
        href: "https://interface-bice-kappa.vercel.app",
        label: "Open project",
        icon: ExternalLink,
      },
    ],
    screenshots: [
      {
        src: "/portfolio/restaurant-hero.png",
        alt: "Restaurant location model landing screen.",
      },
      {
        src: "/portfolio/restaurant-map.png",
        alt: "Restaurant location model map selection screen.",
      },
      {
        src: "/portfolio/restaurant-results.png",
        alt: "Restaurant location model output results screen.",
      },
    ],
  },
  {
    title: "EasyChart",
    type: "Data Visualization Web Application",
    period: "Jul - Aug 2025",
    icon: BarChart3,
    summary:
      "Helped build a full-stack application that converts raw datasets into visual reports and streamlines manual reporting.",
    points: [
      "Implemented file upload handling and frontend-backend communication using React and Node.js.",
      "Prototyped interfaces in Figma and implemented responsive components with Tailwind CSS.",
      "Users can upload data in various formats, including PDF, and the platform automatically generates relevant visualizations for users to choose from.",
      "Visuals can then be edited and exported in various formats.",
      "The project used DeepSeek R1T2 Chimera through OpenRouter and Chart.js.",
    ],
    tags: ["React", "Node.js", "Tailwind CSS", "Figma", "Data visualization"],
    links: [
      {
        href: "https://www.youtube.com/watch?v=mYPEXPJwkJY",
        label: "Watch demo",
        icon: PlayCircle,
      },
    ],
    screenshots: [
      {
        src: "/portfolio/easychart-upload.png",
        alt: "EasyChart upload screen.",
      },
      {
        src: "/portfolio/easychart-edit-data.png",
        alt: "EasyChart edit data screen.",
      },
      {
        src: "/portfolio/easychart-choose-visual.png",
        alt: "EasyChart choose visualization screen.",
      },
      {
        src: "/portfolio/easychart-edit-save.png",
        alt: "EasyChart edit and save chart screen.",
      },
    ],
  },
];

const education = {
  degree: "Computing Science and Business Administration (Joint Major)",
  school: "Simon Fraser University, Burnaby, BC",
  graduation: "Expected Graduation: Apr 2027",
  highlights: [
    "4.08 GPA",
    "President's & Dean's Honour Rolls (Spring & Summer 2026)",
    "Beedie Alumni Scholarship (2026)",
  ],
};

const skillGroups = [
  {
    title: "Software Development",
    icon: Code2,
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Frameworks & Data",
    icon: Database,
    skills: ["React.js", "Django", "pandas", "Tailwind CSS", "MongoDB", "GitHub Actions"],
  },
  {
    title: "Business & Design",
    icon: BriefcaseBusiness,
    skills: ["Microsoft Excel", "Tableau", "Figma", "Canva", "Microsoft Office"],
  },
];

function EntryPoints({ summary, points }) {
  return (
    <ul className="entry-points">
      <li>{summary}</li>
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

function ScreenshotGallery({ screenshots, onSelect }) {
  if (!screenshots?.length) {
    return null;
  }

  return (
    <div className="screenshot-gallery">
      {screenshots.map((screenshot) => (
        <figure className="screenshot-frame" key={screenshot.src}>
          <button type="button" onClick={() => onSelect(screenshot)} aria-label={`Open larger view: ${screenshot.alt}`}>
            <img src={screenshot.src} alt={screenshot.alt} />
          </button>
        </figure>
      ))}
    </div>
  );
}

function LinkButton({ link }) {
  const Icon = link.icon;

  return (
    <a href={link.href} target="_blank" rel="noreferrer">
      {link.label} <Icon size={17} />
    </a>
  );
}

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project screenshot">
      <button className="lightbox-backdrop" type="button" aria-label="Close image preview" onClick={onClose} />
      <div className="lightbox-panel">
        <button className="lightbox-close" type="button" aria-label="Close image preview" onClick={onClose}>
          <X size={20} />
        </button>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
}

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Header />
      <main>
        <section id="home" className="hero-section section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>Shelby Haines</h1>
            <p className="hero-lede">
              Computing Science and Business Administration student at Simon Fraser University, building software and
              data tools for practical business problems.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                View projects <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell content-section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Technical work experience</h2>
          </div>

          <div className="entry-stack">
            {technicalExperience.map((item) => (
              <article className="portfolio-entry" key={`${item.role}-${item.company}`}>
                <div className="entry-header">
                  <div>
                    <p className="entry-period">{item.period}</p>
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                  </div>
                </div>
                <EntryPoints summary={item.summary} points={item.details} />
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ScreenshotGallery screenshots={item.screenshots} onSelect={setSelectedImage} />
              </article>
            ))}
          </div>

          <div className="supporting-experience">
            <div className="subsection-heading">
              <p className="eyebrow">Additional Experience</p>
              <h3>Business, teaching, and client-facing experience</h3>
            </div>
            <div className="supporting-grid">
              {supportingExperience.map((item) => (
                <article className="supporting-card" key={`${item.role}-${item.company}`}>
                  <p className="entry-period">{item.period}</p>
                  <h4>{item.role}</h4>
                  <p className="company">{item.company}</p>
                  <EntryPoints summary={item.summary} points={item.details} />
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell content-section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Technical projects</h2>
          </div>

          <div className="entry-stack">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="portfolio-entry" key={project.title}>
                  <div className="entry-header">
                    <div>
                      <p className="entry-period">{project.period}</p>
                      <p className="project-type">{project.type}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <div className="icon-tile">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                  </div>
                  <EntryPoints summary={project.summary} points={project.points} />
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <LinkButton link={link} key={link.href} />
                    ))}
                  </div>
                  <ScreenshotGallery screenshots={project.screenshots} onSelect={setSelectedImage} />
                </article>
              );
            })}
          </div>
        </section>

        <section id="education" className="section-shell content-section">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Education</p>
            <h2>Education</h2>
          </div>

          <article className="education-card">
            <div className="education-icon">
              <GraduationCap size={28} aria-hidden="true" />
            </div>
            <div>
              <h3>{education.degree}</h3>
              <p className="company">{education.school}</p>
              <p>{education.graduation}</p>
              <div className="tag-row">
                {education.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="skills" className="section-shell content-section">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Skills</p>
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <Icon size={26} aria-hidden="true" />
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-shell contact-inner">
            <div>
              <p className="eyebrow">Contact</p>
              <p>I am open to internships and new graduate roles.</p>
            </div>
            <div className="contact-actions" aria-label="Contact links">
              <a href="mailto:srh11@sfu.ca">
                Email <Mail size={18} />
              </a>
              <a href="https://www.linkedin.com/in/shelbyhaines" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}

export default App;
