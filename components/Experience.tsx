import { ReduxStateType } from "@/app/redux";

interface Props {
  information: ReduxStateType["constants"]["data"];
}

export default function Experience({ information }: Props) {
  return (
    <section className="expreince-section">
      <div data-aos="fade-right" className="expreince-learnmore">
        <a href="#">learn more</a>
      </div>

      <div data-aos="fade-left">
        <span className="expreince-item">
          {information.years_of_development.string}
          <span className="expreince-gap"></span>
          <span className="expreince-years">
            {information.years_of_development.years}
          </span>
        </span>
        <span className="expreince-item">
          {information.completed_projects.string}
          <span className="expreince-gap"></span>
          <span className="expreince-years">
            {information.completed_projects.count}
          </span>
        </span>
      </div>
    </section>
  );
}
