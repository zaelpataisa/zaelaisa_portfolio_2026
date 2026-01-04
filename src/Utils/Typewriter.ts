import { $dict } from '../store/languageStore';

export function initTypewriter() {
  const textElement = document.querySelector('#typewriter-text');
  const dataElement = document.querySelector('#typewriter-data');
  if (!textElement || !dataElement) return;

  const keys = JSON.parse((dataElement as HTMLElement).dataset.postKeys || '[]');
  const speed = parseInt((dataElement as HTMLElement).dataset.postSpeed || '100');
  const delay = parseInt((dataElement as HTMLElement).dataset.postDelay || '2000');

  let currentKeyIndex = 0;
  let currentCharIndex = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;

  function type() {
    if (timeout) clearTimeout(timeout);

    const dict = $dict.get();
    // @ts-ignore
    const currentFullText = dict[keys[currentKeyIndex]] || "";
  
    textElement!.textContent = currentFullText.substring(0, currentCharIndex);

    
    if (currentCharIndex >= currentFullText.length) {
      timeout = setTimeout(() => erase(), delay);
      return; 
    }

    currentCharIndex++;
    timeout = setTimeout(type, speed);
  }

  function erase() {
    if (timeout) clearTimeout(timeout);

    const dict = $dict.get();
    // @ts-ignore
    const currentFullText = dict[keys[currentKeyIndex]] || "";

    textElement!.textContent = currentFullText.substring(0, currentCharIndex);

    if (currentCharIndex <= 0) {
      currentKeyIndex = (currentKeyIndex + 1) % keys.length;
      timeout = setTimeout(type, 500);
      return;
    }

    currentCharIndex--;
    timeout = setTimeout(erase, speed / 2);
  }

  type();
}