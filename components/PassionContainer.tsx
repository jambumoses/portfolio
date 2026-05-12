"use client";

import { ReduxStateType } from "@/app/redux";
import Passion from "./Passion";
import { useState } from "react";

interface Props {
  information: ReduxStateType["constants"]["data"];
}

export default function PassionContainer({ information }: Props) {
  const [passion_, setPassion] = useState("tattoos");

  function select_passion(event: any) {
    setPassion(event.target.id);
  }

  return (
    <section className="passion-section">
      <div className="passion-head">personal interests</div>
      <div data-aos="fade-up" className="passion-headers">
        <h3
          onMouseOver={select_passion}
          style={{
            color: passion_ === "raceCars" ? "rgba(0, 0, 0, 0.651)" : "",
          }}
          id={information.passion[0].heading}
          className="a-visual-passion"
        >
          {information.passion[0].heading}
        </h3>
        <h3
          onMouseOver={select_passion}
          style={{ color: passion_ === "music" ? "rgba(0, 0, 0, 0.651)" : "" }}
          id={information.passion[1].heading}
          className="a-visual-passion"
        >
          {information.passion[1].heading}
        </h3>
        <h3
          onMouseOver={select_passion}
          style={{
            color: passion_ === "tattoos" ? "rgba(0, 0, 0, 0.651)" : "",
          }}
          id={information.passion[2].heading}
          className="a-visual-passion"
        >
          {information.passion[2].heading}
        </h3>
      </div>

      <div className="visual-passion-section">
        <Passion information={information} want={passion_} />
      </div>
    </section>
  );
}
