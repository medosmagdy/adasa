import React from 'react';
import './Blog.css';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import '../home/LatestArticles.css'; // هنستخدم نفس ستايل الكروت اللي عملناه
import Footer from '../Footer/Footer';
import All from './All';



const Blog = () => {

    const navigate = useNavigate();

    function navigationFunction(i) {
        switch (i) {
            case 0:
                navigate("all");
                break;
            case 1:
                navigate("light");
                break;
            case 2:
                navigate("portrait");
                break;
            case 3:
                navigate("natural");
                break;
            case 4:
                navigate("tech");
                break;
            case 5:
                navigate("element");
                break;
            default:
                break;
        }

    }

    return (
        <>
            <div className="blog-page">
                <div className="container">
                    {/* Header */}
                    <header className="blog-header">
                        <span className="blog-badge mb-3 d-inline-block">● مدونتنا</span>
                        <h1 className="fw-bold display-4 mb-3">استكشف <span style={{ color: '#ff7300' }}>مقالاتنا</span></h1>
                        <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث في عالم التصوير</p>
                    </header>

                    {/* Search & Filter Bar */}
                    <div className="search-filter-wrapper d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
                        <div className="search-input-group flex-grow-1">
                            <input type="text" placeholder="ابحث في المقالات..." />
                            <span>🔍</span>
                        </div>

                        <div className="d-flex flex-wrap gap-2 justify-content-center">
                            <button onClick={() => navigationFunction(0)} className='filter-btn'>جميع المقالات</button>
                            <button onClick={() => navigationFunction(1)} className='filter-btn'>إضاءة</button>
                            <button onClick={() => navigationFunction(2)} className='filter-btn'>بورتريه</button>
                            <button onClick={() => navigationFunction(3)} className='filter-btn'>مناظر طبيعية</button>
                            <button onClick={() => navigationFunction(4)} className='filter-btn'>تقنيات</button>
                            <button onClick={() => navigationFunction(5)} className='filter-btn'>معدات</button>
                        </div>
                    </div>

                    {/* View Info */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="text-secondary small">عرض 28 مقالات</div>
                        <div className="d-flex align-items-center">
                            <button className="view-toggle-btn active">▦</button>
                            <button className="view-toggle-btn">≡</button>
                        </div>
                    </div>

                    {/* Articles Grid */}

                    <div className="p-5">
                        < Outlet />
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );


};

export default Blog;