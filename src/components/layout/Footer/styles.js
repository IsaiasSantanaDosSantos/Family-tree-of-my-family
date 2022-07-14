import styled from 'styled-components';

export const FooterContainer = styled.div`
  .footerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
    width: 100%;
    margin: auto;
  }
  footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: block;
    background-color: #222;
  }
  p {
    color: #fff;
    margin: 0;
  }
  .footerIconHeath {
    color: #ff0000;
    padding-left: 5px;
  }
  .footerTextIcom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
