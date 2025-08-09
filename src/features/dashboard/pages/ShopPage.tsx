import { useState } from "react";
import { 
    Plus, 
    Search, 
    Edit, 
    Trash2, 
    Package,
    AlertTriangle,
    CheckCircle,
    Upload,
    X
} from "lucide-react";

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    image?: string;
    description: string;
    isActive: boolean;
}

const mockProducts: Product[] = [
    {
        id: '1',
        name: 'پیتزا مارگاریتا',
        category: 'پیتزا',
        price: 450000,
        stock: 25,
        description: 'پیتزا کلاسیک با گوجه فرنگی، موزارلا و ریحان',
        isActive: true
    },
    {
        id: '2',
        name: 'برگر چیکن',
        category: 'برگر',
        price: 320000,
        stock: 8,
        description: 'برگر مرغ با سس مخصوص، سبزیجات تازه',
        isActive: true
    },
    {
        id: '3',
        name: 'نوشابه',
        category: 'نوشیدنی',
        price: 35000,
        stock: 0,
        description: 'نوشابه گازدار در طعم‌های مختلف',
        isActive: false
    },
    {
        id: '4',
        name: 'کباب کوبیده',
        category: 'کباب',
        price: 380000,
        stock: 15,
        description: 'کباب کوبیده با برنج و سبزی خورشتی',
        isActive: true
    }
];

const categories = ['همه', 'پیتزا', 'برگر', 'کباب', 'نوشیدنی', 'پیش غذا'];

export default function ShopPage() {
    const [products, setProducts] = useState<Product[]>(mockProducts);
    const [selectedCategory, setSelectedCategory] = useState('همه');
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState<Partial<Product>>({
        name: '',
        category: '',
        price: 0,
        stock: 0,
        description: '',
        isActive: true
    });

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'همه' || product.category === selectedCategory;
        const matchesSearch = product.name.includes(searchTerm) || 
                            product.category.includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    const getStockStatus = (stock: number) => {
        if (stock === 0) {
            return { status: 'out', badge: 'badge-error', text: 'ناموجود' };
        } else if (stock <= 5) {
            return { status: 'low', badge: 'badge-warning', text: 'کم موجود' };
        } else {
            return { status: 'available', badge: 'badge-success', text: 'موجود' };
        }
    };

    const handleSaveProduct = () => {
        if (editingProduct) {
            // Update existing product
            setProducts(products.map(p => 
                p.id === editingProduct.id ? { ...editingProduct, ...formData } : p
            ));
        } else {
            // Add new product
            const newProduct: Product = {
                id: Date.now().toString(),
                name: formData.name || '',
                category: formData.category || '',
                price: formData.price || 0,
                stock: formData.stock || 0,
                description: formData.description || '',
                isActive: formData.isActive ?? true
            };
            setProducts([...products, newProduct]);
        }
        
        setShowAddModal(false);
        setEditingProduct(null);
        setFormData({
            name: '',
            category: '',
            price: 0,
            stock: 0,
            description: '',
            isActive: true
        });
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setFormData(product);
        setShowAddModal(true);
    };

    const handleDeleteProduct = (productId: string) => {
        setProducts(products.filter(p => p.id !== productId));
    };

    const toggleProductStatus = (productId: string) => {
        setProducts(products.map(p => 
            p.id === productId ? { ...p, isActive: !p.isActive } : p
        ));
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-base-content">فروشگاه</h1>
                    <p className="text-base-content/70 mt-1">مدیریت محصولات و موجودی</p>
                </div>
                <button 
                    className="btn btn-primary"
                    onClick={() => setShowAddModal(true)}
                >
                    <Plus className="w-4 h-4" />
                    افزودن محصول
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">کل محصولات</div>
                        <div className="stat-value text-primary">{products.length}</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">محصولات فعال</div>
                        <div className="stat-value text-success">{products.filter(p => p.isActive).length}</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">کم موجود</div>
                        <div className="stat-value text-warning">{products.filter(p => p.stock <= 5 && p.stock > 0).length}</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">ناموجود</div>
                        <div className="stat-value text-error">{products.filter(p => p.stock === 0).length}</div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="form-control flex-1">
                            <div className="input-group">
                                <span className="bg-base-200">
                                    <Search className="w-4 h-4" />
                                </span>
                                <input 
                                    type="text" 
                                    placeholder="جستجوی محصول..." 
                                    className="input input-bordered flex-1"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Category Tabs */}
                        <div className="tabs tabs-boxed">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`tab ${selectedCategory === category ? 'tab-active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => {
                    const stockInfo = getStockStatus(product.stock);
                    return (
                        <div key={product.id} className="card bg-base-100 shadow-lg">
                            <div className="card-body">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="card-title text-lg">{product.name}</h3>
                                        <p className="text-sm text-base-content/60 mb-2">{product.category}</p>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-sm">⋮</label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                                            <li>
                                                <button onClick={() => handleEditProduct(product)}>
                                                    <Edit className="w-4 h-4" />
                                                    ویرایش
                                                </button>
                                            </li>
                                            <li>
                                                <button 
                                                    onClick={() => toggleProductStatus(product.id)}
                                                    className={product.isActive ? 'text-warning' : 'text-success'}
                                                >
                                                    {product.isActive ? 'غیرفعال' : 'فعال'}
                                                </button>
                                            </li>
                                            <li>
                                                <button 
                                                    onClick={() => handleDeleteProduct(product.id)}
                                                    className="text-error"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                    حذف
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-sm text-base-content/70 mb-4">{product.description}</p>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary">
                                            {product.price.toLocaleString()} تومان
                                        </span>
                                        <div className={`badge ${stockInfo.badge}`}>
                                            {stockInfo.text}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Package className="w-4 h-4" />
                                        <span className="text-sm">موجودی: {product.stock}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {product.isActive ? (
                                            <CheckCircle className="w-4 h-4 text-success" />
                                        ) : (
                                            <AlertTriangle className="w-4 h-4 text-error" />
                                        )}
                                        <span className={`text-sm ${product.isActive ? 'text-success' : 'text-error'}`}>
                                            {product.isActive ? 'فعال' : 'غیرفعال'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Add/Edit Product Modal */}
            {showAddModal && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg">
                                {editingProduct ? 'ویرایش محصول' : 'افزودن محصول جدید'}
                            </h3>
                            <button 
                                className="btn btn-sm btn-circle btn-ghost"
                                onClick={() => {
                                    setShowAddModal(false);
                                    setEditingProduct(null);
                                    setFormData({
                                        name: '',
                                        category: '',
                                        price: 0,
                                        stock: 0,
                                        description: '',
                                        isActive: true
                                    });
                                }}
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Product Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">نام محصول</span>
                                </label>
                                <input 
                                    type="text" 
                                    className="input input-bordered"
                                    value={formData.name || ''}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="نام محصول را وارد کنید"
                                />
                            </div>

                            {/* Category */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">دسته‌بندی</span>
                                </label>
                                <select 
                                    className="select select-bordered"
                                    value={formData.category || ''}
                                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                                >
                                    <option value="">انتخاب دسته‌بندی</option>
                                    {categories.slice(1).map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Price and Stock */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">قیمت (تومان)</span>
                                    </label>
                                    <input 
                                        type="number" 
                                        className="input input-bordered"
                                        value={formData.price || 0}
                                        onChange={(e) => setFormData({...formData, price: parseInt(e.target.value) || 0})}
                                        placeholder="0"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">موجودی</span>
                                    </label>
                                    <input 
                                        type="number" 
                                        className="input input-bordered"
                                        value={formData.stock || 0}
                                        onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value) || 0})}
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">توضیحات</span>
                                </label>
                                <textarea 
                                    className="textarea textarea-bordered h-24"
                                    value={formData.description || ''}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    placeholder="توضیحات محصول..."
                                ></textarea>
                            </div>

                            {/* Active Status */}
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">وضعیت فعال</span>
                                    <input 
                                        type="checkbox" 
                                        className="toggle toggle-primary"
                                        checked={formData.isActive ?? true}
                                        onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="modal-action">
                            <button 
                                className="btn btn-primary"
                                onClick={handleSaveProduct}
                                disabled={!formData.name || !formData.category}
                            >
                                {editingProduct ? 'بروزرسانی' : 'افزودن'}
                            </button>
                            <button 
                                className="btn"
                                onClick={() => {
                                    setShowAddModal(false);
                                    setEditingProduct(null);
                                }}
                            >
                                انصراف
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}