import React from 'react';
import logo from '../assets/logo.png';
import usuario from '../assets/usuario.png';
import darkMode from '../assets/dark-mode.png';
import menu from '../assets/menu.png';
import pandaImg from '../assets/panda-img.png';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full flex justify-center bg-[#E6FAFA]">
      {/* Conteúdo principal limitado a 375px (simulação mobile) */}
      <div className="w-[375px] flex flex-col items-center">
        {/* Retângulo branco no topo com radius de 80px */}
        <div className="w-[375px] h-[54px] bg-white mt-4 rounded-[80px] shadow-md flex items-center justify-between px-4">
          {/* Lado esquerdo: logo + texto */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className="ml-3 font-bold text-gray-800 text-base">PandaApp</span>
          </div>

          {/* Lado direito: ícones */}
          <div className="flex items-center space-x-3">
            <img src={usuario} alt="Usuário" className="h-6 w-6 object-contain" />
            <img src={darkMode} alt="Dark Mode" className="h-6 w-6 object-contain" />
            <img src={menu} alt="Menu" className="h-6 w-6 object-contain" />
          </div>
        </div>

        {/* Imagem panda abaixo do retângulo */}
        <img src={pandaImg} alt="Panda" className="mt-6 w-3/4 object-contain" />

        {/* Título maior */}
        <p className="mt-4 text-center text-xl font-bold tracking-wider text-gray-800">
          Bem-vindo ao <span className="text-green-500 font-bold">PandaApp</span>
        </p>

        {/* Texto explicativo */}
        <p className="mt-4 text-center text-gray-700 text-sm leading-relaxed">
          O PandaApp é um aplicativo criado para ajudar na redução da ansiedade e promoção do bem-estar. Ele combina aromaterapia com aromas naturais, meditação guiada e respiração diafragmática para estimular o relaxamento de forma natural e acessível.
        </p>

        {/* Primeiro retângulo com quadrado verde e texto */}
        <div className="w-[350px] h-[65px] bg-white mt-6 rounded-xl shadow-md flex items-center px-4">
          <div className="h-10 w-10 bg-green-100 rounded-md"></div>
          <div className="ml-4 flex flex-col">
            <span className="font-semibold text-gray-800">Aromaterapia</span>
            <span className="text-xs text-gray-600">Aromas naturais para relaxamento</span>
          </div>
        </div>

        {/* Segundo retângulo com quadrado azul e texto */}
        <div className="w-[350px] h-[65px] bg-white mt-4 rounded-xl shadow-md flex items-center px-4">
          <div className="h-10 w-10 bg-blue-100 rounded-md"></div>
          <div className="ml-4 flex flex-col">
            <span className="font-semibold text-gray-800">Meditação guiada</span>
            <span className="text-xs text-gray-600">Sessões guiadas de meditações</span>
          </div>
        </div>

        {/* Terceiro retângulo com quadrado roxo e texto */}
        <div className="w-[350px] h-[65px] bg-white mt-4 rounded-xl shadow-md flex items-center px-4">
          <div className="h-10 w-10 bg-purple-100 rounded-md"></div>
          <div className="ml-4 flex flex-col">
            <span className="font-semibold text-gray-800">Respiração diafragmática</span>
            <span className="text-xs text-gray-600">Técnicas de meditação para relaxar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
