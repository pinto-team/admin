import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Printer, User, MapPin, Phone, Package, Truck } from 'lucide-react';
import { Order, OrderStatus, ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '../types/order.types';
import { ordersService } from '../services/orders.service';

const OrderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadOrder(id);
    }
  }, [id]);

  const loadOrder = async (orderId: string) => {
    try {
      setLoading(true);
      const data = await ordersService.getOrderById(orderId);
      setOrder(data);
    } catch (error) {
      console.error('Error loading order:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="alert alert-error">
        <span>سفارش مورد نظر یافت نشد</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard/orders')}
            className="btn btn-ghost btn-sm"
          >
            <ArrowRight className="w-4 h-4" />
            بازگشت
          </button>
          <h1 className="text-2xl font-bold">جزئیات سفارش</h1>
        </div>
        <button onClick={handlePrint} className="btn btn-primary btn-sm">
          <Printer className="w-4 h-4" />
          چاپ
        </button>
      </div>

      {/* Order Info Card */}
      <div className="card bg-base-200">
        <div className="card-body">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="card-title">{order.orderNumber}</h2>
              <p className="text-sm opacity-70">{formatDate(order.orderDate)}</p>
            </div>
            <span className={`badge ${ORDER_STATUS_COLORS[order.status]} badge-lg`}>
              {ORDER_STATUS_LABELS[order.status]}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Info */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">
              <User className="w-5 h-5" />
              اطلاعات مشتری
            </h3>
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 opacity-50" />
                <span>{order.customer.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 opacity-50" />
                <span>{order.customer.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 opacity-50 mt-1" />
                <span>{order.customer.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Courier Info */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">
              <Truck className="w-5 h-5" />
              اطلاعات پیک
            </h3>
            {order.courier ? (
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 opacity-50" />
                  <span>{order.courier.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 opacity-50" />
                  <span>{order.courier.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 opacity-50" />
                  <span>{order.courier.vehicle}</span>
                </div>
              </div>
            ) : (
              <p className="text-sm opacity-50 mt-4">پیکی برای این سفارش انتخاب نشده است</p>
            )}
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title">
            <Package className="w-5 h-5" />
            اقلام سفارش
          </h3>
          
          <div className="overflow-x-auto mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>محصول</th>
                  <th>تعداد</th>
                  <th>قیمت واحد</th>
                  <th>قیمت کل</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.productName}</td>
                    <td>{item.quantity}</td>
                    <td>{formatPrice(item.unitPrice)}</td>
                    <td>{formatPrice(item.totalPrice)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Price Summary */}
          <div className="divider"></div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>جمع کل:</span>
              <span>{formatPrice(order.totalAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>هزینه ارسال:</span>
              <span>{formatPrice(order.shippingCost)}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-success">
                <span>تخفیف:</span>
                <span>- {formatPrice(order.discount)}</span>
              </div>
            )}
            <div className="divider my-2"></div>
            <div className="flex justify-between text-lg font-bold">
              <span>مبلغ نهایی:</span>
              <span className="text-primary">{formatPrice(order.finalAmount)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      {order.notes && (
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">یادداشت‌ها</h3>
            <p className="mt-2">{order.notes}</p>
          </div>
        </div>
      )}

      {/* Timeline */}
      <div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title">تاریخچه سفارش</h3>
          <ul className="timeline timeline-vertical mt-4">
            <li>
              <div className="timeline-start">{formatDate(order.orderDate)}</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="timeline-end timeline-box">ثبت سفارش</div>
              <hr />
            </li>
            
            {order.status !== OrderStatus.CANCELLED && order.status !== OrderStatus.PREPARING && (
              <li>
                <hr />
                <div className="timeline-start">-</div>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">ارسال شده</div>
                <hr />
              </li>
            )}
            
            {order.status === OrderStatus.DELIVERED && order.deliveryDate && (
              <li>
                <hr />
                <div className="timeline-start">{formatDate(order.deliveryDate)}</div>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">تحویل شده</div>
              </li>
            )}
            
            {order.status === OrderStatus.CANCELLED && (
              <li>
                <hr />
                <div className="timeline-start">-</div>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-error">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">لغو شده</div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;