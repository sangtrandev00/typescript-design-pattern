import { IPaymentRequest, IPaymentResponse } from "./interface/payment.interface";
import { PaymentFactoryService } from "./payment-factory.service";

export class PaymentService {
    
    constructor(private readonly paymentFactoryService: PaymentFactoryService) {}


    public processPayment(paymentType: string, request: IPaymentRequest): Promise<IPaymentResponse> {
        const paymentAdapter = this.paymentFactoryService.createPaymentAdapter(paymentType);

        console.log("payment adapter", paymentAdapter);

        return paymentAdapter.processPayment(request);
    }
}