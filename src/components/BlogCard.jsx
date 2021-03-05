import React from "react";


const BlogCard = props => {

    return (
        <div className="card">
            <img src="/images/gruntocorps.jpg" class="card-img-top" alt="Unable to display"/>
            <div className="card-body">
                <h3 className="card-title">Blog Title Here (Card Title)</h3>
                <h5 className="card-description">Blog Description (Card Description)</h5>
                <p className="card-text">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus 
                                         porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt
                                         sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                <div className="button-padding">
                    <button type="button" id="read-more" className="btn btn-primary">Read More &#8658;</button>
                    <p className="comment">Comments</p>
                    <p className="count">0</p>
                </div>
            </div>
            
        </div>
    );
}

export default BlogCard;