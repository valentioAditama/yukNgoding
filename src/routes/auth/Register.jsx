import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
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
// onAuthStateChanged(auth, user => {
//     if (user != null) {
//         console.log("Logged in");
//         navigate("/menu");
//     } else {
//         console.log("user not login");
//     }
// });


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = () => {
        try {
            createUserWithEmailAndPassword(auth, email, password);
            navigate("/menu");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="backgroundLoginPage">
            <div className="vertical_center_login">
                <div className="titleLogin">
                    <h1>Buat akun pertama kamu!</h1>
                    <h6>Bergabung untuk terhubung sesama anggota</h6>
                </div>
                <div className="formLogin">
                    {/* <div className="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Error! Task failed successfully.</span>
                        </div>
                    </div> */}
                    <div className="bodyFormRegister">
                        <form>
                            <input
                                type="email"
                                className="mb-1 form-control"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className="mb-3 form-control"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="text-decoration-none text-light btnFormLogin" onClick={submit}>Register</button>
                        </form>
                        <a href="/login"
                            className="text-decoration-none text-light">
                            <button className="btnFormLogin">Have Account?</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;