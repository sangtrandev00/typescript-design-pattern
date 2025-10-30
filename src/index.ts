// console.log("Hello World");

// import { PaymentService } from "./design-patterns/adapter/payment.service";
// import { PaymentFactoryService } from "./design-patterns/adapter/payment-factory.service";
// init and return instance
// const paymentService = new PaymentService(new PaymentFactoryService());
// console.log("payment service", paymentService);
// Action
// paymentService.processPayment("vnpay", {
//     amount: 100,
//     currency: "USD"
// });

import { PriceStrategyService } from "./design-patterns/strategy/price-strategy.service";
import { PriceNormalService } from "./design-patterns/strategy/price-normal.service";
import { PriceWithComboService } from "./design-patterns/strategy/price-with-combo.service";
import { PriceWithDiscountService } from "./design-patterns/strategy/price-with-discount.service";

// init
const priceStrategyService = new PriceStrategyService(new PriceNormalService(), new PriceWithComboService(), new PriceWithDiscountService());
console.log("price strategy service", priceStrategyService);
// Registy
priceStrategyService.setPriceStrategy("combo");
console.log("price strategy get instance", priceStrategyService.getStrategy());
// Action
console.log("price strategy after calculate price", priceStrategyService.calculatePrice(100, 2, 0.1));