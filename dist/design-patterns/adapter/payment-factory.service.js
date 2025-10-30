"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentFactoryService = void 0;
const stripe_adapter_service_1 = require("./stripe-adapter.service");
const stripe_service_1 = require("./stripe.service");
const vnpay_adapter_service_1 = require("./vnpay-adapter.service");
const vnpay_service_1 = require("./vnpay.service");
class PaymentFactoryService {
    createPaymentAdapter(paymentType) {
        switch (paymentType) {
            case "stripe":
                return new stripe_adapter_service_1.StripeAdapter(new stripe_service_1.StripeService());
            case "vnpay":
                return new vnpay_adapter_service_1.VnpayAdapter(new vnpay_service_1.VnpayService());
            default:
                throw new Error(`Payment type ${paymentType} not supported`);
        }
    }
}
exports.PaymentFactoryService = PaymentFactoryService;
//# sourceMappingURL=payment-factory.service.js.map