import React from "react";

export default function Workspace() {
  return (
    <section className="workspace-section">
      <div className="workspace-details">
        <div className="workspace-head">
          <h3 data-aos="fade-up">my -workspace</h3>
          <p data-aos="fade-up">
            my workplace is a very special place for me. I can focus and create
            only when everything is set perfectly. i want to introduce you to my
            essentials.
          </p>
        </div>

        <div className="workspace-pointed-in-details">
          <p data-aos="fade-up">
            headphones. i love working with music. i use sony headphones with
            noise cancellation to a better concentration. here's my spotify
            playlist (click on the over the headphones)
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="workspace-image">
        <div
          data-aos="fade-up"
          className="workspace-thumbnail"
          // style={{
          //   backgroundImage: `url(${require(`${information.imgs.workSpace[0]}`)})`,
          // }}
        ></div>
      </div>
    </section>
  );
}
