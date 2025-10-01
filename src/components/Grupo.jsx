import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkMode from '../assets/dark-mode.png';
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
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const integrantes = [
    { img: alice, nome: "Alice Moreira", user: "@aliicxy" },
    { img: izabella, nome: "Izabella Braga", user: "@braga_iz" },
    { img: miriam, nome: "Miriam Fernandes", user: "@miriam.fernandes" },
    { img: gustavo, nome: "Gustavo Almeida", user: "" },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const prev = () => setIndex(prev => (prev === 0 ? integrantes.length - 1 : prev - 1));
  const next = () => setIndex(prev => (prev === integrantes.length - 1 ? 0 : prev + 1));

  const handleEnviar = () => {
    const mensagemCompleta = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
    const whatsappUrl = `https://wa.me/5511930881085?text=${encodeURIComponent(mensagemCompleta)}`;
    const emailUrl = `mailto:alicinha.moreira14@gmail.com?subject=Mensagem PandaApp&body=${encodeURIComponent(mensagemCompleta)}`;

    // Abrir WhatsApp e Email
    window.open(whatsappUrl, '_blank');
    window.open(emailUrl, '_blank');
  };

  return (
    <div className="relative w-full flex flex-col items-center bg-[#E6FAFA]">

      <div className="w-[375px] flex flex-col items-center">

        {/* Cabeçalho */}
        <div className="w-[375px] h-[54px] bg-white mt-4 rounded-[80px] shadow-md flex items-center justify-between px-4">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className="ml-3 font-bold text-gray-800 text-base">PandaApp</span>
          </div>
          <div className="flex items-center space-x-3">
            <img src={darkMode} alt="Dark Mode" className="h-6 w-6 object-contain" />
            <img src={menu} alt="Menu" className="h-6 w-6 object-contain cursor-pointer" onClick={toggleSidebar} />
          </div>
        </div>

        {/* Título */}
        <p className="mt-16 text-center text-xl font-bold tracking-wider text-gray-800">
          Conheça nosso time!
        </p>

        {/* Carrossel */}
        <div className="mt-12 relative flex flex-col items-center justify-center w-full">
          <div className="relative flex items-center justify-center w-full">
            {/* Seta esquerda */}
            <div 
              className="absolute left-2 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
              onClick={prev}
            >
              <img src={setaEsquerda} alt="Anterior" className="h-5 w-5 object-contain" />
            </div>

            {/* Imagem integrante */}
            <img 
              src={integrantes[index].img} 
              alt={`Integrante ${index + 1}`} 
              className="h-64 w-64 object-contain rounded-md" 
            />

            {/* Seta direita */}
            <div 
              className="absolute right-2 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
              onClick={next}
            >
              <img src={setaDireita} alt="Próximo" className="h-5 w-5 object-contain" />
            </div>
          </div>

          {/* Nome e username */}
          <div className="mt-4 text-center">
            <p className="font-semibold text-gray-800">{integrantes[index].nome}</p>
            {integrantes[index].user && (
              <p className="text-gray-600 text-sm">{integrantes[index].user}</p>
            )}
          </div>
        </div>

      </div>

      {/* Seção de contato com fundo degradê invertido */}
      <div className="w-full mt-16 flex flex-col items-center py-10 px-4" style={{ 
        background: 'linear-gradient(to top, #A3F7D1, #E6FAFA)' // degradê invertido: claro embaixo e mais escuro no topo
      }}>
        <p className="text-xl font-bold text-green-600 mb-6">Entre em contato</p>

        <input 
          type="text" 
          placeholder="Nome" 
          value={nome} 
          onChange={e => setNome(e.target.value)}
          className="w-[375px] max-w-full mb-4 px-4 py-3 rounded-xl border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          className="w-[375px] max-w-full mb-4 px-4 py-3 rounded-xl border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea 
          placeholder="Mensagem" 
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          className="w-[375px] max-w-full mb-4 px-4 py-3 rounded-xl border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          rows={4}
        />

        <button 
          className="w-[375px] max-w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
          onClick={handleEnviar}
        >
          Enviar
        </button>
      </div>

      {/* Sidebar igual Home */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-green-600 shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}>
        <div className="flex flex-col mt-20 px-6 space-y-6">
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200">Jogo</p>
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200">Produtos</p>
          <p 
            className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200"
            onClick={() => { navigate('/grupo'); setIsSidebarOpen(false); }}
          >
            Quem somos
          </p>
          <p className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200">Referências</p>
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

export default Grupo;
