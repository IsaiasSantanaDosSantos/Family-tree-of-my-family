import React from 'react';
import { HomeContainer } from './styles';
import familyTree from '../../../img/arvore-3.png';
import faceMan from '../../../img/rostoHomem.png';
import faceWeman from '../../../img/rostoMulher.png';
import JesusFamily from '../../../img/familiaDeJseus.png';

export const Home = () => {
  return (
    <HomeContainer
      className="HomeBackground"
      style={{
        background: `url(${familyTree})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
      }}
    >
      <header>
        <img src={JesusFamily} alt="Família de Jesus" />
      </header>
      <section>
        {/* Segunda Geração  */}
        <div className="secundGeneration">
          <div className="gerationBox">
            <div className="gerationBoxImg">
              <img
                src="https://images.pexels.com/photos/7541575/pexels-photo-7541575.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rosto pessoa"
              />
            </div>
            <div className="gerationBoxInfo">
              <p>
                Nome:<br></br> <b>Mônica M. Ribeiro</b>
              </p>
              <p>
                De: <b>1970</b>
              </p>
              <p>
                A: <b></b>
              </p>
            </div>
          </div>
          <div className="gerationBox">
            <div className="gerationBoxImg">
              <img
                src="https://images.pexels.com/photos/12244376/pexels-photo-12244376.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rosto pessoa"
              />
            </div>
            <div className="gerationBoxInfo">
              <p>
                Nome:<br></br> <b>Catarina M. Ribeiro</b>
              </p>
              <p>
                De: <b>1978</b>
              </p>
              <p>
                A: <b></b>
              </p>
            </div>
          </div>
          <div className="gerationBox">
            <div className="gerationBoxImg">
              <img
                src="https://images.pexels.com/photos/1813922/pexels-photo-1813922.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rosto pessoa"
              />
            </div>
            <div className="gerationBoxInfo">
              <p>
                Nome:<br></br> <b>Marcos M. Ribeiro</b>
              </p>
              <p>
                De: <b>1975</b>
              </p>
              <p>
                A: <b></b>
              </p>
            </div>
          </div>
        </div>
        {/* Primeira Geração  */}
        <div className="firstGeneration">
          <div className="gerationBox">
            <div className="gerationBoxImg">
              <img src={faceMan} alt="Rosto pessoa" />
            </div>
            <div className="gerationBoxInfo">
              <p>
                Nome:<br></br> <b>João C.Ribeiro</b>
              </p>
              <p>
                De: <b>1945</b>
              </p>
              <p>
                A: <b>2015</b>
              </p>
            </div>
          </div>
          <div className="gerationBox">
            <div className="gerationBoxImg">
              <img src={faceWeman} alt="Rosto pessoa" />
            </div>
            <div className="gerationBoxInfo">
              <p>
                Nome: <br></br> <b>Maria D. F. Ribeiro</b>
              </p>
              <p>
                De: <b>1948</b>
              </p>
              <p>
                A: <b>2013</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </HomeContainer>
  );
};

export default Home;
