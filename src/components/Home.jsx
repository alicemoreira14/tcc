import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkModeIcon from '../assets/dark-mode.png';
import menu from '../assets/menu.png';
import pandaImg from '../assets/panda-img.png';
import planta from '../assets/planta.png';
import meditacao from '../assets/meditacao.png';
import vento from '../assets/vento.png';
import planta2 from '../assets/planta2.png';
import celular from '../assets/celular.png';
import relogio from '../assets/relogio.png';
import alvo from '../assets/alvo.png';

const Home = () => {
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

  const quadradosInfo = [
    { img: planta2, titulo: "100% Natural", descricao: "Métodos naturais sem dependência química" },
    { img: celular, titulo: "Fácil de Usar", descricao: "Interface intuitiva e acessível para todos" },
    { img: relogio, titulo: "Disponível 24/7", descricao: "Acesso ao relaxamento a qualquer momento" },
    { img: alvo, titulo: "Personalizado", descricao: "Experiência adaptada às suas necessidades" },
  ];

  const darkBg = "bg-gray-800";
  const darkHeader = "bg-gray-700";
  const darkCard = "bg-gray-700";
  const darkText = "text-white";

  return (
    <div className={`relative min-h-screen w-full flex flex-col items-center justify-between ${isDarkMode ? darkBg : 'bg-[#E6FAFA]'}`}>

      <div className="flex flex-col items-center w-full">

        {/* MOBILE */}
        <div className="w-full flex justify-center md:hidden">
          <div className="w-[375px] flex flex-col items-center">

            {/* HEADER MOBILE */}
            <div className={`w-[375px] h-[54px] mt-4 rounded-[80px] shadow-md flex items-center justify-between px-4 ${isDarkMode ? darkHeader : 'bg-white'}`}>
              <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
                <span className={`ml-3 font-bold text-base ${isDarkMode ? darkText : 'text-black'}`}>PandaApp</span>
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

            {/* SEÇÃO MOBILE: TEXTO E IMAGEM */}
            <div className="mt-6 w-full flex flex-col items-center px-4">
              <img src={pandaImg} alt="Panda" className="w-3/4 object-contain" />
              <p className={`mt-4 text-center text-xl font-bold tracking-wider ${isDarkMode ? darkText : 'text-gray-800'}`}>
                Bem-vindo ao <span className="text-green-500 font-bold">PandaApp</span>
              </p>
              <p className={`mt-4 text-center text-sm leading-relaxed ${isDarkMode ? darkText : 'text-gray-700'}`}>
                O PandaApp é um aplicativo criado para ajudar na redução da ansiedade e promoção do bem-estar. Ele combina aromaterapia com aromas naturais, meditação guiada e respiração diafragmática para estimular o relaxamento de forma natural e acessível.
              </p>
            </div>

            {/* CARDS MOBILE */}
            <div className="mt-6 flex flex-col items-center space-y-4 w-full px-4">
              {[planta, meditacao, vento].map((img, i) => (
                <div key={i} className={`w-[350px] h-[65px] rounded-xl shadow-md flex items-center px-4 ${isDarkMode ? darkCard : 'bg-white'}`}>
                  <div className="h-10 w-10 bg-green-100 rounded-md flex items-center justify-center">
                    <img src={img} alt="" className="h-6 w-6 object-contain" />
                  </div>
                  <div className="ml-4 flex flex-col">
                    <span className="font-semibold text-sm">{['Aromaterapia','Meditação guiada','Respiração diafragmática'][i]}</span>
                    <span className="text-xs">{['Aromas naturais para relaxamento','Sessões guiadas de meditações','Técnicas de meditação para relaxar'][i]}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTÕES MOBILE */}
            <div className="mt-4 flex flex-col space-y-4 w-full px-4">
              <button className="w-full h-[60px] bg-green-500 rounded-xl text-white font-semibold text-lg">
                Baixar Agora Grátis
              </button>
              <button className={`w-full h-[60px] rounded-xl border text-green-500 font-semibold text-lg ${isDarkMode ? 'border-gray-400 bg-gray-700 text-white' : 'border-green-500 bg-white'}`}>
                Saiba Mais
              </button>
            </div>

            {/* QUADRADOS INFO MOBILE COM ESPAÇAMENTO MAIOR */}
            <div className="mt-6 flex flex-col items-center space-y-6 w-full px-4">
              {quadradosInfo.map((item, i) => (
                <div key={i} className={`w-[360px] h-[140px] rounded-md flex flex-col items-center pt-4 ${isDarkMode ? darkCard : 'bg-gray-200'}`}>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <img src={item.img} alt={`Icon ${i}`} className="h-6 w-6 object-contain" />
                  </div>
                  <div className="mt-2 text-center px-2">
                    <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.titulo}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex justify-center w-full">
          <div className="w-[1024px] flex flex-col items-center">

            {/* HEADER DESKTOP */}
            <div className={`w-full h-[80px] mt-4 rounded-[80px] shadow-md flex items-center justify-between px-8 ${isDarkMode ? darkHeader : 'bg-white'}`}>
              <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
                <span className={`ml-4 font-bold text-lg ${isDarkMode ? darkText : 'text-black'}`}>PandaApp</span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex space-x-8">
                  <p className={`cursor-pointer ${isDarkMode ? darkText : 'text-black'} hover:text-green-500`} onClick={() => navigate('/grupo')}>Grupo</p>
                  <p className={`cursor-pointer ${isDarkMode ? darkText : 'text-black'} hover:text-green-500`} onClick={() => navigate('/referencias')}>Referências</p>
                  <p className={`cursor-pointer ${isDarkMode ? darkText : 'text-black'} hover:text-green-500`} onClick={() => navigate('/produtos')}>Produtos</p>
                  <p className={`cursor-pointer ${isDarkMode ? darkText : 'text-black'} hover:text-green-500`} onClick={() => navigate('/jogo')}>Jogo</p>
                </div>
                <img 
                  src={darkModeIcon} 
                  alt="Dark Mode" 
                  className="h-6 w-6 object-contain cursor-pointer" 
                  onClick={toggleDarkMode} 
                />
              </div>
            </div>

            {/* SEÇÃO PRINCIPAL DESKTOP: TEXTO À ESQUERDA, IMAGEM À DIREITA */}
            <div className="mt-10 w-full flex items-center justify-between px-8">
              <div className="flex flex-col max-w-lg">
                <p className={`text-3xl font-bold ${isDarkMode ? darkText : 'text-gray-800'}`}>
                  Bem-vindo ao <span className="text-green-500 font-bold">PandaApp</span>
                </p>
                <p className={`mt-4 text-base leading-relaxed ${isDarkMode ? darkText : 'text-gray-700'}`}>
                  O PandaApp é um aplicativo criado para ajudar na redução da ansiedade e promoção do bem-estar. Ele combina aromaterapia com aromas naturais, meditação guiada e respiração diafragmática para estimular o relaxamento de forma natural e acessível.
                </p>
              </div>
              <img src={pandaImg} alt="Panda" className="w-1/2 object-contain" />
            </div>

            {/* CARDS DESKTOP */}
            <div className="mt-6 w-full flex justify-between px-8 space-x-6">
              {[planta, meditacao, vento].map((img, i) => (
                <div key={i} className={`w-1/3 h-[80px] rounded-xl shadow-md flex items-center px-4 ${isDarkMode ? darkCard : 'bg-white'}`}>
                  <div className="h-12 w-12 bg-green-100 rounded-md flex items-center justify-center">
                    <img src={img} alt="" className="h-6 w-6 object-contain" />
                  </div>
                  <div className="ml-4 flex flex-col">
                    <span className="font-semibold">{['Aromaterapia','Meditação guiada','Respiração diafragmática'][i]}</span>
                    <span className="text-xs">{['Aromas naturais para relaxamento','Sessões guiadas de meditações','Técnicas de meditação para relaxar'][i]}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTÕES DESKTOP */}
            <div className="mt-8 flex space-x-6 w-full px-8">
              <button className="w-1/2 h-[60px] bg-green-500 rounded-xl text-white font-semibold text-lg">
                Baixar Agora Grátis
              </button>
              <button className={`w-1/2 h-[60px] rounded-xl border text-green-500 font-semibold text-lg ${isDarkMode ? 'border-gray-400 bg-gray-700 text-white' : 'border-green-500 bg-white'}`}>
                Saiba Mais
              </button>
            </div>

            {/* QUADRADOS INFO DESKTOP */}
            <div className="mt-6 flex justify-between px-8 w-full gap-4">
              {quadradosInfo.map((item, i) => (
                <div key={i} className={`w-[23%] h-[140px] rounded-md flex flex-col items-center pt-4 ${isDarkMode ? darkCard : 'bg-gray-200'}`}>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <img src={item.img} alt="" className="h-6 w-6 object-contain" />
                  </div>
                  <div className="mt-2 text-center px-2">
                    <p className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.titulo}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* SIDEBAR MOBILE */}
      <div className={`fixed top-0 right-0 h-full shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50 ${isDarkMode ? darkBg : 'bg-green-600'}`}>
        <div className="flex flex-col mt-20 px-6 space-y-6">
          {[
            { nome: 'Quem Somos', rota: '/grupo' },
            { nome: 'Referências', rota: '/referencias' },
            { nome: 'Produtos', rota: '/produtos' },
            { nome: 'Jogo', rota: '/jogo' }
          ].map((item, i) => (
            <p key={i} className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200" 
               onClick={() => { navigate(item.rota); setIsSidebarOpen(false); }}>
               {item.nome}
            </p>
          ))}
        </div>
      </div>

      {/* SOMBRA AO CLICAR FORA */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={toggleSidebar}></div>
      )}

      {/* FOOTER */}
      <footer className={`w-full py-4 flex justify-center items-center mt-auto ${isDarkMode ? darkBg : 'bg-green-900'}`}>
        <p className={`text-sm text-center ${isDarkMode ? darkText : 'text-white'}`}>
          © 2025 PandaApp. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
};

export default Home;
