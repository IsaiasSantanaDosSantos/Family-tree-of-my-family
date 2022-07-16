import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Avatar,
  Container,
} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import DrawerComp from '../DrawerComp';
import { NavbarComponent } from './styles';
import fotoFamilia from '../../../img/familiaJesus.png';

// const pages = ["Início", "Cadastro", "Contato"];

const Navbar = () => {
  // const [value, setValue] = useState();

  const theme = useTheme();

  const isMath = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <NavbarComponent>
      <AppBar sx={{ background: '#222' }} position="sticky">
        <Toolbar>
          {isMath ? (
            <>
              <Link to="/">
                  <img src={fotoFamilia} alt="Família de Jesus" />
              </Link>
              <Typography></Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <nav className="navNavbar">
                <Container className="containerNavbar">
                  <Link to="/">
                    <img
                      src={fotoFamilia} 
                      alt="Família de Jesus"
                    />
                  </Link>
                  <ul className="menuNavbar">
                    <li className="itensMenuNavbar">
                      <Link to="/">Início</Link>
                    </li>
                    <li className="itensMenuNavbar">
                      <Link to="/history">História</Link>
                    </li>
                    <li className="itensMenuNavbar">
                      <Link to="/contacts">Contato</Link>
                    </li>
                    <li className="itensMenuNavbar">
                      <Link to="/about">Sobre</Link>
                    </li>
                  </ul>
                </Container>
              </nav>
            </>
          )}
        </Toolbar>
      </AppBar>
    </NavbarComponent>
  );
};

export default Navbar;
