import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkMode from '../assets/dark-mode.png';
import menu from '../assets/menu.png';
import pandaImg from '../assets/panda-img.png';

const Referencias = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative min-h-screen w-full flex justify-center bg-[#E6FAFA]">
      <div className="w-[375px] flex flex-col items-center">

        {/* Cabeçalho */}
        <div className="w-[375px] h-[54px] bg-white mt-4 rounded-[80px] shadow-md flex items-center justify-between px-4">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className="ml-3 font-bold text-gray-800 text-base">PandaApp</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={darkMode} alt="Dark Mode" className="h-6 w-6 object-contain" />
            <img 
              src={menu} 
              alt="Menu" 
              className="h-6 w-6 object-contain cursor-pointer" 
              onClick={toggleSidebar} 
            />
          </div>
        </div>

        {/* Texto "REFERÊNCIAS" acima do quadrado */}
        <p className="mt-10 text-xl font-bold text-gray-800">REFERÊNCIAS</p>

        {/* Quadrado grande semi-transparente com bordas arredondadas */}
        <div className="mt-4 w-[360px] h-[380px] bg-green-800/20 rounded-[50px] flex items-center justify-center relative">
          
          {/* Imagem panda menor e mais para baixo */}
          <img src={pandaImg} alt="Panda" className="absolute w-40 h-auto top-28 object-contain" />

          {/* Círculo oval horizontal maior, mais claro e movido um pouco para baixo */}
          <div className="absolute top-6 w-72 h-44 bg-green-500/50 rounded-full flex items-center justify-center">
            {/* Aqui pode ir conteúdo futuro */}
          </div>

        </div>

      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-green-600 shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}>
        <div className="flex flex-col mt-20 px-6 space-y-6">
          <p 
            className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200"
            onClick={() => { navigate('/'); setIsSidebarOpen(false); }}
          >
            Home
          </p>
          <p 
            className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200"
            onClick={() => { navigate('/produtos'); setIsSidebarOpen(false); }}
          >
            Produtos
          </p>
          <p 
            className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200"
            onClick={() => { navigate('/grupo'); setIsSidebarOpen(false); }}
          >
            Quem somos
          </p>
          <p 
            className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200"
            onClick={() => { navigate('/referencias'); setIsSidebarOpen(false); }}
          >
            Referências
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

    </div>
  );
};

export default Referencias;
