import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkModeIcon from '../assets/dark-mode.png';
import menu from '../assets/menu.png';
import alice from '../assets/alice.png';
import izabella from '../assets/izabella.png';
import miriam from '../assets/miriam.png';
import gustavo from '../assets/gustavo.png';
import setaEsquerda from '../assets/seta-esquerda.png';
import setaDireita from '../assets/seta-direita.png';

const Grupo = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

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

  const integrantes = [
    { img: alice, nome: "Alice Moreira", user: "@aliicxy" },
    { img: izabella, nome: "Izabella Braga", user: "@braga_iz" },
    { img: miriam, nome: "Miriam Fernandes", user: "@miriam.fernandes" },
    { img: gustavo, nome: "Gustavo Almeida", user: "" },
  ];

  const prev = () => setIndex(prev => (prev === 0 ? integrantes.length - 1 : prev - 1));
  const next = () => setIndex(prev => (prev === integrantes.length - 1 ? 0 : prev + 1));

  const handleEnviar = () => {
    const mensagemCompleta = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
    const whatsappUrl = `https://wa.me/5511930881085?text=${encodeURIComponent(mensagemCompleta)}`;
    const emailUrl = `mailto:alicinha.moreira14@gmail.com?subject=Mensagem PandaApp&body=${encodeURIComponent(mensagemCompleta)}`;
    window.open(whatsappUrl, '_blank');
    window.open(emailUrl, '_blank');
  };

  const contatoBg = isDarkMode
    ? 'bg-gradient-to-b from-[#1F2937] via-[#374151] to-[#4B5563]'
    : 'bg-gradient-to-t from-[#A3F7D1] via-[#CFFFE2] to-[#E6FAFA]';

  return (
    <div className={`relative w-full flex flex-col items-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>

      {/* MOBILE */}
      <div className="md:hidden w-[375px] flex flex-col items-center">

        <div className={`w-[375px] h-[54px] mt-4 rounded-[80px] shadow-md flex items-center justify-between px-4 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
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

        <p className={`mt-10 text-2xl font-bold tracking-wide text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Conheça nosso time!
        </p>

        {/* Carrossel Mobile */}
        <div className="mt-12 relative flex flex-col items-center justify-center w-full">
          <div className="relative flex items-center justify-center w-full">
            <div 
              className="absolute left-2 h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center cursor-pointer z-10"
              onClick={prev}
            >
              <img src={setaEsquerda} alt="Anterior" className="h-5 w-5 object-contain" />
            </div>

            <img 
              src={integrantes[index].img} 
              alt={`Integrante ${index + 1}`} 
              className="h-64 w-64 object-contain rounded-[76px]" 
            />

            <div 
              className="absolute right-2 h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center cursor-pointer z-10"
              onClick={next}
            >
              <img src={setaDireita} alt="Próximo" className="h-5 w-5 object-contain" />
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{integrantes[index].nome}</p>
            {integrantes[index].user && (
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{integrantes[index].user}</p>
            )}
          </div>
        </div>

      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col items-center w-full max-w-[1400px]">

        <div className={`w-full h-[80px] mt-4 rounded-[80px] shadow-md flex items-center justify-between px-12 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            <span className={`ml-4 font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>PandaApp</span>
          </div>
          <div className="flex space-x-8">
            <p className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-green-500`} onClick={() => navigate('/')}>Home</p>
            <p className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-green-500`} onClick={() => navigate('/produtos')}>Produtos</p>
            <p className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-green-500`} onClick={() => navigate('/grupo')}>Quem somos</p>
            <p className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-green-500`} onClick={() => navigate('/referencias')}>Referências</p>
            <p className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-green-500`} onClick={() => navigate('/jogo')}>Jogo</p>
            <img 
              src={darkModeIcon} 
              alt="Dark Mode" 
              className="h-6 w-6 object-contain cursor-pointer" 
              onClick={toggleDarkMode} 
            />
          </div>
        </div>

        <p className={`mt-10 text-4xl font-bold tracking-wide text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Conheça nosso time!
        </p>

        <div className="mt-12 flex justify-center gap-16 flex-wrap">
          {integrantes.map((int, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={int.img} alt={int.nome} className="h-64 w-64 object-contain rounded-[76px]" />
              <p className={`mt-2 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{int.nome}</p>
              {int.user && <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{int.user}</p>}
            </div>
          ))}
        </div>

      </div>

      {/* Contato */}
      <div className={`w-full mt-16 flex flex-col items-center py-20 px-4 ${contatoBg}`}>
        <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-emerald-600'} mb-6`}>
          Entre em contato
        </p>

        <input 
          type="text" 
          placeholder="Nome" 
          value={nome} 
          onChange={e => setNome(e.target.value)}
          className={`w-[375px] max-w-full mb-4 px-4 py-3 rounded-xl border-2 border-emerald-600 focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'text-white placeholder-white' : 'text-black placeholder-gray-500'}`}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          className={`w-[375px] max-w-full mb-4 px-4 py-3 rounded-xl border-2 border-emerald-600 focus:outline-none focus:ring-2 focus:ring-green-500 ${isDarkMode ? 'text-white placeholder-white' : 'text-black placeholder-gray-500'}`}
        />
        <textarea 
          placeholder="Mensagem" 
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          rows={4}
          className={`w-[375px] max-w-full mb-4 px-4 py-3 rounded-xl border-2 border-emerald-600 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none ${isDarkMode ? 'text-white placeholder-white' : 'text-black placeholder-gray-500'}`}
        />

        <button 
          className="w-[375px] max-w-full py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
          onClick={handleEnviar}
        >
          Enviar
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 ${isDarkMode ? 'bg-gray-700' : 'bg-emerald-600'} shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}>
        <div className="flex flex-col mt-20 px-6 space-y-6">
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200" onClick={() => { navigate('/'); setIsSidebarOpen(false); }}>Home</p>
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200" onClick={() => { navigate('/produtos'); setIsSidebarOpen(false); }}>Produtos</p>
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200" onClick={() => { navigate('/grupo'); setIsSidebarOpen(false); }}>Quem somos</p>
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200" onClick={() => { navigate('/referencias'); setIsSidebarOpen(false); }}>Referências</p>
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200" onClick={() => { navigate('/jogo'); setIsSidebarOpen(false); }}>Jogo</p>
        </div>
      </div>

      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={toggleSidebar}></div>}

    </div>
  );
};

export default Grupo;
