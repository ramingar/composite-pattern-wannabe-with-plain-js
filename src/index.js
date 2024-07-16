import {bundle} from "./utils/bundle.js"
import {product} from "./utils/product.js"

// products
const shirt  = product(10);
const skirt  = product(20);
const candy1 = product(1);
const candy2 = product(0.5);
const candy3 = product(0.1);

// bundles
const miniCandies = bundle();
miniCandies.add(candy3);
miniCandies.add(candy3);
miniCandies.add(candy3);
miniCandies.add(candy3);

const candies = bundle();
candies.add(candy1);
candies.add(candy2);
candies.add(miniCandies);

// cart
const cart = bundle();
cart.add(candies);
cart.add(shirt);
cart.add(skirt);


console.log(cart.cost());