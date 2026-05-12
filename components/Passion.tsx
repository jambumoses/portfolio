import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ReduxStateType } from "@/app/redux";

interface Props {
  information: ReduxStateType["constants"]["data"];
  want: any;
}

function Passion({ want, information }: Props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  switch (want) {
    case "raceCars":
      return (
        <>
          <div data-aos="fade-up" className="passion-details-section">
            <h5>{information.passion[0].title}</h5>

            <div
              style={{
                // background: `url(${require(`${information.passion[0].icon}`)})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "50px",
                width: "80px",
                margin: "20px 0px",
              }}
            ></div>

            <p data-aos="fade-left">
              {information.passion[0].description}
              <a
                href={information.passion[0].link.linkPage}
                className="passion-link"
              >
                {information.passion[0].link.name}
              </a>
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="passion-thumbnail"
            // style={{
            //   backgroundImage: `url(${require(`${information.passion[0].img}`)})`,
            //   backgroundSize: "contain",
            // }}
          ></div>
        </>
      );
      break;

    case "music":
      return (
        <>
          <div data-aos="fade-up" className="passion-details-section">
            <h5>{information.passion[1].title}</h5>

            <div
              style={{
                // background: `url(${require(`${information.passion[1].icon}`)})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "50px",
                width: "80px",
                margin: "20px 0px",
              }}
            ></div>

            <p>
              {information.passion[1].description}{" "}
              <a
                href={information.passion[1].link.linkPage}
                className="passion-link"
              >
                {information.passion[1].link.name}
              </a>
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="passion-thumbnail"
            // style={{
            //   backgroundImage: `url(${require(`${information.passion[1].img}`)})`,
            //   backgroundSize: "contain",
            // }}
          ></div>
        </>
      );
      break;

    case "tattoos":
      return (
        <>
          <div data-aos="fade-up" className="passion-details-section">
            <h5>{information.passion[2].title}</h5>

            <div
              style={{
                // background: `url(${require(`${information.passion[2].icon}`)})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "50px",
                width: "80px",
                margin: "20px 0px",
              }}
            ></div>

            <p>
              {information.passion[2].description}{" "}
              <a
                href={information.passion[2].link.linkPage}
                className="passion-link"
              >
                {information.passion[2].link.name}
              </a>
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="passion-thumbnail"
            // style={{
            //   backgroundImage: `url(${require(`${information.passion[2].img}`)})`,
            //   backgroundSize: "contain",
            // }}
          ></div>
        </>
      );
      break;

    default:
      return null;
      break;
  }
}

export default Passion;
