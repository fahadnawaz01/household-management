import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import "./profileForm.css";

function ProfileInputForm(props) {
  const enteredFirstName = useRef("");
  const enteredLastName = useRef("");
  const enteredAddress1 = useRef("");
  const enteredCity = useRef("");
  const selectedState = useRef("");
  const enteredZip = useRef("");
  const enteredPhoneNo = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const form = document.getElementById("profile");

    const userDetails = {
      firstName: enteredFirstName.current.value,
      secondName: enteredLastName.current.value,
      address: enteredAddress1.current.value,
      city: enteredCity.current.value,
      state: selectedState.current.value,
      zip: enteredZip.current.value,
      uid: localStorage.getItem("uid"),
      phoneNo: enteredPhoneNo.current.value,
    };

    props.onAddProfile(userDetails);
    form.reset();
  };
  return (
    <div className="container">
      <Form onSubmit={submitHandler} id="profile">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First Name" ref={enteredFirstName} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last Name" ref={enteredLastName} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" ref={enteredAddress1} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control ref={enteredPhoneNo} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control ref={enteredCity} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." ref={selectedState}>
              <option>Choose...</option>
              <option value="maharastra">maharastra</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control ref={enteredZip} />
          </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ProfileInputForm;
