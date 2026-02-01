import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section px-3">
            <div className="newsletter-card">

                {/* Icon */}
                <div className="email-icon-box">
                    ✉
                </div>

                {/* Text */}
                <h2 className="newsletter-title">اشترك في نشرتنا الإخبارية</h2>
                <p className="newsletter-subtitle">
                    احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                </p>

                {/* Form */}
                <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                    <button type="submit" className="subscribe-btn">
                        اشترك الآن
                    </button>
                    <input
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        className="email-input"
                        required
                    />
                </form>

                {/* Social Proof */}
                <div className="social-proof">
                    <div className="proof-text">
                        إلغاء الاشتراك في أي وقت . بدون إزعاج . <span>انضم لـ +10,000 مصور</span>
                    </div>
                    <div className="subscriber-avatars">
                        <img src="https://i.pravatar.cc/150?u=1" alt="user" />
                        <img src="https://i.pravatar.cc/150?u=2" alt="user" />
                        <img src="https://i.pravatar.cc/150?u=3" alt="user" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Newsletter;