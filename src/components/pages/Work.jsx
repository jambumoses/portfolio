import React, { useEffect } from "react";
import "./css/work.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import information from "./information";
import {ArrowDownward} from "@material-ui/icons";
import { useState } from "react";
import update_Page_title, { auto_update_passion,select_passion } from "./functionilities";
import Passion from "./Passion";
import Services from "./Services";

import { constantActions } from "../../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";

function Work() {

    const dispatch = useDispatch();
    const companyName = useSelector((state) => state.constant.companyTitle);
  
    dispatch(constantActions.updatePageTitles(companyName + " . " + "Work")); // company name here
    dispatch(constantActions.setCurrentPage("Work"));

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);

    update_Page_title(information.page_meta_titles.work);

    setInterval(auto_update_passion,2000);

    const [passion_,setPassion] = useState("tattoos");

    function select_passion(event){
        setPassion(event.target.id);
    }

    return (
        <>
        <section className="dev-section">
            <div className="colmm">
                <h1 data-aos="fade-right">
                    passionate <br />
                    creative <br />
                    developer <br />
                </h1>
                <div className="arrow-dev-short">
                        <span className="arrow arrow-dev-short-work">
                            <ArrowDownward/>
                        </span>
                </div>
                <div data-aos="fade-right" className="dev-thumbnail"  style={{ backgroundImage: `url(${ require(`${information.imgs.myImages[1]}`) })`}}></div>
            </div>
            
            <div data-aos="fade-left" className="colmn dev-num01">
                01/
            </div>
        </section>


        <section className="develop-section">
            <h1 data-aos="fade-up">
                based in <br />
                uganda
            </h1>

            <div className="developer-container">
                <div data-aos="fade-up" className="note1">
                    a journey of curiosity <br />
                    and explorations
                    <br />
                    <div className="developer-count">02/</div>
                </div>

                <div className="note2">
                    <p data-aos="fade-left" className="next-p">
                        i'm a creative developer with years of experience in building products and appealing web experiences. i've collaborated with individuals and teams to build experiences large enterprises {/* including Wise, Google, Interswitch and Intelia */}.
                    </p>
                    <p data-aos="fade-left" className="next-p">
                        each project is an opportunity to learn new concepts across multiple domains including  arts, maths and physics.
                    </p>

                    <div data-aos="fade-up" className="developer-thumbnail"  style={{ backgroundImage: `url(${ require(`${information.imgs.myImages[0]}`) })`}}></div>
                </div>
            </div>
        </section>

        <section className="about-section">
            <div className="about-row">
                <div className="about-column">
                    <h3 data-aos="fade-up">Designer -freelancer</h3>
                    <span data-aos="fade-right" className="about-count">03/</span>
                </div>

                <div className="about-column">
                    <p data-aos="fade-up" style={{paddingTop:120,paddingBottom:130}}>
                        i'm a professional worldwide freelancer who can cover the full cycle of a design project. i adore working with clients in person because it makes communication easier and speeds up the whole process
                    </p>
                    <div>
                        <h3 data-aos="fade-up">webflow development</h3>
                        <p data-aos="fade-up" style={{paddingTop:20}}>
                            i develop websites at the level of sotd by awwwards, stylish and modern animation, fast loading speed, high-quality mobile adaptations are my main priorities.
                        </p>
                    </div>
                </div>

                <div className="about-column">
                    <h3 data-aos="fade-down" className="ui-ux-head">ui/ux design</h3>
                    <p data-aos="fade-up" className="ui-ux-p">
                        i revise the current website and i find its weaknesses. then i analyze the niche and competitors on order to create an unusal, creative, and eye-catching design, i work with both large and small businesses with different goals.
                    </p>
                </div>
            </div>
        </section>

        <section className="workspace-section">
            <div className="workspace-details">
                <div className="workspace-head">
                    <h3 data-aos="fade-up">my  -workspace</h3>
                    <p data-aos="fade-up">my workplace is a very special place for me. I can focus and create only when everything is set perfectly. i want to introduce you to my essentials.</p>
                </div>

                <div className="workspace-pointed-in-details">
                    <p data-aos="fade-up">
                        headphones. i love working with music. i use sony headphones with noise cancellation to a better concentration. here's my spotify playlist (click on the over the headphones)
                    </p>
                </div>
            </div>

            <div data-aos="fade-up" className="workspace-image">
                <div data-aos="fade-up" className="workspace-thumbnail" style={{ backgroundImage: `url(${ require(`${information.imgs.workSpace[0]}`) })`}}></div>
            </div>
        </section>

        <section className="expreince-section">
            <div data-aos="fade-right" className="expreince-learnmore">
                <a href="#">learn more</a>
            </div>

            <div data-aos="fade-left">
                <span className="expreince-item">
                    {information.years_of_development.string}
                    <span className="expreince-gap"></span>
                    <span className="expreince-years">{information.years_of_development.years}</span>    
                </span>
                <span className="expreince-item">
                    {information.completed_projects.string}
                    <span className="expreince-gap"></span>
                    <span className="expreince-years">{information.completed_projects.count}</span>
                </span>
            </div>
        </section>

        <Services/>

        <section className="help-section">
            <div className="help-you-with">
                <h2 data-aos="fade-left">i can help you with .</h2>
            </div>
            <div className="help-note-container">
                
                <div data-aos="fade-up" className="help-note">
                    <span>{information.helpwith[0].count}</span>
                    <h3>{information.helpwith[0].heading}</h3>
                    <p>{information.helpwith[0].description}</p>
                </div>

                <div data-aos="fade-up" className="help-note">
                    <span>{information.helpwith[1].count}</span>
                    <h3>{information.helpwith[1].heading}</h3>
                    <p>{information.helpwith[1].description}</p>
                </div>

                <div data-aos="fade-up" className="help-note">
                    <span>{information.helpwith[2].count}</span>
                    <h3>{information.helpwith[2].heading}</h3>
                    <p>{information.helpwith[2].description}</p>
                </div>
            </div>
        </section>

        <section className="passion-section">
                <div className="passion-head">
                    personal interests
                </div>
                <div data-aos="fade-up" className="passion-headers">
                    <h3 onMouseOver={select_passion} style={{color: passion_==="raceCars"&&"rgba(0, 0, 0, 0.651)"}} id={information.passion[0].heading} className="a-visual-passion">{information.passion[0].heading}</h3>
                    <h3 onMouseOver={select_passion} style={{color: passion_==="music"&&"rgba(0, 0, 0, 0.651)"}} id={information.passion[1].heading} className="a-visual-passion">{information.passion[1].heading}</h3>
                    <h3 onMouseOver={select_passion} style={{color: passion_==="tattoos"&&"rgba(0, 0, 0, 0.651)"}} id={information.passion[2].heading} className="a-visual-passion">{information.passion[2].heading}</h3>
                </div>
                
                <div className="visual-passion-section">
                    <Passion want={passion_}/>
                </div>
        </section>
        </>
    );
}

export default Work;
//export {setPassion};