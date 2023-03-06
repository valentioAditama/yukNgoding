import React from "react";
import NavbarTransparant from "../../../components/navbarTransparant";
import { Icon } from '@iconify/react';
import Footer from "../../../components/footer";

function Category() {
    return (
        <main>
            <div className="jumbroton">
                <div className="imageCategory">
                    <NavbarTransparant />
                    <div className="centerTextCategory">
                        <h1>Category</h1>
                        <small>Ayo sesuaikan dengan kategori skill-mu disini</small>
                    </div>
                </div>
            </div>
           <div className="container">
            <div className="row">
                    <div className="col-md-12 p-4">
                        <p>CATEGORY <b>PROGRAMMING</b> <br />
                        6 Item
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-3">
                       <a href="" className="text-decoration-none text-dark">
                        <div className="row bg-light shadow-sm d-flex align-items-center p-3">
                            <div className="col">
                                <Icon icon={'logos:laravel'} style={{fontSize: '120px' }}></Icon>
                            </div>
                            <div className="col">
                                <h3><b>LARAVEL</b></h3>
                                <small>Framework php untuk sebuah website</small>
                            </div>
                        </div>
                       </a>
                    </div>
                    <div className="col-md-4 p-3">
                       <a href="" className="text-decoration-none text-dark">
                        <div className="row bg-light shadow-sm d-flex align-items-center p-3">
                            <div className="col">
                                <Icon icon={'logos:unity'} style={{fontSize: '120px' }}></Icon>
                            </div>
                            <div className="col">
                                <h3><b>UNITY</b></h3>
                                <small>Tools untuk membuat game</small>
                            </div>
                        </div>
                       </a>
                    </div>
                    <div className="col-md-4 p-3">
                       <a href="" className="text-decoration-none text-dark">
                        <div className="row bg-light shadow-sm d-flex align-items-center p-3">
                            <div className="col">
                                <Icon icon={'vscode-icons:file-type-css'} style={{fontSize: '120px' }}></Icon>
                            </div>
                            <div className="col">
                                <h3><b>CSS</b></h3>
                                <small>Dekorasi website kamu</small>
                            </div>
                        </div>
                       </a>
                    </div>
                    <div className="col-md-4 p-3">
                       <a href="" className="text-decoration-none text-dark">
                        <div className="row bg-light shadow-sm d-flex align-items-center p-3">
                            <div className="col">
                                <Icon icon={'vscode-icons:file-type-docker2'} style={{fontSize: '120px' }}></Icon>
                            </div>
                            <div className="col">
                                <h3><b>DOCKER</b></h3>
                                <small>Tools untuk mempermudah pengerjaan website</small>
                            </div>
                        </div>
                       </a>
                    </div>
                    <div className="col-md-4 p-3">
                       <a href="" className="text-decoration-none text-dark">
                        <div className="row bg-light shadow-sm d-flex align-items-center p-3">
                            <div className="col">
                                <Icon icon={'vscode-icons:file-type-reactjs'} style={{fontSize: '120px' }}></Icon>
                            </div>
                            <div className="col">
                                <h3><b>REACTJS</b></h3>
                                <small>Tools untuk mempermudah pengerjaan website</small>
                            </div>
                        </div>
                       </a>
                    </div>
                    <div className="col-md-4 p-3">
                       <a href="" className="text-decoration-none text-dark">
                        <div className="row bg-light shadow-sm d-flex align-items-center p-3">
                            <div className="col">
                                <Icon icon={'ooui:user-anonymous'} style={{fontSize: '120px' }}></Icon>
                            </div>
                            <div className="col">
                                <h3><b>CYBER SECURITY</b></h3>
                                <small>Belajar keamanan untuk siber</small>
                            </div>
                        </div>
                       </a>
                    </div>
                    <div className="d-flex flex-row-reverse p-3">
                        <a href="/subCategory">
                            <button className="btn btn-primary">Load More</button>
                        </a>
                    </div>
                </div>
           </div>
           <Footer/>
        </main>
    );
}

export default Category;