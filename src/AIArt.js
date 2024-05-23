import React, { useState } from 'react';
import './AIArt.css';
import model1Image from './assets/lc.png';
import model2Image from './assets/lc.png';
import image3 from './assets/lc.png';
import profileImage from './assets/lc.png';
import casinoIcon from './assets/lc.png';  // Replace with actual paths to your icons
import defiIcon from './assets/invoice-1.png';
import aiArtIcon from './assets/photo-gallery.png';
import helpIcon from './assets/school.png';
import settingsIcon from './assets/settings.png';
import console from './assets/joystick.png'
import wallet from './assets/wallet.png'
import uploadIcon from './assets/photo-gallery.png'

const AIArt = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);

  const handleModelClick = (model) => {
    if (selectedModel === model) {
      setSelectedModel(null); // Deselect the model if already selected
    } else {
      setSelectedModel(model); // Select the model if not selected
    }
  };



  const handleGenerate = () => {
    setIsLoading(true);

    // Simulate image generation delay
    setTimeout(() => {
      setGeneratedImage(image3); // Replace with actual generated image
      setIsLoading(false);
    }, 5000);
  };

  const handleMint = () => {
    // Handle minting action
  };

  const handleCancel = () => {
    setGeneratedImage(null);
  };

  return (
    <div className="ai-page">
<header className="header">
  <div className="logo-button">
    <button>Logo</button>
  </div>
  <div className="header-buttons">
    <button className="notification-button">
      <span className="notification-badge"></span>
    </button>
    <button className="connect-button">
      <img src={wallet} alt="Wallet Logo" className="connect-logo" />
      Connect
    </button>
    <div className="profile-image-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
  </div>
</header>
<aside className="sidebar">
  <div className="sidebar-top">
    <a href='fjr.cpm'><img height={30} src={console} alt="Casino" /></a>
    <h6>Casino</h6>
    <a href='fjr.cpm'><img height={30} src={defiIcon} alt="DeFi" /></a>
    <h6>Defi</h6>
    <a href='fjr.cpm'><img height={30} src={aiArtIcon} alt="AI Art" /></a>
    <h6>AI</h6>
  </div>
  <div className="sidebar-bottom">
    <a href='fjr.cpm'><img height={30} src={helpIcon} alt="Help" /></a>
    <h6>Help</h6>
    <a href='fjr.cpm'><img height={25} src={settingsIcon} alt="Settings" /></a>
    <h6>Settings</h6>
  </div>
</aside>

      <main className="main-content3">
        <h1>Generate Profile Pics with AI</h1>
        <div className='main-content21'>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="Prompt" 
              value={prompt} 
              onChange={(e) => setPrompt(e.target.value)} 
            />
            <button onClick={handleGenerate}>Generate</button>
          </div>
          <div className='temp-div'>
          <div className="upload-container">
  <div className="file-upload-wrapper-out">
    <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
    <label htmlFor="fileUpload">Upload Cover Art</label>
 
  <input type="file" id="fileUpload" />
  </div>


</div>
<div className='upload-button'>
<button>Upload</button>
</div>
</div>

        </div>
        <h2>Pick Model</h2>
        <div className="model-container">
        <div className="model-option" onClick={() => handleModelClick('model1')}>
  <img src={model1Image} alt="Model 1" className={selectedModel === 'model1' ? 'selected' : ''} />
  <span>Model 1</span>
</div>
<div className="model-option" onClick={() => handleModelClick('model2')}>
  <img src={model2Image} alt="Model 2" className={selectedModel === 'model2' ? 'selected' : ''} />
  <span>Model 2</span>
</div>

        </div>
      </main>

      {isLoading && (
        <div className="modal">
          <div className="modal-content">
            <h2 style={{ color: 'black' }}>Generating...</h2>
          </div>
        </div>
      )}

      {generatedImage && (
        <div className="modal">
          <div className="modal-content">
            <img src={generatedImage} alt="Generated" className="generated-image" />
            <p className="prompt-text">{prompt}</p>
            <div className="modal-buttons">
              <button onClick={handleMint}>Mint</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIArt;
