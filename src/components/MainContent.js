import React, { useState } from 'react';


// Lista de URLs de imágenes de F1
const carImages = [
  'https://www.sodikart.com/content/images/karts/38/main/2-kart-1547732689.png', 
  'https://www.sodikart.com/content/images/karts/5/main/1-kart-1578327308.png',
  'https://www.sodikart.com/content/images/karts/42/main/0-kart-1658388679.png',
  'https://www.sodikart.com/content/images/karts/29/main/0-kart-1578328077.png',
];

// Descripciones de los karts
const carDescriptions = [
  'Kart 1: Modelo 38',
  'Kart 2: Modelo 5',
  'Kart 3: Modelo 42',
  'Kart 4: Modelo 29',
];

// Información de los clientes y tiempos restantes
const initialClients = [
  { name: 'Cliente 1', timeRemaining: '10:30', status: 'Pendiente de Pago' },
  { name: 'Cliente 2', timeRemaining: '15:20', status: 'Pendiente de Pago' },
  { name: 'Cliente 3', timeRemaining: '8:45', status: 'Pendiente de Pago' },
  { name: 'Cliente 4', timeRemaining: '12:10', status: 'Pendiente de Pago' },
];

const MainContent = () => {
  const [clients, setClients] = useState(initialClients);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedClientIndex, setSelectedClientIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedClientIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedClientIndex(null);
  };

  const handlePayment = () => {
    const updatedClients = clients.map((client, index) =>
      index === selectedClientIndex ? { ...client, status: 'Pagado' } : client
    );
    setClients(updatedClients);
    closeModal();
  };

  return (
    <div>
      
      <div className="main-content">
        <h2>Lista de Karts</h2>
        <div className="car-list">
          {carImages.map((url, index) => (
            <div key={index} className="car-card" onClick={() => handleCardClick(index)}>
              <img src={url} alt={`Car ${index + 1}`} className="car-image" />
              <p>{carDescriptions[index]}</p>
              <div className="client-info">
                <p><strong>{clients[index].name}</strong></p>
                <p>Tiempo restante: {clients[index].timeRemaining}</p>
                <p>
                  <span className={`status-label ${clients[index].status === 'Pagado' ? 'paid' : 'pending'}`}>
                    {clients[index].status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        {modalVisible && selectedClientIndex !== null && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>&times;</span>
              <h2>Información de Pago</h2>
              <p><strong>Nombre del Cliente:</strong> {clients[selectedClientIndex].name}</p>
              <p><strong>Tiempo Restante:</strong> {clients[selectedClientIndex].timeRemaining}</p>
              <p><strong>Monto a Pagar:</strong> $XX.XX</p>
              <button onClick={handlePayment}>Marcar como Pagado</button>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
