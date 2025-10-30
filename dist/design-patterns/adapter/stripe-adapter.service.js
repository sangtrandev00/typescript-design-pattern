"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeAdapter = void 0;
class StripeAdapter {
    constructor(stripeService) {
        this.stripeService = stripeService;
    }
    async processPayment(request) {
        // process logic payment here with stripe
        this.stripeService.pay();
        return {
            success: true,
            message: "Payment processed successfully",
            data: {
                transactionId: "1234567890"
            }
        };
    }
}
exports.StripeAdapter = StripeAdapter;
//# sourceMappingURL=stripe-adapter.service.js.map