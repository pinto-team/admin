import PageHeader from "@/shared/components/patterns/PageHeader";
import { H3, Small } from "@/shared/components/typography";
import { BarChart3, UserPlus, FileText, Settings, TrendingUp, Users2, ShoppingBag, Ticket } from "lucide-react";

function Stat({ label, value, delta, icon }: { label: string; value: string; delta?: string; icon?: React.ReactNode }) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <Small className="text-muted-foreground">{label}</Small>
          {icon}
        </div>
        <div className="text-2xl font-bold">{value}</div>
        {delta ? <div className="text-xs text-muted-foreground mt-1">{delta}</div> : null}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <PageHeader
        title="داشبورد"
        subtitle="مرور سریع وضعیت امروز"
        actions={
          <>
            <button className="btn btn-primary">
              <FileText className="size-4 ms-1" /> ساخت گزارش
            </button>
            <button className="btn">
              <Settings className="size-4 ms-1" /> تنظیمات
            </button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat label="بازدیدها" value="12,450" delta="+12% نسبت به هفته قبل" icon={<TrendingUp className="size-4 opacity-70" />} />
        <Stat label="کاربران جدید" value="1,248" delta="+5% نسبت به هفته قبل" icon={<Users2 className="size-4 opacity-70" />} />
        <Stat label="سفارش‌ها" value="328" delta="-3% نسبت به هفته قبل" icon={<ShoppingBag className="size-4 opacity-70" />} />
        <Stat label="تیکت‌ها" value="57" delta="+2% نسبت به هفته قبل" icon={<Ticket className="size-4 opacity-70" />} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card bg-base-100 shadow lg:col-span-2">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold">
                <BarChart3 className="size-4" /> عملکرد هفتگی
              </div>
              <span className="badge badge-ghost">Real-time</span>
            </div>
            <div className="rounded-box p-10 text-center text-sm text-base-content/60 border">
              (اینجا چارت میاد)
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body space-y-4">
            <div className="card-title">فعالیت اخیر</div>
            <ActivityRow title="ثبت‌نام کاربر جدید" meta="2 دقیقه پیش" />
            <div className="divider my-0"></div>
            <ActivityRow title="سفارش #4392 ثبت شد" meta="10 دقیقه پیش" />
            <div className="divider my-0"></div>
            <ActivityRow title="تیکت #981 پاسخ داده شد" meta="1 ساعت پیش" />
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <div className="card-title">اقدامات سریع</div>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="btn btn-primary">
              <FileText className="size-4 ms-1" /> ایجاد گزارش
            </button>
            <button className="btn btn-outline">
              <UserPlus className="size-4 ms-1" /> افزودن کاربر
            </button>
            <button className="btn">
              <Settings className="size-4 ms-1" /> تنظیمات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityRow({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <H3 className="text-base mb-1">{title}</H3>
        <Small className="text-muted-foreground">{meta}</Small>
      </div>
      <span className="badge">جدید</span>
    </div>
  );
}
