import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import "./auth.css";
import { useNavigate } from "react-router-dom";

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
        useNavigate("/menu");
    } else {
        console.log("user not login");
    }
});

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        try {
            signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="backgroundLoginPage">
            <div className="vertical_center_login">
                <div className="titleLogin">
                    <h1>Selamat Datang Kembali!</h1>
                    <h6>Bergabung untuk terhubung sesama anggota</h6>
                </div>
                <div className="formLogin">
                    <form>
                        <input type="email" className="form-control mb-2" placeholder="Username or Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </form>
                    <div className="row">
                        <div className="col-12">
                            <a
                                href="forgot-password"
                                className="text-decoration-none text-light p-2"
                            >
                                <u>Forgot Password</u>
                            </a>
                        </div>
                    </div>
                    <button className="btnFormLogin" onClick={submit}>Login</button>
                    <a
                        href="/register"
                        className="text-decoration-none text-light"
                    >
                        <button className="btnFormLogin">Sign Up</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login;