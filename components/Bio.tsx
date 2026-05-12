import React from "react";

export default function Bio() {
  return (
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
            i'm a creative developer with years of experience in building
            products and appealing web experiences. i've collaborated with
            individuals and teams to build experiences large enterprises{" "}
            {/* including Wise, Google, Interswitch and Intelia */}.
          </p>
          <p data-aos="fade-left" className="next-p">
            each project is an opportunity to learn new concepts across multiple
            domains including arts, maths and physics.
          </p>

          <div
            data-aos="fade-up"
            className="developer-thumbnail"
            // style={{
            //   backgroundImage: `url(${require(`${information.imgs.myImages[0]}`)})`,
            // }}
          ></div>
        </div>
      </div>
    </section>
  );
}
