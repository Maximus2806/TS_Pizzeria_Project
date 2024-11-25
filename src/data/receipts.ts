import { PizzaReceipts } from './types';
import { PIZZA_NAMES } from './types';

export const pizzaReceipts: PizzaReceipts = {
  [PIZZA_NAMES.MARGHERITA]: {
    toppings: ['cheese', 'tomato'],
    basePrice: 50
  },
  [PIZZA_NAMES.PEPPERONI]: {
    toppings: ['cheese', 'tomato', 'pepperoni'],
    basePrice: 60
  },
  [PIZZA_NAMES.HAWAIIAN]: {
    toppings: ['cheese', 'tomato', 'pineapple', 'ham'],
    basePrice: 65
  },
  [PIZZA_NAMES.VEGGIE]: {
    toppings: ['cheese', 'tomato', 'olives', 'mushrooms', 'peppers'],
    basePrice: 55
  },
  [PIZZA_NAMES.CHEEF_PIZZA]: {
    toppings: ['cheese', 'tomato', 'chicken', 'bacon'],
    basePrice: 70
  },
  [PIZZA_NAMES.FOUR_CHEESE]: {
    toppings: ['cheddar', 'mozzarella', 'parmesan', 'blue cheese'],
    basePrice: 80
  }
};
