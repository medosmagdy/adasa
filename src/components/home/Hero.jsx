import React from 'react';
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const navigate = useNavigate();
    const goToBlog = () => {
        navigate('/blog')
    }

    const stats = [
        { label: 'مقالة', value: '+50', icon: '📄' },
        { label: 'قارئ', value: '+10 ألف', icon: '👥' },
        { label: 'تصنيفات', value: '4', icon: '📂' },
        { label: 'كاتب', value: '6', icon: '🖋️' }
    ];

    return (
        <div className="hero-section">
            <div className="container">

                {/* Badge */}
                <div className="mb-4">
                    <span className="badge rounded-pill border border-secondary px-3 py-2 hero-badge text-secondary">
                        <span className="text-warning">●</span> مرحباً بك في عدسة
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="hero-title">
                    اكتشف <span>فن</span> <br />
                    التصوير الفوتوغرافي
                </h1>

                {/* Subtitle */}
                <p className="hero-description">
                    انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
                </p>

                {/* Action Buttons */}
                <div className="d-flex justify-content-center gap-3 mb-5">
                    <button onClick={goToBlog} className="btn btn-lg px-4 py-2 d-flex align-items-center btn-primary-orange">
                        استكشف المقالات &larr;
                    </button>
                    <button className="btn btn-lg px-4 py-2 btn-outline-custom">
                        اعرف المزيد ⓘ
                    </button>
                </div>

                {/* Statistics Grid */}
                <div className="row g-3 justify-content-center mt-5">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-6 col-md-2">
                            <div className="stat-card">
                                <div className="fs-4 mb-2">{stat.icon}</div>
                                <h4 className="stat-value">{stat.value}</h4>
                                <small className="stat-label">{stat.label}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;