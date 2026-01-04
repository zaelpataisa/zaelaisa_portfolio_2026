
export const categories = {
  Web:            'W',
  Robotics:       'R',
  XR:             'XR',
  Software:       'S'
} 

export const technologiesData = {
  // Web
  tech01: { name: 'HTML5',          category: categories.Web },
  tech02: { name: 'CSS',            category: categories.Web },
  tech03: { name: 'Bootstrap',      category: categories.Web },
  tech04: { name: 'Tailwind',       category: categories.Web },
  tech05: { name: 'JavaScript',     category: categories.Web },
  tech06: { name: 'TypeScript',     category: categories.Web },
  tech07: { name: 'JQuery',         category: categories.Web },
  tech08: { name: 'Astro',          category: categories.Web },
  tech09: { name: 'React',          category: categories.Web },
  tech10: { name: 'PHP',            category: categories.Web },
  tech11: { name: 'Laravel',        category: categories.Web },

  // Robótica
  tech12: { name: 'Arduino',        category: categories.Robotics },
  tech13: { name: 'Raspberry',      category: categories.Robotics },
  tech14: { name: 'FRC',            category: categories.Robotics },

  // XR
  tech15: { name: 'Unity',          category: categories.XR },
  tech16: { name: 'Cardboard',      category: categories.XR },
  tech17: { name: 'Meta',           category: categories.XR },

  // Software
  tech18: { name: 'Python',         category: categories.Software },
  tech19: { name: 'Java',           category: categories.Software },
  tech20: { name: 'MySQL',          category: categories.Software },
}

export type TechnologiesData = keyof typeof technologiesData;