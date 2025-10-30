"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceStrategyService = void 0;
class PriceStrategyService {
    constructor(priceNormalService, priceWithComboService, priceWithDiscountService) {
        this.priceNormalService = priceNormalService;
        this.priceWithComboService = priceWithComboService;
        this.priceWithDiscountService = priceWithDiscountService;
        this.priceStrategy = this.priceNormalService; // Default
    }
    setPriceStrategy(priceStrategy) {
        switch (priceStrategy) {
            case "normal":
                return this.priceNormalService;
            case "combo":
                return this.priceWithComboService;
            case "discount":
                return this.priceWithDiscountService;
        }
    }
    getStrategy() {
        return this.priceStrategy;
    }
    calculatePrice(price, combo, discount) {
        return this.priceStrategy.calculatePrice(price, combo, discount);
    }
}
exports.PriceStrategyService = PriceStrategyService;
//# sourceMappingURL=price-strategy.service.js.map