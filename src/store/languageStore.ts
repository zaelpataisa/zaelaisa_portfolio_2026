import { atom, computed } from "nanostores";

export const languages = {
  es: {
    // Títulos de página
    title_index:          "¡Bienvenido!",
    title_aboutMe:        "Sobre mí",
    title_education:      "Educación",
    title_projects:       "Proyectos",
    title_achievements:   "Destacados",
    title_experience:     "Experiencia laboral",
    title_contact:         "Contacto",

    // Index
  },
  en: {
    // Views titles
    title_index:          "Welcome!",
    title_aboutMe:        "About me",
    title_education:      "Education",
    title_projects:       "Projects",
    title_achievements:   "Achievements",
    title_experience:     "Experience",
    title_contact:        "Contact",

    // Index
  }
}

export const currentLang = atom<keyof typeof languages>('es');
export const $dict = computed(currentLang, (lang) => languages[lang]);
