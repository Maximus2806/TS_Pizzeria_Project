import { ERROR_MESSAGES } from '../data/messages';
import { TOPPINGS } from '../data/prices';
import { pizzaReceipts } from '../data/receipts';
import { PIZZA_NAMES, DOUGH_TYPE, PIZZA_SIZE, PizzaRecipe } from '../data/types';
import { Meal } from './meal';

export class Pizza extends Meal {
  private basePrice: number;
  private baseToppingsPrice: number;
  private additionalToppingsPrice: number;
  constructor(
    name: PIZZA_NAMES,
    private doughType: DOUGH_TYPE,
    private size: PIZZA_SIZE,
    private additionalToppings?: (keyof typeof TOPPINGS)[] | null
  ) {
    super(name);

    if (!(name in pizzaReceipts)) {
      throw new Error(`${name} ${ERROR_MESSAGES.RECEIPT_NOT_FOUND}`);
    }

    const recipe: PizzaRecipe = pizzaReceipts[name];
    this.basePrice = recipe.basePrice;
    this.baseToppingsPrice = this.calculateToppingsPrice(recipe.toppings);
    this.additionalToppings = additionalToppings ?? null;
    this.additionalToppingsPrice = this.additionalToppings ? this.calculateToppingsPrice(this.additionalToppings) : 0;

    this.totalPrice = this.calculatePrice();
  }

  getPrice(): number {
    return this.totalPrice;
  }

  protected calculatePrice(): number {
    return this.basePrice * this.doughType * this.size + this.baseToppingsPrice + this.additionalToppingsPrice;
  }

  private calculateToppingsPrice(toppings: (keyof typeof TOPPINGS)[]): number {
    return toppings.reduce((total, topping) => {
      if (!(topping in TOPPINGS)) {
        throw new Error(`${topping} ${ERROR_MESSAGES.TOPPING_NOT_FOUND}`);
      }
      return total + TOPPINGS[topping];
    }, 0);
  }
}
