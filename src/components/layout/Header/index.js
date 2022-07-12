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
import { useNavigate } from 'react-router-dom';
import DrawerComp from '../DrawerComp';

// const pages = ["Início", "Cadastro", "Contato"];

const Header = () => {
  const [value, setValue] = useState();

  const theme = useTheme();

  const isMath = useMediaQuery(theme.breakpoints.down('sm'));

  /*
Este bloco estava entre a tag Tabs:
{pages.map((page, index) => (
  <Tab key={index} label={page} />


 */
  return (
    <React.Fragment>
      <AppBar sx={{ background: '#222' }} position="sticky">
        <Toolbar>
          {isMath ? (
            <>
              <Link to="/">
                <img></img>
              </Link>
              <Typography></Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <nav>
                <Container>
                  <Link to="/">
                    <img alt="Acmi Saúde"></img>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/">Início</Link>
                    </li>
                    <li>
                      <Link to="/cadastro">Cadastro</Link>
                    </li>
                    <li>
                      <Link to="/contato">Contato</Link>
                    </li>
                  </ul>
                </Container>
              </nav>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
