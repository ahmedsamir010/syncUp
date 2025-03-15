export interface Order {
  id: number
  orderNumber: string
  customerId: string
  customerName: string
  orderItems: OrderItem[]
  notes: string
  shippingDetails: ShippingDetails
  paymentDetails: PaymentDetails
  status: number
  statusOrder: string
  paymentStatus: number
  statusPayment: any
  representativeName: any
  representativePhoneNumber: any
  receiptTimeRepresentative: any
  creationDate: string
  orderHistories: any[]
  totalPrice: number
  redirectUrl: any
  transactionReference: any
}

export interface OrderItem {
  productId: number
  productName: string
  cuttingType: string
  encapsulationType: string
  withoutPartsTypes: string[]
  quantity: number
  unitPrice: number
  totalPrice: number
}

export interface ShippingDetails {
  name: string
  phoneNumber: string
  address: string
  city: string
  area: string
  regionId: number
  regionName: string
  shippingCost: number
  latitude: string
  longitude: string
}

export interface PaymentDetails {
  paymentMethod: number
  amountPaid: number
}
