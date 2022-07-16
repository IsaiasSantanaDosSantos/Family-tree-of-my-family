import React from 'react';
import { FooterContainer } from './styles';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Container } from '@mui/material';

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <Container>
          <div className="footerContent">
            <p>
              <span>Family Tree </span>&copy; 2022 - Desenvolvido por Isaias
              Santana dos Santos. <br></br>Todos os direitos reservados.
            </p>
            <div className='footerTextIcom'>
              <p>Feito com </p>
              <FavoriteOutlinedIcon className="footerIconHeath" />
            </div>
          </div>
        </Container>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
