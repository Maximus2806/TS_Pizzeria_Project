import { PIZZA_NAMES, DOUGH_TYPE, PIZZA_SIZE } from './data/types';
import { Pizza } from './meal/pizza';
import { Order } from './order/order';
import { Pizzeria } from './pizzeria/pizzeria';
import { TEST_HUSKY } from './data/messages';

//Check Pizza methods
try {
  const margherita = new Pizza(PIZZA_NAMES.MARGHERITA, DOUGH_TYPE.THIN, PIZZA_SIZE.MEDIUM, [
    'olives',
    'mushrooms',
    'bacon'
  ]);

  console.log(`Margherita total price: ${margherita.getPrice()} USD`);

  const pepperoni = new Pizza(PIZZA_NAMES.PEPPERONI, DOUGH_TYPE.THIN, PIZZA_SIZE.LARGE);
  console.log(`Pepperoni total price: ${pepperoni.getPrice()} USD`);

  const unknownPizza = new Pizza('CALZONE' as PIZZA_NAMES, DOUGH_TYPE.THICK, PIZZA_SIZE.SMALL);
  console.log(`Unknown pizza total price: ${unknownPizza.getPrice()} USD`);
} catch (error) {
  console.error((error as Error).message);
}
//Create an order with two pizzas
const hawaiian = new Pizza(PIZZA_NAMES.HAWAIIAN, DOUGH_TYPE.THIN, PIZZA_SIZE.MEDIUM);
const veggie = new Pizza(PIZZA_NAMES.VEGGIE, DOUGH_TYPE.THICK, PIZZA_SIZE.LARGE, ['olives', 'mushrooms']);
const testMealsForOrder = [hawaiian, veggie];
const myOrder = new Order(testMealsForOrder);
// Add pizzas to order
myOrder.addPizza(PIZZA_NAMES.MARGHERITA, DOUGH_TYPE.THIN, PIZZA_SIZE.SMALL);
myOrder.addPizza(PIZZA_NAMES.PEPPERONI, DOUGH_TYPE.THICK, PIZZA_SIZE.LARGE, ['olives']);
// Check meals
console.log(myOrder.getMeals());
// Check full price
console.log(`Full price: ${myOrder.getFullPrice()} USD`);
// Check meal removing
myOrder.removeFromOrder(PIZZA_NAMES.MARGHERITA);
// Check updated order
console.log(myOrder.getMeals());

// Create new Pizzeria
const pizzeria = new Pizzeria('Pizza Paradise', 'Bratyslawska, 2', '10:00-23:00');

// Test data
const order1 = pizzeria.createOrder();
order1.addPizza(PIZZA_NAMES.MARGHERITA, DOUGH_TYPE.THIN, PIZZA_SIZE.MEDIUM, ['cheese', 'tomato']);
order1.addPizza(PIZZA_NAMES.PEPPERONI, DOUGH_TYPE.THICK, PIZZA_SIZE.LARGE, ['cheese', 'tomato', 'pepperoni']);

const order2 = pizzeria.createOrder();
order2.addPizza(PIZZA_NAMES.HAWAIIAN, DOUGH_TYPE.THIN, PIZZA_SIZE.SMALL, ['cheese', 'tomato', 'pineapple', 'ham']);
order2.addPizza(PIZZA_NAMES.VEGGIE, DOUGH_TYPE.THICK, PIZZA_SIZE.MEDIUM, [
  'cheese',
  'tomato',
  'olives',
  'mushrooms',
  'peppers'
]);

const order3 = pizzeria.createOrder();
order3.addPizza(PIZZA_NAMES.CHEEF_PIZZA, DOUGH_TYPE.THIN, PIZZA_SIZE.LARGE, ['cheese', 'tomato', 'chicken', 'bacon']);

// Closed some orders (payments)
pizzeria.closeOrder(order1.orderId);
pizzeria.closeOrder(order2.orderId);

// Output all arders
console.log('Order 1 details:', order1);
console.log('Order 2 details:', order2);
console.log('Order 3 details:', order3);

// Get total organization revenue

console.log('Total Revenue in Pizzeria:', pizzeria.getTotalRevenue());
