import { heroes } from '../data/heroes';

export const gerHeroById = (id) => {
  heroes.find((hero) => hero.id === id);
};
