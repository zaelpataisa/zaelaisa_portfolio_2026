import { atom, computed } from "nanostores";

export const languages = {
  es: {
    // Títulos de página
    cLeft_title01:        "Tecnologías",
    cLeft_title02:        "Proyectos",
    cLeft_title03:        "Experiencias Laborales",
    cLeft_title04:        "Educación",
    cLeft_title05:        "Cambiar idioma: Español",

    // Información
    cLeft_myTitle01:      "Desarrollador Web Backend",
    cLeft_myTitle02:      "Programador en Robótica",
    cLeft_myTitle03:      "Desarrollador XR",
    cLeft_venezuela:      "¡De Venezuela para el mundo!",

    // Projects
    project_title:        "Proyectos",
    project_filter_all:   "Todo",

    // Categorias
    technologies_title:   "Tecnologías",
    category_Web:         "Desarrollo Web",
    category_Robotics:    "Robótica",
    category_XR:          "Realidad Inmersiva",
    category_Software:    "Software",
  },
  en: {
    // Views titles
    cLeft_title01:        "Technologies",
    cLeft_title02:        "Projects",
    cLeft_title03:        "Work Experience",
    cLeft_title04:        "Education",
    cLeft_title05:        "Change Langauge: English",

    // My Info
    cLeft_myTitle01:      "Backend Web Developer",
    cLeft_myTitle02:      "Robotics Software Engineer",
    cLeft_myTitle03:      "XR Developer",
    cLeft_venezuela:      "From Venezuela to the World!",

    // Projects
    project_title:        "Projects",
    project_filter_all:   "All",

    // Categories
    technologies_title:   "Technologies",
    category_Web:         "Web Development",
    category_Robotics:    "Robotics",
    category_XR:          "XR Development",
    category_Software:    "Software",
  }
}

export const constLanguages = {
  cLeft_name01:           "Elías Zapata",
  cLeft_name02:           "Zael Aisa",
}


export type LanguageKey = keyof typeof languages.es;

export const currentLang = atom<keyof typeof languages>('es');
export const $dict = computed(currentLang, (lang) => languages[lang]);
