import { useState } from 'react'
import './App.css'
import Markdown from 'react-markdown'

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
        What is the cause of your revolution?
        <textarea
          value={cause}
          onChange={(e) => setCause(e.target.value)}
        />
      </div>
      <button onClick={() => getManifesto()}>
        Get the manifesto
      </button>
      {manifesto && (
        <div>
          <h2>Manifesto:</h2>
          <Markdown>
            {manifesto}
          </Markdown>
        </div>
      )}
    </>
  )
}

export default App
