// src/App.jsx
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name/name';
import Price from './components/Price/price';
import Description from './components/Description/description';
import Image from './components/Image/image';

// Optional: Set your first name here, or leave it empty to display "Hello, there!"
const firstName = "Abdulazeem"; // Replace with your name if you like

function App() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card style={{ width: '18rem' }} className="text-center">
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-3">
        <h5>Hello, {firstName ? firstName : "there"}!</h5>
        {firstName && (
          <img
            src="https://via.placeholder.com/100"
            alt="Greeting"
            className="rounded-circle mt-2"
          />
        )}
      </div>
    </Container>
  );
}

export default App;
