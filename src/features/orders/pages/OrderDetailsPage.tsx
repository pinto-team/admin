import PageHeader from "@/shared/components/patterns/PageHeader";
import { Link, useParams } from "react-router-dom";

export default function OrderDetailsPage() {
  const { id } = useParams();
  return (
    <div className="grid gap-4">
      <PageHeader title={`جزئیات سفارش #${id}`} actions={<Link to="/orders" className="btn btn-outline">بازگشت</Link>} />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card bg-base-100 shadow md:col-span-2">
          <div className="card-body">
            <h2 className="card-title">مشتری</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>نام: علی رضایی</div>
              <div>تلفن: 0912xxxxxxx</div>
              <div>آدرس: تهران، میدان آزادی...</div>
              <div>ایمیل: ali@example.com</div>
            </div>
            <div className="divider">محصولات</div>
            <ul className="menu bg-base-100 rounded-box">
              <li><span>پیتزا مخصوص × 1</span></li>
              <li><span>نوشابه × 2</span></li>
            </ul>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              <span>مبلغ کل</span>
              <span className="font-bold">420,000 تومان</span>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">پیک مسئول</h2>
            <div className="text-sm">نام: سجاد محمدی</div>
            <div className="text-sm">وسیله: موتور</div>
            <div className="text-sm">وضعیت: <span className="badge badge-success">تحویل شده</span></div>
            <div className="divider">وضعیت سفارش</div>
            <ul className="timeline timeline-vertical timeline-compact">
              <li>
                <div className="timeline-start">ثبت سفارش</div>
                <div className="timeline-middle"><span className="badge badge-neutral"></span></div>
                <div className="timeline-end timeline-box">10:12</div>
              </li>
              <li>
                <div className="timeline-start">آماده‌سازی</div>
                <div className="timeline-middle"><span className="badge badge-info"></span></div>
                <div className="timeline-end timeline-box">10:25</div>
              </li>
              <li>
                <div className="timeline-start">ارسال</div>
                <div className="timeline-middle"><span className="badge badge-warning"></span></div>
                <div className="timeline-end timeline-box">10:40</div>
              </li>
              <li>
                <div className="timeline-start">تحویل</div>
                <div className="timeline-middle"><span className="badge badge-success"></span></div>
                <div className="timeline-end timeline-box">11:05</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}