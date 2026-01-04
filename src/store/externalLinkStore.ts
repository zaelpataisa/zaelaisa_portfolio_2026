import type { IconCode } from '../store/icons';

export type externalLinkFormat = {
  text: string;
  icon: IconCode;
  link: string;
}

export const externalLinks: { data: externalLinkFormat[] } = {
  data: [
    { text: 'Github',    icon: 'Github',      link: 'https://github.com/zaelpataisa/' },
    { text: 'Linkedin',  icon: 'LinkedIn',    link: 'https://www.linkedin.com/in/elías-zapata-73791432a' },
    { text: 'Instagram', icon: 'Instagram',   link: 'https://www.instagram.com/zael_aisa/' },
    { text: 'Email',     icon: 'Email',       link: 'mailto:eliaszapata.prof@gmail.com' },
  ]
}