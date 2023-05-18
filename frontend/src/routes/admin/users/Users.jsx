import { Icon } from "@iconify/react";
import React from "react";
import Navbar from "../../../components/admin/navbar";
import Sidebar from "../../../components/admin/Sidebar/sidebar";
import "./User.css";

function User() {
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
                                        Data Users
                                    </div>
                                    <div class="card-body">
                                        <div className="row d-flex align-items-center justify-content-center">
                                            <div className="col-md-6">
                                                <Icon icon={'mdi:users-group'} style={{ fontSize: '80px' }}></Icon>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="container-data">
                                                    <b>Users</b> <br /> 2001
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <label htmlFor="my-modal" className="btn btn-success mb-3">Add Data</label>
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Fullname</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Role</th>
                                                <th scope="col">Status Active</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>
                                                    <label htmlFor="my-modal" className="btn btn-primary m-1">Edit</label>
                                                    <label htmlFor="modal-active" className="btn btn-warning m-1">Non Active</label>
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
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <label htmlFor="my-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Add Data Users</h3>
                    <form action="">
                        <div className="mb-3 mt-3">
                            <label htmlFor="" className="form-label">Fullname</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" required />
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" required />
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="" className="form-label">Role</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">User</option>
                                <option value="2">Admin</option>
                            </select>
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="" className="form-label">Status Active</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">Active</option>
                                <option value="2">Non Active</option>
                            </select>
                        </div>
                        <button className="btn">Save</button>
                    </form>
                </label>
            </label>

            {/* Non Active */}
            <input type="checkbox" id="modal-active" className="modal-toggle" />
            <label htmlFor="modal-active" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Non Active Data Users</h3>
                    <form action="">
                        <div className="mb-3 mt-3">
                            <label htmlFor="" className="form-label">Status Active</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">Active</option>
                                <option value="2">Non Active</option>
                            </select>
                        </div>
                        <button className="btn">Save</button>
                    </form>
                </label>
            </label>

            {/* Delete */}
            <input type="checkbox" id="modal-delete" className="modal-toggle" />
            <label htmlFor="modal-delete" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Delete Data Users</h3>
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

export default User;