import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const knowledgeBase = [
  { q: ['who are you', 'what is breakthru', 'about', 'company', 'what do you do'], a: 'We are breakthru.ai — the Digital Fabric. A hybrid of high-end consulting and deep engineering. We Architect, Build, and Run. No slide decks, just shipped code.' },
  { q: ['services', 'what services', 'offerings', 'capabilities', 'what you offer'], a: 'Our services include: 1) Strategy — Digital Transformation & ROI Modeling, 2) Data & AI — Lakehouse & GenAI Agents, 3) Engineering — Platform Engineering & DevSecOps, 4) Growth — Team Augmentation & GCC Build, 5) Product Squads — Dedicated teams & Partner Services, 6) Family Office — Wealth platform modernization.' },
  { q: ['consulting', 'consulting ai', 'what is consulting'], a: 'ConsultingAI helps enterprises align business ambition with technological direction. We work with CXOs and transformation leaders to architect intelligent strategies that are actionable, scalable, and aligned to real-world outcomes.' },
  { q: ['aingineering', 'engineering', 'what is aingineering'], a: 'AIngineering is our deep engineering practice. We build production-grade AI/ML systems, platform engineering, cloud infrastructure, and high-scale microservices architectures.' },
  { q: ['xperienceai', 'experience', 'what is xperienceai'], a: 'XperienceAI focuses on transforming customer and user experiences through AI-driven personalization, recommendation engines, and intelligent interfaces.' },
  { q: ['talentai', 'talent', 'hiring', 'recruitment'], a: 'TalentAI is our AI-powered talent transformation practice. We help organizations build, upskill, and transform their engineering teams with AI capabilities.' },
  { q: ['gcc', 'global capability', 'captive', 'capability center'], a: 'Our GCC practice helps enterprises set up and scale Global Capability Centers. We offer white-labeled engineering pods that extend your capability overnight.' },
  { q: ['industries', 'sectors', 'domains', 'verticals'], a: 'We transform 6 industries: 1) BFSI — Banking & Financial Services, 2) Manufacturing & Industry 4.0, 3) Telecommunication, 4) Retail & E-Commerce, 5) Healthcare & Life Sciences, 6) Travel & Hospitality.' },
  { q: ['fintech', 'banking', 'financial', 'finance'], a: 'In Fintech, we built a parallel core using Event-Driven Architecture for real-time ledgers. Results: 2.5x user acquisition, 40ms transaction latency, $0 fraud loss in Q4.' },
  { q: ['manufacturing', 'factory', 'industry 4.0', 'smart factory'], a: 'In Manufacturing, we deliver Digital Twin implementation, Predictive Maintenance AI, Smart Factory Automation, and Supply Chain Optimization. Results: 40% efficiency gain, Zero unplanned downtime, 100% traceability.' },
  { q: ['telecom', 'telecommunication', 'network', 'tower'], a: 'In Telecom, we built TRAMS (Total Remote Asset Management System) — an AI brain that predicts tower failures 48 hours in advance. We managed 40,000 assets virtually. Results: 99.99% network uptime, -30% truck rolls, real-time visibility.' },
  { q: ['retail', 'ecommerce', 'e-commerce', 'commerce'], a: 'In Retail & E-Commerce, we build unified commerce platforms, personalization engines, and inventory optimization. Results: 2.5x conversion rate, 45% reduced cart abandonment, real-time inventory sync.' },
  { q: ['healthcare', 'health', 'medical', 'hospital', 'hipaa'], a: 'In Healthcare, we deliver EHR integration, clinical decision support, telemedicine platforms, and regulatory compliance. Results: 3X patient throughput, 50% reduced wait times, 100% HIPAA compliant.' },
  { q: ['travel', 'hospitality', 'hotel', 'booking'], a: 'In Travel & Hospitality, we build booking engines, revenue management, loyalty programs, and guest experience platforms. Results: 25% revenue uplift, 4.8★ guest satisfaction, millions of bookings/day.' },
  { q: ['ecosystem', 'partners', 'partnership', 'alliance'], a: 'Our Strategic Alliances include: Databricks (Data & AI), Snowflake (Data Cloud), Google Cloud (AI Infrastructure), and Intellect Design (Digital Banking). We have 200+ certified engineers and 50+ joint customers.' },
  { q: ['databricks'], a: 'Databricks is our Data & AI Platform partner. We deliver Lakehouse Architecture, Delta Lake Implementation, MLflow & ML Ops, and Spark Optimization.' },
  { q: ['snowflake'], a: 'Snowflake is our Data Cloud partner. We deliver Data Warehouse Modernization, Data Mesh Implementation, Snowpark Development, and Data Sharing & Marketplace.' },
  { q: ['google cloud', 'gcp'], a: 'Google Cloud is our AI Infrastructure partner. We deliver Vertex AI & GenAI, BigQuery Analytics, Cloud Infrastructure, and Anthos Multi-cloud.' },
  { q: ['labs', 'breakthru labs', 'nexus', 'agent lenz'], a: 'Breakthru Labs is our Experimental Division. Two products: 1) Nexus BD — AI-powered Business Development automation with dual AI research (Gemini + Deepseek). 2) Agent Lenz — AIOps incident management that reduces downtime by 60%.' },
  { q: ['nexus', 'nexus bd'], a: 'Nexus BD is our Autonomous Growth Engine — an AI-powered Business Development platform with Dual AI Research Engine, Auto-Personalized Landing Pages, Sentiment Analysis on Replies, and Workflow Automation. Currently in Beta Access.' },
  { q: ['agent lenz', 'lenz', 'aiops'], a: 'Agent Lenz is our AIOps Sentinel — comprehensive AI-powered incident management and SRE platform. Features: Intelligent Alert Correlation, Real-time SLA Compliance, Automated War Rooms, and Predictive Breach Detection. Live V1.0.' },
  { q: ['how we deliver', 'process', 'methodology', 'approach'], a: 'How We Deliver: 1) Discover — Deep-dive into your domain, tech stack, and pain points. 2) Architect — Design systems that scale, not slide decks that gather dust. 3) Build — Agile squads shipping production code in 2-week sprints. 4) Run — We own the uptime with 24/7 SRE and outcome-based SLAs.' },
  { q: ['team', 'people', 'engineers', 'staff'], a: 'We have 200+ certified engineers across all partner platforms, 50+ joint enterprise customers, with an average 12-week implementation time and 4.9/5 customer satisfaction score.' },
  { q: ['contact', 'reach', 'email', 'talk', 'call'], a: 'Click the "Talk to us!" button in the navigation bar to get in touch with our team. We\'d love to discuss how we can help transform your business.' },
  { q: ['our story', 'history', 'founded', 'background'], a: 'Visit the "Our Story" page from the "Who We Are" dropdown in the navigation to learn about our journey, leadership team, and the network of partners and clients we\'ve built.' },
]

function HeroChatbot({ onClose }) {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m the breakthru.ai assistant. Ask me anything about our services, industries, products, or partners.' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const chatEndRef = useRef(null)
  const messagesContainerRef = useRef(null)
  const chatbotRef = useRef(null)
  const isMutedRef = useRef(false)

  useEffect(() => {
    if (chatbotRef.current) {
      chatbotRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [])

  useEffect(() => {
    isMutedRef.current = isMuted
    if (isMuted) {
      window.speechSynthesis.cancel()
    }
  }, [isMuted])

  const speak = (text) => {
    if (isMutedRef.current) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1
    utterance.pitch = 1
    utterance.volume = 1
    const voices = window.speechSynthesis.getVoices()
    const englishVoice = voices.find(v => v.lang.startsWith('en'))
    if (englishVoice) utterance.voice = englishVoice
    window.speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
    if (messages.length > 1) {
      const lastMsg = messages[messages.length - 1]
      if (lastMsg.role === 'bot') {
        speak(lastMsg.text)
      }
    }
  }, [messages])

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel()
    }
  }, [])

  const findAnswer = (question) => {
    const lower = question.toLowerCase().trim()
    if (!lower || lower.length < 2) return 'Please ask a question about our services, industries, products, or partners.'

    let bestMatch = null
    let bestScore = 0

    for (const item of knowledgeBase) {
      for (const keyword of item.q) {
        const words = keyword.toLowerCase().split(' ')
        let score = 0
        for (const w of words) {
          if (lower.includes(w)) score += w.length
        }
        if (score > bestScore) {
          bestScore = score
          bestMatch = item
        }
      }
    }

    if (bestScore >= 3 && bestMatch) return bestMatch.a

    const siteWords = ['breakthru', 'service', 'industry', 'partner', 'labs', 'consult', 'engineer', 'fintech', 'manufactur', 'telecom', 'retail', 'health', 'travel', 'databricks', 'snowflake', 'google', 'intellect', 'nexus', 'lenz', 'gcc', 'talent', 'xperience', 'aingineer', 'build', 'architect', 'run', 'strategy', 'data', 'ai', 'cloud', 'platform']
    const hasSiteWord = siteWords.some(w => lower.includes(w))
    if (!hasSiteWord) {
      return 'I can only answer questions about breakthru.ai — our services, industries, products, ecosystem partners, and how we work. Try asking about our Telecom story, Data & AI services, or Breakthru Labs!'
    }

    return 'I\'m not sure about that specific topic. Try asking about our services, industries (BFSI, Manufacturing, Telecom, Retail, Healthcare, Travel), ecosystem partners, or Breakthru Labs products.'
  }

  const handleSend = () => {
    const text = input.trim()
    if (!text) return

    setMessages(prev => [...prev, { role: 'user', text }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const answer = findAnswer(text)
      setMessages(prev => [...prev, { role: 'bot', text: answer }])
      setIsTyping(false)
    }, 600)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleNewChat = () => {
    setMessages([{ role: 'bot', text: 'Hi! I\'m the breakthru.ai assistant. Ask me anything about our services, industries, products, or partners.' }])
    setInput('')
    setIsTyping(false)
  }

  return (
    <div className="hero-chatbot" ref={chatbotRef}>
      <div className="hero-chatbot-header">
        <div className="hero-chatbot-left">
          <div className="hero-chatbot-dot" />
          <span>breakthru.ai Assistant</span>
        </div>
        <div className="hero-chatbot-header-actions">
          <button
            onClick={() => setIsMuted(prev => !prev)}
            className={`hero-chat-mute ${isMuted ? 'hero-chat-muted' : ''}`}
            title={isMuted ? 'Unmute voice' : 'Mute voice'}
          >
            {isMuted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 010 14.14" />
                <path d="M15.54 8.46a5 5 0 010 7.07" />
              </svg>
            )}
          </button>
          <button onClick={handleNewChat} className="hero-chat-new" title="New Chat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
          {onClose && (
            <button onClick={onClose} className="hero-chat-close" title="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="hero-chatbot-messages" ref={messagesContainerRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`hero-chat-msg hero-chat-${msg.role}`}>
            {msg.role === 'bot' && <div className="hero-chat-avatar">B</div>}
            <div className="hero-chat-bubble">{msg.text}</div>
          </div>
        ))}
        {isTyping && (
          <div className="hero-chat-msg hero-chat-bot">
            <div className="hero-chat-avatar">B</div>
            <div className="hero-chat-bubble hero-chat-typing">
              <span /><span /><span />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="hero-chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about our services, industries..."
        />
        <button onClick={handleSend} className="hero-chat-send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

function Home({ chatbotOpen, onCloseChatbot }) {
  const [visibleSections, setVisibleSections] = useState({})
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [careerStats, setCareerStats] = useState({ engineers: 0, hubs: 0, clients: 0, rating: 0 })
  const sectionRefs = useRef({})
  const location = useLocation()
  const totalIndustries = 6

  const nextIndustry = () => {
    setActiveIndustry((prev) => (prev + 1) % totalIndustries)
  }

  const prevIndustry = () => {
    setActiveIndustry((prev) => (prev - 1 + totalIndustries) % totalIndustries)
  }

  useEffect(() => {
    const hash = location.hash.slice(1)
    if (hash) {
      const el = document.getElementById(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.hash])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section')
            if (id) setVisibleSections((prev) => ({ ...prev, [id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visibleSections.careers) return

    const targets = { engineers: 200, hubs: 3, clients: 50, rating: 4.8 }
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCareerStats({
        engineers: Math.round(eased * targets.engineers),
        hubs: Math.round(eased * targets.hubs),
        clients: Math.round(eased * targets.clients),
        rating: Math.round(eased * targets.rating * 10) / 10,
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [visibleSections.careers])

  const setSectionRef = (id) => (el) => {
    sectionRefs.current[id] = el
  }

  return (
    <div className="wrapper-content">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-left">
          <h1 className="home-hero-heading">
            <span className="hero-line hero-line-dark">ARCHITECT.</span>
            <span className="hero-line hero-line-accent">BUILD.</span>
            <span className="hero-line hero-line-dark">RUN.</span>
          </h1>
          {chatbotOpen && (
            <div className="chatbot-popup-container">
              <HeroChatbot onClose={onCloseChatbot} />
            </div>
          )}
        </div>

        <div className="home-hero-right">
          <div className="story-cards-stack">
            <Link to="/story/fintech" className="story-card story-card-1">
              <div className="story-card-accent" />
              <div className="story-card-inner">
                <span className="story-card-number">STORY 01</span>
                <h3 className="story-card-title">Fintech</h3>
                <div className="story-card-line" />
              </div>
              <div className="story-card-glow" />
            </Link>
            <Link to="/story/manufacturing" className="story-card story-card-2">
              <div className="story-card-accent" />
              <div className="story-card-inner">
                <span className="story-card-number">STORY 02</span>
                <h3 className="story-card-title">Manufacturing</h3>
                <div className="story-card-line" />
              </div>
              <div className="story-card-glow" />
            </Link>
            <Link to="/story/telecom" className="story-card story-card-3">
              <div className="story-card-accent" />
              <div className="story-card-inner">
                <span className="story-card-number">STORY 03</span>
                <h3 className="story-card-title">Telecom</h3>
                <div className="story-card-line" />
              </div>
              <div className="story-card-glow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="home-services-strip">
        <Link to="/#labs" className="service-pill">
          <span className="service-pill-dot pill-dot-1" />
          Breakthru Lab
        </Link>
        <Link to="/#services" className="service-pill">
          <span className="service-pill-dot pill-dot-2" />
          Services
        </Link>
        <Link to="/#industries" className="service-pill">
          <span className="service-pill-dot pill-dot-3" />
          Industries
        </Link>
        <Link to="/#ecosystem" className="service-pill">
          <span className="service-pill-dot pill-dot-4" />
          Ecosystem
        </Link>
      </section>

      {/* Breakthru Labs Section */}
      <section
        id="labs"
        className="labs-section"
        data-section="labs"
        ref={setSectionRef('labs')}
      >
        <div className={`labs-inner ${visibleSections.labs ? 'labs-visible' : ''}`}>
          {/* Header */}
          <div className="labs-header">
            <span className="labs-header-sub">EXPERIMENTAL DIVISION</span>
            <h2 className="labs-header-label">BREAKTHRU LABS</h2>
            <p className="labs-header-desc">
              Where the world&apos;s best creative ideas get built.
              Experience the art of modern AI studios.
            </p>
          </div>

          {/* 2 Big Hero-Style Cards */}
          <div className="labs-cards-stack">
            {/* Nexus BD */}
            <div className="labs-story-card labs-story-card-1">
              <div className="labs-story-card-accent" />
              <div className="labs-story-card-inner">
                <div className="labs-story-card-top">
                  <span className="labs-story-card-number">LABS 01</span>
                  <span className="labs-story-card-badge labs-badge-beta">BETA ACCESS</span>
                </div>
                <h3 className="labs-story-card-title">Nexus BD</h3>
                <span className="labs-story-card-tagline">The Autonomous Growth Engine</span>
                <div className="labs-story-card-line" />
                <p className="labs-story-card-desc">
                  An advanced AI-powered Business Development automation platform
                  that streamlines the entire sales prospecting workflow. From
                  dual-provider AI research (Gemini + Deepseek) to hyper-personalized
                  email outreach.
                </p>
                <ul className="labs-story-card-features">
                  <li>Dual AI Research Engine</li>
                  <li>Auto-Personalized Landing Pages</li>
                  <li>Sentiment Analysis on Replies</li>
                  <li>Workflow Automation</li>
                </ul>
              </div>
              <div className="labs-story-card-glow" />
            </div>

            {/* Agent Lenz */}
            <div className="labs-story-card labs-story-card-2">
              <div className="labs-story-card-accent" />
              <div className="labs-story-card-inner">
                <div className="labs-story-card-top">
                  <span className="labs-story-card-number">LABS 02</span>
                  <span className="labs-story-card-badge labs-badge-live">LIVE V1.0</span>
                </div>
                <h3 className="labs-story-card-title">Agent Lenz</h3>
                <span className="labs-story-card-tagline">The AIOps Sentinel</span>
                <div className="labs-story-card-line" />
                <p className="labs-story-card-desc">
                  Comprehensive AI-powered incident management and SRE platform.
                  Streamline operations, reduce downtime by 60%, and automate
                  routine tasks to focus human expertise on complex problems.
                </p>
                <ul className="labs-story-card-features">
                  <li>Intelligent Alert Correlation</li>
                  <li>Real-time SLA Compliance</li>
                  <li>Automated War Rooms</li>
                  <li>Predictive Breach Detection</li>
                </ul>
              </div>
              <div className="labs-story-card-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="svc-section"
        data-section="services"
        ref={setSectionRef('services')}
      >
        <div className={`svc-inner ${visibleSections.services ? 'svc-visible' : ''}`}>
          {/* Header */}
          <div className="svc-header">
            <span className="svc-header-sub">CAPABILITIES</span>
            <div className="svc-header-top">
              <span className="svc-header-label">SERVICES</span>
            </div>
            <h2 className="svc-title">
              We don&apos;t just advise.
              We <span className="svc-title-accent">architect</span>, <span className="svc-title-accent">build</span>, and <span className="svc-title-accent">run</span>.
            </h2>
          </div>

          {/* Service Cards Grid */}
          <div className="svc-grid">
            {/* Card 1 - Strategy */}
            <Link to="/strategy" className="svc-card svc-card-strategy" style={{ textDecoration: 'none' }}>
              <div className="svc-card-top-bar" />
              <div className="svc-card-header">
                <span className="svc-card-num">01</span>
                <div className="svc-card-tags">
                  <span className="svc-card-tag">Digital Roadmap</span>
                  <span className="svc-card-tag">ROI Modeling</span>
                </div>
              </div>
              <h3 className="svc-card-title">Strategy</h3>
              <p className="svc-card-desc">
                We don&apos;t do 100-page decks. We do blueprints that compile.
              </p>
              <ul className="svc-card-list">
                <li>Digital Transformation Strategy</li>
                <li>Technology Due Diligence</li>
                <li>Architecture Assessment</li>
                <li>Cloud Migration Planning</li>
              </ul>
              <div className="svc-card-icon-float">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <div className="svc-card-explore">Explore</div>
            </Link>

            {/* Card 2 - Data & AI */}
            <Link to="/data-ai" className="svc-card svc-card-data" style={{ textDecoration: 'none' }}>
              <div className="svc-card-top-bar" />
              <div className="svc-card-header">
                <span className="svc-card-num">02</span>
                <div className="svc-card-tags">
                  <span className="svc-card-tag">Lakehouse</span>
                  <span className="svc-card-tag">GenAI Agents</span>
                </div>
              </div>
              <h3 className="svc-card-title">Data & AI</h3>
              <p className="svc-card-desc">
                Turning data lakes into prediction engines. LLMs that actually work.
              </p>
              <ul className="svc-card-list">
                <li>Data Platform Modernization</li>
                <li>GenAI & LLM Implementation</li>
                <li>ML Ops & Model Deployment</li>
                <li>Analytics & BI Platforms</li>
              </ul>
              <div className="svc-card-icon-float">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v4a4 4 0 0 0 8 0v-4h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/>
                </svg>
              </div>
              <div className="svc-card-explore">Explore</div>
            </Link>

            {/* Card 3 - Engineering */}
            <Link to="/engineering" className="svc-card svc-card-eng" style={{ textDecoration: 'none' }}>
              <div className="svc-card-top-bar" />
              <div className="svc-card-header">
                <span className="svc-card-num">03</span>
              </div>
              <h3 className="svc-card-title">Engineering</h3>
              <p className="svc-card-desc">
                Hardcore platform build. Microservices, cloud-native, high scale.
              </p>
              <ul className="svc-card-list">
                <li>Platform Engineering</li>
                <li>API & Integration Layer</li>
                <li>DevSecOps & SRE</li>
                <li>Cloud Infrastructure</li>
              </ul>
              <div className="svc-card-icon-float">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="svc-card-explore">Explore</div>
            </Link>

            {/* Card 4 - Growth */}
            <Link to="/growth" className="svc-card svc-card-growth" style={{ textDecoration: 'none' }}>
              <div className="svc-card-top-bar" />
              <div className="svc-card-header">
                <span className="svc-card-num">04</span>
                <div className="svc-card-tags">
                  <span className="svc-card-tag">Squads</span>
                  <span className="svc-card-tag">GCC Build</span>
                </div>
              </div>
              <h3 className="svc-card-title">Growth</h3>
              <p className="svc-card-desc">
                White-labeled pods that extend your capability overnight.
              </p>
              <ul className="svc-card-list">
                <li>Engineering Team Augmentation</li>
                <li>Global Capability Centers</li>
                <li>Managed Services</li>
                <li>Technology Partnerships</li>
              </ul>
              <div className="svc-card-icon-float">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="svc-card-explore">Explore</div>
            </Link>

            {/* Card 5 - Product / Platform Squads */}
            <Link to="/product-squads" className="svc-card svc-card-product" style={{ textDecoration: 'none' }}>
              <div className="svc-card-top-bar" />
              <div className="svc-card-header">
                <span className="svc-card-num">05</span>
                <div className="svc-card-tags">
                  <span className="svc-card-tag">Partner Services</span>
                  <span className="svc-card-tag">Product Teams</span>
                </div>
              </div>
              <h3 className="svc-card-title">Product Squads</h3>
              <p className="svc-card-desc">
                Ecosystem partner professional services as a platform.
                Dedicated squads that operate as your extended product team.
              </p>
              <ul className="svc-card-list">
                <li>Dedicated Product Squads</li>
                <li>Snowflake Professional Services</li>
                <li>Databricks Implementation</li>
                <li>Google Cloud Partner Delivery</li>
              </ul>
              <div className="svc-card-icon-float">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div className="svc-card-explore">Explore</div>
            </Link>

            {/* Card 6 - Family Office */}
            <Link to="/family-office" className="svc-card svc-card-family" style={{ textDecoration: 'none' }}>
              <div className="svc-card-top-bar" />
              <div className="svc-card-header">
                <span className="svc-card-num">06</span>
              </div>
              <h3 className="svc-card-title">Family Office</h3>
              <p className="svc-card-desc">
                Digital modernization for family offices.
                From legacy systems to unified wealth platforms.
              </p>
              <ul className="svc-card-list">
                <li>Unified Wealth Platforms</li>
                <li>Portfolio Management Systems</li>
                <li>Family Governance Portals</li>
                <li>Multi-entity Consolidation</li>
              </ul>
              <div className="svc-card-icon-float">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="svc-card-explore">Explore</div>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section
        className="svc-deliver"
        data-section="deliver"
        ref={setSectionRef('deliver')}
      >
        <div className={`svc-deliver-inner ${visibleSections.deliver ? 'svc-visible' : ''}`}>
          <div className="svc-deliver-header">
            <span className="svc-deliver-label">HOW WE DELIVER</span>
          </div>

          <div className="svc-deliver-grid">
            <div className="svc-deliver-step svc-step-1">
              <div className="svc-step-line" />
              <div className="svc-step-num">01</div>
              <h4 className="svc-step-title">Discover</h4>
              <p className="svc-step-desc">
                Deep-dive into your domain, tech stack, and pain points.
              </p>
            </div>

            <div className="svc-deliver-step svc-step-2">
              <div className="svc-step-line" />
              <div className="svc-step-num">02</div>
              <h4 className="svc-step-title">Architect</h4>
              <p className="svc-step-desc">
                Design systems that scale, not slide decks that gather dust.
              </p>
            </div>

            <div className="svc-deliver-step svc-step-3">
              <div className="svc-step-line" />
              <div className="svc-step-num">03</div>
              <h4 className="svc-step-title">Build</h4>
              <p className="svc-step-desc">
                Agile squads shipping production code in 2-week sprints.
              </p>
            </div>

            <div className="svc-deliver-step svc-step-4">
              <div className="svc-step-num">04</div>
              <h4 className="svc-step-title">Run</h4>
              <p className="svc-step-desc">
                We own the uptime. 24/7 SRE with outcome-based SLAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        id="industries"
        className="ind-section"
        data-section="industries"
        ref={setSectionRef('industries')}
      >
        <div className={`ind-inner ${visibleSections.industries ? 'ind-visible' : ''}`}>
          <div className="ind-header">
            <span className="ind-header-sub">INDUSTRIES WE TRANSFORM</span>
            <h2 className="ind-header-label">INDUSTRIES</h2>
            <p className="ind-header-desc">
              Vertical expertise. Horizontal impact. We speak your domain language
              and write the code that moves it forward.
            </p>
          </div>

          {/* 3D Carousel Container */}
          <div className="ind-carousel-wrapper">
            <div className="ind-carousel-track">
              {/* BFSI */}
              <div className={`ind-card ind-card-bfsi ${activeIndustry === 0 ? 'ind-card-active' : ''}`} style={{ '--card-index': 0 }}>
                <div className="ind-card-left">
                  <div className="ind-card-badge">01</div>
                  <h3 className="ind-card-title">BFSI</h3>
                  <h4 className="ind-card-subtitle">Banking & Financial Services</h4>
                  <p className="ind-card-desc">
                    From neo-banking cores to real-time fraud detection. We build the
                    infrastructure that moves money at the speed of thought.
                  </p>
                  <div className="ind-card-tagline">Rewiring the Vault</div>
                </div>
                <div className="ind-card-center">
                  <div className="ind-stat-row">
                    <div className="ind-stat">
                      <span className="ind-stat-val">40<span className="ind-stat-unit">ms</span></span>
                      <span className="ind-stat-label">Transaction Latency</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">$2B<span className="ind-stat-unit">+</span></span>
                      <span className="ind-stat-label">Payments Processed</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">99.99<span className="ind-stat-unit">%</span></span>
                      <span className="ind-stat-label">Uptime Achieved</span>
                    </div>
                  </div>
                </div>
                <div className="ind-card-right">
                  <div className="ind-cap-header">CORE CAPABILITIES</div>
                  <ul className="ind-cap-list">
                    <li>Core Banking Modernization</li>
                    <li>Payment Rails & Gateways</li>
                    <li>Fraud Detection & AML</li>
                    <li>Wealth Management Platforms</li>
                    <li>Regulatory Compliance Automation</li>
                  </ul>
                  <div className="ind-use-header">USE CASES</div>
                  <ul className="ind-use-list">
                    <li>Digital-first neo-bank launch</li>
                    <li>Legacy core migration to cloud</li>
                    <li>AI-powered credit decisioning</li>
                    <li>Open banking API ecosystems</li>
                  </ul>
                </div>
              </div>

              {/* Manufacturing */}
              <div className={`ind-card ind-card-mfg ${activeIndustry === 1 ? 'ind-card-active' : ''}`} style={{ '--card-index': 1 }}>
                <div className="ind-card-left">
                  <div className="ind-card-badge">02</div>
                  <h3 className="ind-card-title">MANUFACTURING<br/>& INDUSTRY 4.0</h3>
                  <p className="ind-card-desc">
                    Smart factories that think. Predictive maintenance that sees the future.
                    Supply chains that self-optimize.
                  </p>
                  <div className="ind-card-tagline">Ghost in the Machine</div>
                </div>
                <div className="ind-card-center">
                  <div className="ind-stat-row">
                    <div className="ind-stat">
                      <span className="ind-stat-val">40<span className="ind-stat-unit">%</span></span>
                      <span className="ind-stat-label">Efficiency Gain</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">Zero</span>
                      <span className="ind-stat-label">Unplanned Downtime</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">100<span className="ind-stat-unit">%</span></span>
                      <span className="ind-stat-label">Traceability</span>
                    </div>
                  </div>
                </div>
                <div className="ind-card-right">
                  <div className="ind-cap-header">CORE CAPABILITIES</div>
                  <ul className="ind-cap-list">
                    <li>Digital Twin Implementation</li>
                    <li>Predictive Maintenance AI</li>
                    <li>Smart Factory Automation</li>
                    <li>Supply Chain Optimization</li>
                    <li>Quality Control Vision Systems</li>
                  </ul>
                  <div className="ind-use-header">USE CASES</div>
                  <ul className="ind-use-list">
                    <li>End-to-end MES implementation</li>
                    <li>IoT sensor network deployment</li>
                    <li>Computer vision quality inspection</li>
                    <li>Real-time OEE dashboards</li>
                  </ul>
                </div>
              </div>

              {/* Telecom */}
              <div className={`ind-card ind-card-telecom ${activeIndustry === 2 ? 'ind-card-active' : ''}`} style={{ '--card-index': 2 }}>
                <div className="ind-card-left">
                  <div className="ind-card-badge">03</div>
                  <h3 className="ind-card-title">TELECOMMUNICATION</h3>
                  <p className="ind-card-desc">
                    Networks that heal themselves. Assets managed from the cloud.
                    Customer experiences that just work.
                  </p>
                  <div className="ind-card-tagline">Signal vs. Noise</div>
                </div>
                <div className="ind-card-center">
                  <div className="ind-stat-row">
                    <div className="ind-stat">
                      <span className="ind-stat-val">99.99<span className="ind-stat-unit">%</span></span>
                      <span className="ind-stat-label">Network Uptime</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">-30<span className="ind-stat-unit">%</span></span>
                      <span className="ind-stat-label">Truck Rolls</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">40K</span>
                      <span className="ind-stat-label">Assets Managed</span>
                    </div>
                  </div>
                </div>
                <div className="ind-card-right">
                  <div className="ind-cap-header">CORE CAPABILITIES</div>
                  <ul className="ind-cap-list">
                    <li>Network Operations Center (NOC)</li>
                    <li>Remote Asset Management</li>
                    <li>Customer Experience Platforms</li>
                    <li>5G Infrastructure Enablement</li>
                    <li>Predictive Network Analytics</li>
                  </ul>
                  <div className="ind-use-header">USE CASES</div>
                  <ul className="ind-use-list">
                    <li>TRAMS platform deployment</li>
                    <li>AI-driven network optimization</li>
                    <li>Self-service customer portals</li>
                    <li>Drone-based asset inspection</li>
                  </ul>
                </div>
              </div>

              {/* Retail */}
              <div className={`ind-card ind-card-retail ${activeIndustry === 3 ? 'ind-card-active' : ''}`} style={{ '--card-index': 3 }}>
                <div className="ind-card-left">
                  <div className="ind-card-badge">04</div>
                  <h3 className="ind-card-title">RETAIL &<br/>E-COMMERCE</h3>
                  <p className="ind-card-desc">
                    Unified commerce that spans channels. Personalization engines that convert.
                    Logistics that deliver on promises.
                  </p>
                  <div className="ind-card-tagline">Commerce, Reimagined</div>
                </div>
                <div className="ind-card-center">
                  <div className="ind-stat-row">
                    <div className="ind-stat">
                      <span className="ind-stat-val">2.5<span className="ind-stat-unit">x</span></span>
                      <span className="ind-stat-label">Conversion Rate</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">45<span className="ind-stat-unit">%</span></span>
                      <span className="ind-stat-label">Cart Abandonment</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">Real-time</span>
                      <span className="ind-stat-label">Inventory Sync</span>
                    </div>
                  </div>
                </div>
                <div className="ind-card-right">
                  <div className="ind-cap-header">CORE CAPABILITIES</div>
                  <ul className="ind-cap-list">
                    <li>Unified Commerce Platforms</li>
                    <li>Personalization & Recommendation AI</li>
                    <li>Inventory & Fulfillment Optimization</li>
                    <li>Customer Data Platforms (CDP)</li>
                    <li>POS Modernization</li>
                  </ul>
                  <div className="ind-use-header">USE CASES</div>
                  <ul className="ind-use-list">
                    <li>Headless commerce implementation</li>
                    <li>AI-powered product recommendations</li>
                    <li>Omnichannel order management</li>
                    <li>Real-time pricing optimization</li>
                  </ul>
                </div>
              </div>

              {/* Healthcare */}
              <div className={`ind-card ind-card-health ${activeIndustry === 4 ? 'ind-card-active' : ''}`} style={{ '--card-index': 4 }}>
                <div className="ind-card-left">
                  <div className="ind-card-badge">05</div>
                  <h3 className="ind-card-title">HEALTHCARE &<br/>LIFE SCIENCES</h3>
                  <p className="ind-card-desc">
                    Interoperability that connects care. Analytics that predict outcomes.
                    Platforms that scale patient access.
                  </p>
                  <div className="ind-card-tagline">Code Saves Lives</div>
                </div>
                <div className="ind-card-center">
                  <div className="ind-stat-row">
                    <div className="ind-stat">
                      <span className="ind-stat-val">3<span className="ind-stat-unit">X</span></span>
                      <span className="ind-stat-label">Patient Throughput</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">50<span className="ind-stat-unit">%</span></span>
                      <span className="ind-stat-label">Reduced Wait Times</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">100<span className="ind-stat-unit">%</span></span>
                      <span className="ind-stat-label">HIPAA Compliant</span>
                    </div>
                  </div>
                </div>
                <div className="ind-card-right">
                  <div className="ind-cap-header">CORE CAPABILITIES</div>
                  <ul className="ind-cap-list">
                    <li>EHR Integration & Interoperability</li>
                    <li>Clinical Decision Support</li>
                    <li>Telemedicine Platforms</li>
                    <li>Medical Device Integration</li>
                    <li>Regulatory Compliance (HIPAA/GDPR)</li>
                  </ul>
                  <div className="ind-use-header">USE CASES</div>
                  <ul className="ind-use-list">
                    <li>Unified patient data platform</li>
                    <li>AI diagnostic assistants</li>
                    <li>Remote patient monitoring</li>
                    <li>Clinical trial management systems</li>
                  </ul>
                </div>
              </div>

              {/* Travel */}
              <div className={`ind-card ind-card-travel ${activeIndustry === 5 ? 'ind-card-active' : ''}`} style={{ '--card-index': 5 }}>
                <div className="ind-card-left">
                  <div className="ind-card-badge">06</div>
                  <h3 className="ind-card-title">TRAVEL &<br/>HOSPITALITY</h3>
                  <p className="ind-card-desc">
                    Booking engines that scale. Loyalty systems that engage.
                    Operations that anticipate.
                  </p>
                  <div className="ind-card-tagline">Experience Engineering</div>
                </div>
                <div className="ind-card-center">
                  <div className="ind-stat-row">
                    <div className="ind-stat">
                      <span className="ind-stat-val">25<span className="ind-stat-unit">%</span></span>
                      <span className="ind-stat-label">Revenue Uplift</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">4.8<span className="ind-stat-unit">★</span></span>
                      <span className="ind-stat-label">Guest Satisfaction</span>
                    </div>
                    <div className="ind-stat">
                      <span className="ind-stat-val">Millions</span>
                      <span className="ind-stat-label">Bookings/Day</span>
                    </div>
                  </div>
                </div>
                <div className="ind-card-right">
                  <div className="ind-cap-header">CORE CAPABILITIES</div>
                  <ul className="ind-cap-list">
                    <li>Booking & Reservation Systems</li>
                    <li>Revenue Management Platforms</li>
                    <li>Loyalty & Rewards Programs</li>
                    <li>Guest Experience Platforms</li>
                    <li>Operational Intelligence</li>
                  </ul>
                  <div className="ind-use-header">USE CASES</div>
                  <ul className="ind-use-list">
                    <li>Cloud-native booking platform</li>
                    <li>Dynamic pricing engines</li>
                    <li>Unified guest profiles</li>
                    <li>Mobile-first concierge apps</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button className="ind-carousel-arrow ind-carousel-prev" onClick={prevIndustry} aria-label="Previous industry">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="ind-carousel-arrow ind-carousel-next" onClick={nextIndustry} aria-label="Next industry">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="ind-carousel-dots">
              {[0,1,2,3,4,5].map((i) => (
                <button
                  key={i}
                  className={`ind-carousel-dot ${activeIndustry === i ? 'ind-carousel-dot-active' : ''}`}
                  onClick={() => setActiveIndustry(i)}
                  aria-label={`Go to industry ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section
        id="ecosystem"
        className="eco-section"
        data-section="ecosystem"
        ref={setSectionRef('ecosystem')}
      >
        <div className={`eco-inner ${visibleSections.ecosystem ? 'eco-visible' : ''}`}>
          {/* Header */}
          <div className="eco-header">
            <span className="eco-header-sub">THE CONSTELLATION</span>
            <h2 className="eco-header-label">ECOSYSTEM</h2>
            <p className="eco-header-desc">
              We don&apos;t go alone. We integrate with the giants to deliver
              the holistic &quot;Digital Fabric&quot;.
            </p>
          </div>

          {/* Strategic Alliances Title */}
          <div className="eco-section-title">
            <h3 className="eco-section-heading">Strategic Alliances</h3>
            <p className="eco-section-desc">
              Deep engineering partnerships where we don&apos;t just implement tools,
              we build on top of them.
            </p>
          </div>

          {/* Partner Cards Stack - Hero Style */}
          <div className="eco-cards-row">
            {/* Databricks */}
            <div className="eco-card eco-card-1">
              <div className="eco-card-accent" />
              <img src="/data.png" alt="Databricks" className="eco-card-logo" />
              <div className="eco-card-inner">
                <span className="eco-card-number">PARTNER 01</span>
                <h3 className="eco-card-title">Databricks</h3>
                <span className="eco-card-sub">Data & AI Platform</span>
                <div className="eco-card-line" />
                <p className="eco-card-desc">
                  Unified analytics platform for data engineering, data science, and machine learning.
                </p>
                <ul className="eco-card-list">
                  <li>Lakehouse Architecture</li>
                  <li>Delta Lake Implementation</li>
                  <li>MLflow & ML Ops</li>
                  <li>Spark Optimization</li>
                </ul>
              </div>
              <div className="eco-card-glow" />
            </div>

            {/* Snowflake */}
            <div className="eco-card eco-card-2">
              <div className="eco-card-accent" />
              <img src="/snow.png" alt="Snowflake" className="eco-card-logo" />
              <div className="eco-card-inner">
                <span className="eco-card-number">PARTNER 02</span>
                <h3 className="eco-card-title">Snowflake</h3>
                <span className="eco-card-sub">Data Cloud</span>
                <div className="eco-card-line" />
                <p className="eco-card-desc">
                  Cloud-native data warehouse with near-infinite scalability and data sharing.
                </p>
                <ul className="eco-card-list">
                  <li>Data Warehouse Modernization</li>
                  <li>Data Mesh Implementation</li>
                  <li>Snowpark Development</li>
                  <li>Data Sharing & Marketplace</li>
                </ul>
              </div>
              <div className="eco-card-glow" />
            </div>

            {/* Google Cloud */}
            <div className="eco-card eco-card-3">
              <div className="eco-card-accent" />
              <img src="/GC.png" alt="Google Cloud" className="eco-card-logo" />
              <div className="eco-card-inner">
                <span className="eco-card-number">PARTNER 03</span>
                <h3 className="eco-card-title">Google Cloud</h3>
                <span className="eco-card-sub">AI Infrastructure</span>
                <div className="eco-card-line" />
                <p className="eco-card-desc">
                  Enterprise cloud platform with leading AI/ML capabilities and global infrastructure.
                </p>
                <ul className="eco-card-list">
                  <li>Vertex AI & GenAI</li>
                  <li>BigQuery Analytics</li>
                  <li>Cloud Infrastructure</li>
                  <li>Anthos Multi-cloud</li>
                </ul>
              </div>
              <div className="eco-card-glow" />
            </div>

            {/* Intellect Design */}
            <div className="eco-card eco-card-4">
              <div className="eco-card-accent" />
              <img src="/ID.png" alt="Intellect Design" className="eco-card-logo" />
              <div className="eco-card-inner">
                <span className="eco-card-number">PARTNER 04</span>
                <h3 className="eco-card-title">Intellect Design</h3>
                <span className="eco-card-sub">Digital Banking</span>
                <div className="eco-card-line" />
                <p className="eco-card-desc">
                  Global leader in financial technology for banking, insurance, and capital markets.
                </p>
                <ul className="eco-card-list">
                  <li>Core Banking Implementation</li>
                  <li>Digital Lending Platforms</li>
                  <li>Wealth Management</li>
                  <li>Payment Solutions</li>
                </ul>
              </div>
              <div className="eco-card-glow" />
            </div>
          </div>

          {/* How We Partner */}
          <div className="eco-partner-section">
            <h3 className="eco-partner-heading">How We Partner</h3>
            <div className="eco-partner-grid">
              <div className="eco-partner-step">
                <div className="eco-step-num">01</div>
                <h4 className="eco-step-title">Co-Engineering</h4>
                <p className="eco-step-desc">Joint IP development on partner platforms</p>
              </div>
              <div className="eco-partner-step">
                <div className="eco-step-num">02</div>
                <h4 className="eco-step-title">Implementation</h4>
                <p className="eco-step-desc">Certified last-mile delivery specialists</p>
              </div>
              <div className="eco-partner-step">
                <div className="eco-step-num">03</div>
                <h4 className="eco-step-title">White-Label</h4>
                <p className="eco-step-desc">Extended specialist pods for partner customers</p>
              </div>
            </div>
          </div>

          {/* Technology Categories */}
          <div className="eco-tech-section">
            <h3 className="eco-partner-heading">Technology Categories</h3>
            <div className="eco-tech-grid">
              <div className="eco-tech-card">
                <div className="eco-tech-header">Cloud Infrastructure</div>
                <div className="eco-tech-items">
                  <span>Google Cloud</span>
                  <span>AWS</span>
                  <span>Azure</span>
                </div>
              </div>
              <div className="eco-tech-card">
                <div className="eco-tech-header">Data Platforms</div>
                <div className="eco-tech-items">
                  <span>Snowflake</span>
                  <span>Databricks</span>
                  <span>Confluent</span>
                </div>
              </div>
              <div className="eco-tech-card">
                <div className="eco-tech-header">AI/ML Platforms</div>
                <div className="eco-tech-items">
                  <span>NVIDIA</span>
                  <span>OpenAI</span>
                  <span>Anthropic</span>
                </div>
              </div>
              <div className="eco-tech-card">
                <div className="eco-tech-header">Industry Solutions</div>
                <div className="eco-tech-items">
                  <span>Intellect Design</span>
                  <span>Mahat.ai</span>
                  <span>Temenos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section
        id="careers"
        className="careers-section"
        data-section="careers"
        ref={setSectionRef('careers')}
      >
        <div className={`careers-inner ${visibleSections.careers ? 'careers-visible' : ''}`}>
          {/* Hero */}
          <div className="careers-hero">
            <span className="careers-tag">CAREERS</span>
            <span className="careers-hiring-badge">WE'RE HIRING</span>
            <h2 className="careers-hero-title">Join The Fabric</h2>
            <p className="careers-hero-sub">
              Build the future of enterprise technology. No corporate BS. Just impactful work with brilliant people.
            </p>
          </div>

          {/* Why Join Us */}
          <div className="careers-why">
            <div className="careers-why-card careers-why-1">
              <div className="careers-why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="careers-why-title">Real Engineering</h3>
              <p className="careers-why-desc">Production code, not PowerPoints</p>
            </div>
            <div className="careers-why-card careers-why-2">
              <div className="careers-why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" /><path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <h3 className="careers-why-title">AI-Native</h3>
              <p className="careers-why-desc">Work with cutting-edge AI/ML</p>
            </div>
            <div className="careers-why-card careers-why-3">
              <div className="careers-why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h3 className="careers-why-title">Global Exposure</h3>
              <p className="careers-why-desc">Work with Fortune 500 clients</p>
            </div>
            <div className="careers-why-card careers-why-4">
              <div className="careers-why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="careers-why-title">Fast Growth</h3>
              <p className="careers-why-desc">Ownership from day one</p>
            </div>
          </div>

          {/* Our Culture */}
          <div className="careers-culture">
            <div className="careers-culture-left">
              <span className="careers-section-tag">OUR CULTURE</span>
              <h3 className="careers-culture-title">
                We're a collective of engineers, architects, and problem-solvers who believe that the best consulting happens in the terminal, not the boardroom.
              </h3>
            </div>
            <div className="careers-culture-right">
              <div className="careers-culture-item">
                <div className="careers-culture-dot" />
                <span><strong>Pods &amp; Squads:</strong> Small, autonomous teams</span>
              </div>
              <div className="careers-culture-item">
                <div className="careers-culture-dot" />
                <span><strong>No hierarchy:</strong> Ideas win, not titles</span>
              </div>
              <div className="careers-culture-item">
                <div className="careers-culture-dot" />
                <span><strong>Remote-first:</strong> Work from anywhere</span>
              </div>
              <div className="careers-culture-item">
                <div className="careers-culture-dot" />
                <span><strong>Continuous learning:</strong> Upskill constantly</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="careers-stats">
            <div className="careers-stat-card">
              <span className="careers-stat-value">{careerStats.engineers}+</span>
              <span className="careers-stat-label">Engineers</span>
            </div>
            <div className="careers-stat-card">
              <span className="careers-stat-value">{careerStats.hubs}</span>
              <span className="careers-stat-label">Global Hubs</span>
            </div>
            <div className="careers-stat-card">
              <span className="careers-stat-value">{careerStats.clients}+</span>
              <span className="careers-stat-label">Enterprise Clients</span>
            </div>
            <div className="careers-stat-card">
              <span className="careers-stat-value">{careerStats.rating}&#9733;</span>
              <span className="careers-stat-label">Glassdoor Rating</span>
            </div>
          </div>

          {/* Open Positions */}
          <div className="careers-positions">
            <span className="careers-section-tag">OPEN POSITIONS</span>
            <div className="careers-positions-track">
              <div className="careers-positions-row">
                <div className="careers-pos-card careers-pos-purple">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">Senior Data Engineer</h3>
                  <span className="careers-pos-dept">Data &amp; AI</span>
                  <span className="careers-pos-location">Bengaluru / Remote</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">Snowflake</span>
                    <span className="careers-pos-tag">Databricks</span>
                    <span className="careers-pos-tag">Python</span>
                  </div>
                </div>

                <div className="careers-pos-card careers-pos-green">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">Platform Engineer</h3>
                  <span className="careers-pos-dept">Engineering</span>
                  <span className="careers-pos-location">Bengaluru</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">Kubernetes</span>
                    <span className="careers-pos-tag">Terraform</span>
                    <span className="careers-pos-tag">Go</span>
                  </div>
                </div>

                <div className="careers-pos-card careers-pos-blue">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">GenAI Solutions Architect</h3>
                  <span className="careers-pos-dept">Data &amp; AI</span>
                  <span className="careers-pos-location">Remote</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">LLMs</span>
                    <span className="careers-pos-tag">RAG</span>
                    <span className="careers-pos-tag">LangChain</span>
                  </div>
                </div>

                <div className="careers-pos-card careers-pos-pink">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">Full Stack Developer</h3>
                  <span className="careers-pos-dept">Product Squads</span>
                  <span className="careers-pos-location">Bengaluru / Hyderabad</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">React</span>
                    <span className="careers-pos-tag">Node.js</span>
                    <span className="careers-pos-tag">TypeScript</span>
                  </div>
                </div>

                <div className="careers-pos-card careers-pos-orange">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">DevOps Engineer</h3>
                  <span className="careers-pos-dept">Engineering</span>
                  <span className="careers-pos-location">Remote</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">AWS</span>
                    <span className="careers-pos-tag">CI/CD</span>
                    <span className="careers-pos-tag">Docker</span>
                  </div>
                </div>

                <div className="careers-pos-card careers-pos-teal">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">Technical Consultant</h3>
                  <span className="careers-pos-dept">Strategy</span>
                  <span className="careers-pos-location">Dubai / Riyadh</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">Digital Transformation</span>
                    <span className="careers-pos-tag">BFSI</span>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="careers-pos-card careers-pos-purple">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">Senior Data Engineer</h3>
                  <span className="careers-pos-dept">Data &amp; AI</span>
                  <span className="careers-pos-location">Bengaluru / Remote</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">Snowflake</span>
                    <span className="careers-pos-tag">Databricks</span>
                    <span className="careers-pos-tag">Python</span>
                  </div>
                </div>

                <div className="careers-pos-card careers-pos-green">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">Platform Engineer</h3>
                  <span className="careers-pos-dept">Engineering</span>
                  <span className="careers-pos-location">Bengaluru</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">Kubernetes</span>
                    <span className="careers-pos-tag">Terraform</span>
                    <span className="careers-pos-tag">Go</span>
                  </div>
                </div>

                <div className="careers-pos-card careers-pos-blue">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">GenAI Solutions Architect</h3>
                  <span className="careers-pos-dept">Data &amp; AI</span>
                  <span className="careers-pos-location">Remote</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">LLMs</span>
                    <span className="careers-pos-tag">RAG</span>
                    <span className="careers-pos-tag">LangChain</span>
                  </div>
                </div>

                <div className="careers-pos-card careers-pos-pink">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">Full Stack Developer</h3>
                  <span className="careers-pos-dept">Product Squads</span>
                  <span className="careers-pos-location">Bengaluru / Hyderabad</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">React</span>
                    <span className="careers-pos-tag">Node.js</span>
                    <span className="careers-pos-tag">TypeScript</span>
                  </div>
                </div>

                <div className="careers-pos-card careers-pos-orange">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">DevOps Engineer</h3>
                  <span className="careers-pos-dept">Engineering</span>
                  <span className="careers-pos-location">Remote</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">AWS</span>
                    <span className="careers-pos-tag">CI/CD</span>
                    <span className="careers-pos-tag">Docker</span>
                  </div>
                </div>

                <div className="careers-pos-card careers-pos-teal">
                  <div className="careers-pos-top">
                    <span className="careers-pos-type">Full-time</span>
                  </div>
                  <h3 className="careers-pos-title">Technical Consultant</h3>
                  <span className="careers-pos-dept">Strategy</span>
                  <span className="careers-pos-location">Dubai / Riyadh</span>
                  <div className="careers-pos-tags">
                    <span className="careers-pos-tag">Digital Transformation</span>
                    <span className="careers-pos-tag">BFSI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Don't See Your Role */}
          <div className="careers-cta">
            <h3 className="careers-cta-title">Don't See Your Role?</h3>
            <p className="careers-cta-desc">
              We're always looking for exceptional talent. Send us your profile and let's talk.
            </p>
            <a href="mailto:careers@breakthru.ai" className="careers-cta-button">
              <span>Send Your Profile</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
