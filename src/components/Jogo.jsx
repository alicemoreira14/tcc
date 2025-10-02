import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkMode from '../assets/dark-mode.png';
import menu from '../assets/menu.png';
import pandaImg from '../assets/panda-img.png';

const Jogo = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#E6FAFA]">

      {/* MOBILE */}
      <div className="md:hidden w-[375px] flex flex-col items-center">

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
        
        <img src={pandaImg} alt="Panda" className="mt-6 w-3/4 object-contain" />
        <p className="mt-6 text-center text-lg font-bold text-gray-800">
          Bem-vindo ao <span className="text-green-500">PandaGame</span>
        </p>
        <p className="mt-4 text-center text-gray-700 text-sm leading-relaxed px-4">
          O PandaGame é um jogo criado para estimular a diversão e o foco. Nele, o personagem precisa vencer os inimigos coletando os remédios espalhados pelo caminho. Com desafios progressivos e uma jogabilidade simples e envolvente, o game promove atenção, raciocínio rápido e entretenimento acessível para todas as idades.
        </p>
        <button className="w-[200px] h-[40px] bg-green-500 mt-6 rounded-xl text-white font-semibold text-base">
          Jogar
        </button>
        <p className="mt-4 text-center text-gray-700 text-sm leading-relaxed px-4">
          O jogo conta com três fases cheias de ação e suspense, cada uma trazendo obstáculos mais desafiadores e inimigos mais fortes. A cada etapa superada, o jogador se aproxima da grande batalha final, onde somente os mais ágeis e estratégicos conseguem alcançar a vitória.
        </p>

      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col items-center w-full max-w-[1400px] px-12">

        <div className="w-full h-[80px] bg-white mt-4 rounded-[80px] shadow-md flex items-center justify-between px-12">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            <span className="ml-4 font-bold text-gray-800 text-lg">PandaApp</span>
          </div>
          <div className="flex space-x-8">
            <p className="cursor-pointer hover:text-green-500" onClick={() => navigate('/')}>Home</p>
            <p className="cursor-pointer hover:text-green-500" onClick={() => navigate('/produtos')}>Produtos</p>
            <p className="cursor-pointer hover:text-green-500" onClick={() => navigate('/grupo')}>Quem somos</p>
            <p className="cursor-pointer hover:text-green-500" onClick={() => navigate('/referencias')}>Referências</p>
            <p className="cursor-pointer hover:text-green-500" onClick={() => navigate('/jogo')}>Jogo</p>
          </div>
        </div>

        <div className="mt-16 flex w-full justify-center items-start gap-16">

          {/* Lado esquerdo: imagem do panda */}
          <img src={pandaImg} alt="Panda" className="w-96 h-auto object-contain" />

          <div className="flex flex-col max-w-xl">
            <p className="text-3xl font-bold text-gray-800">
              Bem-vindo ao <span className="text-green-500">PandaGame</span>
            </p>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              O PandaGame é um jogo criado para estimular a diversão e o foco. Nele, o personagem precisa vencer os inimigos coletando os remédios espalhados pelo caminho. Com desafios progressivos e uma jogabilidade simples e envolvente, o game promove atenção, raciocínio rápido e entretenimento acessível para todas as idades.
            </p>

            <button className="w-48 h-12 bg-green-500 mt-6 self-center rounded-xl text-white font-semibold text-lg hover:bg-green-600 transition-colors">
              Jogar
            </button>

            <p className="mt-4 text-gray-700 text-base leading-relaxed">
              O jogo conta com três fases cheias de ação e suspense, cada uma trazendo obstáculos mais desafiadores e inimigos mais fortes. A cada etapa superada, o jogador se aproxima da grande batalha final, onde somente os mais ágeis e estratégicos conseguem alcançar a vitória.
            </p>
          </div>

        </div>
      </div>

      <div className={`fixed top-0 right-0 h-full w-64 bg-green-600 shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}>
        <div className="flex flex-col mt-20 px-6 space-y-6">
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200" onClick={() => { navigate('/'); setIsSidebarOpen(false); }}>Home</p>
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200" onClick={() => { navigate('/produtos'); setIsSidebarOpen(false); }}>Produtos</p>
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200" onClick={() => { navigate('/grupo'); setIsSidebarOpen(false); }}>Quem somos</p>
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200" onClick={() => { navigate('/referencias'); setIsSidebarOpen(false); }}>Referências</p>
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200" onClick={() => { navigate('/jogo'); setIsSidebarOpen(false); }}>Jogo</p>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

    </div>
  );
};

export default Jogo;
