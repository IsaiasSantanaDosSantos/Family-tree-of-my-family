import styled from 'styled-components';

export const NavbarComponent = styled.div`
  .navNavbar {
    width: 100%;
    display: block;
  }

  .containerNavbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .menuNavbar {
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .itensMenuNavbar {
    list-style: none;
    margin-left: 50px;
    font-size: 18px;
  }
  .itensMenuNavbar a {
    color: #fff;
    text-decoration: none;
  }
`;
