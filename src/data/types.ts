import { TOPPINGS } from './prices';

export enum PIZZA_NAMES {
  MARGHERITA = 'Margherita',
  PEPPERONI = 'Pepperoni',
  HAWAIIAN = 'Hawaiian',
  CHEEF_PIZZA = 'Cheef pizza',
  VEGGIE = 'Veggie',
  FOUR_CHEESE = 'Four Cheese'
}

export interface IMeal {
  readonly name: string;
  getPrice(): number;
}

export interface PizzaRecipe {
  toppings: (keyof typeof TOPPINGS)[];
  basePrice: number;
}

export type PizzaReceipts = Record<PIZZA_NAMES, PizzaRecipe>;

export enum DOUGH_TYPE {
  THIN = 0.9,
  THICK = 1
}

export enum PIZZA_SIZE {
  SMALL = 1,
  MEDIUM = 1.2,
  LARGE = 1.4
}
