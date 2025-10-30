import { IPaymentAdapter, IPaymentRequest, IPaymentResponse } from "./interface/payment.interface";
import { StripeService } from "./stripe.service";

export class StripeAdapter implements IPaymentAdapter {
    constructor(private readonly stripeService: StripeService) {}

    async processPayment(request: IPaymentRequest): Promise<IPaymentResponse> {
        // process logic payment here with stripe
        this.stripeService.pay()
        return {
            success: true,
            message: "Payment processed successfully",
            data: {
                transactionId: "1234567890"
            }
        }
    }
}