import { ERROR_MESSAGES } from '../data/messages';
import { TOPPINGS } from '../data/prices';
import { DOUGH_TYPE, IMeal, PIZZA_NAMES, PIZZA_SIZE } from '../data/types';
import { Pizza } from '../meal/pizza';
import { v4 as uuidv4 } from 'uuid';

export class Order {
  public orderId: string;
  public isPaid: boolean = false;
  constructor(private meals: IMeal[] = []) {
    this.orderId = uuidv4();
  }

  public addPizza(
    name: PIZZA_NAMES,
    doughType: DOUGH_TYPE,
    size: PIZZA_SIZE,
    additionalToppings?: (keyof typeof TOPPINGS)[]
  ): Pizza {
    const pizza = new Pizza(name, doughType, size, additionalToppings);
    this.meals.push(pizza);
    return pizza;
  }

  public getMeals(): IMeal[] {
    return [...this.meals];
  }

  public getFullPrice(): number {
    return this.meals.reduce((total, meal) => total + meal.getPrice(), 0);
  }

  public removeFromOrder(name: PIZZA_NAMES): void {
    const index = this.meals.findIndex((meal) => meal.name === name);
    if (index === -1) throw new Error(`${name} ${ERROR_MESSAGES.MEAL_NOT_FOUND}`);
    this.meals.splice(index, 1);
  }
}
