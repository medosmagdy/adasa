import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeaturedArticles.css'
import { useNavigate } from 'react-router-dom';

const FeaturedArticles = () => {

    const navigate = useNavigate()

    const goToBlog = () => {
        navigate("/blog")

    }

    return (
        <div className="py-5 featured-section">
            <div className="container">

                {/* Header: Title + Button */}
                <div className="d-flex justify-content-between align-items-end mb-4">
                    <button onClick={goToBlog} className="btn btn-sm px-4 py-2 btn-all">
                        عرض الكل &gt;
                    </button>

                    <div className="text-end">
                        <div className="mb-2">
                            <span className="badge rounded-pill badge-featured px-3 py-1">
                                ● ● مميز
                            </span>
                        </div>
                        <h2 className="text-white fw-bold mb-1" style={{ fontSize: '2.5rem' }}>مقالات مختارة</h2>
                        <p className="text-secondary small">محتوى منتقى لبدء رحلة تعلمك</p>
                    </div>
                </div>

                {/* Main Card */}
                <div className="card main-card overflow-hidden">
                    <div className="row g-0">

                        {/* Left Content Area */}
                        <div className="col-md-6 d-flex flex-column justify-content-between p-5 text-end order-2 order-md-1">
                            <div>
                                <div className="d-flex justify-content-end gap-3 mb-3 align-items-center">
                                    <span className="text-secondary small"> 8 دقائق للقراءة 🕒</span>
                                    <span className="badge badge-lighting px-3 py-2">إضاءة</span>
                                </div>
                                <h3 className="fw-bold mb-3 article-title">إتقان تصوير الساعة الذهبية: دليل شامل</h3>
                                <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                                    تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.
                                </p>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <a href="#" className="read-more-link">اقرأ المقال &larr;</a>

                                <div className="d-flex align-items-center gap-2">
                                    <div className="text-end">
                                        <div className="text-white small fw-bold">سالم أحمد</div>
                                        <div className="text-secondary" style={{ fontSize: '0.7rem' }}>18 يناير 2024</div>
                                    </div>
                                    <img
                                        src="https://i.pravatar.cc/150?u=2"
                                        alt="Author"
                                        className="rounded-circle author-img"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Image Area */}
                        <div className="col-md-6 position-relative order-1 order-md-2">
                            <img
                                src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=1000"
                                alt="Golden Hour"
                                className="w-100 h-100"
                                style={{ objectFit: 'cover', minHeight: '400px' }}
                            />
                            <div className="position-absolute top-0 end-0 m-4">
                                <span className="badge badge-star p-2 px-3 d-flex align-items-center gap-1">
                                    ★ مميز
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturedArticles;