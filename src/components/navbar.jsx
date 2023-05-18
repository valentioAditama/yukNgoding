import React from "react";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark bg-dark text-lg">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="https://img.icons8.com/plasticine/50/null/code.png" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="/menu">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/category">
                                Category
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/criticism">
                                Criticism
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/news">
                                News
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <a href="/register" className="m-4">Sign Up</a>
                        <a href="/login">Login</a>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
