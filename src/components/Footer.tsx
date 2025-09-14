import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-green-400" />
            <Heart className="w-6 h-6 text-red-400" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-green-400">
            Descubra UFSM
          </h3>
          
          <p className="text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Trabalho desenvolvido para o <strong>Descubra UFSM</strong> – Curso de Nutrição
          </p>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              Universidade Federal de Santa Maria • 2025
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Educação em saúde que transforma vidas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;