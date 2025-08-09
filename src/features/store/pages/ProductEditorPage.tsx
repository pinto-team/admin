import PageHeader from "@/shared/components/patterns/PageHeader";
import { useParams } from "react-router-dom";

export default function ProductEditorPage() {
  const { id } = useParams();
  const isNew = !id;
  return (
    <div className="grid gap-4">
      <PageHeader title={isNew ? "افزودن محصول" : `ویرایش محصول #${id}`} />

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="form-control w-full">
              <div className="label"><span className="label-text">نام محصول</span></div>
              <input type="text" className="input input-bordered w-full" placeholder="مثلاً پیتزا" />
            </label>
            <label className="form-control w-full">
              <div className="label"><span className="label-text">قیمت (تومان)</span></div>
              <input type="number" className="input input-bordered w-full" />
            </label>
            <label className="form-control w-full">
              <div className="label"><span className="label-text">موجودی</span></div>
              <input type="number" className="input input-bordered w-full" />
            </label>
            <label className="form-control w-full md:col-span-2">
              <div className="label"><span className="label-text">توضیحات</span></div>
              <textarea className="textarea textarea-bordered" rows={4}></textarea>
            </label>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="btn btn-primary">ذخیره</button>
            <button className="btn btn-outline">انصراف</button>
          </div>
        </div>
      </div>
    </div>
  );
}