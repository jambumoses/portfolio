import { ReduxStateType } from "@/app/redux";

interface Props {
  information: ReduxStateType["constants"]["data"];
}

export default function OfHelp({ information }: Props) {
  return (
    <section className="help-section">
      <div className="help-you-with">
        <h2 data-aos="fade-left">i can help you with .</h2>
      </div>
      <div className="help-note-container">
        <div data-aos="fade-up" className="help-note">
          <span>{information.helpwith[0].count}</span>
          <h3>{information.helpwith[0].heading}</h3>
          <p>{information.helpwith[0].description}</p>
        </div>

        <div data-aos="fade-up" className="help-note">
          <span>{information.helpwith[1].count}</span>
          <h3>{information.helpwith[1].heading}</h3>
          <p>{information.helpwith[1].description}</p>
        </div>

        <div data-aos="fade-up" className="help-note">
          <span>{information.helpwith[2].count}</span>
          <h3>{information.helpwith[2].heading}</h3>
          <p>{information.helpwith[2].description}</p>
        </div>
      </div>
    </section>
  );
}
