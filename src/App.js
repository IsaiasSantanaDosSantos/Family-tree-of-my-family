import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          {/* <Route path="/" element={<Inicio />} />
          <Route path="/listar" element={<Historia />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/sobre" element={<Sobre />} /> */}
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
