import PageHeader from "@/shared/components/patterns/PageHeader";

export default function SettingsShippingRatesPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="نرخ ارسال" />

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="form-control w-full">
              <div className="label"><span className="label-text">حداقل سفارش برای ارسال رایگان (تومان)</span></div>
              <input type="number" className="input input-bordered w-full" defaultValue={200000} />
            </label>
            <label className="form-control w-full">
              <div className="label"><span className="label-text">هزینه ارسال ثابت (تومان)</span></div>
              <input type="number" className="input input-bordered w-full" defaultValue={45000} />
            </label>
          </div>
          <div className="mt-4">
            <button className="btn btn-primary">ذخیره</button>
          </div>
        </div>
      </div>
    </div>
  );
}