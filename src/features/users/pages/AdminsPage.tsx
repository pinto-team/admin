import PageHeader from "@/shared/components/patterns/PageHeader";

export default function AdminsPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="ادمین‌ها" subtitle="مدیریت دسترسی‌ها" />
      <div className="card bg-base-100 shadow">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>نام</th>
                  <th>ایمیل</th>
                  <th>نقش</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {[{name:"ادمین ۱", email:"admin1@example.com", role:"مدیر"}].map((a,i) => (
                  <tr key={i}>
                    <td>{a.name}</td>
                    <td>{a.email}</td>
                    <td>
                      <select className="select select-bordered select-sm w-full max-w-xs">
                        <option>مدیر</option>
                        <option>ویرایشگر</option>
                        <option>ناظر</option>
                      </select>
                    </td>
                    <td><button className="btn btn-sm">ذخیره</button></td>
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