export interface Mineral {
  id: string;
  name: string;
  icon: string;
  color: string;
  function: string;
  sources: string[];
  deficiency: string;
  supplementation: string;
}

export const minerals: Mineral[] = [
  {
    id: 'iodo',
    name: 'Iodo',
    icon: 'Droplets',
    color: 'from-purple-500 to-purple-600',
    function: 'Essencial para a produção dos hormônios da tireoide, regulando o metabolismo',
    sources: ['Sal iodado', 'Peixes marinhos', 'Frutos do mar', 'Algas marinhas', 'Laticínios'],
    deficiency: 'Bócio, hipotireoidismo, problemas de crescimento em crianças',
    supplementation: 'Geralmente não necessária com uso de sal iodado'
  },
  {
    id: 'cromo',
    name: 'Cromo',
    icon: 'Zap',
    color: 'from-orange-500 to-orange-600',
    function: 'Melhora a ação da insulina e o metabolismo de carboidratos',
    sources: ['Carnes', 'Cereais integrais', 'Brócolis', 'Levedo de cerveja', 'Nozes'],
    deficiency: 'Intolerância à glicose, alterações no metabolismo lipídico',
    supplementation: 'Pode ser indicada em casos de diabetes tipo 2'
  },
  {
    id: 'calcio',
    name: 'Cálcio',
    icon: 'Bone',
    color: 'from-blue-500 to-blue-600',
    function: 'Formação e manutenção de ossos e dentes, contração muscular',
    sources: ['Leite e derivados', 'Sardinha', 'Brócolis', 'Couve', 'Gergelim'],
    deficiency: 'Osteoporose, fraturas, cãibras musculares',
    supplementation: 'Indicada para crianças, gestantes e idosos'
  },
  {
    id: 'zinco',
    name: 'Zinco',
    icon: 'Shield',
    color: 'from-green-500 to-green-600',
    function: 'Fortalece o sistema imunológico e cicatrização de feridas',
    sources: ['Carnes vermelhas', 'Ostras', 'Sementes de abóbora', 'Leguminosas', 'Castanhas'],
    deficiency: 'Baixa imunidade, cicatrização lenta, perda de apetite',
    supplementation: 'Indicada em casos de deficiência comprovada'
  },
  {
    id: 'potassio',
    name: 'Potássio',
    icon: 'Heart',
    color: 'from-red-500 to-red-600',
    function: 'Regula a pressão arterial e o funcionamento cardíaco',
    sources: ['Banana', 'Batata', 'Feijão', 'Espinafre', 'Abacate'],
    deficiency: 'Hipertensão, cãibras, fraqueza muscular',
    supplementation: 'Raramente necessária com dieta equilibrada'
  },
  {
    id: 'ferro',
    name: 'Ferro',
    icon: 'CircleDot',
    color: 'from-red-600 to-red-700',
    function: 'Transporte de oxigênio no sangue através da hemoglobina',
    sources: ['Carnes vermelhas', 'Fígado', 'Feijão', 'Espinafre', 'Lentilha'],
    deficiency: 'Anemia ferropriva, fadiga, palidez',
    supplementation: 'Indicada em casos de anemia e para gestantes'
  },
  {
    id: 'magnesio',
    name: 'Magnésio',
    icon: 'Sparkles',
    color: 'from-emerald-500 to-emerald-600',
    function: 'Participa de mais de 300 reações enzimáticas no organismo',
    sources: ['Castanhas', 'Sementes', 'Vegetais folhosos', 'Cereais integrais', 'Chocolate amargo'],
    deficiency: 'Cãibras, irritabilidade, insônia, arritmias',
    supplementation: 'Pode ser indicada para atletas e idosos'
  }
];