import { ReduxStateType } from "@/app/redux";
import ServiceItems from "./ServiceItems";

interface Props {
  information: ReduxStateType["constants"]["data"];
}

function Services({ information }: Props) {
  function show_or_hide_Service(event: any) {
    if (event.target.innerHTML === "+") {
      event.target.innerHTML = "-";
      const details_id: any = document.getElementById(
        event.target.id + "-details",
      );
      details_id.className = "service-details-show";
    } else {
      event.target.innerHTML = "+";
      const details_id: any = document.getElementById(
        event.target.id + "-details",
      );
      details_id.className = "service-details";
    }
  }

  return (
    <>
      <section className="service-section">
        <h1 data-aos="fade-up">services</h1>
        <div data-aos="fade-up" className="service-container">
          {information.services.map(function (items, i) {
            return (
              <ServiceItems
                key={i}
                data={items}
                showhide={show_or_hide_Service}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Services;
