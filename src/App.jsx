import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import AIngineering from './pages/AIngineering'
import XperienceAI from './pages/XperienceAI'
import TalentAI from './pages/TalentAI'
import GCC from './pages/GCC'
import OurStory from './pages/OurStory'
import Home from './pages/Home'
import Chatbot from './components/Chatbot'
import FintechStory from './pages/FintechStory'
import ManufacturingStory from './pages/ManufacturingStory'
import TelecomStory from './pages/TelecomStory'
import BreakthruLabsStory from './pages/BreakthruLabsStory'
import ContactUs from './pages/ContactUs'
import Strategy from './pages/Strategy'
import DataAI from './pages/DataAI'
import Engineering from './pages/Engineering'
import Growth from './pages/Growth'
import ProductSquads from './pages/ProductSquads'
import FamilyOffice from './pages/FamilyOffice'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import EcosystemPage from './pages/EcosystemPage'
import CareersPage from './pages/CareersPage'

function Header({ onToggleChatbot }) {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id))
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <img
            src="/breakthru.svg"
            alt="breakthru.ai logo"
            className="header-logo-img"
          />
          <span className="header-logo-text">breakthru.ai</span>
        </Link>
        <nav ref={navRef} className="nav-menu" role="navigation">
          {/* Talk to Us CTA */}
          <Link to="/contactus" className="nav-cta">
            Talk to us !
          </Link>

          {/* Hamburger Menu (What We Do) */}
          <div className="nav-dropdown nav-hamburger-dropdown">
            <button
              className="nav-hamburger-btn"
              onClick={() => toggleDropdown('whatwedo')}
              aria-expanded={activeDropdown === 'whatwedo'}
              aria-haspopup="true"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
            <div className={`nav-dropdown-list nav-hamburger-list ${activeDropdown === 'whatwedo' ? 'open' : ''}`}>
              <Link
                to="/aboutus"
                className="nav-dropdown-link"
                onClick={() => setActiveDropdown(null)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="nav-dropdown-link"
                onClick={() => setActiveDropdown(null)}
              >
                Services
              </Link>

              <Link
                to="/careers"
                className="nav-dropdown-link"
                onClick={() => setActiveDropdown(null)}
              >
                Careers
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

const timelineItems = [
  {
    id: 1,
    title: 'Enterprise Architecture & Strategy',
    colorClass: 'inncolor-1',
  },
  {
    id: 2,
    title: 'GCC & Captive-as-a-Service Models',
    colorClass: 'inncolor-2',
  },
  {
    id: 3,
    title: 'M&A and Talent Transformation Strategy',
    colorClass: 'inncolor-3',
  },
  {
    id: 4,
    title: 'Generative AI Consulting & Value Design',
    colorClass: 'inncolor-4',
  },
]

const outcomes = [
  'Clear alignment between business goals and tech execution',
  'Faster time-to-value for AI and transformation initiatives',
  'Reduced risk in large-scale system or operating model changes',
  'Improved internal capability maturity and stakeholder alignment',
]

function ConsultingAI() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.indexOf(entry.target)
            if (idx !== -1) {
              setActiveIndex(idx)
            }
          }
        })
      },
      { threshold: 0.5, rootMargin: '-10% 0px -10% 0px' }
    )

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const progressPercent =
    ((activeIndex + 1) / timelineItems.length) * 100

  return (
    <div className="wrapper-content">
      {/* Hero Section */}
      <section className="content-splits hero-section">
        <div className="top-bg-colors">
          <img
            src="https://cdn.prod.website-files.com/6803179c51bf5b2151344c46/6803b4d2a77749c3dfcc4c71_Rectangle%2018%402x.png"
            alt=""
            className="hero-bg-image"
            loading="lazy"
          />
        </div>

        <div className="about-us">
          <div className="our-services-tag">
            <img
              src="https://cdn.prod.website-files.com/6803179c51bf5b2151344c46/6804bfe11fa4a378b7321682_ai-idea.png"
              alt=""
              className="service-icon"
              loading="lazy"
            />
            <span className="service-label">Our Services</span>
          </div>

          <h1 className="hero-heading">
            Future <br />
            of Consulting<sup>AI</sup>
          </h1>

          <div className="hero-image-wrap">
            <img
              src="https://cdn.prod.website-files.com/6803179c51bf5b2151344c46/6804bf53eed6c111d8b3c64c_2151908095%201(3).png"
              alt=""
              className="hero-illustration"
              loading="lazy"
            />
          </div>
        </div>

        <div className="page-divider">
          <p className="intro-paragraph">
            J2W&rsquo;s Consulting<sup>AI</sup> practice helps enterprises
            align business ambition with technological direction; bridging the
            gap between intent and execution.
          </p>
          <p className="intro-paragraph">
            We work closely with CXOs and transformation leaders to architect
            intelligent strategies that are actionable, scalable, and aligned to
            real-world outcomes.
          </p>
          <p className="intro-paragraph">
            Whether you&rsquo;re navigating digital maturity, integrating AI
            into core operations, or preparing for M&amp;A-led transformation,
            our role is to bring structured clarity and momentum to every phase.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="what-we-offer">
        <div className="section-title-center">
          <h4 className="section-subtitle">_ What We Offer</h4>
          <h2 className="section-heading">
            Our <br />
            Consulting<sup>AI</sup>
            <br />
            capabilities include:
          </h2>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section" ref={timelineRef}>
        <div className="timeline-component">
          <div className="timeline-progress">
            <div
              className="timeline-progress-bar"
              style={{ height: `${progressPercent}%` }}
            />
          </div>

          {timelineItems.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${index <= activeIndex ? 'active' : ''}`}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="timeline-center">
                <div
                  className={`timeline-circle ${index <= activeIndex ? 'active' : ''}`}
                >
                  <div className={item.colorClass} />
                </div>
              </div>
              <div className="timeline-right">
                <h3 className="timeline-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Deliver */}
      <section className="deliver-section">
        <h2 className="deliver-heading">How We Deliver</h2>
        <div className="deliver-image-wrap">
          <img
            src="https://cdn.prod.website-files.com/6803179c51bf5b2151344c46/68054fe626cb673fc6a9e336_Image%20Consult.svg"
            alt=""
            className="deliver-illustration"
            loading="lazy"
          />
        </div>
        <p className="deliver-text">
          Our approach combines domain-led consulting, agile co-creation, and
          outcome-first thinking.
          <br />
          <br />
          We operate in cross-functional pods that align with business, tech,
          and change management teams, ensuring every engagement delivers both
          clarity and speed.
          <br />
          <br />
          We design for execution from day one.
        </p>
      </section>

      {/* Outcomes We Drive */}
      <section className="outcomes-section">
        <h2 className="deliver-heading">Outcomes We Drive</h2>
        <div className="outcomes-grid">
          {outcomes.map((text, index) => (
            <div key={index} className="outcome-card">
              <div className="outcome-number">
                [{String(index + 1).padStart(2, '0')}]
              </div>
              <div className="outcome-text">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="secondary-cta">
        <div className="section-title-center">
          <h2 className="section-heading">
            Lead with Clarity. <br />
            We help you move with purpose and precision.
          </h2>
          <a href="#" className="cta-link">
            <div className="cta-inner">
              <h4 className="cta-text">
                See Our Consulting <br />
                Blueprint
              </h4>
              <img
                src="https://cdn.prod.website-files.com/6803179c51bf5b2151344c46/680373c4e864c9bb5f51b71f_arrow-up-right-01.png"
                alt=""
                className="cta-arrow"
                loading="lazy"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-wrap">
              <img src="/breakthru.svg" alt="breakthru.ai" className="footer-logo-img" />
              <span className="footer-logo-text">breakthru.ai</span>
            </Link>
            <p className="footer-tagline">
              The Digital Fabric. Architecting, building, and running the next generation of high-scale enterprise engineering.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/aboutus" className="footer-link">Our Story</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/industries" className="footer-link">Industries</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Practices</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Strategy</Link></li>
              <li><Link to="/services" className="footer-link">Data & AI</Link></li>
              <li><Link to="/services" className="footer-link">Engineering</Link></li>
              <li><Link to="/services" className="footer-link">Growth & GCC</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-item">
              <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div className="footer-contact-text">
                Global HQ<br />Technology Park, Bangalore
              </div>
            </div>
            <div className="footer-contact-item">
              <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <div className="footer-contact-text">
                <a href="mailto:hello@breakthru.ai" className="footer-contact-link">hello@breakthru.ai</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} breakthru.ai. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/aboutus" className="footer-legal-link">Privacy Policy</Link>
            <Link to="/aboutus" className="footer-legal-link">Terms of Service</Link>
            <Link to="/aboutus" className="footer-legal-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


function App() {
  const [chatbotOpen, setChatbotOpen] = useState(true)

  const toggleChatbot = () => setChatbotOpen(prev => !prev)
  const closeChatbot = () => setChatbotOpen(false)

  return (
    <div className={`main-layout-wrapper ${chatbotOpen ? 'sidebar-open' : ''}`}>
      <div className="main-content-area">
        <Header onToggleChatbot={toggleChatbot} />
        <Routes>
          <Route path="/" element={<Home chatbotOpen={chatbotOpen} onCloseChatbot={closeChatbot} />} />
          <Route path="/future-of-consultingai" element={<ConsultingAI />} />
          <Route path="/future-of-aingineering" element={<AIngineering />} />
          <Route path="/future-of-xperienceai" element={<XperienceAI />} />
          <Route path="/future-of-talentai" element={<TalentAI />} />
          <Route path="/future-of-gccai" element={<GCC />} />
          <Route path="/aboutus" element={<OurStory />} />
          <Route path="/story/fintech" element={<FintechStory />} />
          <Route path="/story/manufacturing" element={<ManufacturingStory />} />
          <Route path="/story/telecom" element={<TelecomStory />} />
          <Route path="/story/breakthru-labs" element={<BreakthruLabsStory />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/data-ai" element={<DataAI />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/product-squads" element={<ProductSquads />} />
          <Route path="/family-office" element={<FamilyOffice />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
        <Footer />
      </div>

      <button 
        className={`floating-ai-toggle ${chatbotOpen ? 'active' : ''}`}
        onClick={toggleChatbot}
        title={chatbotOpen ? "Close AI Assistant" : "Chat with AI"}
      >
        {chatbotOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <img 
            src="https://giffiles.alphacoders.com/112/11291.gif" 
            alt="AI Assistant" 
            className="ai-toggle-gif"
          />
        )}
      </button>

      <div className={`sidebar-chatbot-container ${chatbotOpen ? 'open' : ''}`}>
        <Chatbot onClose={closeChatbot} variant="sidebar" />
      </div>
    </div>
  )
}

export default App
