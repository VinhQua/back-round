import React from "react";
import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

function Services() {
  return (
    <div>
      <section className="section services" id="services">
        <Title title={"our"} subTitle={"services"} />

        <div className="section-center services-center">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
