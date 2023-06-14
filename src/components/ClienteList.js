import React, { useState } from 'react';
import "./ClienteList.css";

const ClientList = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  // Function to generate specific names based on index
  const generateSpecificName = (index) => {
    const names = ['John', 'Jane', 'Alice', 'Bob', 'Ella', 'David', 'Sophia', 'Michael', 'Olivia', 'William'];
    return names[index % names.length];
  };

  // Simulated client data
  const clients = Array.from({ length: 10 }, (_, index) => {
    const clientId = `0086${String(index + 1).padStart(6, '0')}`;
    const randomAge = Math.floor(Math.random() * 50) + 20; // Generates random age between 20 and 69
    const clientName = generateSpecificName(index);

    return {
      id: clientId,
      name: clientName,
      age: randomAge,
    };
  });

  const handleClientClick = (clientId) => {
    const selectedClient = clients.find((client) => client.id === clientId);
    setSelectedClient(selectedClient);
  };

  return (
    <div className="client-container">
      <div className="client-list">
        <h2>Client List</h2>
        <ul>
          {clients.map((client) => (
            <li
              key={client.id}
              className={selectedClient === client.id ? 'active' : ''}
              onClick={() => handleClientClick(client.id)}
            >
              {client.id}
            </li>
          ))}
        </ul>
      </div>
      <div className="client-details">
        {selectedClient ? (
          <div>
            <h2>Client Information</h2>
            <p>Name: {selectedClient.name}</p>
            <p>Age: {selectedClient.age}</p>
          </div>
        ) : (
          <div>
            <h2>Select a client to view information</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientList;



