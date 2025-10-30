"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
class PaymentService {
    constructor(paymentFactoryService) {
        this.paymentFactoryService = paymentFactoryService;
    }
    processPayment(paymentType, request) {
        const paymentAdapter = this.paymentFactoryService.createPaymentAdapter(paymentType);
        console.log("payment adapter", paymentAdapter);
        return paymentAdapter.processPayment(request);
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map