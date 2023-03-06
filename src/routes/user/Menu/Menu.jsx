import React from "react";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import gif from "../../../images/home.gif";

function Menu() {
    return (
        <main className="bg-white">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className="text-center">
                            <img
                                src={gif}
                                className="img-flugifHome"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 align-self-center">
                        <div className="text-center">
                            <h2>
                                <b>Yuk Ngoding</b>
                            </h2>
                            <h3>
                                Skuy latih skil coding kamu biar kamu lebih
                                tambah jago
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row cardMobile">
                    <div className="menuText">
                        <h5>
                            <b>Tutorial Terkini</b>
                        </h5>
                        <small>Ayo Cari Minatmu pada programming apa?</small>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 p-3">
                        <div className="card">
                            <img
                                src={gif}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">hello world</p>
                                <a href="" className="btn btn-primary">
                                    Go Go GO
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 p-3">
                        <div className="card">
                            <img
                                src={gif}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">hello world</p>
                                <a href="" className="btn btn-primary">
                                    Go Go GO
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 p-3">
                        <div className="card">
                            <img
                                src={gif}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">hello world</p>
                                <a href="" className="btn btn-primary">
                                    Go Go GO
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <button className="btn btn-primary">Load More</button>
                    </div>
                </div>

                <div className="row cardMobile">
                    <div className="menuText">
                        <h5>
                            <b>Berita Terkini</b>
                        </h5>
                        <small>
                            Ayo Cari tau berita terkini dari seputar programming
                            dan teknologi
                        </small>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 p-3">
                        <div className="card">
                            <img
                                src={gif}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">hello world</p>
                                <a href="" className="btn btn-primary">
                                    Go Go GO
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 p-3">
                        <div className="card">
                            <img
                                src={gif}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">hello world</p>
                                <a href="" className="btn btn-primary">
                                    Go Go GO
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 p-3">
                        <div className="card">
                            <img
                                src={gif}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">hello world</p>
                                <a href="" className="btn btn-primary">
                                    Go Go GO
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <button className="btn btn-primary">Load More</button>
                    </div>
                </div>
                <div className="row cardMobile">
                    <div className="menuText">
                        <h5>
                            <b>Kategori Programming</b>
                        </h5>
                        <small>
                            Ayo Sesuaikan dengan kategori skill-mu disini
                        </small>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 p-3">
                        <div className="card">
                            <img
                                src={gif}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">hello world</p>
                                <a href="" className="btn btn-primary">
                                    Go Go GO
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 p-3">
                        <div className="card">
                            <img
                                src={gif}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">hello world</p>
                                <a href="" className="btn btn-primary">
                                    Go Go GO
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 p-3">
                        <div className="card">
                            <img
                                src={gif}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">hello world</p>
                                <a href="" className="btn btn-primary">
                                    Go Go GO
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <button className="btn btn-primary">Load More</button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Menu;