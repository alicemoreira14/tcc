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

  const quadradosInfo = [
    { img: planta2, titulo: "100% Natural", descricao: "Métodos naturais sem dependência química" },
    { img: celular, titulo: "Fácil de Usar", descricao: "Interface intuitiva e acessível para todos" },
    { img: relogio, titulo: "Disponível 24/7", descricao: "Acesso ao relaxamento a qualquer momento" },
    { img: alvo, titulo: "Personalizado", descricao: "Experiência adaptada às suas necessidades" },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#E6FAFA] flex flex-col items-center justify-between">

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center w-full">

        {/* MOBILE */}
        <div className="w-full flex justify-center md:hidden">
          <div className="w-[375px] flex flex-col items-center">

            {/* Header Mobile */}
            <div className="w-[375px] h-[54px] bg-white mt-4 rounded-[80px] shadow-md flex items-center justify-between px-4">
              <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
                <span className="ml-3 font-poppins font-bold text-gray-800 text-base">PandaApp</span>
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

            {/* Imagem Panda */}
            <img src={pandaImg} alt="Panda" className="mt-6 w-3/4 object-contain" />

            {/* Título e descrição */}
            <p className="mt-4 text-center text-xl font-playfair font-bold tracking-wider text-gray-800">
              Bem-vindo ao <span className="text-green-500 font-playfair font-bold">PandaApp</span>
            </p>

            <p className="mt-4 text-center text-gray-700 text-sm leading-relaxed px-4 font-poppins">
              O PandaApp é um aplicativo criado para ajudar na redução da ansiedade e promoção do bem-estar. Ele combina aromaterapia com aromas naturais, meditação guiada e respiração diafragmática para estimular o relaxamento de forma natural e acessível.
            </p>

            {/* Cards Mobile */}
            <div className="mt-6 flex flex-col items-center space-y-4 w-full px-4">

              <div className="w-[350px] h-[65px] bg-white rounded-xl shadow-md flex items-center px-4">
                <div className="h-10 w-10 bg-green-100 rounded-md flex items-center justify-center">
                  <img src={planta} alt="Planta" className="h-6 w-6 object-contain" />
                </div>
                <div className="ml-4 flex flex-col">
                  <span className="font-poppins font-semibold text-gray-800">Aromaterapia</span>
                  <span className="text-xs text-gray-600 font-poppins">Aromas naturais para relaxamento</span>
                </div>
              </div>

              <div className="w-[350px] h-[65px] bg-white rounded-xl shadow-md flex items-center px-4">
                <div className="h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center">
                  <img src={meditacao} alt="Meditação" className="h-6 w-6 object-contain" />
                </div>
                <div className="ml-4 flex flex-col">
                  <span className="font-poppins font-semibold text-gray-800">Meditação guiada</span>
                  <span className="text-xs text-gray-600 font-poppins">Sessões guiadas de meditações</span>
                </div>
              </div>

              <div className="w-[350px] h-[65px] bg-white rounded-xl shadow-md flex items-center px-4">
                <div className="h-10 w-10 bg-purple-100 rounded-md flex items-center justify-center">
                  <img src={vento} alt="Vento" className="h-6 w-6 object-contain" />
                </div>
                <div className="ml-4 flex flex-col">
                  <span className="font-poppins font-semibold text-gray-800">Respiração diafragmática</span>
                  <span className="text-xs text-gray-600 font-poppins">Técnicas de meditação para relaxar</span>
                </div>
              </div>

              {/* Botões Mobile */}
              <div className="mt-4 flex flex-col space-y-4 w-full px-4">
                <button className="w-full h-[60px] bg-green-500 rounded-xl text-white font-poppins font-semibold text-lg">
                  Baixar Agora Grátis
                </button>
                <button className="w-full h-[60px] bg-white rounded-xl border border-green-500 text-green-500 font-poppins font-semibold text-lg">
                  Saiba Mais
                </button>
              </div>

              {/* Quadrados info Mobile */}
              {quadradosInfo.map((item, i) => (
                <div key={i} className="w-[360px] h-[140px] bg-gray-200 rounded-md flex flex-col items-center pt-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <img src={item.img} alt={`Icon ${i}`} className="h-6 w-6 object-contain" />
                  </div>
                  <div className="mt-2 text-center px-2">
                    <p className="font-poppins font-semibold text-gray-800 text-sm">{item.titulo}</p>
                    <p className="text-xs text-gray-600 font-poppins">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex justify-center w-full">
          <div className="w-[1024px] flex flex-col items-center">

            {/* Header Desktop */}
            <div className="w-full h-[80px] bg-white mt-4 rounded-[80px] shadow-md flex items-center justify-between px-8">
              <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
                <span className="ml-4 font-poppins font-bold text-gray-800 text-lg">PandaApp</span>
              </div>

              <div className="flex space-x-8 font-poppins">
                <p className="cursor-pointer hover:text-green-500" onClick={() => navigate('/')}>Home</p>
                <p className="cursor-pointer hover:text-green-500" onClick={goToProdutos}>Produtos</p>
                <p className="cursor-pointer hover:text-green-500" onClick={goToGrupo}>Quem somos</p>
                <p className="cursor-pointer hover:text-green-500" onClick={() => navigate('/referencias')}>Referências</p>
                <p className="cursor-pointer hover:text-green-500" onClick={() => navigate('/jogo')}>Jogo</p>
              </div>
            </div>

            {/* Conteúdo Desktop */}
            <div className="flex flex-col items-center mt-10 w-full">

              <img src={pandaImg} alt="Panda" className="w-1/2 object-contain" />

              <p className="mt-6 text-center text-2xl font-playfair font-bold text-gray-800">
                Bem-vindo ao <span className="text-green-500 font-playfair font-bold">PandaApp</span>
              </p>

              <p className="mt-4 text-center text-gray-700 text-base leading-relaxed px-8 font-poppins">
                O PandaApp é um aplicativo criado para ajudar na redução da ansiedade e promoção do bem-estar. Ele combina aromaterapia com aromas naturais, meditação guiada e respiração diafragmática para estimular o relaxamento de forma natural e acessível.
              </p>

              {/* Cards Desktop */}
              <div className="mt-6 w-full flex justify-between px-8 space-x-6">
                <div className="w-1/3 h-[80px] bg-white rounded-xl shadow-md flex items-center px-4">
                  <div className="h-12 w-12 bg-green-100 rounded-md flex items-center justify-center">
                    <img src={planta} alt="Planta" className="h-6 w-6 object-contain" />
                  </div>
                  <div className="ml-4 flex flex-col">
                    <span className="font-poppins font-semibold text-gray-800">Aromaterapia</span>
                    <span className="text-xs text-gray-600 font-poppins">Aromas naturais para relaxamento</span>
                  </div>
                </div>

                <div className="w-1/3 h-[80px] bg-white rounded-xl shadow-md flex items-center px-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center">
                    <img src={meditacao} alt="Meditação" className="h-6 w-6 object-contain" />
                  </div>
                  <div className="ml-4 flex flex-col">
                    <span className="font-poppins font-semibold text-gray-800">Meditação guiada</span>
                    <span className="text-xs text-gray-600 font-poppins">Sessões guiadas de meditações</span>
                  </div>
                </div>

                <div className="w-1/3 h-[80px] bg-white rounded-xl shadow-md flex items-center px-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-md flex items-center justify-center">
                    <img src={vento} alt="Vento" className="h-6 w-6 object-contain" />
                  </div>
                  <div className="ml-4 flex flex-col">
                    <span className="font-poppins font-semibold text-gray-800">Respiração diafragmática</span>
                    <span className="text-xs text-gray-600 font-poppins">Técnicas de meditação para relaxar</span>
                  </div>
                </div>
              </div>

              {/* Botões Desktop */}
              <div className="mt-8 flex space-x-6 w-full px-8">
                <button className="w-1/2 h-[60px] bg-green-500 rounded-xl text-white font-poppins font-semibold text-lg">
                  Baixar Agora Grátis
                </button>
                <button className="w-1/2 h-[60px] bg-white rounded-xl border border-green-500 text-green-500 font-poppins font-semibold text-lg">
                  Saiba Mais
                </button>
              </div>

              {/* Quadrados info Desktop */}
              <div className="mt-6 flex justify-between px-8 w-full gap-4">
                {quadradosInfo.map((item, i) => (
                  <div key={i} className="w-[23%] h-[140px] bg-gray-200 rounded-md flex flex-col items-center pt-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <img src={item.img} alt={`Icon ${i}`} className="h-6 w-6 object-contain" />
                    </div>
                    <div className="mt-2 text-center px-2">
                      <p className="font-poppins font-semibold text-gray-800 text-sm">{item.titulo}</p>
                      <p className="text-xs text-gray-600 font-poppins">{item.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full bg-green-900 py-4 flex justify-center items-center mt-auto">
        <p className="text-white text-sm text-center font-poppins">
          © 2025 PandaApp. Todos os direitos reservados.
        </p>
      </footer>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-green-600 shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}>
        <div className="flex flex-col mt-20 px-6 space-y-6 font-poppins">
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
          <p 
            className="text-white font-semibold text-lg cursor-pointer hover:text-green-200 transition-colors duration-200"
            onClick={() => { navigate('/jogo'); setIsSidebarOpen(false); }}
          >
            Jogo
          </p>
        </div>
      </div>

      {/* Overlay Sidebar */}
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
