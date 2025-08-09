import PageHeader from "@/shared/components/patterns/PageHeader";

export default function ReportsBestSellersPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="محصولات پرفروش" />

      <div className="card bg-base-100 shadow">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>رتبه</th>
                  <th>محصول</th>
                  <th>تعداد فروش</th>
                </tr>
              </thead>
              <tbody>
                {[{name:"پیتزا مخصوص", n:342},{name:"برگر دوبل", n:291}].map((p,i)=> (
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{p.name}</td>
                    <td>{p.n}</td>
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