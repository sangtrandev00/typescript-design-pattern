import { IPriceStrategy } from "./interface/price-strategy.interface";
import { PriceNormalService } from "./price-normal.service";
import { PriceWithComboService } from "./price-with-combo.service";
import { PriceWithDiscountService } from "./price-with-discount.service";


export class PriceStrategyService {

    private priceStrategy: IPriceStrategy;
    constructor(private readonly priceNormalService: PriceNormalService, 
        private readonly priceWithComboService: PriceWithComboService, 
        private readonly priceWithDiscountService: PriceWithDiscountService) {
            this.priceStrategy = this.priceNormalService; // Default
    }


    public setPriceStrategy(priceStrategy: string) {
        switch (priceStrategy) {
            case "normal":
                return this.priceNormalService;
            case "combo":
                return this.priceWithComboService;
            case "discount":
                return this.priceWithDiscountService;
        }
    }

    public getStrategy() {
        return this.priceStrategy;
    }
        
    calculatePrice(price: number, combo: number, discount: number) {
        return this.priceStrategy.calculatePrice(price, combo, discount);
    }
}