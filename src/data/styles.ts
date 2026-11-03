export interface Style {
  id: string;
  title: string;
  description: string;
  primary: string;
  secondary: string;
  typography: string;
  mood: string;
  useCases: string[];
  image: string;
}

export const styles: Style[] = [
  {
    id: 'dark-starlight',
    title: 'Темное звездное небо',
    description: 'Глубокая темная палитра с неоновыми акцентами, идеальная для технологических и футуристических проектов.',
    primary: '#0f172a',
    secondary: '#00ff88',
    typography: 'Синтез выразительных и минималистичных шрифтов',
    mood: 'Футуристично, технологично',
    useCases: ['Портфолио', 'Технологические сайты', 'Киберпанк проекты'],
    image: 'dark-starlight.png',
  },
  {
    id: 'minimal-white',
    title: 'Минималистичное белое',
    description: 'Чистая белая основа с серыми акцентами, подходит для корпоративных и образовательных проектов.',
    primary: '#ffffff',
    secondary: '#f8fafc',
    typography: 'Четкие интерфейсные гарнитуры',
    mood: 'Профессионально, лаконично',
    useCases: ['Корпоративные сайты', 'Лендинги', 'Блоги'],
    image: 'minimal-white.png',
  },
  {
    id: 'vibrant-gradient',
    title: 'Вибрирующий градиент',
    description: 'Яркий градиент от синего к фиолетовому, создает динамичную и энергичную атмосферу.',
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: '#ffffff',
    typography: 'Сочетание современных и декоративных шрифтов',
    mood: 'Энергично, креативно',
    useCases: ['Стартапы', 'Маркетинговые страницы', 'Игры'],
    image: 'vibrant-gradient.png',
  },
  {
    id: 'retro-90s',
    title: 'Ретро 90-е',
    description: 'Эстетика 90-х с неоновыми цветами и геометрическими формами.',
    primary: '#2d2d2d',
    secondary: '#ff00ff',
    typography: 'Ретро шрифты и современные гарнитуры',
    mood: 'Ностальгично, игриво',
    useCases: ['Культурные проекты', 'Музыкальные сайты', 'Арт-проекты'],
    image: 'retro-90s.png',
  },
  {
    id: 'corporate-blue',
    title: 'Корпоративный синий',
    description: 'Профессиональная синяя палитра с градиентами и акцентными цветами.',
    primary: '#1e40af',
    secondary: '#3b82f6',
    typography: 'Строгие serif и sans-serif гарнитуры',
    mood: 'Довольно, стабильно',
    useCases: ['Финансовые услуги', 'Юридические компании', 'Государственные сайты'],
    image: 'corporate-blue.png',
  },
  {
    id: 'nature-green',
    title: 'Природный зеленый',
    description: 'Органичная зеленая палитра с природными текстурами и оттенками.',
    primary: '#10b981',
    secondary: '#34d399',
    typography: 'Сочетание современных и рукописных шрифтов',
    mood: 'Экологично, спокойно',
    useCases: ['Экологические проекты', 'Здоровье и медицина', 'Агропром'],
    image: 'nature-green.png',
  },
  {
    id: 'minimal-dark',
    title: 'Минималистичное темное',
    description: 'Темная минималистичная палитра с акцентным оранжевым.',
    primary: '#1a1a1a',
    secondary: '#ff6b6b',
    typography: 'Четкие интерфейсные гарнитуры',
    mood: 'Современно, лаконично',
    useCases: ['Портфолио', 'Лендинги', 'Технологические продукты'],
    image: 'minimal-dark.png',
  },
  {
    id: 'neon-cyber',
    title: 'Неоновый киберпанк',
    description: 'Яркая киберпанк-палитра с неоновыми линиями и контрастами.',
    primary: '#000000',
    secondary: '#00ffff',
    typography: 'Технические и декоративные шрифты',
    mood: 'Киберпанк, футуристично',
    useCases: ['Игры', 'Технологические стартапы', 'Футуристичные проекты'],
    image: 'neon-cyber.png',
  },
  {
    id: 'warm-wood',
    title: 'Теплое дерево',
    description: 'Органичная деревянная текстура с теплыми оттенками.',
    primary: '#d97706',
    secondary: '#f59e0b',
    typography: 'Рукописные и современные шрифты',
    mood: 'Уютно, натурально',
    useCases: ['Рестораны', 'Отели', 'Бутик-магазины'],
    image: 'warm-wood.png',
  },
  {
    id: 'monochrome',
    title: 'Монохромное',
    description: 'Черно-белая палитра с градиентами и текстурами.',
    primary: '#000000',
    secondary: '#ffffff',
    typography: 'Классические и современные шрифты',
    mood: 'Элегантно, строго',
    useCases: ['Фотографии', 'Арт-проекты', 'Минималистичные сайты'],
    image: 'monochrome.png',
  }
];