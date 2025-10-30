import { IPaymentAdapter } from "./interface/payment.interface";
import { StripeAdapter } from "./stripe-adapter.service";
import { StripeService } from "./stripe.service";
import { VnpayAdapter } from "./vnpay-adapter.service";
import { VnpayService } from "./vnpay.service";

export class PaymentFactoryService {

    public createPaymentAdapter(paymentType: string): IPaymentAdapter {
        switch (paymentType) {
            case "stripe":
                return new StripeAdapter(new StripeService());
            case "vnpay":
                return new VnpayAdapter(new VnpayService());
            default: 
                throw new Error(`Payment type ${paymentType} not supported`);
        }
    }

}