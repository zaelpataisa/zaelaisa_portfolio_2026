

export const educationPlaces = {
  education01: {
    title:        'Instituto Universitario de Tecnología Readic-UNIR',
    degree_en:    'Associate of Science in Computer Science',
    degree_es:    'Técnico Superior Universario en Informática',
    date_start:   '2018',
    date_final:   '2020',
    image:        'unir_logo.webp',
  },
  education02: {
    title:        'Universidad Dr. José Gregorio Hernández',
    degree_en:    'Bachelor of Engineering in Computer Engineering',
    degree_es:    'Ingeniero en Computación',
    date_start:   '2021',
    date_final:   '2025',
    image:        'ujgh_logo.webp',
  }
}

export const acknowledgmentsData = {
  acknowledgment01: {
    place:        educationPlaces.education02.title,
    image:        'ujgh_20240221.jpg',
  },
  acknowledgment02: {
    place:        educationPlaces.education02.title,
    image:        'ujgh_20240406_1.jpg',
  },
  acknowledgment03: {
    place:        educationPlaces.education02.title,
    image:        'ujgh_20240406_2.jpg',
  },
  acknowledgment04: {
    place:        educationPlaces.education02.title,
    image:        'ujgh_20240627_1.jpg',
  },
  acknowledgment05: {
    place:        educationPlaces.education02.title,
    image:        'ujgh_20240627_2.jpg',
  },
  acknowledgment06: {
    place:        educationPlaces.education02.title,
    image:        'ujgh_20241109.jpg',
  },
  acknowledgment07: {
    place:        educationPlaces.education02.title,
    image:        'ujgh_20250621.jpg',
  },
}

export const coursesData = {
  course01: {
    title:        'Aprende a programar con Python (Edición 2020)',
    month:        '08',
    year:         '2022',
    image:        '20220827.jpg'
  },
  course02: {
    title:        'Concurso Diseño 3D y Biomecánica',
    month:        '12',
    year:         '2024',
    image:        '20241220.jpg'
  },
  course03: {
    title:        'Curso de Iniciación al Desarrollo con IA',
    month:        '10',
    year:         '2025',
    image:        '20251008.jpg'
  },
}




export type EducationData       = keyof typeof educationPlaces
export type CoursesData         = keyof typeof coursesData
export type AcknowledgmentData  = keyof typeof acknowledgmentsData
