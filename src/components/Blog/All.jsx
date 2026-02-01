import React from "react";
import posts from '../../posts.json';

export default function All() {
    const importedPosts = posts;

    const [currentPage, setCurrentPage] = React.useState(1);
    const postsPerPage = 6;

    // حساب المقالات للصفحة الحالية
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = importedPosts.posts.slice(indexOfFirstPost, indexOfLastPost);

    // عدد الصفحات
    const totalPages = Math.ceil(importedPosts.posts.length / postsPerPage);

    return (
        <>
            <div className="row g-4">
                {currentPosts.map((post) => (
                    <div key={post.id} className="col-12 col-md-6 col-lg-4">
                        <div className="article-card">
                            <div className="card-img-wrapper">
                                <img src={post.image} alt={post.title} className="article-img" />
                                <span className="category-tag">{post.category}</span>
                            </div>
                            <div className="article-body">
                                <div className="meta-info">
                                    <span>{post.readTime} للقراءة</span> • <span>{post.date}</span>
                                </div>
                                <h4 className="article-title">{post.title}</h4>
                                <p className="article-excerpt">{post.excerpt}</p>
                                <div className="article-footer">
                                    <div className="arrow-icon">←</div>
                                    <div className="author-info">
                                        <div className="text-end">
                                            <div className="text-white small fw-bold">{post.author.name}</div>
                                            <div className="text-secondary small">{post.author.role}</div>
                                        </div>
                                        <img src={post.author.avatar} alt="author" className="author-avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination-wrapper d-flex justify-content-center mt-4 gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`page-link ${currentPage === i + 1 ? 'active' : ''}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </>
    );
}
