"use strict";
// console.log("Hello World");
Object.defineProperty(exports, "__esModule", { value: true });
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
const price_strategy_service_1 = require("./design-patterns/strategy/price-strategy.service");
const price_normal_service_1 = require("./design-patterns/strategy/price-normal.service");
const price_with_combo_service_1 = require("./design-patterns/strategy/price-with-combo.service");
const price_with_discount_service_1 = require("./design-patterns/strategy/price-with-discount.service");
// init
const priceStrategyService = new price_strategy_service_1.PriceStrategyService(new price_normal_service_1.PriceNormalService(), new price_with_combo_service_1.PriceWithComboService(), new price_with_discount_service_1.PriceWithDiscountService());
console.log("price strategy service", priceStrategyService);
// Registy
priceStrategyService.setPriceStrategy("combo");
console.log("price strategy get instance", priceStrategyService.getStrategy());
// Action
console.log("price strategy after calculate price", priceStrategyService.calculatePrice(100, 1, 0.1));
//# sourceMappingURL=index.js.map