import './Resume.css';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Resume() {
    return (
        <>
           <div className="main">
                <div className="right-hand-side">
                    <br/>
                    <h1>SUMMARY</h1>
                    <p>Detail-oriented IT Student with a strong academic foundation and hands-on experience in various programming languages and system administration. Proven ability to analyze and solve complex problems. Eager to apply theoretical knowledge practically and contribute to innovative IT solutions.</p>
                    <br />
                    <div className='esl'>
                        <div className='education'>
                            <h2>EDUCATION</h2>
                            <h4>BCS-IT, MEDHAVI College, Kathmandu</h4>
                            <p>2022-present</p>
                            <h4>+2, RME School, TIKAPUR-KAILALI</h4>
                            <p>2020-2022</p>
                        </div>
                        <div className="skills">
                            <h2>Skills</h2>
                            <p>Good Communication Skill</p>
                            <p>HTML, CSS, JS, react.js</p>
                            <p>Python, Django</p>
                        </div>
                        <div className="language">
                            <h2>Languages</h2>
                            <p>Nepali</p>
                            <p>English</p>
                            <p>Hindi</p>
                        </div>
                    </div>
                    <br/>
                    <div className='thi'>
                        <div className='training'>
                            <h2>Training</h2>
                            <p>Python/Django, Broadway Infosys</p>
                        </div>
                        <br/>
                        <div className="hobby">
                            <h2>Hobby</h2>
                            <p>Programming</p>
                        </div>
                        <div className="hobby">
                            <h2>Interest</h2>
                            <p>coding</p>
                        </div>
                    </div>
                    <br/>
                    <hr/><hr/>
                    <div className='pi'>
                        <div className='projects'>
                            <h2>Projects</h2>
                            <h4>personal_website</h4>
                            <p>Skills used:- HTML, CSS</p>
                            <a id="a1" href='https://github.com/asmita-dhamala/personal_website' target='blank'>Project_link</a>
                            <h4>Job Apply</h4>
                            <p>Skills used:- HTML, CSS, Django, API, db.sqlite3</p>
                            <a id="a1" href='https://github.com/asmita-dhamala/Jobply_application' target='blank'>Project_link</a>
                            <h4>Portfolio</h4>
                            <p>Skills used:- HTML, CSS, JS, Django</p>
                            <a id="a1" href='https://github.com/asmita-dhamala/Portfolio-' target='blank'>Project_link</a>
                            <h4>Ecommerce Store</h4>
                            <p>Skills used:- HTML, CSS, JS, Django, API, db.sqlite3</p>
                            <a id="a1" href='https://github.com/asmita-dhamala/ecomm_store' target='blank'>Project_link</a>
                            <br></br>
                            <br></br>
                        </div>
                        <div className='anni'>
                        <img src="https://media1.giphy.com/media/jy0ZCCXxHrI7eEEGgn/giphy.webp?cid=ecf05e47qgcqof3e2z436hdqnr6dynu39s45olyfls4tuvi9&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="Animated" />
                        </div>
                    </div>
                    <div className="conn">
                        <AnchorLink offset={100} href="#connect">Connect With Me...</AnchorLink>
                    </div>
                    <section id="connect">
                    </section>
                </div>
            </div>
        </>
    );
}

export default Resume;
