import type { IMeal } from '../data/types.js';

export abstract class Meal implements IMeal {
  totalPrice: number;
  constructor(public name: string) {
    this.totalPrice = this.calculatePrice();
  }

  protected abstract calculatePrice(): number;

  getPrice(): number {
    return this.totalPrice;
  }
}
