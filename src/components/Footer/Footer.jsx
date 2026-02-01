import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row g-5 text-end">

                    {/* Column 1: Subscribe */}
                    <div className="col-12 col-md-3 footer-subscribe-box">
                        <h5 className="footer-column-title">ابقى على اطلاع</h5>
                        <p className="mb-4">اشترك للحصول على أحدث المقالات والتحديثات.</p>
                        <input type="email" className="footer-input" placeholder="أدخل بريدك الإلكتروني" />
                        <button className="footer-btn">اشترك</button>
                    </div>

                    {/* Column 2: Categories */}
                    <div className="col-6 col-md-2">
                        <h5 className="footer-column-title">التصنيفات</h5>
                        <ul className="footer-links">
                            <li><a href="#">إضاءة</a></li>
                            <li><a href="#">بورتريه</a></li>
                            <li><a href="#">مناظر طبيعية</a></li>
                            <li><a href="#">تقنيات</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Explore */}
                    <div className="col-6 col-md-2">
                        <h5 className="footer-column-title">استكشف</h5>
                        <ul className="footer-links">
                            <li><a href="#">الرئيسية</a></li>
                            <li><a href="#">المدونة</a></li>
                            <li><a href="#">من نحن</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Brand & Description */}
                    <div className="col-12 col-md-5">
                        <div className="footer-logo-wrapper justify-content-end">
                            <span className="footer-logo-text">عدسة</span>
                            <div className="footer-logo-box">ع</div>
                        </div>
                        <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                        </p>
                        <div className="social-icons justify-content-end">
                            <a href="#" className="social-icon">𝕏</a>
                            <a href="#" className="social-icon">🌐</a>
                            <a href="#" className="social-icon">in</a>
                            <a href="#" className="social-icon">▶</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-bottom-links">
                        <a href="#">شروط الخدمة</a>
                        <a href="#">سياسة الخصوصية</a>
                    </div>
                    <div>
                        © 2026 عدسة. صنع بكل ❤️ جميع الحقوق محفوظة.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;