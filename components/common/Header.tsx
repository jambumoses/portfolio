"use client";

import { useEffect, useState } from "react";
import "react-simple-typewriter/dist/index.js";
import Aos from "aos";
import { useSelector } from "react-redux";
import { ReduxStateType } from "@/app/redux";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

function Header() {
  const pathname = usePathname();
  const currentPage =
    pathname === "/" ? "home" : pathname.split("/").filter(Boolean).pop();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  var [menu_heading, setMenuId] = useState("hide-mobile-nav");

  var [currentMenuSate, setCurrentMenuSate] = useState<string>("menu-close");

  function menu(event: any) {
    if (event.target.id == "menu-close") {
      setMenuId("");
      setCurrentMenuSate("menu-open");
      //alert(currentMenuSate);
    }

    if (event.target.id == "menu-open") {
      setMenuId("hide-mobile-nav");
      setCurrentMenuSate("menu-close");
      //alert(currentMenuSate);
    }
  }

  const information = useSelector(
    (state: ReduxStateType) => state.constants.data,
  );

  console.log(information);

  function doneWithClick() {
    setMenuId("hide-mobile-nav");
    setCurrentMenuSate("menu-close");
  }

  return (
    <>
      <header>
        <section>
          <div className="code-with">
            <span style={{ fontSize: 15 }}>©</span>_Code by {information.myname}
          </div>
          <div className="current-work">
            currently frontend
            <br />
            {information.current_job}
          </div>
          <div className="based-country">
            based in {information.location.country}
            <br />
            {information.location.city}
          </div>

          <div>
            <nav className="nav">
              {/* <span><a href="#">work ,</a></span> */}
              <span>
                <Link
                  style={{
                    color: currentPage === "" ? "gray" : "",
                    textDecoration: currentPage === "" ? "underline" : "",
                  }}
                  className="nav-item"
                  href={information.pages.home.link}
                >
                  {information.pages.home.string}
                </Link>
              </span>
              <span>
                <Link
                  style={{
                    color: currentPage === "Contact" ? "gray" : "",
                    textDecoration:
                      currentPage === "Contact" ? "underline" : "",
                  }}
                  className="nav-item"
                  href={information.pages.contact.link}
                >
                  {information.pages.contact.string}
                </Link>
              </span>
              <div className="mobile-nav">
                <Menu id={currentMenuSate} onClick={menu} />
              </div>
              <div id={menu_heading} className="mobile-menu">
                <div className="mobile-nav-titles">
                  <div data-aos="fade-down">
                    <Link
                      onClick={doneWithClick}
                      className="mobile-links"
                      href={information.pages.home.link}
                    >
                      {information.pages.home.mobileString}
                    </Link>
                  </div>
                  <div data-aos="fade-down">
                    <Link
                      onClick={doneWithClick}
                      className="mobile-links"
                      href={information.pages.contact.link}
                    >
                      {information.pages.contact.mobileString}
                    </Link>
                  </div>
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
