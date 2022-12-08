import React from "react";
import RequestCards from "../cards/requestCards";

const RequestList = (props) => {
  return (
    <div>
      {props.services.map((service) => (
        <RequestCards
          firstName={service?.data.firstName}
          lastName={service?.data.lastName}
          uid1={service.data.uid1}
          uid2={service.data.uid2}
          id={service.id}
          service={service.data.service}
        />
      ))}
    </div>
  );
};

export default RequestList;
