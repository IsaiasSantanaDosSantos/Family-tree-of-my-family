import React, { useState } from 'react';
import {
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

//const pages = ["Início", "Cadastro", "Contato"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment sx={{ backgroundColor: '#222' }}>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <nav>
                <Container>
                  <ul>
                    <li>
                      <Link to="/">Início</Link>
                    </li>
                    <li>
                      <Link to="/history">Historias</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Contatos</Link>
                    </li>
                    <li>
                      <Link to="/about">Sobre</Link>
                    </li>
                  </ul>
                </Container>
              </nav>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </List>
      </Drawer>

      <IconButton
        sx={{ color: '#fff', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
