import React from 'react';
import fundo from '../assets/img-fundo.png';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full flex justify-center">
      {/* Fundo ocupando toda a tela e deslocado mais para cima */}
      <img 
        src={fundo} 
        alt="Fundo PandaApp" 
        className="absolute top-0 left-0 w-full h-full object-cover -translate-y-[150px] -z-10"
      />

      {/* Conteúdo principal limitado a 375px (simulação mobile) */}
      <div className="w-[375px] flex flex-col items-center">
        {/* Retângulo branco no topo com radius de 80px */}
        <div className="w-[375px] h-[54px] bg-white mt-4 rounded-[80px] shadow-md"></div>
      </div>
    </div>
  );
};

export default Home;
