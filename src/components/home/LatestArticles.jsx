import React from 'react';
import './LatestArticles.css';

const LatestArticles = () => {
    const articles = [
        {
            title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
            desc: "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
            author: "جمال عبد الله",
            date: "3 يناير 2026",
            readTime: "8 دقائق",
            category: "معدات",
            img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400",
            pic: "https://i.pravatar.cc/150?u=1",
        },
        {
            title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
            desc: "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
            author: "ليث محمود",
            date: "5 يناير 2026",
            readTime: "12 دقيقة",
            category: "تقنيات",
            img: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&q=80&w=400",
            pic: "https://i.pravatar.cc/150?u=6",
        },
        {
            title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
            desc: "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
            author: "داود خالد",
            date: "8 يناير 2026",
            readTime: "15 دقيقة",
            category: "تقنيات",
            img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
            pic: "https://i.pravatar.cc/150?u=5",
        }
    ];

    return (
        <section className="latest-articles-section py-5">
            <div className="container">

                <div className="d-flex justify-content-between align-items-end mb-5">
                    <a href="#" className="view-all-link">← عرض جميع المقالات</a>
                    <div className="text-end">
                        <span className="badge rounded-pill latest-badge px-3 py-1 mb-2">● الأحدث</span>
                        <h2 className="text-white fw-bold display-5">أحدث المقالات</h2>
                        <p className="text-secondary">محتوى جديد طازج من المطبعة</p>
                    </div>
                </div>

                <div className="row g-4">
                    {articles.map((art, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="article-card">
                                <div className="card-img-wrapper">
                                    <img src={art.img} alt={art.title} className="article-img" />
                                    <span className="category-tag">{art.category}</span>
                                </div>

                                <div className="article-body">
                                    <div className="meta-info">
                                        <span>{art.readTime} للقراءة</span> • <span>{art.date}</span>
                                    </div>
                                    <h4 className="article-title">{art.title}</h4>
                                    <p className="article-excerpt">{art.desc}</p>

                                    <div className="article-footer">
                                        <div className="arrow-icon">←</div>
                                        <div className="author-info">
                                            <div className="text-end">
                                                <div className="text-white small fw-bold">{art.author}</div>
                                                <div className="text-secondary small">مصور ومدون تقني</div>
                                            </div>
                                            <img src={art.pic} alt="author" className="author-avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestArticles;