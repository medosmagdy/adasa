import React from "react";
import posts from '../../posts.json'


export default function Portrait() {


    const importedPosts = posts

    console.log(posts)

    return (
        <>
            <div className="row g-4">
                {importedPosts.posts
                    .filter(post => post.category === "بورتريه") // هنا بنفلتر
                    .map(post => (                             // هنا بنعمل render لكل مقال
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

        </>

    )


}