import { useState, useRef } from 'react';
import './AIPrediction.css';

const AIPrediction = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [activeTab, setActiveTab] = useState('upload');
  const [scanning, setScanning] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);

  // Sample prediction data for demonstration
  const samplePrediction = {
    cropType: "Wheat",
    healthStatus: "Diseased",
    diseaseType: "Rust Disease",
    confidence: 94.5,
    severity: "Moderate",
    imageUrl: selectedImage,
    analysis: {
      symptoms: [
        "Orange to reddish-brown pustules on leaves",
        "Small, circular spots with yellow halos",
        "Pustules may appear on stems and heads"
      ],
      causes: [
        "Fungal pathogen Puccinia graminis",
        "High humidity and warm temperatures",
        "Poor air circulation in dense crops"
      ],
      treatment: [
        "Apply fungicide containing azoxystrobin or pyraclostrobin",
        "Remove and destroy infected plant debris",
        "Improve air circulation through proper spacing",
        "Use resistant wheat varieties in future plantings"
      ],
      prevention: [
        "Plant resistant wheat varieties",
        "Maintain proper crop spacing",
        "Avoid overhead irrigation",
        "Monitor weather conditions for disease-favorable periods"
      ]
    },
    recommendations: [
      {
        type: "Immediate Action",
        description: "Apply fungicide within 48 hours to prevent spread",
        priority: "High"
      },
      {
        type: "Cultural Practice",
        description: "Remove infected leaves and improve ventilation",
        priority: "Medium"
      },
      {
        type: "Long-term Strategy",
        description: "Consider planting resistant varieties next season",
        priority: "Low"
      }
    ],
    marketImpact: {
      yieldLoss: "15-25%",
      qualityImpact: "Reduced grain quality and protein content",
      economicLoss: "₹12,000 - ₹20,000 per acre"
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setPredictionResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setPredictionResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    setTimeout(() => {
      setPredictionResult(samplePrediction);
      setIsAnalyzing(false);
    }, 3000);
  };

  const startScanning = () => {
    setScanning(true);
    setActiveTab('scan');
    
    // Simulate camera access
    setTimeout(() => {
      // In a real app, this would access the device camera
      console.log('Camera access requested');
    }, 1000);
  };

  const captureImage = () => {
    // Simulate capturing image from camera
    const mockImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxAAPwCdABmX/9k=';
    setSelectedImage(mockImage);
    setScanning(false);
    setPredictionResult(null);
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setPredictionResult(null);
    setScanning(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'low': return '#4CAF50';
      case 'moderate': return '#FF9800';
      case 'high': return '#f44336';
      case 'critical': return '#9C27B0';
      default: return '#666';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return '#f44336';
      case 'medium': return '#FF9800';
      case 'low': return '#4CAF50';
      default: return '#666';
    }
  };

  return (
    <div className="ai-prediction-page">
      {/* Demo Notice */}
      <div className="page-demo-notice">
        <div className="demo-notice-content">
          <span className="demo-notice-icon">⚠️</span>
          <span className="demo-notice-text">Demo Mode: AI predictions and analysis shown are simulated for demonstration purposes only.</span>
        </div>
      </div>
      
      {/* Header Section */}
      <div className="prediction-header">
        <div className="header-content">
          <h1 className="prediction-title">
            <span className="prediction-icon">🤖</span>
            AI Crop Disease Prediction
          </h1>
          <p className="prediction-subtitle">
            Upload or scan crop images to get instant AI-powered disease detection and treatment recommendations
          </p>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">99.7%</span>
            <span className="stat-label">Accuracy</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Crop Types</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3s</span>
            <span className="stat-label">Analysis Time</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="prediction-content">
        {/* Upload/Scan Tabs */}
        <div className="input-tabs">
          <button 
            className={`tab-btn ${activeTab === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            <span className="tab-icon">📁</span>
            Upload Image
          </button>
          <button 
            className={`tab-btn ${activeTab === 'scan' ? 'active' : ''}`}
            onClick={() => setActiveTab('scan')}
          >
            <span className="tab-icon">📷</span>
            Scan Live
          </button>
        </div>

        {/* Input Section */}
        <div className="input-section">
          {activeTab === 'upload' && (
            <div className="upload-area">
              <div 
                className={`upload-zone ${selectedImage ? 'has-image' : ''}`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedImage ? (
                  <div className="image-preview">
                    <img src={selectedImage} alt="Selected crop" />
                    <div className="image-overlay">
                      <button className="change-image-btn" onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}>
                        Change Image
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="upload-placeholder">
                    <span className="upload-icon">📁</span>
                    <h3>Upload Crop Image</h3>
                    <p>Drag and drop your image here or click to browse</p>
                    <span className="upload-hint">Supports JPG, PNG, HEIC up to 10MB</span>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
          )}

          {activeTab === 'scan' && (
            <div className="scan-area">
              {!scanning ? (
                <div className="scan-placeholder">
                  <span className="scan-icon">📷</span>
                  <h3>Live Crop Scanning</h3>
                  <p>Use your camera to scan crops in real-time</p>
                  <button className="start-scan-btn" onClick={startScanning}>
                    Start Scanning
                  </button>
                </div>
              ) : (
                <div className="camera-view">
                  <div className="camera-frame">
                    <video ref={videoRef} autoPlay muted />
                    <div className="scan-overlay">
                      <div className="scan-target"></div>
                      <p>Position crop within the frame</p>
                    </div>
                  </div>
                  <div className="camera-controls">
                    <button className="capture-btn" onClick={captureImage}>
                      <span className="capture-icon">📸</span>
                      Capture
                    </button>
                    <button className="cancel-scan-btn" onClick={() => setScanning(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Analysis Button */}
          {selectedImage && (
            <div className="analysis-actions">
              <button 
                className={`analyze-btn ${isAnalyzing ? 'analyzing' : ''}`}
                onClick={analyzeImage}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <span className="loading-spinner"></span>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <span className="analyze-icon">🔍</span>
                    Analyze Image
                  </>
                )}
              </button>
              <button className="reset-btn" onClick={resetAnalysis}>
                Reset
              </button>
            </div>
          )}
        </div>

        {/* Results Section */}
        {predictionResult && (
          <div className="results-section">
            <div className="results-header">
              <h2>Analysis Results</h2>
              <div className="confidence-badge">
                <span className="confidence-label">Confidence:</span>
                <span className="confidence-value">{predictionResult.confidence}%</span>
              </div>
            </div>

            {/* Quick Summary */}
            <div className="quick-summary">
              <div className="summary-card">
                <div className="summary-icon">🌾</div>
                <div className="summary-content">
                  <h4>Crop Type</h4>
                  <p>{predictionResult.cropType}</p>
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-icon">🏥</div>
                <div className="summary-content">
                  <h4>Health Status</h4>
                  <p className={predictionResult.healthStatus === 'Healthy' ? 'healthy' : 'diseased'}>
                    {predictionResult.healthStatus}
                  </p>
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-icon">⚠️</div>
                <div className="summary-content">
                  <h4>Disease Type</h4>
                  <p>{predictionResult.diseaseType || 'None detected'}</p>
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-icon">📊</div>
                <div className="summary-content">
                  <h4>Severity</h4>
                  <p style={{ color: getSeverityColor(predictionResult.severity) }}>
                    {predictionResult.severity}
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="detailed-analysis">
              <div className="analysis-tabs">
                <button className="analysis-tab active">Symptoms</button>
                <button className="analysis-tab">Causes</button>
                <button className="analysis-tab">Treatment</button>
                <button className="analysis-tab">Prevention</button>
              </div>

              <div className="analysis-content">
                <div className="analysis-list">
                  {predictionResult.analysis.symptoms.map((symptom, index) => (
                    <div key={index} className="analysis-item">
                      <span className="item-icon">🔍</span>
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="recommendations-section">
              <h3>Action Recommendations</h3>
              <div className="recommendations-grid">
                {predictionResult.recommendations.map((rec, index) => (
                  <div key={index} className="recommendation-card">
                    <div className="rec-header">
                      <h4>{rec.type}</h4>
                      <span 
                        className="priority-badge"
                        style={{ backgroundColor: getPriorityColor(rec.priority) }}
                      >
                        {rec.priority}
                      </span>
                    </div>
                    <p>{rec.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Impact */}
            <div className="market-impact">
              <h3>Expected Market Impact</h3>
              <div className="impact-grid">
                <div className="impact-card">
                  <span className="impact-icon">📉</span>
                  <h4>Yield Loss</h4>
                  <p>{predictionResult.marketImpact.yieldLoss}</p>
                </div>
                <div className="impact-card">
                  <span className="impact-icon">💰</span>
                  <h4>Economic Loss</h4>
                  <p>{predictionResult.marketImpact.economicLoss}</p>
                </div>
                <div className="impact-card">
                  <span className="impact-icon">⭐</span>
                  <h4>Quality Impact</h4>
                  <p>{predictionResult.marketImpact.qualityImpact}</p>
                </div>
              </div>
            </div>

            {/* Expert Tips */}
            <div className="expert-tips">
              <h3>Expert Tips</h3>
              <div className="tips-grid">
                <div className="tip-card">
                  <span className="tip-icon">⏰</span>
                  <h4>Timing is Critical</h4>
                  <p>Apply treatments early in the morning or late evening for best absorption and minimal impact on beneficial insects.</p>
                </div>
                <div className="tip-card">
                  <span className="tip-icon">🌡️</span>
                  <h4>Monitor Conditions</h4>
                  <p>Track temperature and humidity levels. Disease pressure increases during warm, humid weather.</p>
                </div>
                <div className="tip-card">
                  <span className="tip-icon">🔬</span>
                  <h4>Regular Monitoring</h4>
                  <p>Inspect your crops weekly and use AI scanning for early detection of disease symptoms.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* How It Works */}
        {!predictionResult && (
          <div className="how-it-works">
            <h3>How AI Prediction Works</h3>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <span className="step-icon">📷</span>
                <h4>Upload Image</h4>
                <p>Take a clear photo of your crop or upload an existing image</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <span className="step-icon">🤖</span>
                <h4>AI Analysis</h4>
                <p>Our advanced AI analyzes the image using deep learning algorithms</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <span className="step-icon">📊</span>
                <h4>Get Results</h4>
                <p>Receive detailed diagnosis, treatment plans, and prevention tips</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPrediction; 