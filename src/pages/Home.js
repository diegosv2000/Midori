import React from 'react';
import Header from './../components/Header'
const Home = () => {
  return (
    <div className="Home">
      <Header />
      <h2>Bienvenid@</h2>
      <p>a <strong>Voto Informado</strong> UNI, gracias por visitar nuestra página web. 
        Este portal te brinda información sobre las hojas de vida,
        experiencia laboral y política de las y los candidatos que
        participan en las Elecciones Generales UNI 2021.
      </p>

      <button>Ingresar</button>
    </div>
  );
}

export default Home;
