import React from 'react';
import './App.css';
import portfolioPdf from './assets/My_Portfolio.pdf';

function App() {
  return (
    <div className="matrix-wrapper">
      {/* Background terminal grid effect */}
      <div className="matrix-grid"></div>

      <main className="terminal-card">
        <header className="terminal-header">
          <div className="header-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">system_operator@root:~</div>
        </header>

        <section className="terminal-content">
          <div className="console-line">
            <span className="prompt">&gt;</span> 
            <p className="typed-text">Initializing identification sequence...</p>
          </div>
          
          <h1 className="main-title">Clive Hakaperi</h1>
          <p className="subtitle">Systems Developer & Technical Lead</p>
          
          <p className="description">
            Welcome to my central deployment gateway. Don't worry you're not being hacked...yet. Just kidding. This serves as a route to my portfolio down below! Go ahead and click it.
          </p>

          <div className="action-container">
            <a 
              href={portfolioPdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="matrix-btn"
            >
              Execute Link: View Portfolio
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;