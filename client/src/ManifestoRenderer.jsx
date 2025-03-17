import Markdown from 'react-markdown'
import './ManifestoRenderer.css';

function ManifestoRenderer({ manifesto }) {
    if(!manifesto) {
        return null;
    }
    return (
        <div>
            <h2>Manifesto:</h2>
            <div className="manifesto">
                <Markdown>
                    {manifesto}
                </Markdown>
            </div>
        </div>
    );
}

export default ManifestoRenderer;