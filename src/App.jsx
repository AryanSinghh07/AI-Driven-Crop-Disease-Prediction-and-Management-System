import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import video1 from './assets/images/video 1.mp4'
import video2 from './assets/images/video 2.mp4'
import video3 from './assets/images/video 3.mp4'
import Navbar from './Navbar';
import Finance from './Finance';
import AIPrediction from './AIPrediction';
import Blog from './Blog';
import DemoBanner from './DemoBanner';

const HERO_VIDEOS = [
  video1,
  video2,
  video3
];

function App() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 6000); // 6 seconds per video
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I add a new transaction?",
      answer: "To add a new transaction, click the 'Add Transaction' button in your dashboard. You can then fill in the details including amount, category, date, and description. The system will automatically categorize it based on your previous patterns."
    },
    {
      question: "Can I export my financial records?",
      answer: "Yes! You can export your financial records in multiple formats including PDF, Excel, and CSV. Go to the Reports section and select 'Export Data' to download your complete financial history or specific date ranges."
    },
    {
      question: "How do I categorize transactions?",
      answer: "Transactions are automatically categorized using AI, but you can manually edit categories anytime. Simply click on any transaction and select 'Edit Category' to choose from our predefined categories or create custom ones for your farm."
    }
  ];

  return (
    <Router>
      <DemoBanner />
      <Routes>
        <Route path="/finance" element={<Finance />} />
        <Route path="/ai-prediction" element={<AIPrediction />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={
          <>
            <Navbar />
            
            {/* Hero Section: Full-screen video background slider with centered content */}
      <section className="hero-section fade-in" id="hero">
        <div className="hero-video-container">
          {HERO_VIDEOS.map((src, idx) => (
            <video
              key={idx}
              className={`hero-video hero-video-fade${currentVideo === idx ? ' active' : ''}`}
              autoPlay
              loop
              muted
              playsInline
              style={{ opacity: currentVideo === idx ? 1 : 0, zIndex: currentVideo === idx ? 2 : 1 }}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge" data-aos="fade-down" data-aos-delay="200">
            <span>AI-Powered Agriculture</span>
          </div>
          
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="300">
            <span className="title-highlight">Agro</span>Vision
          </h1>
          
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            Revolutionizing Agriculture with Advanced AI Technology
          </p>
          
          <p className="hero-description" data-aos="fade-up" data-aos-delay="500">
            Detect crop diseases instantly, optimize farming practices, and increase yields with our cutting-edge AI-powered platform. 
            Join thousands of farmers who trust AgroVision for smarter, more sustainable agriculture.
          </p>
          
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="700">
            <Link to="/ai-prediction" className="cta-btn primary">
              <span>Get Started Free</span>
            </Link>
            <Link to="/ai-prediction" className="cta-btn secondary">
              <span>Scan Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How AI Prediction Works Section */}
      <section className="ai-section fade-in" id="ai">
        <h2 className="ai-title">AI-Powered Crop Disease Prediction</h2>
        
        {/* Feature Icons Section */}
        <div className="ai-features" data-aos="fade-up" data-aos-delay="100">
          <div className="ai-feature">
            <span className="ai-feature-icon">🧠</span>
            <h4>Advanced AI Algorithms</h4>
            <p>Deep learning models trained on millions of crop images with 99.7% accuracy in disease detection. Our neural networks continuously learn and improve from new data, ensuring the most up-to-date and reliable predictions for your crops.</p>
          </div>
          <div className="ai-feature">
            <span className="ai-feature-icon">⏰</span>
            <h4>Real-Time Disease Monitoring</h4>
            <p>24/7 automated detection system that monitors your crops continuously. Get instant alerts when potential issues are detected, allowing you to take immediate action before problems escalate and cause significant crop damage.</p>
          </div>
          <div className="ai-feature">
            <span className="ai-feature-icon">📈</span>
            <h4>Data-Driven Insights</h4>
            <p>Comprehensive analytics platform that provides detailed reports on crop health, growth patterns, and yield predictions. Our predictive modeling helps you make informed decisions about irrigation, fertilization, and pest control strategies.</p>
          </div>
        </div>
                  <div className="ai-content card-style" style={{flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            {/* Call to Action Banner */}
            <div className="ai-cta-banner" data-aos="fade-up" data-aos-delay="200">
              <h3>Empower Your Farm with AI</h3>
              <p>AI tools for precision farming and increased efficiency</p>
            </div>

            {/* Statistics Section */}
            <div className="ai-stats" data-aos="fade-up" data-aos-delay="250">
              <div className="ai-stat">
                <span className="ai-stat-number">95%</span>
                <p>Accuracy Rate</p>
              </div>
              <div className="ai-stat">
                <span className="ai-stat-number">10x</span>
                <p>Faster Detection</p>
              </div>
              <div className="ai-stat">
                <span className="ai-stat-number">30%</span>
                <p>Cost Reduction</p>
              </div>
              <div className="ai-stat">
                <span className="ai-stat-number">50+</span>
                <p>Crop Types Supported</p>
              </div>
            </div>

            <div className="ai-steps">
          <div className="ai-step" data-aos="fade-up" data-aos-delay="300">
            <span className="ai-step-icon">📷</span>
            <h4>1. Scan Crop Image</h4>
            <p>Upload or scan a photo of your crop using your phone or camera. Our system supports high-resolution images and can analyze multiple crops simultaneously. Simply point your camera at the affected area and capture the image. The AI can detect issues even from images taken in various lighting conditions and angles.</p>
          </div>
          <div className="ai-step" data-aos="fade-up" data-aos-delay="400">
            <span className="ai-step-icon">🤖</span>
            <h4>2. AI Analysis</h4>
            <p>Our AI analyzes the image for signs of disease, pests, or nutrient issues. Using advanced computer vision and machine learning algorithms, it examines color patterns, texture changes, and morphological features to identify potential problems. The system compares your image against a database of over 10 million crop images to provide accurate diagnoses.</p>
          </div>
          <div className="ai-step" data-aos="fade-up" data-aos-delay="500">
            <span className="ai-step-icon">📊</span>
            <h4>3. Instant Results</h4>
            <p>Get instant, detailed results and actionable recommendations for your crops. Receive comprehensive reports including disease identification, severity assessment, treatment recommendations, and preventive measures. Our system also provides cost estimates for treatments and expected recovery timelines.</p>
          </div>
        </div>
        
        <div className="ai-video-container" data-aos="zoom-in" data-aos-delay="600">
          <video 
            className="ai-video" 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{borderRadius: '16px', boxShadow: '0 8px 24px rgba(56,142,60,0.15)'}}
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="ai-video-overlay"></div>
        </div>

        {/* Technical Details Section */}
        <div className="ai-technical" data-aos="fade-up" data-aos-delay="650">
          <h4>Advanced Technology Behind AgroVision</h4>
          <div className="ai-tech-grid">
            <div className="ai-tech-item">
              <h5>Computer Vision</h5>
              <p>State-of-the-art image recognition algorithms that can detect subtle changes in crop appearance, identifying diseases before they become visible to the human eye. Our system uses convolutional neural networks (CNNs) trained on diverse datasets to recognize patterns across different crop varieties and environmental conditions.</p>
            </div>
            <div className="ai-tech-item">
              <h5>Machine Learning</h5>
              <p>Deep neural networks trained on extensive datasets of healthy and diseased crops, continuously learning and improving accuracy with each analysis. Our models incorporate transfer learning techniques and ensemble methods to achieve superior performance across various agricultural scenarios.</p>
            </div>
            <div className="ai-tech-item">
              <h5>Predictive Analytics</h5>
              <p>Advanced algorithms that predict disease outbreaks based on environmental conditions, weather patterns, and historical data. Our system integrates with weather APIs and soil sensors to provide early warnings about potential disease outbreaks, allowing farmers to take preventive measures.</p>
            </div>
            <div className="ai-tech-item">
              <h5>Cloud Computing</h5>
              <p>Scalable cloud infrastructure ensuring fast processing times and reliable access to AI models from anywhere in the world. Our distributed computing architecture can handle thousands of simultaneous requests while maintaining sub-second response times for real-time analysis.</p>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="ai-success" data-aos="fade-up" data-aos-delay="700">
          <h4>Success Stories from Farmers</h4>
          <div className="ai-success-grid">
            <div className="ai-success-item">
              <h5>Rice Farmer - Maharashtra</h5>
              <p>"AgroVision helped me detect bacterial blight early, saving my entire rice crop. The AI identified the disease 2 weeks before I could see any symptoms. I was able to apply targeted treatment and saved over 40% of my yield that would have been lost."</p>
              <span className="ai-success-result">Result: 40% increase in yield</span>
            </div>
            <div className="ai-success-item">
              <h5>Wheat Farmer - Punjab</h5>
              <p>"The real-time monitoring feature alerted me to rust disease outbreak. I was able to apply treatment immediately, preventing significant crop loss. The system's recommendations helped me optimize my pesticide usage, reducing costs while maintaining effectiveness."</p>
              <span className="ai-success-result">Result: 60% cost reduction</span>
            </div>
            <div className="ai-success-item">
              <h5>Cotton Farmer - Gujarat</h5>
              <p>"AgroVision's nutrient analysis helped me optimize fertilizer usage. I reduced input costs while improving crop quality significantly. The detailed soil health reports guided my fertilization strategy, leading to better crop development and higher market prices."</p>
              <span className="ai-success-result">Result: 35% higher profits</span>
            </div>
          </div>
        </div>

        {/* Detailed Benefits Section */}
        <div className="ai-benefits" data-aos="fade-up" data-aos-delay="850">
          <h4>How AI Enhances Farmers' Wealth</h4>
          <p>
            AI enhances farmers' wealth by optimizing crop management, reducing costs, and increasing yields. 
            Precise data analysis helps in applying resources like water and fertilizers more efficiently, 
            lowering expenses by up to 30%. Early disease and pest detection minimizes crop loss and avoids costly treatments, 
            with our system detecting issues 10 times faster than traditional methods. Automated systems reduce labor costs 
            and improve operational efficiency by streamlining monitoring and decision-making processes.
          </p>
          <p>
            Our AI platform provides comprehensive insights into soil health, weather patterns, and market trends, 
            enabling farmers to make data-driven decisions. The system supports over 50 crop types and has achieved 
            95% accuracy in disease detection. By integrating IoT sensors and satellite imagery, we offer predictive 
            analytics that help farmers plan their operations more effectively. Together, these advancements lead to 
            higher productivity, better-quality produce, and increased profitability, ultimately boosting farmers' 
            financial well-being and contributing to sustainable agriculture practices.
          </p>
          <p>
            Beyond immediate financial benefits, our AI system contributes to long-term sustainability by reducing 
            chemical usage through targeted treatments, improving soil health through better management practices, 
            and enabling precision agriculture techniques that minimize environmental impact while maximizing yields. 
            This sustainable approach not only benefits the environment but also positions farmers for long-term 
            success in an increasingly competitive and environmentally conscious market.
          </p>
        </div>

        <Link to="/ai-prediction" className="scan-btn" data-aos="fade-up" data-aos-delay="800">
          <span className="scan-btn-text">Scan Crop Image</span>
        </Link>
      </div>
    </section>

      {/* Finance for Farmers Section */}
      <section className="finance-section fade-in" id="finance">
        <div className="finance-container">
          {/* Main Finance Content */}
          <div className="finance-main">
            <div className="finance-content">
              <h2 className="finance-title">Start Managing Your Finances Today</h2>
              <p className="finance-subtitle">Take control of your farm's financial health with our easy-to-use tools.</p>
              
              <div className="finance-features">
                <div className="finance-feature">
                  <span className="finance-check">✓</span>
                  <span>Track income and expenses</span>
                </div>
                <div className="finance-feature">
                  <span className="finance-check">✓</span>
                  <span>Generate financial reports</span>
                </div>
                <div className="finance-feature">
                  <span className="finance-check">✓</span>
                  <span>Plan for future investments</span>
                </div>
              </div>
              
              <Link to="/finance" className="finance-cta-btn">
                <span className="finance-btn-icon">📊</span>
                <span>Get Started</span>
              </Link>
            </div>
            
            <div className="finance-image">
              <div className="finance-image-placeholder">
                <span className="finance-image-icon">💰</span>
                <p>Financial Management</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Sections */}
          <div className="finance-bottom">
            <div className="finance-faq">
              <h3>Financial Records FAQs</h3>
              <div className="faq-items">
                {faqData.map((item, index) => (
                  <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                    <span className="faq-question" onClick={() => toggleFaq(index)}>
                      {item.question}
                      <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
                    </span>
                    {openFaq === index && (
                      <div className="faq-answer" data-aos="fade-up" data-aos-delay="100">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="finance-about">
              <h3>About Finance</h3>
              <div className="finance-about-content">
                <p>Our comprehensive financial management tools help farmers track every aspect of their business finances. From daily transactions to long-term planning, we provide the insights you need to make informed decisions and grow your farm's profitability.</p>
                <div className="finance-benefits">
                  <div className="finance-benefit">
                    <span className="benefit-icon">📈</span>
                    <div>
                      <h4>Profit Tracking</h4>
                      <p>Monitor your farm's profitability in real-time</p>
                    </div>
                  </div>
                  <div className="finance-benefit">
                    <span className="benefit-icon">💳</span>
                    <div>
                      <h4>Expense Management</h4>
                      <p>Keep track of all your farm expenses</p>
                    </div>
                  </div>
                  <div className="finance-benefit">
                    <span className="benefit-icon">🎯</span>
                    <div>
                      <h4>Budget Planning</h4>
                      <p>Plan and stick to your financial goals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fade-in" id="about">
        <div className="about-container">
          <div className="about-header" data-aos="fade-up">
            <h2 className="about-title">About AgroVision</h2>
            <p className="about-subtitle">Revolutionizing Agriculture Through AI Innovation</p>
          </div>

          <div className="about-content">
            {/* Mission & Vision */}
            <div className="about-mission" data-aos="fade-up" data-aos-delay="100">
              <div className="mission-card">
                <div className="mission-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>To empower farmers with cutting-edge AI technology, enabling sustainable agriculture practices and ensuring food security for future generations. We believe every farmer deserves access to advanced tools that can transform their operations.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🔮</div>
                <h3>Our Vision</h3>
                <p>To become the global leader in AI-driven agricultural solutions, creating a world where technology and traditional farming wisdom work together to feed the planet efficiently and sustainably.</p>
              </div>
            </div>

            {/* Company Stats */}
            <div className="about-stats" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-item">
                <div className="stat-number" data-aos="zoom-in" data-aos-delay="300">50K+</div>
                <div className="stat-label">Farmers Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-aos="zoom-in" data-aos-delay="400">95%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-aos="zoom-in" data-aos-delay="500">25+</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-aos="zoom-in" data-aos-delay="600">3M+</div>
                <div className="stat-label">Crops Analyzed</div>
              </div>
            </div>

            {/* Core Values */}
            <div className="about-values" data-aos="fade-up" data-aos-delay="300">
              <h3>Our Core Values</h3>
              <div className="values-grid">
                <div className="value-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="value-icon">🤝</div>
                  <h4>Trust & Reliability</h4>
                  <p>Building lasting relationships with farmers through dependable technology and transparent communication.</p>
                </div>
                <div className="value-item" data-aos="fade-up" data-aos-delay="500">
                  <div className="value-icon">🌱</div>
                  <h4>Sustainability</h4>
                  <p>Promoting eco-friendly farming practices that protect our environment while maximizing crop yields.</p>
                </div>
                <div className="value-item" data-aos="fade-up" data-aos-delay="600">
                  <div className="value-icon">💡</div>
                  <h4>Innovation</h4>
                  <p>Continuously pushing the boundaries of AI technology to solve real-world agricultural challenges.</p>
                </div>
                <div className="value-item" data-aos="fade-up" data-aos-delay="700">
                  <div className="value-icon">👥</div>
                  <h4>Community</h4>
                  <p>Supporting farming communities worldwide with accessible, affordable, and effective solutions.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="about-cta" data-aos="fade-up" data-aos-delay="600">
              <h3>Join the Agricultural Revolution</h3>
              <p>Be part of the future of farming. Experience the power of AI-driven agriculture today.</p>
              <div className="cta-buttons">
                <button className="cta-primary">Get Started Now</button>
                <button className="cta-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/AgroLogo.png" alt="AgroVision Logo" className="footer-logo-image" />
                <h3>AgroVision</h3>
              </div>
              <p className="footer-description">
                Revolutionizing agriculture through AI-powered crop disease prediction and management. Empowering farmers with cutting-edge technology for sustainable farming.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#hero">Home</a></li>
                <li><Link to="/ai-prediction">AI Prediction</Link></li>
                <li><Link to="/finance">Finance</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li><a href="#">Crop Disease Detection</a></li>
                <li><a href="#">Financial Management</a></li>
                <li><a href="#">Weather Monitoring</a></li>
                <li><a href="#">Soil Analysis</a></li>
                <li><a href="#">Yield Prediction</a></li>
                <li><a href="#">Market Insights</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div className="footer-contact">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Farm Road, Agri City, AC 12345</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>info@agrovision.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <span>Mon-Fri: 9AM-6PM</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-section">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest farming insights and AI updates.</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; {new Date().getFullYear()} AgroVision. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
