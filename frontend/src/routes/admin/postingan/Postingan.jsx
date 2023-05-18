import React from "react";
import Sidebar from "../../../components/admin/Sidebar/sidebar";
import Navbar from "../../../components/admin/navbar";
import { Icon } from "@iconify/react";

function Postingan() {
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
                                        Data Post
                                    </div>
                                    <div class="card-body">
                                        <div className="row d-flex align-items-center justify-content-center">
                                            <div className="col-md-6">
                                                <Icon icon={'ic:baseline-post-add'} style={{ fontSize: '80px' }}></Icon>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="container-data">
                                                    <b>Post </b> <br /> 2001
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <label htmlFor="modal-add" className="btn btn-success mb-3">Add Data</label>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Content</th>
                                                <th scope="col">Status Active</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>Mark</td>
                                                <td>
                                                    <label htmlFor="modal-add" className="btn btn-primary m-1">Edit</label>
                                                    <label htmlFor="modal-status" className="btn btn-warning m-1">Status Active</label>
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
            {/* Add Data */}
            <input type="checkbox" id="modal-add" className="modal-toggle" />
            <label htmlFor="modal-add" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Add Data Postingan</h3>
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Category</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="file" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Content</label>
                            <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Status Active</label>
                            <input type="text" className="form-control" />
                        </div>
                        <button className="btn">Save</button>
                    </form>
                </label>
            </label>

            {/* Active or Non Active */}
            <input type="checkbox" id="modal-status" className="modal-toggle" />
            <label htmlFor="modal-status" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="" className="form-label">Status Active</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Active</option>
                        <option value="2">Non Active</option>
                    </select>
                    <button className="btn mt-3">Save</button>
                </label>
            </label>

            {/* Delete */}
            <input type="checkbox" id="modal-delete" className="modal-toggle" />
            <label htmlFor="modal-delete" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Delete Data Post</h3>
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

export default Postingan;