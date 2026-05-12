import React from "react";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-row">
        <div className="about-column">
          <h3 data-aos="fade-up">Designer -freelancer</h3>
          <span data-aos="fade-right" className="about-count">
            03/
          </span>
        </div>

        <div className="about-column">
          <p data-aos="fade-up" style={{ paddingTop: 120, paddingBottom: 130 }}>
            i'm a professional worldwide freelancer who can cover the full cycle
            of a design project. i adore working with clients in person because
            it makes communication easier and speeds up the whole process
          </p>
          <div>
            <h3 data-aos="fade-up">webflow development</h3>
            <p data-aos="fade-up" style={{ paddingTop: 20 }}>
              i develop websites at the level of sotd by awwwards, stylish and
              modern animation, fast loading speed, high-quality mobile
              adaptations are my main priorities.
            </p>
          </div>
        </div>

        <div className="about-column">
          <h3 data-aos="fade-down" className="ui-ux-head">
            ui/ux design
          </h3>
          <p data-aos="fade-up" className="ui-ux-p">
            i revise the current website and i find its weaknesses. then i
            analyze the niche and competitors on order to create an unusal,
            creative, and eye-catching design, i work with both large and small
            businesses with different goals.
          </p>
        </div>
      </div>
    </section>
  );
}
