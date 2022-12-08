import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FillServiceForm.css";

function ApplyForServicesForm(props) {
  const [validated, setValidated] = useState(false);
  const enteredFirstName = useRef("");
  const enteredLastName = useRef("");
  const enteredAddress1 = useRef("");
  const enteredCity = useRef("");
  const selectedState = useRef("");
  const enteredZip = useRef("");
  const enteredStartTime = useRef("");
  const enteredEndTime = useRef("");
  const enteredResponseTime = useRef("");
  const enteredDescription = useRef("");
  const selectedService = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const serviceProviderDetails = {
      firstName: enteredFirstName.current.value,
      secondName: enteredLastName.current.value,
      address: enteredAddress1.current.value,
      city: enteredCity.current.value,
      state: selectedState.current.value,
      zip: enteredZip.current.value,
      uid: localStorage.getItem("uid"),
      startTime: enteredStartTime.current.value,
      endTime: enteredEndTime.current.value,
      responseTime: enteredResponseTime.current.value,
      description: enteredDescription.current.value,
      service: selectedService.current.value,
    };

    console.log(enteredStartTime.current.value);

    props.onAddServiceProviderDetails(serviceProviderDetails);
    
    setValidated(true);
  };

  return (
    <div className="container">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            ref={enteredFirstName}
          />

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Phone Number"
            defaultValue="Otto"
            ref={enteredLastName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" ref={enteredAddress1} />
          </Form.Group>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            required
            ref={enteredCity}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
            required
            ref={selectedState}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zip"
            required
            ref={enteredZip}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" ref={enteredDescription} />
        </Form.Group>
      </Form.Group>

      <Row>
        <Form.Label>Service</Form.Label>
        <Form.Select defaultValue="Services" ref={selectedService}>
          <option>Choose...</option>
          <option value="Household Help">household help</option>
          <option value="Cook">Cook</option>
          <option value="Babysitter ">Babysitter</option>
          <option value="Pet Care">Pet Care</option>
          <option value="Driver">Driver</option>
          <option value="Patient Care">Patient Care</option>
          <option value="Home Painters">Home Painters</option>
          <option value="Carpenter">Carpenter</option>
          <option value="House Cleaning">House Cleaning</option>
          <option value="Pest Control">Pest Control</option>
          <option value="Laptop Repair">Laptop Repair</option>
          <option value="Car Cleaning">Car Cleaning</option>
          <option value="Sofa and Carpet Cleaning">
            Sofa and Carpet Cleaning
          </option>
          <option value="Tutions">Tutions</option>
          <option value="Physician">Physician</option>
        </Form.Select>
      </Row>

      <Row className="mb-3">
        <Form.Label>Response Time</Form.Label>
        <Form.Select defaultValue="Choose..." ref={enteredResponseTime}>
          <option>Choose...</option>
          <option value="15 min">15 min</option>
          <option value="30 min">30 min</option>
          <option value="45 min ">45 min</option>
          <option value="1 hour">1 hour</option>
        </Form.Select>
      </Row>

      <Row as={Col} className="mb-2">
        <Form.Label>Working Hours</Form.Label>
        <Form.Label>Start Time</Form.Label>
        <Form.Select defaultValue="Choose..." ref={enteredStartTime}>
          <option>Choose...</option>
          <option value="6 am">6 am</option>
          <option value="7 am">7 am</option>
          <option value="8 am ">8 am</option>
          <option value="9 am">9 am</option>
          <option value="10 am">10 am</option>
          <option value="11 am">11 am</option>
          <option value="12 pm">12 pm</option>
          <option value="1 pm">1 pm</option>
          <option value="2 am">2 pm</option>
          <option value="3 pm">3 pm</option>
          <option value="4 pm">4 pm</option>
          <option value="5 pm">5 pm</option>
          <option value="6 pm">6 pm</option>
          <option value="7 pm">7 pm</option>
          <option value="8 pm">8 pm</option>
          <option value="9 pm">9 pm</option>
        </Form.Select>
        <Form.Label>End Time</Form.Label>
        <Form.Select defaultValue="Choose..." ref={enteredEndTime}>
          <option>Choose...</option>
          <option value="6 am">6 am</option>
          <option value="7 am">7 am</option>
          <option value="8 am ">8 am</option>
          <option value="9 am">9 am</option>
          <option value="10 am">10 am</option>
          <option value="11 am">11 am</option>
          <option value="12 pm">12 pm</option>
          <option value="1 pm">1 pm</option>
          <option value="2 am">2 pm</option>
          <option value="3 pm">3 pm</option>
          <option value="4 pm">4 pm</option>
          <option value="5 pm">5 pm</option>
          <option value="6 pm">6 pm</option>
          <option value="7 pm">7 pm</option>
          <option value="8 pm">8 pm</option>
          <option value="9 pm">9 pm</option>
        </Form.Select>
      </Row>
      <br/>
      <Button  type="submit">Submit</Button>
      
    </Form>
    </div>
  );
}

export default ApplyForServicesForm;