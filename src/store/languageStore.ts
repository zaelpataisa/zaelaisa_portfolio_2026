import { atom, computed } from "nanostores";

export const languages = {
  es: {
    // Títulos de página
    cLeft_title01:        "Tecnologías",
    cLeft_title02:        "Proyectos",
    cLeft_title03:        "Experiencias Laborales",
    cLeft_title04:        "Educación",
    cLeft_title05:        "Cambiar idioma: Español",

    cLeft_myTitle01:      "Desarrollador Web Backend",
    cLeft_myTitle02:      "Programador en Robótica",
    cLeft_myTitle03:      "Desarrollador XR",
    cLeft_venezuela:      "¡De Venezuela para el mundo!",
  },
  en: {
    // Views titles
    cLeft_title01:        "Technologies",
    cLeft_title02:        "Projects",
    cLeft_title03:        "Work Experience",
    cLeft_title04:        "Education",
    cLeft_title05:        "Change Langauge: English",

    cLeft_myTitle01:      "Backend Web Developer",
    cLeft_myTitle02:      "Robotics Software Engineer",
    cLeft_myTitle03:      "XR Developer",
    cLeft_venezuela:      "From Venezuela to the World!",
  }
}

export const constLanguages = {
  cLeft_name01:           "Elías Zapata",
  cLeft_name02:           "Zael Aisa",
}


export type LanguageKey = keyof typeof languages.es;

export const currentLang = atom<keyof typeof languages>('es');
export const $dict = computed(currentLang, (lang) => languages[lang]);
