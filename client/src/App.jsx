import { useState } from 'react'
import './App.css'
import ManifestoRenderer from './ManifestoRenderer';
import "iconify-icon";
import GitHubCorner from './GitHubCorner';

function App() {
  const [cause, setCause] = useState('');
  const [manifesto, setManifesto] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getManifesto() {
    if (loading) return;
    setLoading(true);
    try {
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
    } catch (err) {
      console.error('Failed to fetch manifesto:', err);
      alert('Failed to fetch manifesto');
    }
    setLoading(false);
  }

  return (
    <>
      <GitHubCorner />
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
      <button onClick={() => getManifesto()} className={loading ? 'button button-loading' : 'button'}>
        <label htmlFor="">Get the manifesto</label>
        <iconify-icon
          icon="fa6-solid:hand-fist"
          style={{ color: '#aa0000', fontSize: '36px' }}
        ></iconify-icon>
      </button>
      <ManifestoRenderer manifesto={manifesto} />
    </>
  )
}

export default App
