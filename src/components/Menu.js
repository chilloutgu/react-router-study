import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/foo">About foo</Link></li>
                <li><Link to="/posts">posts</Link></li>
            </ul>
            <hr />
        </div>
    )
}

export default Menu;