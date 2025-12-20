import { $dict } from '../store/languageStore';

export function initI18n() {
  const updateDOM = () => {
    const dict = $dict.get();

    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (key && key in dict) {
        el.setAttribute('title', (dict as any)[key]);
      }
    });
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && key in dict) {
        el.textContent = (dict as any)[key];
      }
    });
  };

  $dict.subscribe(() => updateDOM());
  document.addEventListener('astro:page-load', () => {
    updateDOM();
  });
}
