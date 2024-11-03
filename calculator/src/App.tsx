
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function App() {
  const buttons = [
    '+', '-', '×', '/', '1', '2', '3', '^', '4', '5',
    '6', '√', '7', '8', '9', 'sin', '0', 'cos', 'tg', 'ctg'
  ];

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
    <Row className="mb-3" style={{ width: '233px' }}>
      {buttons.map((button, i) => (
        <Col key={i} xs={3} className="mb-2" style={{ padding: 0 }}>
          <Button
            variant="outline-light"
            style={{
              backgroundColor: '#9B9CBF', 
              border: 'none',
              borderRadius: '3px',
              width: '51px',
              height: '35px',
              transition: 'background-color 0.2s ease-in-out',
              // Стили для текста внутри кнопки
              fontFamily: 'Martian Mono', 
              fontSize: '16px',
              color: 'white', // Цвет текста в обычном состоянии
              // Добавляем display: flex и justify-content: center для центрирования текста
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' // Для вертикального центрирования
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#BBBBD9')} 
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#9B9CBF')}
            onMouseDown={(e) => (e.target.style.backgroundColor = '#595A7D')}
            onMouseUp={(e) => (e.target.style.backgroundColor = '#BBBBD9')}
          >
            {button} 
          </Button>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={9} className="pe-0">
          <Form.Control
            type="text"
            placeholder="Введите значение"
            style={{
              border: '3px solid #9B9CBF',
              borderRadius: '3px',
              height: '35px',
              width: '233px',
              fontFamily: 'Martian Mono', fontSize: '13px'
            }}
          />
        </Col>
        <Col xs="auto" className="ps-0">
          <Button
            variant="outline-light"
            style={{
              backgroundColor: '#9B9CBF',
              border: 'none',
              borderRadius: '3px',
              height: '35px',
              width: '51px',
              transition: 'background-color 0.3s ease',
              fontFamily: 'Martian Mono', 
              fontSize: '20px',
              color: 'white',
              // Добавляем display: flex и justify-content: center для центрирования текста
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' // Для вертикального центрирования
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#BBBBD9')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#9B9CBF')}
            onMouseDown={(e) => (e.target.style.backgroundColor = '#595A7D')}
            onMouseUp={(e) => (e.target.style.backgroundColor = '#BBBBD9')}
          >
            {'='}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App
