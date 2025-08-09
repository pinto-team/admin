import PageHeader from "@/shared/components/patterns/PageHeader";

export default function CouriersPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="پیک‌ها" subtitle="اطلاعات فردی، وسیله، وضعیت آنلاین/آفلاین" />
      <div className="card bg-base-100 shadow">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>نام</th>
                  <th>وسیله</th>
                  <th>وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {[{name:"سجاد محمدی", vehicle:"موتور", online:true},{name:"حمید احمدی", vehicle:"دوچرخه", online:false}].map((c,i) => (
                  <tr key={i}>
                    <td>{c.name}</td>
                    <td>{c.vehicle}</td>
                    <td>
                      {c.online ? (
                        <span className="badge badge-success">آنلاین</span>
                      ) : (
                        <span className="badge">آفلاین</span>
                      )}
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