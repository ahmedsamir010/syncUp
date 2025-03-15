export interface Payment {
  orderId: number;
  orderNumber: string;
  customerId: string;
  customerName: string;
  transactionReference: string;
  paymentMethod: number;
  paymentStatus: number;
  amountPaid: number;
  transactionDate: string;
  responseMessage: string;
}
