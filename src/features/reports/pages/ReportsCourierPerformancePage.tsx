import PageHeader from "@/shared/components/patterns/PageHeader";

export default function ReportsCourierPerformancePage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="عملکرد پیک‌ها" subtitle="زمان تحویل، تعداد مأموریت" />

      <div className="card bg-base-100 shadow">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>پیک</th>
                  <th>میانگین زمان تحویل</th>
                  <th>تعداد مأموریت</th>
                </tr>
              </thead>
              <tbody>
                {[{c:"سجاد", avg:"22 دقیقه", missions:38},{c:"حمید", avg:"28 دقیقه", missions:29}].map((r,i)=> (
                  <tr key={i}>
                    <td>{r.c}</td>
                    <td>{r.avg}</td>
                    <td>{r.missions}</td>
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