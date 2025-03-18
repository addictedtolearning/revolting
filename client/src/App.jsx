import { useState } from 'react'
import './App.css'
import ManifestoRenderer from './ManifestoRenderer';

function App() {
  const [cause, setCause] = useState('');
  const [manifesto, setManifesto] = useState([]);

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

    setManifesto([]);
    const reader = resp.body.getReader();
    let decoder = new TextDecoder();
    let manifest = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      manifest += decoder.decode(value);
      setManifesto(manifest);
    }
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
