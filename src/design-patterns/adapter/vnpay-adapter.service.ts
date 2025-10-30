import { IPaymentAdapter, IPaymentRequest, IPaymentResponse } from "./interface/payment.interface";
import { VnpayService } from "./vnpay.service";

export class VnpayAdapter implements IPaymentAdapter {
    constructor(private readonly vnpayService: VnpayService) {}

    async processPayment(request: IPaymentRequest): Promise<IPaymentResponse> {
         this.vnpayService.process();

         return {
            success: true,
            message: "Payment processed successfully",
            data: {
                transactionId: "1234567890"
            }
         }
    }
}