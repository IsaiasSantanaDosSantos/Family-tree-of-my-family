import React from 'react';
import { FooterContainer } from './styles';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const Footer = () => {
  <FooterContainer>
    <footer className="footerContent">
      <p>
        <span>Family of Tree </span>&copy; 2022 - Desenvolvido por Isaias
        Santana dos Santos. <br>Todos os direitos reservados.</br>
      </p>
      <p>
        feito com <FavoriteOutlinedIcon />
      </p>
    </footer>
  </FooterContainer>;
};

export default Footer;
