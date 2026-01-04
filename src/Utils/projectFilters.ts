
export function initProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  const filterProjects = (category: string | undefined, clickedButton: Element) => {
    buttons.forEach(btn => btn.classList.remove('opacity-100', 'bg-[var(--c_principal)]'));
    clickedButton.classList.add('opacity-100', 'bg-[var(--c_principal)]');

    cards.forEach(card => {
      const cardCategory = (card as HTMLElement).dataset.category;
      if (category === 'all' || cardCategory === category) {
        (card as HTMLElement).style.display = 'block';
        setTimeout(() => { (card as HTMLElement).style.opacity = '1'; }, 10);
      } else {
        (card as HTMLElement).style.opacity = '0';
        setTimeout(() => { (card as HTMLElement).style.display = 'none'; }, 500);
      }
    });
  };

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const category = (button as HTMLElement).dataset.category;
      filterProjects(category, button);
    });
    if (index === 0) {
      filterProjects((button as HTMLElement).dataset.category, button);
    }
  });
}