import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Truck, CheckCircle, XCircle, Filter, Search } from 'lucide-react';
import { Order, OrderStatus, ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '../types/order.types';
import { ordersService } from '../services/orders.service';

const OrdersList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<OrderStatus | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const data = await ordersService.getOrders();
      setOrders(data);
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (orderId: string, newStatus: OrderStatus) => {
    try {
      const updatedOrder = await ordersService.updateOrderStatus(orderId, newStatus);
      if (updatedOrder) {
        setOrders(orders.map(order => 
          order.id === orderId ? updatedOrder : order
        ));
      }
    } catch (error) {
      console.error('Error updating order status:', error);
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

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    const matchesSearch = searchTerm === '' || 
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.includes(searchTerm) ||
      order.customer.phone.includes(searchTerm);
    
    return matchesStatus && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="form-control flex-1">
          <div className="input-group">
            <span className="btn btn-square">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="جستجو بر اساس شماره سفارش، نام یا شماره تلفن..."
              className="input input-bordered w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Status Filter */}
        <div className="form-control">
          <select 
            className="select select-bordered"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as OrderStatus | 'all')}
          >
            <option value="all">همه وضعیت‌ها</option>
            {Object.entries(ORDER_STATUS_LABELS).map(([status, label]) => (
              <option key={status} value={status}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>شماره سفارش</th>
              <th>مشتری</th>
              <th>مبلغ کل</th>
              <th>وضعیت</th>
              <th>تاریخ سفارش</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <div className="font-bold">{order.orderNumber}</div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{order.customer.name}</div>
                    <div className="text-sm opacity-50">{order.customer.phone}</div>
                  </div>
                </td>
                <td>{formatPrice(order.finalAmount)}</td>
                <td>
                  <span className={`badge ${ORDER_STATUS_COLORS[order.status]} gap-2`}>
                    {ORDER_STATUS_LABELS[order.status]}
                  </span>
                </td>
                <td>
                  <div className="text-sm">{formatDate(order.orderDate)}</div>
                </td>
                <td>
                  <div className="flex gap-2">
                    <Link 
                      to={`/dashboard/orders/${order.id}`}
                      className="btn btn-ghost btn-sm"
                      title="مشاهده جزئیات"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    
                    {order.status === OrderStatus.PREPARING && (
                      <button
                        className="btn btn-ghost btn-sm text-info"
                        title="ارسال سفارش"
                        onClick={() => handleStatusUpdate(order.id, OrderStatus.SHIPPING)}
                      >
                        <Truck className="w-4 h-4" />
                      </button>
                    )}
                    
                    {order.status === OrderStatus.SHIPPING && (
                      <button
                        className="btn btn-ghost btn-sm text-success"
                        title="تحویل شده"
                        onClick={() => handleStatusUpdate(order.id, OrderStatus.DELIVERED)}
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    
                    {(order.status === OrderStatus.PREPARING || order.status === OrderStatus.SHIPPING) && (
                      <button
                        className="btn btn-ghost btn-sm text-error"
                        title="لغو سفارش"
                        onClick={() => handleStatusUpdate(order.id, OrderStatus.CANCELLED)}
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <div className="text-center py-8 text-base-content/60">
            سفارشی یافت نشد
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-title">کل سفارشات</div>
          <div className="stat-value text-primary">{orders.length}</div>
        </div>
        
        <div className="stat">
          <div className="stat-title">در حال آماده‌سازی</div>
          <div className="stat-value text-warning">
            {orders.filter(o => o.status === OrderStatus.PREPARING).length}
          </div>
        </div>
        
        <div className="stat">
          <div className="stat-title">در حال ارسال</div>
          <div className="stat-value text-info">
            {orders.filter(o => o.status === OrderStatus.SHIPPING).length}
          </div>
        </div>
        
        <div className="stat">
          <div className="stat-title">تحویل شده</div>
          <div className="stat-value text-success">
            {orders.filter(o => o.status === OrderStatus.DELIVERED).length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;