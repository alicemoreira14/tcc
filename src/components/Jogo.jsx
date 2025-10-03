import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkModeIcon from '../assets/dark-mode.png';
import menu from '../assets/menu.png';
import pandaImg from '../assets/panda-img.png';

const Jogo = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  const darkBg = "bg-gray-800"; 
  const darkHeader = "bg-gray-700"; 
  const tituloColor = isDarkMode ? "text-white" : "text-gray-800"; 
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`relative min-h-screen w-full flex flex-col items-center ${isDarkMode ? darkBg : 'bg-[#E6FAFA]'}`}>

      {/* MOBILE */}
      <div className="md:hidden w-[375px] flex flex-col items-center">

        {/* Header */}
        <div className={`w-[375px] h-[54px] mt-4 rounded-[80px] shadow-md flex items-center justify-between px-4 ${isDarkMode ? darkHeader : 'bg-white'}`}>
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className={`ml-3 font-bold text-base ${tituloColor}`}>PandaApp</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={darkModeIcon} alt="Dark Mode" className="h-6 w-6 object-contain cursor-pointer" onClick={toggleDarkMode} />
            <img src={menu} alt="Menu" className="h-6 w-6 object-contain cursor-pointer" onClick={toggleSidebar} />
          </div>
        </div>
        
        <img src={pandaImg} alt="Panda" className="mt-6 w-3/4 object-contain" />
        <p className={`mt-6 text-center text-lg font-bold ${tituloColor}`}>
          Bem-vindo ao <span className="text-green-500">PandaGame</span>
        </p>
        <p className={`mt-4 text-center text-sm leading-relaxed px-4 ${textColor}`}>
          O PandaGame é um jogo criado para estimular a diversão e o foco. Nele, o personagem precisa vencer os inimigos coletando os remédios espalhados pelo caminho. Com desafios progressivos e uma jogabilidade simples e envolvente, o game promove atenção, raciocínio rápido e entretenimento acessível para todas as idades.
        </p>
        <button className="w-[200px] h-[40px] bg-green-500 mt-6 rounded-xl text-white font-semibold text-base hover:bg-green-600 transition-colors">
          Jogar
        </button>
        <p className={`mt-4 text-center text-sm leading-relaxed px-4 ${textColor}`}>
          O jogo conta com três fases cheias de ação e suspense, cada uma trazendo obstáculos mais desafiadores e inimigos mais fortes. A cada etapa superada, o jogador se aproxima da grande batalha final, onde somente os mais ágeis e estratégicos conseguem alcançar a vitória.
        </p>

      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col items-center w-full max-w-[1400px] px-12">

        <div className={`w-full h-[80px] mt-4 rounded-[80px] shadow-md flex items-center justify-between px-12 ${isDarkMode ? darkHeader : 'bg-white'}`}>
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            <span className={`ml-4 font-bold text-lg ${tituloColor}`}>PandaApp</span>
          </div>
          <div className="flex space-x-8">
            {['Home','Produtos','Quem somos','Referências','Jogo'].map((item,i) => (
              <p 
                key={i} 
                className={`cursor-pointer ${tituloColor} hover:text-green-500`} 
                onClick={() => {
                  let rota = '/';
                  switch(item) {
                    case 'Home': rota = '/'; break;
                    case 'Produtos': rota = '/produtos'; break;
                    case 'Quem somos': rota = '/grupo'; break;
                    case 'Referências': rota = '/referencias'; break;
                    case 'Jogo': rota = '/jogo'; break;
                  }
                  navigate(rota);
                }}
              >
                {item}
              </p>
            ))}
            <img src={darkModeIcon} alt="Dark Mode" className="h-6 w-6 object-contain cursor-pointer" onClick={toggleDarkMode} />
          </div>
        </div>

        <div className="mt-16 flex w-full justify-center items-start gap-16">

          {/* Lado esquerdo: imagem do panda */}
          <img src={pandaImg} alt="Panda" className="w-96 h-auto object-contain" />

          <div className="flex flex-col max-w-xl">
            <p className={`text-3xl font-bold ${tituloColor}`}>
              Bem-vindo ao <span className="text-green-500">PandaGame</span>
            </p>
            <p className={`mt-6 ${textColor} text-base leading-relaxed`}>
              O PandaGame é um jogo criado para estimular a diversão e o foco. Nele, o personagem precisa vencer os inimigos coletando os remédios espalhados pelo caminho. Com desafios progressivos e uma jogabilidade simples e envolvente, o game promove atenção, raciocínio rápido e entretenimento acessível para todas as idades.
            </p>

            <button className="w-48 h-12 bg-green-500 mt-6 self-center rounded-xl text-white font-semibold text-lg hover:bg-green-600 transition-colors">
              Jogar
            </button>

            <p className={`mt-4 ${textColor} text-base leading-relaxed`}>
              O jogo conta com três fases cheias de ação e suspense, cada uma trazendo obstáculos mais desafiadores e inimigos mais fortes. A cada etapa superada, o jogador se aproxima da grande batalha final, onde somente os mais ágeis e estratégicos conseguem alcançar a vitória.
            </p>
          </div>

        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50 ${isDarkMode ? darkBg : 'bg-green-600'}`}>
        <div className="flex flex-col mt-20 px-6 space-y-6">
          {['Home','Produtos','Quem somos','Referências','Jogo'].map((item,i)=>(
            <p 
              key={i} 
              className="text-white font-semibold text-lg cursor-pointer hover:text-green-200" 
              onClick={() => {
                let rota = '/';
                switch(item) {
                  case 'Home': rota = '/'; break;
                  case 'Produtos': rota = '/produtos'; break;
                  case 'Quem somos': rota = '/grupo'; break;
                  case 'Referências': rota = '/referencias'; break;
                  case 'Jogo': rota = '/jogo'; break;
                }
                navigate(rota);
                setIsSidebarOpen(false);
              }}
            >
              {item}
            </p>
          ))}
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
