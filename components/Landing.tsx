import { ReduxStateType } from "@/app/redux";
import { ArrowDown } from "lucide-react";

interface Props {
  information: ReduxStateType["constants"]["data"];
}

export default function Landing({ information }: Props) {
  return (
    <section className="dev-section">
      <div className="colmm">
        <h1 data-aos="fade-right">
          passionate <br />
          creative <br />
          developer <br />
        </h1>
        <div className="arrow-dev-short">
          <span className="arrow arrow-dev-short-work">
            <ArrowDown />
          </span>
        </div>
        <div
          data-aos="fade-right"
          className="dev-thumbnail"
          // style={{
          //   backgroundImage: `url(${require(`${information.imgs.myImages[1]}`)})`,
          // }}
        ></div>
      </div>

      <div data-aos="fade-left" className="colmn dev-num01">
        01/
      </div>
    </section>
  );
}
