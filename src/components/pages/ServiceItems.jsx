import React from 'react'

export default function ServiceItems({data,showhide}) {
  return (
    <div key={data.count} data-aos="fade-left"  className="service">
        <span className="service-count">{data.count}</span>
        <span className="service-content">
            <span className="service-context">{data.heading}</span>
        </span>
        <span id={data.count} onClick={showhide} className="open-service">+</span>
        <div id={data.count+"-details"} className="service-details">{/*  .service-details-show */}
            {
                data.sub_titles.map(function(items){
                    return(
                        <>
                            <div key={"item"+items.length} data-aos="fade-up" className="service-context">{items}</div>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}
