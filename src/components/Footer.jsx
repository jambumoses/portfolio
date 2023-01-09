import React from "react";
import "./css/footer.css";
import information from "./pages/information";
import "./css/responsive/mobileFooter.css";

function Footer(){
    return(
        <>
        <section className="getin-touch-section">
            <h2 data-aos="fade-left">
                get <span>in touch</span>
            </h2>
            <ul>
                <li><a href={"mailto:"+information.email} target="_blank">{information.email}</a></li>
                <li>{information.contact}</li>
            </ul>
        </section>
        
        <footer className="footer">
            <div className="footer-developer">
                {information.myname}
                <br />
                <span>creative developer | © 2022 edition</span>
            </div>

            <div className="footer-socials">
                <a href={information.account_links.twitter.link}>{information.account_links.twitter.name},</a>
                <a href={information.account_links.instagram.link}>{information.account_links.instagram.name},</a>
                <a href={information.account_links.github.link}>{information.account_links.github.name},</a>
                <a href={information.account_links.linkIn.link}>{information.account_links.linkIn.name}</a>
            </div>

            <div className="footer-ux-ui">
                develop with {information.myname}
                <br />
                <span>design UI/UX interfaces</span>
            </div>
        </footer>

        <section className="mobile-footer">
            <div className="mobile-footer-socials">
                <a href={information.account_links.twitter.link}>{information.account_links.twitter.name},</a>
                <a href={information.account_links.instagram.link}>{information.account_links.instagram.name},</a>
                <a href={information.account_links.github.link}>{information.account_links.github.name},</a>
                <a href={information.account_links.linkIn.link}>{information.account_links.linkIn.name}</a>
            </div>

            <div className="mobile-footr-devloper">
                <div>
                    {information.myname}
                </div>
                <div>
                    <span>creative developer | © 2022 edition</span>
                    <div>develop with {information.myname} <span>design UI/UX interfaces</span></div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Footer;