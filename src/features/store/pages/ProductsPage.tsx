import PageHeader from "@/shared/components/patterns/PageHeader";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="محصولات" actions={<Link to="/store/products/new" className="btn btn-primary">افزودن محصول</Link>} />

      <div className="card bg-base-100 shadow">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>تصویر</th>
                  <th>نام</th>
                  <th>قیمت</th>
                  <th>موجودی</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3].map(id => (
                  <tr key={id}>
                    <td><div className="avatar"><div className="w-10 rounded"><img src="/vite.svg" /></div></div></td>
                    <td>محصول {id}</td>
                    <td>{(id * 150000).toLocaleString()} تومان</td>
                    <td>{20 + id}</td>
                    <td>
                      <Link to={`/store/products/${id}`} className="btn btn-sm">ویرایش</Link>
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