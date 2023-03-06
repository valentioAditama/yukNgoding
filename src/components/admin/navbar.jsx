import React from "react";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light text-lg">
            <div class="container">
                <a class="navbar-brand" href="#">
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <span className="navbar-text">Hi, Admin!</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
