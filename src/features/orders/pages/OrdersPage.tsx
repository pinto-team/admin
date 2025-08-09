import PageHeader from "@/shared/components/patterns/PageHeader";
import { Link } from "react-router-dom";

export default function OrdersPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="سفارشات" subtitle="لیست سفارشات و وضعیت‌ها" />

      <div className="card bg-base-100 shadow">
        <div className="card-body p-0">
          <div role="tablist" className="tabs tabs-boxed rounded-none">
            <a role="tab" className="tab tab-active">در حال آماده‌سازی</a>
            <a role="tab" className="tab">ارسال</a>
            <a role="tab" className="tab">تحویل شده</a>
            <a role="tab" className="tab">لغو شده</a>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>مشتری</th>
                  <th>مبلغ</th>
                  <th>وضعیت</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4,5].map(id => (
                  <tr key={id}>
                    <td>#{4300 + id}</td>
                    <td>کاربر {id}</td>
                    <td>{(id * 120000).toLocaleString()} تومان</td>
                    <td>
                      <span className="badge badge-info badge-outline">در حال آماده‌سازی</span>
                    </td>
                    <td>
                      <Link to={`/orders/${4300 + id}`} className="btn btn-sm btn-ghost">جزئیات</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}