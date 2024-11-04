
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getAnsw } from './Services/calculator';
function App() {
  
    const [displayValue, setDisplayValue] = useState<string>('');
    const [answ, setAnsw] = useState<string>('');
    const [spanValue, setSpanValue] = useState<string>('');
    
    const handleEqualClick = async () =>{
      try {
        // Отправка AJAX-запроса на сервер
        getAnsw(displayValue)
        .then(data => {
          setAnsw(data);
          setSpanValue(displayValue+'='+answ);
        })
        .catch(error => {
          console.log('Ошибка при отправке запроса:', error);
          setSpanValue('Ошибка при отправке запроса');
        });
      } catch (error) {
        setSpanValue('Ошибка сервера');
      }
    }
  

    const handleButtonClick = (button) => {
      switch (button) {
        case 'C':
          setDisplayValue(displayValue.slice(0, -1));
          break;
        case 'CE':
          setDisplayValue("");
          break;
        case '+':
        case '-':
        case '√':
        case '^':
        case '×':
        case '/':
          if ("/-×+√^".includes(displayValue.slice(displayValue.length - 1, displayValue.length))) {
            break; // Do nothing if the last character is already an operator
          } else if (displayValue === '' && button === "-") {
            // Special case for negative sign at the beginning
            setDisplayValue(displayValue + "(" + button);
          } else {
            setDisplayValue(displayValue + button);
          }
          break;
        default:
          // Default case: Add the button to the display value
          setDisplayValue(displayValue + button);
      }
    };
  const buttons = [
     '(',')','C','CE','+', '-', '×', '/', '1', '2', '3', '^', '4', '5',
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
              fontFamily: 'Martian Mono', 
              fontSize: '16px',
              color: 'white',
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#BBBBD9')} 
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#9B9CBF')}
            onMouseDown={(e) => (e.target.style.backgroundColor = '#595A7D')}
            onMouseUp={(e) => (e.target.style.backgroundColor = '#BBBBD9')}
            onClick={() => handleButtonClick(button)}
          >
            {button} 
          </Button>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={9} className="pe-0">
          <Form.Control
            value={displayValue}
            type="text"
            placeholder="Введите выражение"
            onChange={(e)=>setDisplayValue(e.target.value)}
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
            onClick={() => handleEqualClick()}
          >
            {'='}
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} className="mb-2" style={{ padding: 0 }}>
          <div
            style={{
              height: '35px',
              width: '233px',
              fontFamily: 'Martian Mono',
              fontSize: '13px',
              padding: '8px', // Добавляем отступ для текста
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' // Для вертикального центрирования
            }}
          >
            
            <span>{spanValue} </span>
          </div>
        </Col>
      </Row>
    </Container>
   
  );
};

export default App
