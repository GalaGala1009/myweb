import { useState, useEffect } from 'react';

import selfie from './images/myself.jpg';
import hero_background from './images/background.jpg';
import project1Img from './images/project1.png';
import project2Img from './images/project2.png';


// Regular CSS 
const styles = {
  // Layout
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'column',
  },
  oneThird: {
    width: '100%',
  },
  twoThirds: {
    width: '100%',
  },
  
  // Navigation
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  navbarScrolled: {
    backgroundColor: 'rgb(3, 3, 84)',   // navbar background color when scrolled
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '8px 0',
  },
  navbarTransparent: {
    backgroundColor: 'transparent',
    padding: '16px 0',
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'none',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginLeft: '32px',
    transition: 'color 0.3s ease',
  },
  navLinkActive: {
    color: '#d1d9ff',
    fontWeight: 'bold',
  },
  mobileMenuButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  },
  mobileMenu: {
    backgroundColor: 'rgb(0, 0, 128)',
    padding: '16px 0',
  },
  mobileMenuLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  // Hero section
  heroSection: {
    height: '100vh',
    backgroundSize: '100% 100%',
    backgroundImage: `url(${hero_background})`,
    //background: 'linear-gradient(135deg, rgb(0, 0, 128) 0%, rgb(30, 30, 180) 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  heroContent: {
    textAlign: 'center',
  },
  heroName: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    lineHeight: 1.2,
  },
  heroTitle: {
    fontSize: '1.25rem',
    color: '#d1d9ff',
    marginBottom: '32px',
  },
  heroButton: {
    backgroundColor: '#d1d9ff',
    color: 'rgb(0, 0, 128)',
    padding: '12px 32px',
    borderRadius: '9999px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  heroImageContainer: {
    marginTop: '48px',
    position: 'relative',
    width: '256px',
    height: '256px',
    margin: '0 auto',
  },
  heroImagePulse: {
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    backgroundColor: '#d1d9ff',
    animation: 'pulse 2s infinite',
  },
  heroImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid white',
  },

  // Section styles
  section: {
    padding: '80px 0',
  },
  sectionGray: {
    backgroundColor: '#f5f5f7',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: 'rgb(0, 0, 128)', // section title color
  },
  divider: {
    width: '80px',
    height: '4px',
    backgroundColor: '#d1d9ff',
    marginBottom: '48px',
  },
  
  // Content styles
  text: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#333',
    marginBottom: '16px',
  },
  textLarge: {
    fontSize: '1.125rem',
    lineHeight: 1.6,
    marginBottom: '32px',
  },
  
  // Skills
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '32px',
  },
  skillTag: {
    padding: '8px 16px',
    backgroundColor: '#f0f0f0',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    color: 'rgb(0, 0, 128)',
  },
  
  // Education
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: '32px',
    borderLeft: '2px solid #d1d9ff',
  },
  timelineDot: {
    position: 'absolute',
    left: '-6px',
    top: 0,
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#d1d9ff',
  },
  timelineDate: {
    marginBottom: '4px',
    fontSize: '0.875rem',
    color: '#666',
  },
  timelineTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: 'rgb(0, 0, 128)',
  },
  
  // Projects
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px',
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  },
  projectImage: {
    height: '200px',
    backgroundColor: 'rgb(0, 0, 128)',
    overflow: 'hidden',
  },
  projectImg: {
    width: '100%',
    height: '100%',
    //objectFit: 'cover',
    objectFit: 'contain',
    opacity: 1,
  },
  projectContent: {
    padding: '24px',
  },
  projectTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: 'rgb(0, 0, 128)',
  },
  projectDescription: {
    color: '#555',
    marginBottom: '16px',
    whiteSpace: 'pre-line',
  },
  projectTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  projectTag: {
    padding: '4px 12px',
    backgroundColor: '#f0f0f0',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    color: 'rgb(0, 0, 128)',
  },
  
  // Certificates
  certificateCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  certificateTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: 'rgb(0, 0, 128)',
    marginBottom: '8px',
  },
  certificateIssuer: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '16px',
  },
  certificateDate: {
    fontSize: '0.8rem',
    color: '#666',
    marginTop: '16px',
  },
  certificateLink: {
    color: 'rgb(0, 0, 128)',
    textDecoration: 'none',
    fontWeight: '500',
    marginTop: '16px',
    display: 'inline-block',
  },

  // Contact
  contactCard: {
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
  },
  contactIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'rgb(0, 0, 128)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginRight: '16px',
  },
  contactTitle: {
    fontWeight: 'bold',
    color: 'rgb(0, 0, 128)',
    marginBottom: '4px',
  },
  contactLinks: {
    display: 'flex',
    gap: '16px',
    marginTop: '8px',
  },
  contactLink: {
    color: '#555',
    textDecoration: 'none',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    minHeight: '120px',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: 'rgb(0, 0, 128)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  
  // Footer
  footer: {
    backgroundColor: 'rgb(3, 3, 84)',
    color: 'white',
    padding: '32px 0',
    textAlign: 'center',
  },
};

// Add media queries for responsive design
if (typeof window !== 'undefined') {
  const mediaStyles = document.createElement('style');
  mediaStyles.type = 'text/css';
  mediaStyles.innerHTML = `
    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.05); opacity: 0.3; }
      100% { transform: scale(1); opacity: 0.6; }
    }
    
    @media (min-width: 768px) {
      .two-column-layout {
        flex-direction: row !important;
      }
      .one-third {
        width: 33.333% !important;
      }
      .two-thirds {
        width: 66.667% !important;
      }
      .nav-links {
        display: flex !important;
        gap: 32px;
      }
      .projects-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .form-row {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .hero-content {
        display: flex !important;
        flex-direction: row !important;
        align-items: center;
        text-align: left !important;
      }
      .hero-text {
        width: 50% !important;
      }
      .hero-image-container {
        width: 50% !important;
        display: flex;
        justify-content: center;
      }
    }
    
    @media (min-width: 1024px) {
      .projects-grid {
        grid-template-columns: repeat(3, 1fr) !important;
      }
    }
  `;
  
  if (typeof document !== 'undefined') {
    document.head.appendChild(mediaStyles);
  }
}

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'certificates', 'projects', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // Personal data
  const personalData = {
    name: "Wei-Zheng Wu (Wayne)",
    title: "A master's student in Computer Science",
    email: "waynewu1pn2@gmail.com",
    github: "https://github.com/GalaGala1009",
    linkedin: "https://www.linkedin.com/in/wu-wayne-956732234/",
    bio: "I am currently a CS Master student of NCHU in Taiwan, focusing on dynamic slice resource allocation (DSRA) and slice admission control (SAC) problem in 5G/6G network.",
    education: [
      {
        degree: "Master's in Computer Science and Engineering",
        institution: "National Chung Hsing University",
        year: "2024-2026",
        details: " Research Focus: Dynamic Slice Resource Allocation and Slice Admission Control in 5/6G networks"
      },
      {
        degree: "Bachelor's in Computer Science",
        institution: " Tamkang University",
        year: "2020-2023",
        details: "College Project : Controlling a TV via gesture recognition using computer vision"
      }
    ],
    projects: [
      {
        title: "Machine Learning Projects",
        description: "This repo contains various machine learning project.",
        link: "https://github.com/GalaGala1009/Machine-Learning-Projects",
        tags: ["Python", "Machine Learning", "DRL", "Pytorch"],
        image : project1Img
      },
      {
        title: "Leetcode Solutions",
        description: "This notebook contains my Leetcode solutions.",
        link : "https://hackmd.io/rl8hCxbkS3eMgNqxDDRg2A?view#202505",
        tags: ["Leetcode", "Algorithms", "Data Structures"],
        image : project2Img
      },
      {
        title: "P3",
        description: "TBD",
        tags: ["A", "B", "C"]
      }
    ],
    skills: ["C", "C++", "Python", "JAVA", "JavaScript", "machine learning", "DRL", "RL"],
    certificates: [
      {
        name: "TOEIC 765",
        issuer: "TOEIC"
        //date: "Issued Aug 2023",
        //link: "#" // 請替換成您的證照連結
      },
      {
        name: "JLPT N2",
        issuer: "JLPT"
        //date: "Issued Dec 2023",
        //link: "#" // 請替換成您的證照連結
      },
      {
        name: "CPE 4/7",
        issuer: "CPE"
      }
    ]
  };

  return (
    <div>
      {/* Navigation */}
      <nav style={{
        ...styles.navbar,
        ...(scrolled ? styles.navbarScrolled : styles.navbarTransparent)
      }}>
        <div style={{...styles.container, ...styles.navbarContainer}}>
          <a 
            href="#home" 
            style={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            {personalData.name.split(' ')[0]}<span style={{color: '#d1d9ff'}}>.</span>
          </a>
          
          {/* Desktop Menu */}
          <div style={styles.navLinks} className="nav-links">
            {['home', 'about', 'education', 'certificates', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                style={{
                  ...styles.navLink,
                  ...(activeSection === section ? styles.navLinkActive : {})
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            style={styles.mobileMenuButton}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <div style={{...styles.container, ...styles.mobileMenuLinks}}>
              {['home', 'about', 'education', 'certificates', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  style={{
                    ...styles.navLink,
                    marginLeft: 0,
                    ...(activeSection === section ? styles.navLinkActive : {})
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.heroSection}>
        <div style={styles.container}>
          <div style={styles.heroContent} className="hero-content">
            <div style={{textAlign: 'center'}} className="hero-text">
              <h1 style={styles.heroName}>
                Hello, I'm<br />
                <span style={{color: '#d1d9ff'}}>{personalData.name}</span>
              </h1>
              <p style={styles.heroTitle}>
                {personalData.title}
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                style={styles.heroButton}
              >
                Get In Touch
              </button>
            </div>
            <div style={{marginTop: '48px'}} className="hero-image-container">
              <div style={styles.heroImageContainer}>
                <div style={styles.heroImagePulse}></div>
                <img
                  src={selfie}
                  alt="Profile"
                  style={styles.heroImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.flexColumn} className="two-column-layout">
            <div style={styles.oneThird} className="one-third">
              <h2 style={styles.sectionTitle}>About Me</h2>
              <div style={styles.divider}></div>
            </div>
            <div style={styles.twoThirds} className="two-thirds">
              <p style={styles.textLarge}>
                {personalData.bio}
              </p>
              
              <h3 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>My Skills</h3>
              <div style={styles.skillsContainer}>
                {personalData.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    style={styles.skillTag}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{...styles.section, ...styles.sectionGray}}>
        <div style={styles.container}>
          <div style={styles.flexColumn} className="two-column-layout">
            <div style={styles.oneThird} className="one-third">
              <h2 style={styles.sectionTitle}>Education</h2>
              <div style={styles.divider}></div>
            </div>
            <div style={styles.twoThirds} className="two-thirds">
              <div style={styles.timeline}>
                {personalData.education.map((edu, index) => (
                  <div key={index} style={styles.timelineItem}>
                    <div style={styles.timelineDot}></div>
                    <div style={styles.timelineDate}>{edu.year}</div>
                    <h3 style={styles.timelineTitle}>{edu.degree}</h3>
                    <p style={{...styles.text, fontWeight: '500'}}>{edu.institution}</p>
                    <p style={{...styles.text, color: '#555'}}>{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" style={styles.section}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>Certificates</h2>
          <div style={{...styles.divider, margin: '0 auto 48px auto'}}></div>
          
          <div style={styles.projectsGrid} className="projects-grid">
            {personalData.certificates.map((cert, index) => (
              <div key={index} style={styles.certificateCard}>
                <div>
                  <h3 style={styles.certificateTitle}>{cert.name}</h3>
                  <p style={styles.certificateIssuer}>{cert.issuer}</p>
                </div>
                <div>
                  <p style={styles.certificateDate}>{cert.date}</p>
                  
                  {/*<a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.certificateLink}
                  >
                    Show credential
                  </a>*/}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{...styles.section, ...styles.sectionGray}}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>My Projects</h2>
          <div style={{...styles.divider, margin: '0 auto 48px auto'}}></div>
          
          <div style={styles.projectsGrid} className="projects-grid">
            {personalData.projects.map((project, index) => (
              <div 
                key={index} 
                style={styles.projectCard}
              >
                <div style={styles.projectImage}>
                  <img 
                    //src={`/api/placeholder/400/${300 + index * 10}`} 
                    src = {project.image}
                    alt = {project.title} 
                    style = {styles.projectImg}
                  />
                </div>
                <div style={styles.projectContent}>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{...styles.contactLink, color: 'rgb(0, 0, 128)', display: 'block', marginBottom: '16px'}}
                    >
                      View Project
                    </a>
                  )}
                  <div style={styles.projectTags}>
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        style={styles.projectTag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{...styles.section, ...styles.sectionGray}}>
        <div style={styles.container}>
          <div style={styles.flexColumn} className="two-column-layout">
            <div style={styles.oneThird} className="one-third">
              <h2 style={styles.sectionTitle}>Get In Touch</h2>
              <div style={styles.divider}></div>
            </div>
            <div style={styles.twoThirds} className="two-thirds">
              <div style={styles.contactCard}>
                <div style={styles.contactItem}>
                  <div style={styles.contactIcon}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 style={styles.contactTitle}>Email</h3>
                    <p>{personalData.email}</p>
                  </div>
                </div>

                <div style={styles.contactItem}>
                  <div style={styles.contactIcon}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 style={styles.contactTitle}>Connect</h3>
                    <div style={styles.contactLinks}>
                      <a 
                        href={personalData.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.contactLink}
                      >
                        GitHub
                      </a>
                      <a 
                        href={personalData.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={styles.contactLink}
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}