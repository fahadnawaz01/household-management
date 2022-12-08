import React from "react";
import STAPCard from "../cards/serviceTakerAndProviderCard";

const STAPList = (props) => {
  return (
    <div>
      {props.services.map((service) => (
        <STAPCard
          key={service.id}
          firstName1={service.data.firstName1}
          lastName1={service.data.lastName1}
          zip11={service.data.zip1}
          address1={service.data.address1}
          city1={service.data.city1}
          state1={service.data.state1}
          phoneNo1={service.data.phoneNo1}
          firstName2={service.data.firstName2}
          lastName2={service.data.lastName2}
          zip2={service.data.zip2}
          address2={service.data.address2}
          city2={service.data.city2}
          state2={service.data.state2}
          uid1={service.data.uid1}
          uid2={service.data.uid2}
          phoneNo2={service.data.phoneNo2}
          service={service.data.service}
        />
      ))}
    </div>
  );
};

export default STAPList;
