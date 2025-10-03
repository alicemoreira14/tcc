import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkModeIcon from '../assets/dark-mode.png';
import menu from '../assets/menu.png';
import pandaImg from '../assets/panda-img.png';
import setaEsquerda from '../assets/seta-esquerda.png';
import setaDireita from '../assets/seta-direita.png';

const Referencias = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [index, setIndex] = useState(0);
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

  const textos = [
    `Importância das técnicas de relaxamento na terapia cognitiva para ansiedade
Importance of relaxation techniques in cognitive therapy for anxiety`,
    `Efeitos de intervenções com exercícios respiratórios diafragmáticos nos sintomas de ansiedade em adolescentes: Uma revisão sistemática`,
    `Aplicação de plantas medicinais no tratamento da ansiedade: uma revisão da literatura
Application of medicinal plants in the treatment of anxiety: a literature review`
  ];

  const links = [
    "https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1983-34822015000100009",
    "https://portalrevistas.ucb.br/index.php/rbcm/article/view/14178",
    "https://ojs.brazilianjournals.com.br/ojs/index.php/BRJD/article/view/30316"
  ];

  const prev = () => setIndex(prev => (prev === 0 ? textos.length - 1 : prev - 1));
  const next = () => setIndex(prev => (prev === textos.length - 1 ? 0 : prev + 1));

  // Cores do modo escuro
  const darkBg = "bg-gray-800"; 
  const darkHeader = "bg-gray-700"; 
  const darkCardGreen = "bg-green-800 text-white"; 
  const tituloColor = isDarkMode ? "text-white" : "text-gray-800"; 

  return (
    <div className={`relative min-h-screen w-full flex flex-col items-center ${isDarkMode ? darkBg : 'bg-gradient-to-b from-[#E6FAFA] to-[#DFF6F2]'}`}>

      {/* MOBILE */}
      <div className="md:hidden w-[375px] flex flex-col items-center">

        {/* Header */}
        <div className={`w-[375px] h-[54px] mt-4 rounded-[30px] shadow-lg flex items-center justify-between px-4 ${isDarkMode ? darkHeader : 'bg-white'}`}>
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className={`ml-3 font-bold text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>PandaApp</span>
          </div>
          <div className="flex items-center space-x-3">
            <img 
              src={darkModeIcon} 
              alt="Dark Mode" 
              className="h-6 w-6 object-contain cursor-pointer" 
              onClick={toggleDarkMode} 
            />
            <img 
              src={menu} 
              alt="Menu" 
              className="h-6 w-6 object-contain cursor-pointer" 
              onClick={toggleSidebar} 
            />
          </div>
        </div>

        <p className={`mt-10 text-2xl font-bold text-center tracking-wide ${tituloColor}`}>REFERÊNCIAS</p>

        <div className="mt-6 w-[360px] h-[380px] flex items-center justify-center relative">

          <img 
            src={setaEsquerda} 
            alt="Anterior" 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6 object-contain cursor-pointer z-10"
            onClick={prev}
          />

          <img 
            src={setaDireita} 
            alt="Próximo" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 object-contain cursor-pointer z-10"
            onClick={next}
          />

          <a 
            href={links[index]} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`absolute top-10 w-72 h-48 rounded-3xl flex items-center justify-center px-4 text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl ${isDarkMode ? darkCardGreen : 'bg-green-100'}`}
          >
            <p className={`text-sm whitespace-pre-line leading-relaxed font-roboto ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{textos[index]}</p>
          </a>

          <img 
            src={pandaImg} 
            alt="Panda" 
            className="absolute w-36 h-auto bottom-0 right-4 object-contain" 
          />
        </div>

      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col items-center w-full max-w-[1400px]">

        <div className={`w-full h-[80px] mt-4 rounded-[30px] shadow-lg flex items-center justify-between px-12 ${isDarkMode ? darkHeader : 'bg-white'}`}>
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            <span className={`ml-4 font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>PandaApp</span>
          </div>
          <div className="flex space-x-8">
            {['Home','Produtos','Quem somos','Referências','Jogo'].map((item,i) => (
              <p 
                key={i} 
                className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-green-500`} 
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
            <img 
              src={darkModeIcon} 
              alt="Dark Mode" 
              className="h-6 w-6 object-contain cursor-pointer" 
              onClick={toggleDarkMode} 
            />
          </div>
        </div>

        <p className={`mt-10 text-4xl font-bold text-gray-800 tracking-wide ${tituloColor}`}>REFERÊNCIAS</p>

        <div className="mt-8 flex justify-center gap-12 flex-wrap">
          {textos.map((texto, i) => (
            <a 
              key={i} 
              href={links[i]} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-72 h-72 rounded-3xl flex items-center justify-center px-6 text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${isDarkMode ? darkCardGreen : 'bg-green-100'}`}
            >
              <p className={`text-base whitespace-pre-line leading-relaxed font-roboto ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{texto}</p>
            </a>
          ))}
        </div>

        <img 
          src={pandaImg} 
          alt="Panda" 
          className="w-48 h-auto mt-12 object-contain"
        />

      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50 ${isDarkMode ? darkBg : 'bg-green-200'}`}>
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

export default Referencias;
