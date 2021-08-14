import React from 'react';
import './topbanner.css';

const TopBanner = () => {
    return (
        <main>
            <div className="top-banner"
                style={{
                    backgroundImage: `linear-gradient(190deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/beach-life.png')`
                }}
            >
                <div className="text-block">
                    <div className="emoji">

                    </div>
                    <h1 className="">
                        Hello Numan,<br />
                        Welcome to NumDev
                    </h1>
                    <div className="top-banner-btn-block">
                        <button className="btn btn-green">Home</button>
                        <button className="btn btn-grey">About</button>
                        <button className="btn btn-grey">Num</button>
                        <button className="btn btn-grey">Dev</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TopBanner;