"use client";

import Landing from "@/components/Landing";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import PassionContainer from "@/components/PassionContainer";
import Workspace from "@/components/Workspace";
import OfHelp from "@/components/OfHelp";
import Bio from "@/components/Bio";
import { useSelector } from "react-redux";
import { ReduxStateType } from "./redux";

export default function Home() {
  const information = useSelector(
    (state: ReduxStateType) => state.constants.data,
  );

  return (
    <main>
      <Landing information={information} />

      <Bio />

      <About />

      <Workspace />

      <Experience information={information} />

      <Services information={information} />

      <OfHelp information={information} />

      <PassionContainer information={information} />
    </main>
  );
}
