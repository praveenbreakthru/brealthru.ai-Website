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
  const [taglineVisible, setTaglineVisible] = useState(false)
  const sectionRefs = useRef({})
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setTaglineVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

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
          <div className="hero-tagline-box">
            <p className={`hero-tagline-text ${taglineVisible ? 'hero-tagline-visible' : ''}`}>We build intelligent systems that don&apos;t just support — they execute.</p>
          </div>
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
            <Link to="/story/breakthru-labs" className="story-card story-card-4">
              <div className="story-card-accent" />
              <div className="story-card-inner">
                <span className="story-card-number">STORY 04</span>
                <h3 className="story-card-title">Breakthru Labs</h3>
                <div className="story-card-line" />
              </div>
              <div className="story-card-glow" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
