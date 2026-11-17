
const features = [
  {
    number: "01",
    icon: "◈",
    title: "Digital Wallet",
    description:
      "A central place to manage your wallet balance and keep track of your transactions.",
    tag: "Platform feature",
  },
  {
    number: "02",
    icon: "▧",
    title: "Gift Card Services",
    description:
      "A planned marketplace experience for buying and selling supported gift cards.",
    tag: "Provider onboarding",
  },
  {
    number: "03",
    icon: "↗",
    title: "Payment Services",
    description:
      "A convenient payment experience designed around accessible digital financial services.",
    tag: "Platform feature",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Get started with your XSPay-Go account through the mobile application.",
  },
  {
    number: "02",
    title: "Explore the platform",
    description:
      "Discover available wallet and digital financial service features.",
  },
  {
    number: "03",
    title: "Manage your activity",
    description:
      "Access your wallet information and review your transaction activity.",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        Building a better digital financial experience
        <span className="announcement-divider">·</span>
        <span>Discover XSPay-Go</span>
      </div>

      <header className="site-header">
        <div className="container nav-container">
          <a href="#" className="brand" aria-label="XSPay-Go homepage">
            <span className="brand-mark">X</span>
            <span>
              <strong>XS<span>Pay</span>-Go</strong>
              <small>YOUR DIGITAL COMPANION</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#giftcards">Gift Cards</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Get in touch <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow light-eyebrow">
              <span className="eyebrow-line" />
              THE FUTURE OF DIGITAL CONVENIENCE
            </div>

            <h1>
              Your money.
              <br />
              Your digital world.
              <br />
              <span>One platform.</span>
            </h1>

            <p className="hero-description">
              Meet XSPay-Go — a digital wallet and financial services
              platform designed to make everyday digital transactions
              more convenient and accessible.
            </p>

            <div className="hero-actions">
              <a href="#features" className="button button-white">
                Explore XSPay-Go <ArrowIcon />
              </a>
              <a href="#about" className="button button-outline">
                Discover our story
              </a>
            </div>

            <div className="hero-trust">
              <span className="trust-check">✓</span>
              Developed by Technovate Global Solutions Limited
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustration of the XSPay-Go digital wallet interface">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="floating-chip chip-top">
              <span className="chip-icon">↗</span>
              <span>
                <strong>Digital convenience</strong>
                <small>Designed around you</small>
              </span>
            </div>

            <div className="wallet-mockup">
              <div className="mockup-top">
                <div className="mockup-brand">
                  <span className="mockup-logo">X</span>
                  <strong>XSPay-Go</strong>
                </div>
                <span className="mockup-menu">•••</span>
              </div>

              <div className="mockup-label">DIGITAL WALLET</div>
              <div className="mockup-balance">Your wallet</div>
              <div className="mockup-subtitle">
                A smarter way to manage your transactions
              </div>

              <div className="mockup-divider" />

              <div className="mockup-actions">
                <div>
                  <span className="action-icon">＋</span>
                  <small>Fund wallet</small>
                </div>
                <div>
                  <span className="action-icon">↗</span>
                  <small>Transactions</small>
                </div>
                <div>
                  <span className="action-icon">◈</span>
                  <small>Services</small>
                </div>
              </div>

              <div className="mockup-activity">
                <div className="activity-heading">
                  <strong>Platform overview</strong>
                  <span>Explore</span>
                </div>
                <div className="activity-row">
                  <span className="activity-icon">◈</span>
                  <span>
                    <strong>Wallet management</strong>
                    <small>Balance and activity</small>
                  </span>
                  <span className="activity-arrow">›</span>
                </div>
                <div className="activity-row">
                  <span className="activity-icon">▧</span>
                  <span>
                    <strong>Gift card services</strong>
                    <small>Provider onboarding</small>
                  </span>
                  <span className="activity-arrow">›</span>
                </div>
              </div>
            </div>

            <div className="floating-chip chip-bottom">
              <span className="secure-icon">✓</span>
              <span>
                <strong>Built with care</strong>
                <small>Security-conscious design</small>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-bottom container">
          <span>SIMPLIFYING DIGITAL FINANCIAL EXPERIENCES</span>
          <span className="hero-bottom-line" />
          <span>MADE FOR EVERYDAY CONVENIENCE</span>
        </div>
      </section>

      <section className="intro-section section-padding">
        <div className="container intro-grid">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              INTRODUCING XSPAY-GO
            </div>
            <h2>
              Digital services,
              <br />
              <span>made more accessible.</span>
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              XSPay-Go is a digital financial services platform being
              developed to bring wallet management, payment services
              and digital marketplace experiences together.
            </p>
            <p>
              Our goal is to create a simple, convenient and
              user-focused platform for everyday digital interactions.
            </p>
            <a href="#about" className="text-link">
              Learn about our platform <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="features-section section-padding" id="features">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                WHAT WE ARE BUILDING
              </div>
              <h2>
                One platform.
                <br />
                <span>Multiple possibilities.</span>
              </h2>
            </div>
            <p>
              Explore the services and experiences that form the
              foundation of XSPay-Go.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-top">
                  <span className="feature-number">{feature.number}</span>
                  <span className="feature-icon">{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-tag">{feature.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gift-section section-padding" id="giftcards">
        <div className="container gift-grid">
          <div className="gift-content">
            <div className="eyebrow light-eyebrow">
              <span className="eyebrow-line" />
              DIGITAL MARKETPLACE
            </div>
            <h2>
              Gift cards.
              <br />
              <span>More possibilities.</span>
            </h2>
            <p>
              XSPay-Go is developing a gift-card marketplace experience
              intended to support the buying and selling of supported
              gift cards through approved service providers.
            </p>
            <p className="gift-note">
              Gift-card services are subject to provider onboarding,
              availability and transaction verification.
            </p>
            <a href="#contact" className="button button-white">
              Contact our team <ArrowIcon />
            </a>
          </div>

          <div className="gift-art" aria-label="Illustration of digital gift cards">
            <div className="gift-card gift-card-one">
              <span>XS / GIFT</span>
              <strong>Digital<br />possibilities.</strong>
              <small>XSPay-Go</small>
            </div>
            <div className="gift-card gift-card-two">
              <span>GIFT CARD</span>
              <strong>Explore<br />something new.</strong>
              <small>COMING TO XSPAY-GO</small>
            </div>
            <div className="gift-card gift-card-three">
              <span>◈</span>
              <strong>One digital<br />destination.</strong>
              <small>XSPAY-GO</small>
            </div>
            <div className="gift-art-circle" />
          </div>
        </div>
      </section>

      <section className="steps-section section-padding">
        <div className="container">
          <div className="center-heading">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              GETTING STARTED
              <span className="eyebrow-line" />
            </div>
            <h2>
              A simple approach
              <br />
              <span>to digital convenience.</span>
            </h2>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div className="step-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-padding" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-mark">X</div>
            <div className="about-visual-text">
              <span>OUR IDENTITY</span>
              <strong>XSPay-Go</strong>
              <small>Technology · Convenience · Trust</small>
            </div>
            <div className="about-decoration decoration-one" />
            <div className="about-decoration decoration-two" />
          </div>

          <div className="about-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              ABOUT THE PLATFORM
            </div>
            <h2>
              Built with purpose.
              <br />
              <span>Designed for people.</span>
            </h2>
            <p>
              XSPay-Go is a technology-driven digital financial
              services project focused on simplifying how people
              interact with digital wallet and payment experiences.
            </p>
            <p>
              The platform is developed under Technovate Global
              Solutions Limited, a Nigerian technology and technical
              services company.
            </p>
            <a href="#contact" className="text-link">
              Connect with us <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="security-section section-padding" id="security">
        <div className="container security-grid">
          <div>
            <div className="eyebrow light-eyebrow">
              <span className="eyebrow-line" />
              OUR APPROACH
            </div>
            <h2>
              Trust begins
              <br />
              with <span>responsibility.</span>
            </h2>
            <p>
              We recognise the importance of protecting user
              information and handling financial transactions
              responsibly as the platform develops.
            </p>
          </div>

          <div className="security-points">
            <div className="security-point">
              <span>01</span>
              <div>
                <strong>Account protection</strong>
                <p>Authentication and access controls are part of our platform design.</p>
              </div>
            </div>
            <div className="security-point">
              <span>02</span>
              <div>
                <strong>Transaction awareness</strong>
                <p>Transaction records and verification are important to our service design.</p>
              </div>
            </div>
            <div className="security-point">
              <span>03</span>
              <div>
                <strong>Responsible integrations</strong>
                <p>Third-party services are subject to provider approval and their applicable requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-padding" id="contact">
        <div className="container contact-card">
          <div>
            <div className="eyebrow light-eyebrow">
              <span className="eyebrow-line" />
              LET&apos;S CONNECT
            </div>
            <h2>
              Have a question?
              <br />
              <span>Let&apos;s talk.</span>
            </h2>
            <p>
              For business enquiries, partnerships, platform
              information and support, reach our team.
            </p>
          </div>
          <div className="contact-action">
            <span className="contact-label">BUSINESS & GENERAL ENQUIRIES</span>
            <a
              className="contact-email"
              href="mailto:technovateglobalsolutions@gmail.com"
            >
              technovateglobalsolutions@gmail.com
            </a>
            <a
              href="mailto:technovateglobalsolutions@gmail.com?subject=XSPay-Go%20Enquiry"
              className="button button-white"
            >
              Send us an email <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <a href="#" className="brand footer-brand">
              <span className="brand-mark">X</span>
              <span>
                <strong>XS<span>Pay</span>-Go</strong>
                <small>YOUR DIGITAL COMPANION</small>
              </span>
            </a>

            <p>
              A digital financial services platform being developed
              by Technovate Global Solutions Limited.
            </p>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#giftcards">Gift Cards</a>
              <a href="#about">About</a>
              <a href="#security">Security</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © 2026 XSPay-Go. All rights reserved.
            </span>
            <span>
              A product initiative of Technovate Global Solutions Limited.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
