import { useState } from 'react'
import './App.css'
import ManifestoRenderer from './ManifestoRenderer';

function App() {
  const [cause, setCause] = useState('');
  const [manifesto, setManifesto] = useState('');

  async function getManifesto() {
    var resp = await fetch('/.netlify/functions/manifesto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cause }),
    });
    
    if (!resp.ok) {
      console.error('Failed to fetch manifesto:', resp.statusText);
      return;
    }

    var data = await resp.json();
    setManifesto(data.manifesto);
  }

  return (
    <>
      <h1>
        Viva la revolución!
      </h1>
      <div>
        <div className="subtitle">What is the cause of your revolution?</div>
        <div className="cause-outer">
          <textarea
            value={cause}
            className="cause-textarea"
            onChange={(e) => setCause(e.target.value)}
          />
        </div>
      </div>
      <button onClick={() => getManifesto()}>
        Get the manifesto
      </button>
      <ManifestoRenderer manifesto={manifesto} />
    </>
  )
}

export default App
