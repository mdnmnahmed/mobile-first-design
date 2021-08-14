import React from 'react';
import './languages.css';

const Languages = () => {
    return (
        <section className="languages">
            <div className="languages-section">
                <div className="languages-section-heading">
                    <h2>Programming <span> Languages </span></h2>
                    <a href="#">show all (12)</a>
                </div>
                <div className="languages-list">
                    {
                        ['JavaScript', 'Python', 'C++', 'Go', 'Java', 'PHP'].map(langName => (
                            <div className="languages-card">
                                <img src="../images/nlogo.png" alt="languages" />
                                <div className="languages-meta">
                                    <span> 500M Users</span>
                                    <span> ⭐ 5 </span>
                                </div>
                                <div className="languages-title">
                                    <a href="#">{langName}</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <br /><br />
        </section>
    );
}

export default Languages;