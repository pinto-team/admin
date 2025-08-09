import PageHeader from "@/shared/components/patterns/PageHeader";

export default function CourierMissionsPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="ماموریت‌ها و تحویل‌ها" />

      <div className="card bg-base-100 shadow">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>پیک</th>
                  <th>شماره سفارش</th>
                  <th>ساعت شروع</th>
                  <th>ساعت پایان</th>
                  <th>وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {[{c:"سجاد", order:"#4301", start:"10:30", end:"11:05", status:"تحویل"}].map((m,i)=> (
                  <tr key={i}>
                    <td>{m.c}</td>
                    <td>{m.order}</td>
                    <td>{m.start}</td>
                    <td>{m.end}</td>
                    <td><span className="badge badge-success">{m.status}</span></td>
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