import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  ShoppingCart,
  Store,
  Users,
  Truck,
  DollarSign,
  FileText,
  Settings,
  LogOut,
  Menu,
  Moon,
  Sun,
  Globe,
  Home
} from 'lucide-react';

interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  path: string;
  children?: MenuItem[];
}

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'fa' | 'en'>('fa');
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      title: 'داشبورد',
      icon: <Home className="w-5 h-5" />,
      path: '/dashboard'
    },
    {
      id: 'orders',
      title: 'سفارشات',
      icon: <ShoppingCart className="w-5 h-5" />,
      path: '/dashboard/orders'
    },
    {
      id: 'shop',
      title: 'فروشگاه',
      icon: <Store className="w-5 h-5" />,
      path: '/dashboard/shop',
      children: [
        { id: 'products', title: 'محصولات', path: '/dashboard/shop/products', icon: null },
        { id: 'inventory', title: 'موجودی انبار', path: '/dashboard/shop/inventory', icon: null }
      ]
    },
    {
      id: 'users',
      title: 'کاربران',
      icon: <Users className="w-5 h-5" />,
      path: '/dashboard/users',
      children: [
        { id: 'customers', title: 'مشتریان', path: '/dashboard/users/customers', icon: null },
        { id: 'admins', title: 'ادمین‌ها', path: '/dashboard/users/admins', icon: null }
      ]
    },
    {
      id: 'delivery',
      title: 'پیک‌ها',
      icon: <Truck className="w-5 h-5" />,
      path: '/dashboard/delivery',
      children: [
        { id: 'couriers', title: 'لیست پیک‌ها', path: '/dashboard/delivery/couriers', icon: null },
        { id: 'missions', title: 'ماموریت‌ها', path: '/dashboard/delivery/missions', icon: null }
      ]
    },
    {
      id: 'financial',
      title: 'مالی',
      icon: <DollarSign className="w-5 h-5" />,
      path: '/dashboard/financial',
      children: [
        { id: 'daily-report', title: 'گزارش روزانه', path: '/dashboard/financial/daily-report', icon: null },
        { id: 'logistics-costs', title: 'هزینه‌های لجستیک', path: '/dashboard/financial/logistics-costs', icon: null }
      ]
    },
    {
      id: 'reports',
      title: 'گزارش‌ها',
      icon: <FileText className="w-5 h-5" />,
      path: '/dashboard/reports',
      children: [
        { id: 'orders-report', title: 'گزارش سفارشات', path: '/dashboard/reports/orders', icon: null },
        { id: 'top-products', title: 'محصولات پرفروش', path: '/dashboard/reports/top-products', icon: null },
        { id: 'courier-performance', title: 'عملکرد پیک‌ها', path: '/dashboard/reports/courier-performance', icon: null }
      ]
    },
    {
      id: 'settings',
      title: 'تنظیمات',
      icon: <Settings className="w-5 h-5" />,
      path: '/dashboard/settings'
    }
  ];

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fa' ? 'en' : 'fa');
    // در اینجا می‌توانید منطق تغییر زبان را اضافه کنید
  };

  const handleLogout = () => {
    // منطق خروج از سیستم
    navigate('/login');
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="drawer lg:drawer-open" dir="rtl">
      <input
        id="drawer-toggle"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={(e) => setSidebarOpen(e.target.checked)}
      />
      
      <div className="drawer-content flex flex-col">
        {/* Header */}
        <div className="navbar bg-base-200 shadow-lg">
          <div className="flex-none lg:hidden">
            <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
              <Menu className="w-6 h-6" />
            </label>
          </div>
          
          <div className="flex-1">
            <h1 className="text-xl font-bold px-4">سیستم مدیریت</h1>
          </div>
          
          <div className="flex-none gap-2">
            {/* Language Toggle */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <Globe className="w-5 h-5" />
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a
                    className={language === 'fa' ? 'active' : ''}
                    onClick={() => setLanguage('fa')}
                  >
                    فارسی
                  </a>
                </li>
                <li>
                  <a
                    className={language === 'en' ? 'active' : ''}
                    onClick={() => setLanguage('en')}
                  >
                    English
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Theme Toggle */}
            <label className="swap swap-rotate btn btn-ghost btn-circle">
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <Sun className="swap-off w-5 h-5" />
              <Moon className="swap-on w-5 h-5" />
            </label>
            
            {/* User Menu */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-primary text-primary-content">
                  <span className="text-xl">A</span>
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a onClick={handleLogout} className="text-error">
                    <LogOut className="w-4 h-4" />
                    خروج
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 bg-base-100">
          <Outlet />
        </main>
      </div>
      
      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        <aside className="w-64 min-h-full bg-base-200">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-primary">پنل مدیریت</h2>
          </div>
          
          <ul className="menu p-4 w-full">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.children ? (
                  <details open={location.pathname.startsWith(item.path)}>
                    <summary className={isActiveRoute(item.path) ? 'active' : ''}>
                      {item.icon}
                      {item.title}
                    </summary>
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            to={child.path}
                            className={isActiveRoute(child.path) ? 'active' : ''}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    to={item.path}
                    className={isActiveRoute(item.path) ? 'active' : ''}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;