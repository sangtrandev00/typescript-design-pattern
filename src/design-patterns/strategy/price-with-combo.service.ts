export class PriceWithComboService {
    constructor() {}

    calculatePrice(price: number, combo: number) {
        return price * combo;
    }
}