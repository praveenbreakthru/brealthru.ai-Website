import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function BreakthruLabsStory() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="wrapper-content labs-story-page">
      <Link to="/" className="floating-back-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
        Back to Home
      </Link>

      {/* Hero */}
      <section className="ls-hero">
        <div className="ls-hero-bg">
          <div className="ls-hero-gradient" />
          <div className="ls-hero-grid" />
        </div>
        <div className="ls-hero-content">
          <div className="ls-hero-left">
            <div className="ls-hero-tag">
              <span className="ls-hero-tag-dot" />
              EXPERIMENTAL DIVISION
            </div>
            <h1 className="ls-hero-title">
              BREAKTHRU<br />
              <span className="ls-hero-title-accent">LABS</span>
            </h1>
            <div className="ls-hero-meta">
              <div className="ls-hero-meta-item">
                <span className="ls-hero-meta-label">Division</span>
                <span className="ls-hero-meta-value">Labs</span>
              </div>
              <div className="ls-hero-meta-divider" />
              <div className="ls-hero-meta-item">
                <span className="ls-hero-meta-label">Story</span>
                <span className="ls-hero-meta-value">04</span>
              </div>
            </div>
          </div>
        </div>
        <div className="ls-hero-scroll-hint">
          <div className="ls-hero-scroll-line" />
        </div>
      </section>

      {/* The Context */}
      <section className="ls-context">
        <div className="ls-context-inner">
          <div className="ls-section-label">
            <span className="ls-section-num">01</span>
            <span className="ls-section-label-text">THE VISION</span>
          </div>
          <div className="ls-context-grid">
            <div className="ls-context-card ls-context-card-main">
              <div className="ls-context-card-border" />
              <p className="ls-context-text">
                Where the world&apos;s best creative ideas get built.
                Experience the art of <strong>modern AI studios</strong>.
                We don&apos;t wait for the future — we <strong>prototype it</strong>.
              </p>
            </div>
            <div className="ls-context-card ls-context-card-side">
              <p className="ls-context-text">
                Breakthru Labs is our <strong>experimental division</strong> —
                a sandbox where bold ideas become production-ready products.
                Two products. Two bets. Both shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="ls-products">
        <div className="ls-products-inner">
          <div className="ls-section-label">
            <span className="ls-section-num">02</span>
            <span className="ls-section-label-text">THE PRODUCTS</span>
          </div>
          <div className="ls-products-grid">
            {/* Nexus BD */}
            <div className="ls-product-card ls-product-card-1">
              <div className="ls-product-card-accent" />
              <div className="ls-product-card-inner">
                <div className="ls-product-card-top">
                  <span className="ls-product-card-number">LABS 01</span>
                  <span className="ls-product-badge ls-badge-beta">BETA ACCESS</span>
                </div>
                <h3 className="ls-product-card-title">Nexus BD</h3>
                <span className="ls-product-card-tagline">The Autonomous Growth Engine</span>
                <div className="ls-product-card-line" />
                <p className="ls-product-card-desc">
                  An advanced AI-powered Business Development automation platform
                  that streamlines the entire sales prospecting workflow. From
                  dual-provider AI research (Gemini + Deepseek) to hyper-personalized
                  email outreach.
                </p>
                <ul className="ls-product-card-features">
                  <li>Dual AI Research Engine</li>
                  <li>Auto-Personalized Landing Pages</li>
                  <li>Sentiment Analysis on Replies</li>
                  <li>Workflow Automation</li>
                </ul>
              </div>
              <div className="ls-product-card-glow" />
            </div>

            {/* Agent Lenz */}
            <div className="ls-product-card ls-product-card-2">
              <div className="ls-product-card-accent" />
              <div className="ls-product-card-inner">
                <div className="ls-product-card-top">
                  <span className="ls-product-card-number">LABS 02</span>
                  <span className="ls-product-badge ls-badge-live">LIVE V1.0</span>
                </div>
                <h3 className="ls-product-card-title">Agent Lenz</h3>
                <span className="ls-product-card-tagline">The AIOps Sentinel</span>
                <div className="ls-product-card-line" />
                <p className="ls-product-card-desc">
                  Comprehensive AI-powered incident management and SRE platform.
                  Streamline operations, reduce downtime by 60%, and automate
                  routine tasks to focus human expertise on complex problems.
                </p>
                <ul className="ls-product-card-features">
                  <li>Intelligent Alert Correlation</li>
                  <li>Real-time SLA Compliance</li>
                  <li>Automated War Rooms</li>
                  <li>Predictive Breach Detection</li>
                </ul>
              </div>
              <div className="ls-product-card-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* The Grind */}
      <section className="ls-grind">
        <div className="ls-grind-inner">
          <div className="ls-section-label ls-section-label-light">
            <span className="ls-section-num">03</span>
            <span className="ls-section-label-text">THE APPROACH</span>
          </div>
          <div className="ls-grind-card">
            <div className="ls-grind-quote-mark">&ldquo;</div>
            <p className="ls-grind-text">
              Labs isn&apos;t a side project. It&apos;s a <strong>parallel engine</strong>.
              Every product starts as a 2-week spike. If it survives the gauntlet
              of real users and real data, it earns its place in the stack.
            </p>
            <p className="ls-grind-text ls-grind-text-bottom">
              We build fast, fail faster, and ship <strong>what works</strong>.
              No innovation theatre. No demo-ware. Just products that
              <strong> solve real problems</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="ls-breakthrough">
        <div className="ls-breakthrough-inner">
          <div className="ls-section-label">
            <span className="ls-section-num">04</span>
            <span className="ls-section-label-text">THE IMPACT</span>
          </div>
          <div className="ls-stats-grid">
            <div className="ls-stat-card ls-stat-card-1">
              <div className="ls-stat-card-top" />
              <div className="ls-stat-value">60<span className="ls-stat-unit">%</span></div>
              <div className="ls-stat-label">Downtime Reduction</div>
              <div className="ls-stat-bar">
                <div className="ls-stat-bar-fill" style={{ width: '60%' }} />
              </div>
            </div>
            <div className="ls-stat-card ls-stat-card-2">
              <div className="ls-stat-card-top" />
              <div className="ls-stat-value">2</div>
              <div className="ls-stat-label">Products Shipping</div>
              <div className="ls-stat-bar">
                <div className="ls-stat-bar-fill" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="ls-stat-card ls-stat-card-3">
              <div className="ls-stat-card-top" />
              <div className="ls-stat-value">2<span className="ls-stat-unit">wk</span></div>
              <div className="ls-stat-label">Spike-to-Ship Cycle</div>
              <div className="ls-stat-bar">
                <div className="ls-stat-bar-fill" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="ls-back-cta">
        <Link to="/" className="ls-back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Home
        </Link>
      </section>
    </div>
  )
}

export default BreakthruLabsStory
