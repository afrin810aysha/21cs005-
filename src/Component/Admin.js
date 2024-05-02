import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';
export default function Ecommerce() {
    const [interactions, setInteractions] = useState([]);
    const [interactionType, setInteractionType] = useState('');
    const [interactionDate, setInteractionDate] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        fetchInteractions();
    }, []);

    const fetchInteractions = () => {
        axios.get('http://localhost:3001/interactions')
            .then(res => setInteractions(res.data))
            .catch(err => console.log(err));
    };

    const handleAddInteraction = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/interactions', {
            type: interactionType,
            date: interactionDate,
            notes: notes
        })
        .then(res => {
            console.log(res);
            fetchInteractions();
            setInteractionType('');
            setInteractionDate('');
            setNotes('');
        })
        .catch(err => console.log(err));
    };

    const handleDeleteInteraction = (interactionId) => {
        axios.delete(`http://localhost:3001/interactions/${interactionId}`)
            .then(res => {
                console.log(res);
                fetchInteractions();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h1>E commerce</h1>

            <form onSubmit={handleAddInteraction}>
                <label>Interaction Type:</label>
                <input type="text" value={interactionType} onChange={(e) => setInteractionType(e.target.value)} />
                <br />

                <label>Date:</label>
                <input type="text" value={interactionDate} onChange={(e) => setInteractionDate(e.target.value)} />
                <br />

                <label>Notes:</label>
                <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
                <br />

                <button type="submit">Add Interaction</button>
            </form>

            <br />

            <table>
                <thead>
                    <tr>
                        <th>Interaction Type</th>
                        <th>Date</th>
                        <th>Notes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {interactions.map(interaction => (
                        <tr key={interaction.id}>
                            <td>{interaction.type}</td>
                            <td>{interaction.date}</td>
                            <td>{interaction.notes}</td>
                            <td>
                                <button onClick={() => handleDeleteInteraction(interaction.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
