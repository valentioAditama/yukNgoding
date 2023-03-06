import { Icon } from "@iconify/react";
import React from "react";
import Navbar from "../../../components/admin/navbar";
import Sidebar from "../../../components/admin/Sidebar/sidebar";
import "./Dashboard.css";

function Dashboard() {
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
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-3">
                <div class="card">
                  <div class="card-header">
                    Data Users
                  </div>
                  <div class="card-body">
                    <div className="row align-items-center justify-content-center">
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
              <div className="col-md-3">
                <div class="card">
                  <div class="card-header">
                    Data Postingan
                  </div>
                  <div class="card-body">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-6">
                        <Icon icon={'material-symbols:local-post-office'} style={{ fontSize: '80px' }}></Icon>
                      </div>
                      <div className="col-md-6">
                        <div className="container-data">
                          <b>Postingan</b> <br /> 2001
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card">
                  <div class="card-header">
                    Data Criticism
                  </div>
                  <div class="card-body">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-6">
                        <Icon icon={'material-symbols:event-note'} style={{ fontSize: '80px' }}></Icon>
                      </div>
                      <div className="col-md-6">
                        <div className="container-data">
                          <b>Criticism</b> <br /> 2001
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card">
                  <div class="card-header">
                    Data News
                  </div>
                  <div class="card-body">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-6">
                        <Icon icon={'fluent:news-24-regular'} style={{ fontSize: '80px' }}></Icon>
                      </div>
                      <div className="col-md-6">
                        <div className="container-data">
                          <b>News</b> <br /> 2001
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div class="card">
                  <div class="card-header">
                    Data Users
                  </div>
                  <div class="card-body">

                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="card">
                  <div class="card-header">
                    Data Post
                  </div>
                  <div class="card-body">

                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <div class="card">
                  <div class="card-header">
                    Data Criticism
                  </div>
                  <div class="card-body">

                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="card">
                  <div class="card-header">
                    Data News
                  </div>
                  <div class="card-body">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default Dashboard;

