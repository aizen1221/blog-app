import React from "react";

const BlogList = props => {

    return (
        <div className="card-list">
            <h3 className="card-title">Popular Blogs (Card Title)</h3>
            <div className="blogList">
                <ul>
                    <li>
                        <img src="" class="card-image-top" alt="logo"/>
                        <p>First blog</p>
                    </li>
                    <li>
                        <img src="" class="card-image-top" alt="logo"/>
                        <p>Second blog</p>
                    </li>
                    <li>
                        <img src="" class="card-image-top" alt="logo"/>
                        <p>Third blog</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BlogList;