import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
import information from "./information.js";
import "./css/contact.css";
import {Link} from "react-router-dom";
import { ArrowDownward } from "@material-ui/icons";
import { useState } from "react";
import image from "./css/allef-vinicius-hxNiXP498UI-unsplash.jpg";
import update_Page_title from "./functionilities.js";

function Contact(){

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);

    update_Page_title(information.page_meta_titles.contact);

    return (
        <>
            <section className="work-banner">
                <div className="banner-about-inshort">
                    <p data-aos="fade-up" className="banner-short-note">
                        <Typewriter
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={0}
                        delaySpeed={3000}
                        words={[...information.typewriter.words]}/> 
                        {/* <span className='myname'>jambu moses</span> <br /> */}
                    </p>

                    <div data-aos="fade-up" className="arrow-dev-short">
                        <span className="arrow">
                            <ArrowDownward/>
                        </span>
                        <span className="arrow-info">
                            i support designers <br />
                            and agencies with <br />
                            creative development <br />
                        </span>
                    </div>
                </div>

                <div className="dev-profile">
                    <div data-aos="fade-up" style={{ backgroundImage: `url(${ require(`${information.imgs.contactPage[0]}`) })`}} className="profile-thumbnail"></div>
{/*                     <p data-aos="fade-up">
                        within more than 4 years of experience,
                        i have been mastering the skills of fundamental of ...ux
                        analysis, ui design, interface animation, and
                        webflow development.
                    </p> */}
                </div>
            </section>


            <section className="work-info-section">
                <div className="work-info-head">
                    <p data-aos="fade-up">passionate about web technologies, i love working at the intersection of creativity and user friendly interfaces. i create memorable web experience.</p>
                    <p data-aos="fade-up">{/* when i'm not building or exploring new web experience, i'm probably playing games or watching football. */}</p>
                </div>
                <div className="work-info-2">
                    <div data-aos="fade-up" className="work-info-2-left">
                        <p>a blend of UI and product engineering.</p>
                    </div>
                    <div className="work-info-2-right">
                        <p data-aos="fade-up">with a background in design, i work closely with design focused teams to build websites and microsites for companies and individuals. ihave years of experience working and collaborating on product teams and leading engineering efforts.</p>
                        <p data-aos="fade-up">with my experience in UI and product engineering, i solve problems and build appealing usable web experience.</p>

                        <div data-aos="fade-left" className="work-info-2-more-btn">
                           <Link to="/" className="more-link">more about me and services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;