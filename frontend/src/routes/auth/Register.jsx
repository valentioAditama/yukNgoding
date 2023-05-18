import React, { useState } from "react";
import "./auth.css";
import axios from "axios";

function Register() {
    
    axios.post('http://127.0.0.1:8000/api/register')

    return (
        <div className="backgroundLoginPage">
            <div className="vertical_center_login">
                <div className="titleLogin">
                    <h1>Buat akun pertama kamu!</h1>
                    <h6>Bergabung untuk terhubung sesama anggota</h6>
                </div>
                <div className="formLogin">
                    <div className="bodyFormRegister">
                        <form>
                            <input
                                type="email"
                                className="mb-1 form-control"
                                placeholder="Email"
                                required
                            />
                            <input
                                type="password"
                                className="mb-3 form-control"
                                placeholder="Password"
                                required
                            />
                            <button className="text-decoration-none text-light btnFormLogin">Register</button>
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