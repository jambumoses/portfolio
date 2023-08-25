import React,{useEffect,useState} from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.js"
import Aos from "aos";
import "aos/dist/aos.css";
import "./css/header.css"
import "./css/responsive/mobileHeader.css"
import information from "./pages/information";
import { Link } from "react-router-dom";
import {Menu} from "@material-ui/icons";
import { useSelector } from "react-redux";

function Header(){
    // getting current page
    const getCurrentPage = useSelector((state) => state.constant.currentPage);

    useEffect(()=>{
        Aos.init({duration: 1000});
    },[]);

    var [menu_heading,setMenuId] = useState("hide-mobile-nav");

    var [currentMenuSate,setcurrentMenuSate] = useState("menu-close");

    function menu(event){
        if (event.target.id == "menu-close"){
            setMenuId("");
            setcurrentMenuSate("menu-open");
            //alert(currentMenuSate);
        }
        
        if (event.target.id == "menu-open"){
            setMenuId("hide-mobile-nav");
            setcurrentMenuSate("menu-close");
            //alert(currentMenuSate);
        }
    }

    function doneWithClick(){
        setMenuId("hide-mobile-nav");
        setcurrentMenuSate("menu-close");
    }

    return(
        <>
        <header>
            <section>
                <div className="code-with"> <span style={{fontSize: 15}}>©</span>_Code by {information.myname}</div>
                <div className="current-work">currently frontend<br/>{information.current_job}</div>
                <div className="based-country">based in {information.location.country}<br />{information.location.city}</div>
                <div>
                    <nav className="nav">
                        {/* <span><a href="#">work ,</a></span> */}
                        <span><Link style={{color: (getCurrentPage === "Work")?"gray":null,textDecoration: (getCurrentPage === "Work")?"underline":null}} className="nav-item" to={information.pages.home.link}>{information.pages.home.string}</Link></span>
                        <span><Link style={{color: (getCurrentPage === "Contact")?"gray":null,textDecoration: (getCurrentPage === "Contact")?"underline":null}} className="nav-item" to={information.pages.contact.link}>{information.pages.contact.string}</Link></span>
                        <div className="mobile-nav">
                            <Menu id={currentMenuSate} onClick={menu} />
                        </div>
                        <div id={menu_heading} className="mobile-menu">
                            <div className="mobile-nav-titles">
                                <div data-aos="fade-down"><Link onClick={doneWithClick} className="mobile-links" to={information.pages.home.link}>{information.pages.home.mobileString}</Link></div>
                                <div data-aos="fade-down"><Link onClick={doneWithClick} className="mobile-links" to={information.pages.contact.link}>{information.pages.contact.mobileString}</Link></div>
                            </div>
                                
                        </div>
                    </nav>
                </div>
            </section>
        </header>
        <div className="mobile-space"></div>
        </>
    );
}

export default Header;