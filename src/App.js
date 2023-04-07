import logo from './logo.svg';
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import NavigationBar from './Components/Navigation';
import { Footer } from './Components/Footer';

function App() {
  return (
    <Container fluid className="App">
      <Row style={{minHeight: '100%'}}>
        <Col style={{minHeight: '100%', margin:'0'}}>
          <NavigationBar/>
              <Routes>
                    <Route path="/" element={<HomePage/>}></Route>    
              </Routes>
         <Footer/>
        </Col>
  </Row>
    </Container>
  );
}

export default App;
