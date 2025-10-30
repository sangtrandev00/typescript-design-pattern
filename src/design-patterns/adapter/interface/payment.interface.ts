export interface IPaymentRequest {

}

export interface IPaymentResponse {
    success: boolean;
    message: string;
    data?: any;
}

export interface IPaymentAdapter {
    processPayment(request: IPaymentRequest): Promise<IPaymentResponse>;
}