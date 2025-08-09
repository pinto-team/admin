export enum OrderStatus {
  PREPARING = 'preparing',
  SHIPPING = 'shipping',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  address: string;
}

export interface Courier {
  id: string;
  name: string;
  phone: string;
  vehicle: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: Customer;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  shippingCost: number;
  discount: number;
  finalAmount: number;
  courier?: Courier;
  orderDate: string;
  deliveryDate?: string;
  notes?: string;
}

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  [OrderStatus.PREPARING]: 'در حال آماده‌سازی',
  [OrderStatus.SHIPPING]: 'در حال ارسال',
  [OrderStatus.DELIVERED]: 'تحویل شده',
  [OrderStatus.CANCELLED]: 'لغو شده'
};

export const ORDER_STATUS_COLORS: Record<OrderStatus, string> = {
  [OrderStatus.PREPARING]: 'badge-warning',
  [OrderStatus.SHIPPING]: 'badge-info',
  [OrderStatus.DELIVERED]: 'badge-success',
  [OrderStatus.CANCELLED]: 'badge-error'
};