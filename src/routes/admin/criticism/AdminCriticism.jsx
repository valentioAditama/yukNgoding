import React from "react";
import Navbar from "../../../components/admin/navbar";
import Sidebar from "../../../components/admin/Sidebar/sidebar";
import { Icon } from "@iconify/react";

function Criticism() {
    return (
        <main>
            <div id="wrapper">
                <Sidebar />
                <div id="page-content-wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <Navbar />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="container">
                            <div className="col-md-3">
                                <div class="card">
                                    <div class="card-header">
                                        Data Criticism
                                    </div>
                                    <div class="card-body">
                                        <div className="row d-flex align-items-center justify-content-center">
                                            <div className="col-md-6">
                                                <Icon icon={'material-symbols:edit-note'} style={{ fontSize: '80px' }}></Icon>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="container-data">
                                                    <b>Criticism </b> <br /> 2001
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">category</th>
                                                <th scope="col">content</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>
                                                    <label htmlFor="modal-delete" className="btn btn-error m-1">Delete</label>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row d-flex">
                                <div className="col-md-12 justify-content-end">
                                    <div className="btn-group">
                                        <button className="btn">«</button>
                                        <button className="btn">Page 22</button>
                                        <button className="btn">»</button>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {/* Delete */}
            <input type="checkbox" id="modal-delete" className="modal-toggle" />
            <label htmlFor="modal-delete" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Delete Data Criticism</h3>
                    <label htmlFor="">Apakah kamu yakin ingin menghapus? </label>
                    <div className="row mt-3">
                        <button className="btn btn-error mb-3">Hapus</button>
                        <button className="btn">Tidak</button>
                    </div>
                </label>
            </label>
        </main>
    )
}

export default Criticism;