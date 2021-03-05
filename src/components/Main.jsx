import React, {Component} from "react";
import Blog from "./Blog";

class Main extends Component {
    render () {
        return (
            <div>
                <ul className="header">
                    <img id="logo" src="/images/gruntocorps.jpg" class="card-img-top" alt="Unable to display"/>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Stuff</li>
                    <li>Contact</li>
                </ul>
                <div className="Content">
                    <Blog/>
                </div>
            </div>
        );
    }
}

export default Main;