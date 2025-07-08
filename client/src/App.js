import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/api/documents')
            .then(res => setContent(res.data.content));
    }, []);

    const handleChange = (e) => {
        setContent(e.target.value);
        axios.post('http://localhost:5000/api/documents', { content: e.target.value });
    };

    return (
        <div className="App">
            <h2>Collaborative Document Editor</h2>
            <textarea
                value={content}
                onChange={handleChange}
                rows="20"
                cols="80"
                placeholder="Start typing..."
            />
        </div>
    );
}

export default App;