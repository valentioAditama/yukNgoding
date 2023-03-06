import React from "react"
import ReactDOM from "react-dom/client"

function LandingPage() {
    return (
        <div className="backgroundLandingPage">
            <div className="vertical_center">
                <div className="container">
                    <div className="landingPageText">
                        <h1>
                            Selamat Datang Di{" "}
                            <span className="yukNgodingTitle">YukNgoding</span>
                        </h1>
                        <p className="descriptionLandingPage">
                            Mulai pencapaian baru untuk skill-mu di masa depan
                            yang akan datang
                        </p>
                        <a href="/menu">
                            <button className="btnLandingPage">
                                Mulai Sekarang
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

if (document.getElementById("LandingPage")) {
    const Index = ReactDOM.createRoot(document.getElementById("LandingPage"));

    Index.render(
        <React.StrictMode>
            <LandingPage />
        </React.StrictMode>
    );
}
