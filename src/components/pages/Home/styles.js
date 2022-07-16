import styled from 'styled-components';

export const HomeContainer = styled.div`
  header {
    display: flex;
    justify-content: center;
    margin: 5px 0 10px 0;
  }
  header img {
    width: 243px;
  }
  .firstGeneration,
  .secundGeneration {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 20px;
  }
  .gerationBox {
    display: flex;
    justify-content: start;
    align-items: center;
    border: 1px solid;
    width: 155px;
    padding: 3px;
  }
  .gerationBoxImg img {
    width: 60px;
    height: 60px;
    padding-right: 5px;
    border-radius: 50%;
  }
  .gerationBox p {
    margin: 0;
    font-size: 11px;
  }
`;
