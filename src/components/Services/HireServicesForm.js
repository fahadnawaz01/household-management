import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../firebase-config";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import "./HireServicesForm.css";

function HireServicesForm(props) {
  const [validated, setValidated] = useState(false);
  const selectedService = useRef("");
  const selectedTime = useRef("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "user");
    const q = query(
      collectionRef,
      where("uid", "==", localStorage.getItem("uid"))
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUser(items);
    });
    return () => {
      unsub();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const hireServiceDetails = {
      service: selectedService.current.value,
      time: selectedTime.current.value,
      firstName: user[0].firstName,
      lastName: user[0].secondName,
      state: user[0].state,
      zip: user[0].zip,
      city: user[0].city,
      address: user[0].address,
      uid: localStorage.getItem("uid"),
    };

    props.onHireService(hireServiceDetails);
    setValidated(true);
  };

  return (
    <div className="container">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Service you are looking for</Form.Label>
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
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Prefered Time</Form.Label>
          <Form.Select defaultValue="Choose..." ref={selectedTime}>
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  );
}

export default HireServicesForm;
