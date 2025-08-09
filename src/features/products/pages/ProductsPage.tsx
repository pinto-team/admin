import { useState } from "react";
import { 
    Search, 
    Plus, 
    Edit, 
    Trash2,
    Package,
    Eye,
    ShoppingCart
} from "lucide-react";

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");

    const products = [
        {
            id: 1,
            name: "لپ‌تاپ اپل مک‌بوک پرو",
            category: "الکترونیک",
            price: "85,000,000 تومان",
            stock: 15,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop",
            status: "active"
        },
        {
            id: 2,
            name: "کتاب برنامه‌نویسی React",
            category: "کتاب",
            price: "450,000 تومان",
            stock: 50,
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop",
            status: "active"
        },
        {
            id: 3,
            name: "کفش ورزشی نایک",
            category: "پوشاک",
            price: "2,500,000 تومان",
            stock: 8,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
            status: "active"
        },
        {
            id: 4,
            name: "موبایل سامسونگ گلکسی",
            category: "الکترونیک",
            price: "12,000,000 تومان",
            stock: 0,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
            status: "inactive"
        }
    ];

    const categories = ["all", "الکترونیک", "کتاب", "پوشاک", "خانه و آشپزخانه"];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    const getStockStatus = (stock: number) => {
        if (stock === 0) return <span className="badge badge-error">ناموجود</span>;
        if (stock < 10) return <span className="badge badge-warning">کم موجود</span>;
        return <span className="badge badge-success">موجود</span>;
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">محصولات</h1>
                    <p className="text-base-content/70">مدیریت محصولات و موجودی</p>
                </div>
                <button className="btn btn-primary">
                    <Plus className="h-4 w-4" />
                    افزودن محصول
                </button>
            </div>

            {/* Filters */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="form-control flex-1">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="جستجو در محصولات..."
                                    className="input input-bordered w-full"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="btn btn-square">
                                    <Search className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        <div className="form-control">
                            <select
                                className="select select-bordered"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === "all" ? "همه دسته‌ها" : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="card bg-base-100 shadow-xl">
                        <figure className="px-6 pt-6">
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="rounded-xl h-48 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg">{product.name}</h2>
                            <p className="text-base-content/70">{product.category}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">{product.price}</span>
                                {getStockStatus(product.stock)}
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-ghost btn-sm">
                                    <Eye className="h-4 w-4" />
                                </button>
                                <button className="btn btn-ghost btn-sm">
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button className="btn btn-ghost btn-sm text-error">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <h3 className="text-lg font-semibold">محصولی یافت نشد</h3>
                        <p className="text-base-content/70">محصولی با فیلترهای انتخابی شما وجود ندارد.</p>
                    </div>
                </div>
            )}
        </div>
    );
}