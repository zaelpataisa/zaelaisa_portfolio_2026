import { atom, computed } from "nanostores";
import { projectsData } from "./projectData";
import { worksData, payProjectsData } from "./experiencesData";

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
    project_date:         "Fecha",
    project01_title:      projectsData.project01.title_es,     
    project01_desc:       projectsData.project01.description_es,
    project02_title:      projectsData.project02.title_es,     
    project02_desc:       projectsData.project02.description_es,
    project03_title:      projectsData.project03.title_es,     
    project03_desc:       projectsData.project03.description_es,
    project04_title:      projectsData.project04.title_es,     
    project04_desc:       projectsData.project04.description_es,
    project05_title:      projectsData.project05.title_es,     
    project05_desc:       projectsData.project05.description_es,
    project06_title:      projectsData.project06.title_es,     
    project06_desc:       projectsData.project06.description_es,
    project07_title:      projectsData.project07.title_es,     
    project07_desc:       projectsData.project07.description_es,
    project08_title:      projectsData.project08.title_es,     
    project08_desc:       projectsData.project08.description_es,
    project09_title:      projectsData.project09.title_es,     
    project09_desc:       projectsData.project09.description_es,
    project10_title:      projectsData.project10.title_es,     
    project10_desc:       projectsData.project10.description_es,
    project11_title:      projectsData.project11.title_es,     
    project11_desc:       projectsData.project11.description_es,
    project12_title:      projectsData.project12.title_es,     
    project12_desc:       projectsData.project12.description_es,

    // Experiences
    experiences_title:    "Experiencias",
    experiences_title01:  "Experiencias laborales",
    experiences_title02:  "Proyectos Independientes",
    experiencie_role:     "Cargo",
    exp_work01_role:       worksData.work01.role_es,
    exp_work01_desc:       worksData.work01.description_es,
    exp_work02_role:       worksData.work02.role_es,
    exp_work02_desc:       worksData.work02.description_es,
    exp_work03_role:       worksData.work03.role_es,
    exp_work03_desc:       worksData.work03.description_es,
    exp_project01_role:    payProjectsData.project01.role_es,
    exp_project01_desc:    payProjectsData.project01.description_es,
    exp_project02_role:    payProjectsData.project02.role_es,
    exp_project02_desc:    payProjectsData.project02.description_es,
    exp_project03_role:    payProjectsData.project03.role_es,
    exp_project03_desc:    payProjectsData.project03.description_es,

    // Education
    education_title:      "Educación",

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
    project_date:         "Date",
    project01_title:      projectsData.project01.title_en,     
    project01_desc:       projectsData.project01.description_en,
    project02_title:      projectsData.project02.title_en,     
    project02_desc:       projectsData.project02.description_en,
    project03_title:      projectsData.project03.title_en,     
    project03_desc:       projectsData.project03.description_en,
    project04_title:      projectsData.project04.title_en,     
    project04_desc:       projectsData.project04.description_en,
    project05_title:      projectsData.project05.title_en,     
    project05_desc:       projectsData.project05.description_en,
    project06_title:      projectsData.project06.title_en,     
    project06_desc:       projectsData.project06.description_en,
    project07_title:      projectsData.project07.title_en,     
    project07_desc:       projectsData.project07.description_en,
    project08_title:      projectsData.project08.title_en,     
    project08_desc:       projectsData.project08.description_en,
    project09_title:      projectsData.project09.title_en,     
    project09_desc:       projectsData.project09.description_en,
    project10_title:      projectsData.project10.title_en,     
    project10_desc:       projectsData.project10.description_en,
    project11_title:      projectsData.project11.title_en,     
    project11_desc:       projectsData.project11.description_en,
    project12_title:      projectsData.project12.title_en,     
    project12_desc:       projectsData.project12.description_en,

    // Experiences
    experiences_title:    "Experiences",
    experiences_title01:  "Work Experience",
    experiences_title02:  "Independent Projects",
    experiencie_role:     "Role",
    exp_work01_role:       worksData.work01.role_en,
    exp_work01_desc:       worksData.work01.description_en,
    exp_work02_role:       worksData.work02.role_en,
    exp_work02_desc:       worksData.work02.description_en,
    exp_work03_role:       worksData.work03.role_en,
    exp_work03_desc:       worksData.work03.description_en,
    exp_project01_role:    payProjectsData.project01.role_en,
    exp_project01_desc:    payProjectsData.project01.description_en,
    exp_project02_role:    payProjectsData.project02.role_en,
    exp_project02_desc:    payProjectsData.project02.description_en,
    exp_project03_role:    payProjectsData.project03.role_en,
    exp_project03_desc:    payProjectsData.project03.description_en,

    // Education
    education_title:      "Education",

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
