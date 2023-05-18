import React from "react";
import { Icon } from "@iconify/react";

function Sidebar() {
    return (
        <main>
            <div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-md-6">
                                <a href="">YukNgoding</a>
                            </div>
                            <div className="col-md-6">
                                <img src="https://img.icons8.com/plasticine/50/null/code.png" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/admin/dashboard">
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    Dashboard
                                </div>
                                <div className="col-md-6">
                                    <Icon icon={'material-symbols:dashboard'} color={"white"} style={{ fontSize: '40px' }}></Icon>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/users">
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    Users
                                </div>
                                <div className="col-md-6">
                                    <Icon icon={'mdi:users-group'} color={"white"} style={{ fontSize: '40px' }}></Icon>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/criticism">
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    Criticism
                                </div>
                                <div className="col-md-6">
                                    <Icon icon={'material-symbols:edit-note'} color={"white"} style={{ fontSize: '40px' }}></Icon>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/news">
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    News
                                </div>
                                <div className="col-md-6">
                                    <Icon icon={'material-symbols:breaking-news-alt-1-outline'} color={"white"} style={{ fontSize: '40px' }}></Icon>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/postingan">
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    Post
                                </div>
                                <div className="col-md-6">
                                    <Icon icon={'ic:baseline-post-add'} color={"white"} style={{ fontSize: '40px' }}></Icon>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Sidebar;