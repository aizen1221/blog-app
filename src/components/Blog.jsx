import React, {Component} from "react";
import BlogCard from "./BlogCard";
import BlogList from "./BlogList";
import BlogTag from "./BlogTag";

class Blog extends Component {
    render () {
        return (
            <div className="blog">
                <div className="blogCard">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
                <div className="blogList">
                    <BlogList/>
                    <BlogTag/>
                </div>
            </div>
        );
    }
}

export default Blog;