import React from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDy6qkD2dlbeLUR4Fi-1me-V3Tgz06_W-0",
    authDomain: "yukngoding-67950.firebaseapp.com",
    projectId: "yukngoding-67950",
    storageBucket: "yukngoding-67950.appspot.com",
    messagingSenderId: "432726763680",
    appId: "1:432726763680:web:20bf65db9257140c10c1c5",
    measurementId: "G-TSS20DPDCF"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// detect auth state 
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("Logged in");
    } else {
        console.log("user not login");
    }
});

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
