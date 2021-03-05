import React from "react";

const BlogTag = props => {

    return (
        <div className="card-list">
            <h3 className="card-title">Popular Blogs (Card Title)</h3>
            <div className="card-body">
                <p className="tag">Military</p>
                <p className="tag">Charlie Mike</p>
                <p className="tag">Esports</p>
                <p className="tag">Veterans</p>
                <p className="tag">Stream</p>
            </div>
        </div>
    );
}

export default BlogTag;