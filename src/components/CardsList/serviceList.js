import React from "react";
import Cards from "../cards/basic example";

const ServiceList = (props) => {
  return (
    <div>
      {props.services.map((service) => (
        <Cards
          key={service.id}
          firstName={service.firstName}
          lastName={service.secondName}
          startTime={service.startTime}
          endTime={service.endTime}
          responseTime={service.responseTime}
          address={service.address}
          zip={service.zip}
          city={service.city}
          description={service.description}
          service={service.service}
          uid={service.uid}
        />
      ))}
    </div>
  );
};

export default ServiceList;
