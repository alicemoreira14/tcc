import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkMode from '../assets/dark-mode.png';
import menu from '../assets/menu.png';
import setaEsquerda from '../assets/seta-esquerda.png';
import setaDireita from '../assets/seta-direita.png';
import produto1 from '../assets/produto1.png';
import produto2 from '../assets/produto2.png';
import produto3 from '../assets/produto3.png';
import produto4 from '../assets/produto4.png';
import produto5 from '../assets/produto5.png';
import produto6 from '../assets/produto6.png';
import produto7 from '../assets/produto7.png';
import produto8 from '../assets/produto8.png';
import produto9 from '../assets/produto9.png';

const Produtos = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [index, setIndex] = useState(0);
  const [indexPeca, setIndexPeca] = useState(0);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    localStorage.setItem("darkMode", newValue);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const quadrados = [
    { tituloPreto: "MONTAGEM", textoVerde: `1. Conecte o Arduino à fonte de 5V ou bateria recarregável.
2. Insira o cartão microSD no DFPlayer Mini, contendo áudios nomeados como 0001.mp3, 0002.mp3, etc.
3. Certifique-se de que os difusores estão com líquido e corretamente conectados.
4. Abra o aplicativo que enviará os comandos Bluetooth (ainda em desenvolvimento no Figma).
5. Ligue o dispositivo.` },
    { tituloPreto: "MODO DE FUNCIONAMENTO", textoVerde: `1 O usuário liga o dispositivo.
2 Abre o app e escolhe o modo de respiração (ex: Relaxamento).
3 O app envia os parâmetros de respiração e aroma desejado.
4 O dispositivo:
Controla o brilho do LED para guiar a respiração.
Vibra durante a fase de “segurar”.
Ativa o aroma selecionado no início da inspiração.
Reproduz uma meditação correspondente ao momento.` },
    { tituloPreto: "TEMPOS DE RESPIRAÇÃO", textoVerde: `Digite 1 para definir o tempo de inspiração para 6 segundos.
Digite 2 para definir o tempo de inspiração para 4 segundos.
Digite 3 para definir o tempo de expiração para 7 segundos.
Digite 4 para definir o tempo de expiração para 4 segundos.` },
    { tituloPreto: "CICLO DE RESPIRAÇÃO", textoVerde: `Digite 7 para iniciar ou pausar a respiração guiada.
Você também pode apertar o botão físico no dispositivo para executar essa mesma função.` },
    { tituloPreto: "DIFUSORES DE AROMA", textoVerde: `Digite A para ativar o difusor 1, com aroma de lavanda. (Digite “a” para desativar)
Digite B para ativar o difusor 2, com aroma de hortelã. (Digite “b” para desativar)
Digite C para ativar o difusor 3, com aroma de camomila. (Digite “c” para desativar)
Digite R para ativar o modo de rodízio automático de aromas, onde os três difusores se alternam automaticamente a cada 30 segundos.
Digite r para desativar o modo de rodízio automático e desligar todos os difusores.` }
  ];

  const produtos = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9];

  const nomesProdutos = [
    "Arduino Uno/Nano",
    "Módulo Bluetooth HC-05 ou HM-10",
    "LED RGB",
    "Motor vibratório",
    "Módulo DFPlayer Mini + Cartão microSD",
    "Alto-falante pequeno",
    "Botão push-button",
    "Módulo atomizador ultrassônico",
    "Cartão microSD 128gb"
  ];

  const prev = () => setIndex(prev => (prev === 0 ? quadrados.length - 1 : prev - 1));
  const next = () => setIndex(prev => (prev === quadrados.length - 1 ? 0 : prev + 1));

  const prevPeca = () => setIndexPeca(prev => (prev === 0 ? produtos.length - 1 : prev - 1));
  const nextPeca = () => setIndexPeca(prev => (indexPeca === produtos.length - 1 ? 0 : prev + 1));

  const darkBg = "bg-gray-800"; 
  const darkHeader = "bg-gray-700"; 
  const darkCardGreen = "bg-green-800 text-white"; 
  const darkCardWhite = "bg-white text-black"; 
  const tituloColor = isDarkMode ? "text-white" : "text-gray-800"; // Ajuste aqui

  return (
    <div className={`relative w-full min-h-screen flex flex-col items-center ${isDarkMode ? darkBg : 'bg-[#E6FAFA]'}`}>

      {/* MOBILE */}
      <div className="md:hidden w-[375px] flex flex-col items-center">

        {/* Header */}
        <div className={`w-[375px] h-[54px] mt-4 rounded-[30px] shadow-md flex items-center justify-between px-4 ${isDarkMode ? darkHeader : 'bg-white'}`}>
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className={`ml-3 font-bold text-base ${isDarkMode ? 'text-black' : 'text-black'}`}>PandaApp</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={darkMode} alt="Dark Mode" className="h-6 w-6 object-contain cursor-pointer" onClick={toggleDarkMode} />
            <img src={menu} alt="Menu" className="h-6 w-6 object-contain cursor-pointer" onClick={toggleSidebar} />
          </div>
        </div>

        {/* Título Manual */}
        <p className={`mt-16 text-center text-2xl font-bold tracking-wide ${tituloColor}`}>
          Manual de Utilização <br /> Dispositivo Sensorial de Respiração Guiada
        </p>

        {/* Quadrados */}
        <div className="mt-12 relative flex items-center justify-center w-full">
          <div className="absolute left-[-10px] h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer z-10" onClick={prev}>
            <img src={setaEsquerda} alt="Anterior" className="h-5 w-5 object-contain" />
          </div>

          <div className={`w-72 h-[520px] rounded-lg p-4 flex flex-col justify-center items-center text-center relative mx-16 ${isDarkMode ? darkCardGreen : 'bg-green-700 text-white'}`}>
            <div className="absolute top-0 left-0 w-full bg-black text-white font-bold text-center rounded-t-lg py-1">
              {quadrados[index].tituloPreto}
            </div>
            <p className="mt-12 whitespace-pre-line">{quadrados[index].textoVerde}</p>
          </div>

          <div className="absolute right-[-10px] h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer z-10" onClick={next}>
            <img src={setaDireita} alt="Próximo" className="h-5 w-5 object-contain" />
          </div>
        </div>

        {/* Título Peças */}
        <p className={`mt-8 text-center text-2xl font-bold tracking-wide ${tituloColor}`}>
          Peças Utilizadas
        </p>

        <div className="mt-2 relative flex items-center justify-center w-full">
          <div className="absolute left-[-20px] h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer z-10" onClick={prevPeca}>
            <img src={setaEsquerda} alt="Anterior" className="h-5 w-5 object-contain" />
          </div>

          <div className={`w-64 h-64 rounded-lg flex flex-col items-center justify-center relative p-2 mx-16 ${darkCardWhite}`}>
            <img src={produtos[indexPeca]} alt={`Produto ${indexPeca + 1}`} className="h-48 w-48 object-contain"/>
            <div className="absolute bottom-0 left-0 w-full bg-black text-white font-bold text-center py-1 rounded-b-lg">
              {nomesProdutos[indexPeca]}
            </div>
          </div>

          <div className="absolute right-[-20px] h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer z-10" onClick={nextPeca}>
            <img src={setaDireita} alt="Próximo" className="h-5 w-5 object-contain" />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col items-center w-full max-w-[1400px]">

        <div className={`w-full h-[80px] mt-4 rounded-[30px] shadow-md flex items-center justify-between px-12 ${isDarkMode ? darkHeader : 'bg-white'}`}>
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            <span className={`ml-4 font-bold text-lg ${isDarkMode ? 'text-black' : 'text-gray-800'}`}>PandaApp</span>
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
            <img src={darkMode} alt="Dark Mode" className="h-6 w-6 object-contain cursor-pointer" onClick={toggleDarkMode} />
          </div>
        </div>

        {/* Título Manual */}
        <p className={`mt-16 text-center text-4xl font-bold tracking-wide ${tituloColor}`}>
          Manual de Utilização <br /> Dispositivo Sensorial de Respiração Guiada
        </p>

        {/* Quadrados desktop */}
        <div className="mt-12 flex flex-col items-center w-full">
          <div className="flex justify-center gap-16 w-full flex-wrap">
            {quadrados.slice(0, 5).map((q, i) => (
              <div key={i} className={`w-80 h-[540px] rounded-lg p-6 flex flex-col justify-center items-center text-center relative ${isDarkMode ? darkCardGreen : 'bg-green-700 text-white'}`}>
                <div className="absolute top-0 left-0 w-full bg-black text-white font-bold text-center rounded-t-lg py-2">
                  {q.tituloPreto}
                </div>
                <p className="mt-14 whitespace-pre-line">{q.textoVerde}</p>
              </div>
            ))}
          </div>

          {/* Título Peças */}
          <p className={`mt-20 text-center text-4xl font-bold tracking-wide ${tituloColor}`}>
            Peças Utilizadas
          </p>

          <div className="mt-10 grid grid-cols-5 gap-x-28 gap-y-16 w-full justify-items-center">
            {produtos.map((p, i) => (
              <div key={i} className={`w-64 h-64 rounded-lg flex flex-col items-center justify-center relative p-2 ${darkCardWhite}`}>
                <img src={p} alt={`Produto ${i + 1}`} className="h-48 w-48 object-contain"/>
                <div className="absolute bottom-0 left-0 w-full bg-black text-white font-bold text-center py-1 rounded-b-lg">
                  {nomesProdutos[i]}
                </div>
              </div>
            ))}
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

      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={toggleSidebar}></div>}

    </div>
  );
};

export default Produtos;
