
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css';

export default function User() {
    const [interactions, setInteractions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/interactions')
            .then(res => { setInteractions(res.data); })
            .catch(err => { console.log(err); });
    }, []);

    return (
        <div>
            <div className="flex-container">
                {interactions.map(interaction => (
                    <div className="flex-items" key={interaction.id}>
                        <h1>{interaction.type}</h1><br />
                        <p><strong>Date:</strong> {interaction.date}</p><br />
                        <p><strong>Notes:</strong> {interaction.notes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
