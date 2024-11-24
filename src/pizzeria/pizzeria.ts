import { ERROR_MESSAGES } from '../data/messages';
import { Order } from '../order/order';

export class Pizzeria {
  private orders: Order[] = [];

  constructor(
    private name: string,
    private address: string,
    private workingHours: string,
    public initialOrders?: Order[]
  ) {
    if (initialOrders) {
      if (!Array.isArray(initialOrders)) {
        throw new Error(ERROR_MESSAGES.INVALID_INITIAL_ORDERS);
      }
      this.orders = [...initialOrders];
    }
  }

  createOrder() {
    const order = new Order();
    this.orders.push(order);
    return order;
  }

  getOrder(orderId: string): Order | null {
    return this.orders.find((order) => order.orderId === orderId) ?? null;
  }

  removeOrder(orderId: string): void {
    const index = this.orders.findIndex((order) => order.orderId === orderId);
    if (index === -1) throw new Error(`${orderId} ${ERROR_MESSAGES.ID_NOT_FOUND}`);
    this.orders.splice(index, 1);
  }

  closeOrder(orderId: string): void {
    const order = this.getOrder(orderId);
    if (!order) {
      throw new Error(`${orderId} ${ERROR_MESSAGES.ID_NOT_FOUND}`);
    }
    if (order.isPaid) {
      throw new Error(`Order with id = ${orderId} ${ERROR_MESSAGES.ALREADY_PAID}`);
    }
    order.isPaid = true;
  }

  getTotalRevenue(): number {
    return this.orders.reduce((total, order) => {
      if (order.isPaid) {
        const orderPrice = order.getMeals().reduce((total, meal) => total + meal.getPrice(), 0);
        total += orderPrice;
      }
      return total;
    }, 0);
  }

  getPizzeriaInfo(): string {
    return `Pizzeria: "${this.name}", located at: "${this.address}", working hours "${this.workingHours}"`
  }
}
