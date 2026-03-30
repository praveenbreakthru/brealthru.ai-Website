import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import AIngineering from './pages/AIngineering'
import XperienceAI from './pages/XperienceAI'
import TalentAI from './pages/TalentAI'
import GCC from './pages/GCC'
import OurStory from './pages/OurStory'
import Home from './pages/Home'
import FintechStory from './pages/FintechStory'
import ManufacturingStory from './pages/ManufacturingStory'
import TelecomStory from './pages/TelecomStory'
import ContactUs from './pages/ContactUs'
import Strategy from './pages/Strategy'
import DataAI from './pages/DataAI'
import Engineering from './pages/Engineering'
import Growth from './pages/Growth'
import ProductSquads from './pages/ProductSquads'
import FamilyOffice from './pages/FamilyOffice'

function Header({ onToggleChatbot }) {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [showMicHint, setShowMicHint] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setShowMicHint(true), 1500)
    const hideTimer = setTimeout(() => setShowMicHint(false), 6500)
    return () => { clearTimeout(timer); clearTimeout(hideTimer) }
  }, [])

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
          {/* What We Do Dropdown */}
          <div className="nav-dropdown">
            <button
              className="nav-dropdown-toggle"
              onClick={() => toggleDropdown('whatwedo')}
              aria-expanded={activeDropdown === 'whatwedo'}
              aria-haspopup="true"
            >
              <span>What We Do</span>
              <svg
                className={`nav-chevron ${activeDropdown === 'whatwedo' ? 'open' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={`nav-dropdown-list ${activeDropdown === 'whatwedo' ? 'open' : ''}`}>
              <Link
                to="/#labs"
                className="nav-dropdown-link"
                onClick={() => setActiveDropdown(null)}
              >
                Breakthru Labs
              </Link>
              <Link
                to="/#services"
                className="nav-dropdown-link"
                onClick={() => setActiveDropdown(null)}
              >
                Services
              </Link>
              <Link
                to="/#industries"
                className="nav-dropdown-link"
                onClick={() => setActiveDropdown(null)}
              >
                Industries
              </Link>
              <Link
                to="/#ecosystem"
                className="nav-dropdown-link"
                onClick={() => setActiveDropdown(null)}
              >
                Ecosystem
              </Link>
              <Link
                to="/#careers"
                className="nav-dropdown-link"
                onClick={() => setActiveDropdown(null)}
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Who We Are Dropdown */}
          <div className="nav-dropdown">
            <button
              className="nav-dropdown-toggle"
              onClick={() => toggleDropdown('whoweare')}
              aria-expanded={activeDropdown === 'whoweare'}
              aria-haspopup="true"
            >
              <span>Who We Are</span>
              <svg
                className={`nav-chevron ${activeDropdown === 'whoweare' ? 'open' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={`nav-dropdown-list ${activeDropdown === 'whoweare' ? 'open' : ''}`}>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  `nav-dropdown-link${isActive ? ' current' : ''}`
                }
              >
                Our Story
              </NavLink>
            </div>
          </div>

          {/* Talk to Us CTA */}
          <Link to="/contactus" className="nav-cta">
            Talk to us !
          </Link>

          {/* Mic Chatbot Button */}
          <div className="header-mic-wrapper">
            <button onClick={() => { onToggleChatbot(); setShowMicHint(false) }} className="header-mic-btn" title="Chat with us">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
              <span className="mic-pulse-ring" />
            </button>
            {showMicHint && (
              <div className="mic-hint-tooltip">
                <span className="mic-hint-arrow" />
                Chat with us here!
              </div>
            )}
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

function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false)

  const toggleChatbot = () => setChatbotOpen(prev => !prev)
  const closeChatbot = () => setChatbotOpen(false)

  return (
    <>
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
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/data-ai" element={<DataAI />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/product-squads" element={<ProductSquads />} />
        <Route path="/family-office" element={<FamilyOffice />} />
      </Routes>
    </>
  )
}

export default App
