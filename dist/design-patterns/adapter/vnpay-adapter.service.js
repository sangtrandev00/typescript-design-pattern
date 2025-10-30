"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VnpayAdapter = void 0;
class VnpayAdapter {
    constructor(vnpayService) {
        this.vnpayService = vnpayService;
    }
    async processPayment(request) {
        this.vnpayService.process();
        return {
            success: true,
            message: "Payment processed successfully",
            data: {
                transactionId: "1234567890"
            }
        };
    }
}
exports.VnpayAdapter = VnpayAdapter;
//# sourceMappingURL=vnpay-adapter.service.js.map