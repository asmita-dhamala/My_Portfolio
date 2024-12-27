import './AboutMe.css';
import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function AboutMe (){
    return (
        <>
            <div className='main12'>
                <div className='fc'>
                    <FaFacebook />
                    <a href='https://www.facebook.com/asmita.dhamala.37/' target='blank'>facebook</a>
                </div>
                <div className='linkend'>
                    <FaLinkedin />
                    <a href='https://www.linkedin.com/feed/' target='blank'>linkedin</a>
                </div>
                <div className='github'>
                    <FaGithubSquare />
                    <a href='https://github.com/asmita-dhamala' target='blank'>github</a>
                </div>
                <div className='insta'>
                <FaInstagramSquare />
                <a href='https://www.instagram.com/' target='blank'>instagram</a>
                </div>
            </div>
            <h1>Thankyou for Watching &hearts;</h1>
        </>
    );
}

export default AboutMe;