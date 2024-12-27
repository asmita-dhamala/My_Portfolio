import './Basic.css';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Basic() {
    return (
        <>
            <div className="basic">
                <div className="main1">
                    <div className="title">
                        <img src="images/image3.png" alt="Introduction Image" />
                        <p>
                            Hello everyone! I am Asmita Dhamala, currently pursuing my Bachelor's in Computer Systems and Information Technology (BCSIT) at Medhavi College. I have a
                            strong passion for backend development and have worked on several projects in this field. As a backend developer, I focus on building and maintaining the
                            server-side of web applications, handling business logic, databases, and APIs to ensure smooth functionality. Additionally, as a Full-Stack Developer,
                            I am skilled in frontend technologies like HTML, CSS, JavaScript, and React, as well as backend technologies such as Python and Django. This allows me to design responsive and
                            interactive user interfaces while also developing the server-side logic, managing databases, and creating APIs to deliver seamless, dynamic web applications.
                        </p>
                    </div>
                    <div className="photo1">
                        <img src="images/image2.png" alt="Asmita Dhamala" />
                    </div>
                </div>
                <br/>
                <div className="learn_more">
                    <AnchorLink type="submit" offset={100} href="#learnmore">Learn More...</AnchorLink>
                </div>

                <section id="learnmore">
                </section>
            </div>
        </>
    );
}

export default Basic;
