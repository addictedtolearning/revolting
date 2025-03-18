import './ManifestoRenderer.css';

function ManifestoRenderer({ manifesto }) {
    if (!manifesto || manifesto.length === 0) {
        return null;
    }
    var manifestoString = '';
    for (var chunk of manifesto.split('\n')) {
        if (chunk.trim().length === 0) {
            continue;
        }
        try {
            var event = JSON.parse(chunk);
            if (event.choices[0].finish_reason !== null) {
                break;
            }
            manifestoString += event.choices[0].delta.content;
        } catch (e) {
            console.error('Error parsing JSON:', e);
        }
    }

    var words = manifestoString.split(' ');
    var elements = [];
    for (var word of words) {
        var className = 'manifesto-word';
        if (word.toUpperCase() === word) {
            className += ' manifesto-word-uppercase';
        }
        elements.push(<span className={className}>{word} </span>);
    }

    return (
        <div>
            <h2>Manifesto:</h2>
            <div className="manifesto">
                {elements}
            </div>
        </div>
    );
}

export default ManifestoRenderer;