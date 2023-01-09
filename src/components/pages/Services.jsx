import React from "react";
import information from "./information";
import ServiceItems from "./ServiceItems";



function Services(){

    function show_or_hide_Service(event){
        if(event.target.innerHTML === "+"){
            event.target.innerHTML="-";
            const details_id = document.getElementById(event.target.id+"-details");
            details_id.className="service-details-show";
        }else{
            event.target.innerHTML="+";
            const details_id = document.getElementById(event.target.id+"-details");
            details_id.className="service-details";
        }
    }

    return (
        <>
        <section className="service-section">
            <h1 data-aos="fade-up">services</h1>
            <div data-aos="fade-up"  className="service-container">

                {
                 information.services.map(function(items){
                    return <ServiceItems data={items} showhide={show_or_hide_Service} />
                 })
                }

            </div>
        </section>
        </>
    );
}

export default Services;