import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <ul className="flex">
                <li className="mr-6">
                    <Link className="text-white-500 hover:text-blue-800" to="/">Home</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-white-500 hover:text-blue-800" to="/blog/">Blog</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-white-500 hover:text-blue-800" to="/products/">Products</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-white-500 hover:text-blue-800" to="/examples/">Examples</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-white-500 hover:text-blue-800" to="/images/">Images</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
