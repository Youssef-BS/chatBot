import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [newMessage, setNewMessage] = useState('');
  const [newResponse, setNewResponse] = useState('');
  const [message, setMessage] = useState('');

  const handleAddData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/add_response', {
        new_message: newMessage,
        new_response: newResponse
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred while adding the new response.');
    }
  };

  return (
    <div className="container d-flex justify-content-center ">
      <div className="card p-4">
        <h2 className="mb-4">Add New Response</h2>
        <div className="mb-3">
          <label htmlFor="newMessage" className="form-label">New Message:</label>
          <input type="text" className="form-control" id="newMessage" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="newResponse" className="form-label">New Response:</label>
          <input type="text" className="form-control" id="newResponse" value={newResponse} onChange={(e) => setNewResponse(e.target.value)} />
        </div>
        <button className="btn btn-primary mb-3" onClick={handleAddData}>Add Response</button>
        {message && <p className="text-success">{message}</p>}
      </div>
    </div>
  );
}

export default Chat;
