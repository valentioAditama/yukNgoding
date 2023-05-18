import React, { useState } from "react";

function Login() {
    return (
        <div className="backgroundLoginPage">
            <div className="vertical_center_login">
                <div className="titleLogin">
                    <h1>Selamat Datang Kembali!</h1>
                    <h6>Bergabung untuk terhubung sesama anggota</h6>
                </div>
                <div className="formLogin">
                    <form>
                        <input type="email" className="form-control mb-2" placeholder="Username or Email" required />
                        <input type="password" className="form-control mb-3" placeholder="Password"/>
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
                    <button className="btnFormLogin">Login</button>
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