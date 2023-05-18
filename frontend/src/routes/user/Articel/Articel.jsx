import React from "react";
import Footer from "../../../components/footer";
import { Icon } from "@iconify/react";
import Navbar from "../../../components/navbar";
import image from "../../../images/category.jpg";

function Articel() {
    return (
        <main className="bg-white">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="container">
                            <div className="mt-5">
                                <h2><b>UPDATE LARAVEL 9 TERBARU</b></h2>
                                <div className="mt-2">
                                    <h6>Be the Source of the News Unleash Your inner Programmer at the news Hackaton</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Icon icon={'mdi:user'} style={{fontSize: '30px' }}></Icon> Valentio Aditama
                                        </div>
                                        <div className="col-md-8">
                                            <Icon icon={'material-symbols:date-range'} style={{fontSize: '30px' }}></Icon> Sabtu, 18 Desember 2022
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <img
                                    src={image}
                                    className="imageRead"
                                    alt=""
                                />
                                <p>Tech company XYZ hosts successful programming hackathon

                                    Last weekend, XYZ, a leading tech company, hosted a highly successful hackathon focused on programming. The event, which took place at the company's headquarters, brought together programmers from all over the country to compete and collaborate on innovative projects.

                                    The hackathon began on Friday evening with an opening ceremony and keynote address from XYZ's CEO. Participants then spent the next 24 hours working on their projects, with support from XYZ's team of experienced programmers.

                                    Over the course of the hackathon, participants used a variety of programming languages and tools to develop their projects. Some teams focused on creating new software applications, while others worked on improving existing ones.

                                    On Saturday evening, the hackathon concluded with a presentation of the completed projects to a panel of judges. The judges evaluated each project based on its innovation, execution, and potential impact.

                                    After careful consideration, the judges selected three winning teams. The first place team won a cash prize and the opportunity to present their project at an industry conference. The second and third place teams also received cash prizes.

                                    Overall, the hackathon was a great success, with participants describing it as a fun and rewarding experience. XYZ's CEO praised the event, saying, "We are always looking for ways to foster innovation and collaboration in the programming community, and this hackathon was a perfect example of that. We can't wait to see what the winning teams come up with next."
                                    </p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card border-0 bg-transparant p-3">
                            <img
                                src={image}
                                className="imageSide"
                                alt=""
                            />
                            <h5 className="pt-2">Hackaton Day 2022 - Amerika</h5>
                            <div className="row">
                                <div className="col-md-10">
                                    <small className="descTitleCategory">Be the Source of the News: Unleash Your Inner Programmer at the News Hackathon!"</small>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0 bg-transparant p-3">
                            <img
                                src={image}
                                className="imageSide"
                                alt=""
                            />
                            <h5 className="pt-2">Hackaton Day 2022 - Amerika</h5>
                            <div className="row">
                                <div className="col-md-10">
                                    <small className="descTitleCategory">Be the Source of the News: Unleash Your Inner Programmer at the News Hackathon!"</small>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0 bg-transparant p-3">
                            <img
                                src={image}
                                className="imageSide"
                                alt=""
                            />
                            <h5 className="pt-2">Hackaton Day 2022 - Amerika</h5>
                            <div className="row">
                                <div className="col-md-10">
                                    <small className="descTitleCategory">Be the Source of the News: Unleash Your Inner Programmer at the News Hackathon!"</small>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0 bg-transparant p-3">
                            <img
                                src={image}
                                className="imageSide"
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
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Articel;
