import PageHeader from "@/shared/components/patterns/PageHeader";

export default function CustomersPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="مشتریان" subtitle="اطلاعات تماس و تاریخچه خرید" />
      <div className="card bg-base-100 shadow">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>نام</th>
                  <th>تلفن</th>
                  <th>ایمیل</th>
                  <th>تعداد خرید</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {name:"علی رضایی", phone:"0912...", email:"ali@example.com", count:12},
                  {name:"مریم موسوی", phone:"0935...", email:"maryam@example.com", count:7},
                ].map((c, i) => (
                  <tr key={i}>
                    <td>{c.name}</td>
                    <td>{c.phone}</td>
                    <td>{c.email}</td>
                    <td>{c.count}</td>
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