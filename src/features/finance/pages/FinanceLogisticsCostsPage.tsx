import PageHeader from "@/shared/components/patterns/PageHeader";

export default function FinanceLogisticsCostsPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="هزینه‌های لجستیک (پرداخت به پیک‌ها)" />
      <div className="card bg-base-100 shadow">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>پیک</th>
                  <th>تعداد مأموریت</th>
                  <th>مبلغ پرداختی</th>
                  <th>وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {[{c:"سجاد", missions:12, amount:720000, paid:true},{c:"حمید", missions:9, amount:540000, paid:false}].map((r,i)=> (
                  <tr key={i}>
                    <td>{r.c}</td>
                    <td>{r.missions}</td>
                    <td>{r.amount.toLocaleString()} تومان</td>
                    <td>
                      {r.paid ? <span className="badge badge-success">پرداخت شد</span> : <span className="badge badge-warning">در انتظار</span>}
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