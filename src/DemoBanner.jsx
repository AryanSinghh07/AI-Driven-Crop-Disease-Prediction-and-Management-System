import { useState, useEffect } from 'react';
import './DemoBanner.css';

const DemoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 300; // Show after 300px scroll
      
      if (scrollY > scrollThreshold && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        
        // Auto hide after 5 seconds
        setTimeout(() => {
          setIsHiding(true);
          setTimeout(() => {
            setIsVisible(false);
          }, 500); // Wait for fade-out animation
        }, 5000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsHiding(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // Wait for fade-out animation
  };

  if (!isVisible) return null;

  return (
    <div className={`demo-banner ${isHiding ? 'hiding' : ''}`}>
      <div className="demo-content">
        <div className="demo-icon">⚠️</div>
        <div className="demo-text">
          <strong>Important Notice:</strong> This website is for demonstration purposes only. 
          All features, data, and functionality shown are simulated and not connected to real systems.
        </div>
        <button 
          className="demo-close-btn"
          onClick={handleClose}
          aria-label="Close demo notice"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default DemoBanner; 