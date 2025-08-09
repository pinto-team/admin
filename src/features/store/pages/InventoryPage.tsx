import PageHeader from "@/shared/components/patterns/PageHeader";

export default function InventoryPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="موجودی و انبارگردانی" />

      <div className="card bg-base-100 shadow">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>کد کالا</th>
                  <th>نام کالا</th>
                  <th>موجودی فعلی</th>
                  <th>حداقل موجودی</th>
                  <th>وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {[{sku:"SKU-1", name:"پنیر", stock:12, min:10},{sku:"SKU-2", name:"خمیر", stock:3, min:8}].map(row => (
                  <tr key={row.sku}>
                    <td>{row.sku}</td>
                    <td>{row.name}</td>
                    <td>{row.stock}</td>
                    <td>{row.min}</td>
                    <td>
                      {row.stock < row.min ? (
                        <span className="badge badge-error">کمبود</span>
                      ) : (
                        <span className="badge badge-success">کافی</span>
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