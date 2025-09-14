import React from 'react';
import { Atom, BookOpen, Sparkles, Users, Award } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-green-300 rounded-full blur-2xl"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-1/4 w-6 h-6 text-green-300 opacity-60 animate-pulse" />
        <Sparkles className="absolute top-40 right-1/3 w-4 h-4 text-blue-300 opacity-40 animate-pulse delay-1000" />
        <Sparkles className="absolute bottom-32 left-1/2 w-5 h-5 text-purple-300 opacity-50 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <Award className="w-4 h-4 text-green-400" />
          <span className="text-sm font-medium">Descubra UFSM 2025</span>
        </div>
        
        {/* Main Title */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-30"></div>
            <Atom className="relative w-16 h-16 text-green-400 animate-spin-slow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent leading-tight">
            Minerais Essenciais para a Vida
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="flex justify-center items-center gap-3 mb-10">
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
            <BookOpen className="w-5 h-5 text-green-400" />
            <span className="text-lg font-medium">Curso de Nutrição</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-lg font-medium">UFSM</span>
          </div>
        </div>
        
        {/* Description */}
        <div className="max-w-5xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-blue-100 font-light mb-8">
            Os minerais são nutrientes inorgânicos fundamentais para o funcionamento adequado 
            do nosso organismo. Eles participam de processos vitais como a formação de ossos, 
            funcionamento do sistema nervoso, metabolismo energético e fortalecimento do sistema imunológico.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-lg font-medium">Descubra como esses pequenos elementos podem fazer uma grande diferença na sua saúde!</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">7</div>
            <div className="text-sm text-blue-200">Minerais Essenciais</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">6</div>
            <div className="text-sm text-blue-200">Perguntas no Quiz</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">100%</div>
            <div className="text-sm text-blue-200">Educativo</div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgb(249 250 251)" />
        </svg>
      </div>
    </header>
  );
};

export default Header;