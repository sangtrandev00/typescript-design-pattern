export interface IPriceStrategy {
    calculatePrice(price: number, combo: number, discount: number): number;
}