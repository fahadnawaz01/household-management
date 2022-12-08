import React from "react";
import Cards from "../cards/basic example";

const ApplyForService = (props) => {
  return (
    <div>
      {props.services.map((service) => (
        <Cards
          key={service.id}
          firstName={service.firstName}
          lastName={service.lastName}
          time={service.time}
          address={service.address}
          zip={service.zip}
          city={service.city}
          service={service.service}
          uid={service.uid}
        />
      ))}
    </div>
  );
};

export default ApplyForService;
