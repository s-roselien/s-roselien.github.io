import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  LineChart,
  Mail,
  Phone,
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
      "Led weekly tutorials for 80+ students on managerial accounting, financial statements and business problem-solving.",
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
    links: [],
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
    <div className="entry-points">
      <p>{summary}</p>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function ScreenshotGallery({ screenshots, expandedSrc, onToggle }) {
  if (!screenshots?.length) {
    return null;
  }

  return (
    <div className="screenshot-gallery">
      {screenshots.map((screenshot) => (
        <figure
          className={`screenshot-frame${expandedSrc === screenshot.src ? " is-expanded" : ""}`}
          key={screenshot.src}
        >
          <button
            type="button"
            onClick={() => onToggle(screenshot.src)}
            aria-label={`${expandedSrc === screenshot.src ? "Close" : "Enlarge"} preview: ${screenshot.alt}`}
            aria-expanded={expandedSrc === screenshot.src}
          >
            <img src={screenshot.src} alt={screenshot.alt} />
            {expandedSrc === screenshot.src && (
              <span className="screenshot-close" aria-hidden="true">
                <X size={18} />
              </span>
            )}
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

function SectionHeading({ children }) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
    </div>
  );
}

function App() {
  const [expandedImageSrc, setExpandedImageSrc] = useState(null);

  useEffect(() => {
    function handleAnchorClick(event) {
      const anchor = event.target.closest('a[href^="#"]');

      if (!anchor || event.defaultPrevented) {
        return;
      }

      const targetId = anchor.getAttribute("href");
      const target = targetId && document.querySelector(targetId);

      if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      event.preventDefault();

      const headerOffset = 90;
      const startY = window.scrollY;
      const targetY = target.getBoundingClientRect().top + startY - headerOffset;
      const distance = targetY - startY;
      const duration = 1050;
      const startTime = performance.now();

      function easeInOutQuad(progress) {
        return progress < 0.5 ? 2 * progress ** 2 : 1 - (-2 * progress + 2) ** 2 / 2;
      }

      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, startY + distance * easeInOutQuad(progress));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          window.history.pushState(null, "", targetId);
        }
      }

      window.requestAnimationFrame(step);
    }

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  useEffect(() => {
    if (!expandedImageSrc) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setExpandedImageSrc(null);
      }
    }

    function handlePointerDown(event) {
      if (!event.target.closest(".screenshot-frame")) {
        setExpandedImageSrc(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [expandedImageSrc]);

  function toggleScreenshot(src) {
    setExpandedImageSrc((currentSrc) => (currentSrc === src ? null : src));
  }

  return (
    <>
      <Header />
      <main>
        <section id="home" className="hero-section section-shell">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span>Portfolio</span>
              <span aria-hidden="true">|</span>
              <span>Shelby Haines</span>
            </h1>
            <p className="hero-lede">
              I am a Computing Science and Business Administration student at Simon Fraser University with experience
              in software development, data analysis, and business problem-solving. I am interested in opportunities
              that apply software development to new business problems.
            </p>
            <div className="hero-actions">
              <a className="secondary-action" href="#experience">
                View work experience
              </a>
              <a className="secondary-action" href="#projects">
                View projects
              </a>
              <a className="secondary-action" href="#education">
                View education
              </a>
              <a className="secondary-action" href="#skills">
                View skills
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell content-section">
          <SectionHeading>Experience</SectionHeading>
          <h3 className="section-subheading">Technical work experience</h3>

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
                <ScreenshotGallery
                  screenshots={item.screenshots}
                  expandedSrc={expandedImageSrc}
                  onToggle={toggleScreenshot}
                />
              </article>
            ))}
          </div>

          <div className="supporting-experience">
            <div className="subsection-heading">
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
          <SectionHeading>Projects</SectionHeading>

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
                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <LinkButton link={link} key={link.href} />
                      ))}
                    </div>
                  )}
                  <ScreenshotGallery
                    screenshots={project.screenshots}
                    expandedSrc={expandedImageSrc}
                    onToggle={toggleScreenshot}
                  />
                </article>
              );
            })}
          </div>
        </section>

        <section id="education" className="section-shell content-section">
          <SectionHeading>Education</SectionHeading>

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
          <SectionHeading>Skills</SectionHeading>

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
              <h2>Contact</h2>
              <div className="contact-details">
                <a href="mailto:srh11@sfu.ca">srh11@sfu.ca</a>
                <a href="tel:+16044428307">604 442 8307</a>
              </div>
            </div>
            <div className="contact-actions" aria-label="Contact links">
              <a href="mailto:srh11@sfu.ca">
                Email <Mail size={18} />
              </a>
              <a href="tel:+16044428307">
                Phone <Phone size={18} />
              </a>
              <a href="https://www.linkedin.com/in/shelbyhaines" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
