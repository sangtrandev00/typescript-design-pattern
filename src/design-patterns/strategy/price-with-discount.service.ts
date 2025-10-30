export class PriceWithDiscountService {
    constructor() {}

    calculatePrice(price: number, discount: number) {
        return price * discount;
    }
}