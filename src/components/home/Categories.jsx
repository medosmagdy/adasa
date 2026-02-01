import React from 'react';
import './Categories.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Categories = () => {
    const categoryData = [
        { name: 'إضاءة', count: '3 مقالة', icon: '⚙️' },
        { name: 'بورتريه', count: '3 مقالة', icon: '👤' },
        { name: 'مناظر طبيعية', count: '2 مقالة', icon: '🏔️' },
        { name: 'تقنيات', count: '5 مقالة', icon: '🎨' },
        { name: 'معدات', count: '3 مقالة', icon: '📷' },
    ];

    return (
        <section className="categories-section py-5 bg-black-orange">
            <div className="container text-center">

                <div className="mb-4">
                    <span className="category-badge">
                        ● ● التصنيفات
                    </span>
                </div>

                <h2 className="text-white fw-bold mb-2" style={{ fontSize: '3rem' }}>
                    استكشف حسب الموضوع
                </h2>
                <p className="text-secondary mb-5">اعثر على محتوى مصمم حسب اهتماماتك</p>


                <div className="row g-4 justify-content-center">
                    {categoryData.map((cat, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3">
                            <div className="category-card">
                                <div className="icon-wrapper">
                                    <span className="icon-inner">{cat.icon}</span>
                                </div>
                                <h1 className="category-name fw-bold py-2">{cat.name}</h1>
                                <span className="category-count">{cat.count}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;