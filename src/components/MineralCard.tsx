import React from 'react';
import * as Icons from 'lucide-react';
import { Mineral } from '../data/minerals';

interface MineralCardProps {
  mineral: Mineral;
}

const MineralCard: React.FC<MineralCardProps> = ({ mineral }) => {
  const IconComponent = Icons[mineral.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className={`bg-gradient-to-r ${mineral.color} p-6 text-white`}>
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-full">
            <IconComponent className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold">{mineral.name}</h3>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <Icons.Target className="w-5 h-5 text-green-600" />
            Função Principal
          </h4>
          <p className="text-gray-600 leading-relaxed">{mineral.function}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Icons.Apple className="w-5 h-5 text-green-600" />
            Fontes Alimentares
          </h4>
          <div className="flex flex-wrap gap-2">
            {mineral.sources.map((source, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {source}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <Icons.AlertTriangle className="w-5 h-5 text-red-500" />
            Deficiência
          </h4>
          <p className="text-gray-600 leading-relaxed">{mineral.deficiency}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <Icons.Pill className="w-5 h-5 text-blue-500" />
            Suplementação
          </h4>
          <p className="text-gray-600 leading-relaxed">{mineral.supplementation}</p>
        </div>
      </div>
    </div>
  );
};

export default MineralCard;