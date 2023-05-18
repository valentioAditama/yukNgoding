import React from "react";
import NavbarTransparant from "../../../components/navbarTransparant";
import Footer from "../../../components/footer";
import image from "../../../images/category.jpg";

function News() {
    return (
        <main>
            <div className="jumbroton">
                <div className="imageNews">
                    <NavbarTransparant />
                    <div className="centerTextCategory">
                        <h1>News Programming</h1>
                        <small>Liat Yuk, Berita programming untuk hari ini</small>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 p-4">
                        <p>NEWS <b>PROGRAMMING</b> </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card border-0 bg-transparant">
                            <img
                                src={image}
                                className="imgSubCategory"
                                alt=""
                            />
                            <h5 className="pt-2">Hackaton Day 2022 - Amerika</h5>
                            <div className="row">
                                <div className="col-md-10">
                                    <small className="descTitleCategory">Be the Source of the News: Unleash Your Inner Programmer at the News Hackathon!"</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 bg-transparant">
                            <img
                                src={image}
                                className="imgSubCategory"
                                alt=""
                            />
                            <h5 className="pt-2">Hackaton Day 2022 - Amerika</h5>
                            <div className="row">
                                <div className="col-md-10">
                                    <small className="descTitleCategory">Be the Source of the News: Unleash Your Inner Programmer at the News Hackathon!"</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 bg-transparant">
                            <img
                                src={image}
                                className="imgSubCategory"
                                alt=""
                            />
                            <h5 className="pt-2">Hackaton Day 2022 - Amerika</h5>
                            <div className="row">
                                <div className="col-md-10">
                                    <small className="descTitleCategory">Be the Source of the News: Unleash Your Inner Programmer at the News Hackathon!"</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination mt-3 justify-content-end">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default News;