import React from 'react';
import Header from './components/Header';
import MineralCarousel from './components/MineralCarousel';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Seção de Minerais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Conheça os 7 Minerais Essenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada mineral desempenha um papel único e fundamental na manutenção da sua saúde. 
              Explore as informações detalhadas sobre cada um deles.
            </p>
          </div>
          
          <MineralCarousel />
        </div>
      </section>

      {/* Seção do Quiz */}
      <section className="py-16 bg-gradient-to-r from-blue-900/5 to-green-900/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Teste seus Conhecimentos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Responda ao nosso quiz interativo e descubra o quanto você aprendeu sobre minerais essenciais!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Quiz />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;