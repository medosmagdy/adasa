import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';

const About = () => {
    const authors = [
        { name: "إبراهيم حسن", role: "مصور طبيعة", img: "https://i.pravatar.cc/150?u=1" },
        { name: "محمد علي", role: "مصور بورتريه", img: "https://i.pravatar.cc/150?u=2" },
        { name: "سالم أحمد", role: "مصور محترف", img: "https://i.pravatar.cc/150?u=3" },
        { name: "جمال عبد الله", role: "مدون تقني", img: "https://i.pravatar.cc/150?u=4" },
        { name: "ليث محمود", role: "فنان بصري", img: "https://i.pravatar.cc/150?u=5" },
        { name: "داود خالد", role: "مدرب تصوير", img: "https://i.pravatar.cc/150?u=6" },
        // تقدر تكررهم عشان تملى الشبكة زي الصورة
    ];

    return (
        <>
            <div className="about-page">
                <div className="container">
                    {/* Mission Section */}
                    <section className="mission-section">
                        <span className="blog-badge mb-3 d-inline-block">● من نحن</span>
                        <h1 className="display-3 fw-bold mb-3 p-4">
                            مهمتنا هي <span className="highlight-orange">الإعلام والإلهام</span>
                        </h1>
                        <p className="text-secondary mx-auto mb-5" style={{ maxWidth: '700px' }}>
                            نحن مجتمع من المصورين شغوفين بمشاركة المعرفة وتطوير مهارات الهواة والمحترفين حول العالم.
                        </p>

                        {/* Stats Boxes */}
                        <div className="row g-4 justify-content-center">
                            {[
                                { label: 'قارئ شهرياً', val: '+2 مليون' },
                                { label: 'مقالة تعليمية', val: '500+' },
                                { label: 'كاتب ومحرر', val: '50+' },
                                { label: 'سنة خبرة', val: '15+' }
                            ].map((stat, i) => (
                                <div key={i} className="col-6 col-md-2">
                                    <div className="stat-box-about">
                                        <h4 className="fw-bold font-sys highlight-orange mb-1">{stat.val}</h4>
                                        <small className="text-secondary font-sys ">{stat.label}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Authors Grid Section */}
                    <section className="py-5">
                        <div className="text-center mb-5">
                            <span className="blog-badge mb-2 d-inline-block">● فريقنا</span>
                            <h2 className="fw-bold display-5">تعرف على كتابنا</h2>
                            <p className="text-secondary">نخبة من المصورين والكتاب الذين يشاركونكم خبراتهم</p>
                        </div>

                        <div className="row g-4">
                            {authors.map((author, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-3">
                                    <div className="author-grid-card">
                                        <img src={author.img} alt={author.name} className="author-avatar-large" />
                                        <h5 className="fw-bold mb-1">{author.name}</h5>
                                        <p className="text-secondary small mb-3">{author.role}</p>
                                        <div className="author-social-links">
                                            <a href="#" className="social-circle-btn">𝕏</a>
                                            <a href="#" className="social-circle-btn">🌐</a>
                                            <a href="#" className="social-circle-btn">f</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Orange Banner Section */}
                <section className="contact-banner">
                    <div className="container">
                        <h2 className='display-7 fw-bold'>لديك أسئلة؟ دعنا نتحدث!</h2>
                        <p className="mb-4">نحن هنا لمساعدتك في رحلتك الإبداعية، لا تتردد في التواصل معنا</p>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn-dark-pill">تواصل معنا</button>
                            <button className="btn btn-outline-light rounded-pill px-4">الأسئلة الشائعة</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;