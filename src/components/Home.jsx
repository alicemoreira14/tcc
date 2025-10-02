import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkMode from '../assets/dark-mode.png';
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
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const goToGrupo = () => {
    setIsSidebarOpen(false);
    navigate('/grupo');
  };

  const goToProdutos = () => {
    setIsSidebarOpen(false);
    navigate('/produtos');
  };

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

        {/* Imagem panda */}
        <img src={pandaImg} alt="Panda" className="mt-6 w-3/4 object-contain" />

        {/* Título */}
        <p className="mt-4 text-center text-xl font-bold tracking-wider text-gray-800">
          Bem-vindo ao <span className="text-green-500 font-bold">PandaApp</span>
        </p>

        {/* Texto explicativo */}
        <p className="mt-4 text-center text-gray-700 text-sm leading-relaxed px-4">
          O PandaApp é um aplicativo criado para ajudar na redução da ansiedade e promoção do bem-estar. Ele combina aromaterapia com aromas naturais, meditação guiada e respiração diafragmática para estimular o relaxamento de forma natural e acessível.
        </p>

        {/* Retângulos coloridos */}
        <div className="w-[350px] h-[65px] bg-white mt-6 rounded-xl shadow-md flex items-center px-4">
          <div className="h-10 w-10 bg-green-100 rounded-md flex items-center justify-center">
            <img src={planta} alt="Planta" className="h-6 w-6 object-contain" />
          </div>
          <div className="ml-4 flex flex-col">
            <span className="font-semibold text-gray-800">Aromaterapia</span>
            <span className="text-xs text-gray-600">Aromas naturais para relaxamento</span>
          </div>
        </div>

        <div className="w-[350px] h-[65px] bg-white mt-4 rounded-xl shadow-md flex items-center px-4">
          <div className="h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center">
            <img src={meditacao} alt="Meditação" className="h-6 w-6 object-contain" />
          </div>
          <div className="ml-4 flex flex-col">
            <span className="font-semibold text-gray-800">Meditação guiada</span>
            <span className="text-xs text-gray-600">Sessões guiadas de meditações</span>
          </div>
        </div>

        <div className="w-[350px] h-[65px] bg-white mt-4 rounded-xl shadow-md flex items-center px-4">
          <div className="h-10 w-10 bg-purple-100 rounded-md flex items-center justify-center">
            <img src={vento} alt="Vento" className="h-6 w-6 object-contain" />
          </div>
          <div className="ml-4 flex flex-col">
            <span className="font-semibold text-gray-800">Respiração diafragmática</span>
            <span className="text-xs text-gray-600">Técnicas de meditação para relaxar</span>
          </div>
        </div>

        {/* Botões */}
        <button className="w-[350px] h-[50px] bg-green-500 mt-8 rounded-xl text-white font-semibold text-lg">
          Baixar Agora Grátis
        </button>
        <button className="w-[350px] h-[50px] bg-white mt-4 rounded-xl border border-green-500 text-green-500 font-semibold text-lg">
          Saiba Mais
        </button>

        {/* Título e subtítulo */}
        <div className="mt-10 text-center px-4">
          <p className="font-bold text-green-900 text-lg">Por que escolher o PandaApp?</p>
          <p className="mt-2 text-green-800 text-[0.75rem] font-light">Uma abordagem completa para o seu bem-estar</p>
        </div>

        {/* Quatro quadrados grandes com círculos e textos */}
        <div className="mt-6 flex flex-col items-center space-y-4 w-full">
          {/* Quadrado 1 */}
          <div className="w-[360px] h-[140px] bg-gray-200 rounded-md flex flex-col items-center pt-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <img src={planta2} alt="Planta2" className="h-6 w-6 object-contain" />
            </div>
            <div className="mt-2 text-center px-2">
              <p className="font-semibold text-gray-800 text-sm">100% Natural</p>
              <p className="text-xs text-gray-600">Métodos naturais sem dependência química</p>
            </div>
          </div>

          {/* Quadrado 2 */}
          <div className="w-[360px] h-[140px] bg-gray-200 rounded-md flex flex-col items-center pt-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <img src={celular} alt="Celular" className="h-6 w-6 object-contain" />
            </div>
            <div className="mt-2 text-center px-2">
              <p className="font-semibold text-gray-800 text-sm">Fácil de Usar</p>
              <p className="text-xs text-gray-600">Interface intuitiva e acessível para todos</p>
            </div>
          </div>

          {/* Quadrado 3 */}
          <div className="w-[360px] h-[140px] bg-gray-200 rounded-md flex flex-col items-center pt-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <img src={relogio} alt="Relógio" className="h-6 w-6 object-contain" />
            </div>
            <div className="mt-2 text-center px-2">
              <p className="font-semibold text-gray-800 text-sm">Disponível 24/7</p>
              <p className="text-xs text-gray-600">Acesso ao relaxamento a qualquer momento</p>
            </div>
          </div>

          {/* Quadrado 4 */}
          <div className="w-[360px] h-[140px] bg-gray-200 rounded-md flex flex-col items-center pt-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <img src={alvo} alt="Alvo" className="h-6 w-6 object-contain" />
            </div>
            <div className="mt-2 text-center px-2">
              <p className="font-semibold text-gray-800 text-sm">Personalizado</p>
              <p className="text-xs text-gray-600">Experiência adaptada às suas necessidades</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-green-900 mt-8 py-4 flex justify-center items-center">
          <p className="text-white text-sm text-center">
            © 2025 PandaApp. Todos os direitos reservados.
          </p>
        </footer>

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
            onClick={goToProdutos}
          >
            Produtos
          </p>
          <p 
            className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200"
            onClick={goToGrupo}
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

export default Home;
