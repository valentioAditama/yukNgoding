import React from "react";
import NavbarTransparant from "../../../components/navbarTransparant";
import Footer from '../../../components/footer';

function Criticism() {
    return (
        <main>
            <div className="jumbroton">
                <div className="imageCriticism">
                    <NavbarTransparant />
                    <div className="centerTextCategory">
                        <h1>Criticism</h1>
                        <small>Yuk, Berikan masukan untuk website ini</small>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 p-4">
                        <p>CRITICISM <b>PROGRAMMING</b> </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Nama Lengkap</label>
                            <input type="text" className="form-control" placeholder="Nama Lengkap" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Category</label>
                            <select name="" id="" className="form-select">
                                <option selected>Pilih Category</option>
                                <option value="Bug">Bug</option>
                                <option value="Saran">Saran</option>
                                <option value="Kritik">Kritik</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Masukan Kritik dan saran anda</label>
                            <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Masukan Disini yaa"></textarea>
                            <div className="mt-3">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Criticism;