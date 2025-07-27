import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/AgroLogo.png" alt="AgroVision Logo" className="logo-image" />
          <span className="logo-text">AgroVision</span>
        </div>

        {/* Desktop Navigation */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li><Link to="/ai-prediction" onClick={closeMenu}>AI Prediction</Link></li>
          <li><Link to="/finance" onClick={closeMenu}>Finance</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
        </ul>

        {/* CTA Buttons */}
        <div className="navbar-cta">
          <button className="nav-btn secondary">Login</button>
          <button className="nav-btn primary">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            <li><a href="#hero" onClick={closeMenu}>Home</a></li>
            <li><Link to="/ai-prediction" onClick={closeMenu}>AI Prediction</Link></li>
            <li><Link to="/finance" onClick={closeMenu}>Finance</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#" onClick={closeMenu}>Pricing</a></li>
            <li><a href="#" onClick={closeMenu}>Support</a></li>
          </ul>
          <div className="mobile-cta">
            <button className="mobile-btn secondary">Login</button>
            <button className="mobile-btn primary">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 