import { Order, OrderStatus } from '../types/order.types';

// Mock data - در محیط واقعی این داده‌ها از API می‌آیند
const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2024-001',
    customer: {
      id: '1',
      name: 'علی رضایی',
      phone: '09121234567',
      address: 'تهران، خیابان ولیعصر، پلاک ۱۲۳'
    },
    items: [
      {
        id: '1',
        productId: '1',
        productName: 'پیتزا مارگاریتا',
        quantity: 2,
        unitPrice: 150000,
        totalPrice: 300000
      },
      {
        id: '2',
        productId: '2',
        productName: 'نوشابه',
        quantity: 3,
        unitPrice: 25000,
        totalPrice: 75000
      }
    ],
    status: OrderStatus.PREPARING,
    totalAmount: 375000,
    shippingCost: 25000,
    discount: 0,
    finalAmount: 400000,
    orderDate: '2024-01-15T10:30:00',
    notes: 'بدون پیاز'
  },
  {
    id: '2',
    orderNumber: 'ORD-2024-002',
    customer: {
      id: '2',
      name: 'زهرا محمدی',
      phone: '09359876543',
      address: 'تهران، سعادت آباد، خیابان سرو، پلاک ۴۵'
    },
    items: [
      {
        id: '3',
        productId: '3',
        productName: 'برگر مخصوص',
        quantity: 1,
        unitPrice: 185000,
        totalPrice: 185000
      }
    ],
    status: OrderStatus.SHIPPING,
    totalAmount: 185000,
    shippingCost: 30000,
    discount: 15000,
    finalAmount: 200000,
    courier: {
      id: '1',
      name: 'محمد حسینی',
      phone: '09361234567',
      vehicle: 'موتورسیکلت'
    },
    orderDate: '2024-01-15T11:00:00'
  },
  {
    id: '3',
    orderNumber: 'ORD-2024-003',
    customer: {
      id: '3',
      name: 'سارا احمدی',
      phone: '09121112233',
      address: 'تهران، ونک، خیابان ملاصدرا'
    },
    items: [
      {
        id: '4',
        productId: '4',
        productName: 'سالاد سزار',
        quantity: 2,
        unitPrice: 95000,
        totalPrice: 190000
      }
    ],
    status: OrderStatus.DELIVERED,
    totalAmount: 190000,
    shippingCost: 20000,
    discount: 0,
    finalAmount: 210000,
    courier: {
      id: '2',
      name: 'رضا کریمی',
      phone: '09362223344',
      vehicle: 'دوچرخه'
    },
    orderDate: '2024-01-15T09:15:00',
    deliveryDate: '2024-01-15T10:00:00'
  }
];

export const ordersService = {
  // دریافت همه سفارشات
  async getOrders(): Promise<Order[]> {
    // شبیه‌سازی تاخیر API
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...mockOrders];
  },

  // دریافت یک سفارش با ID
  async getOrderById(id: string): Promise<Order | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const order = mockOrders.find(o => o.id === id);
    return order || null;
  },

  // فیلتر سفارشات بر اساس وضعیت
  async getOrdersByStatus(status: OrderStatus): Promise<Order[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockOrders.filter(o => o.status === status);
  },

  // به‌روزرسانی وضعیت سفارش
  async updateOrderStatus(id: string, status: OrderStatus): Promise<Order | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const orderIndex = mockOrders.findIndex(o => o.id === id);
    if (orderIndex !== -1) {
      mockOrders[orderIndex] = {
        ...mockOrders[orderIndex],
        status,
        ...(status === OrderStatus.DELIVERED ? { deliveryDate: new Date().toISOString() } : {})
      };
      return mockOrders[orderIndex];
    }
    return null;
  },

  // اختصاص پیک به سفارش
  async assignCourier(orderId: string, courier: Order['courier']): Promise<Order | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const orderIndex = mockOrders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
      mockOrders[orderIndex] = {
        ...mockOrders[orderIndex],
        courier,
        status: OrderStatus.SHIPPING
      };
      return mockOrders[orderIndex];
    }
    return null;
  }
};