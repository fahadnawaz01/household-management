import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function STAPCard(props) {
  const urlParam = new URLSearchParams(window.location.search);
  const type = urlParam.get("type");
  let firstName = "";
  let lastName = "";
  let city = "";
  let state = "";
  let address = "";
  let zip = "";
  let phoneNo = "";
  let service = "";
  let uid = "";
  if (type === "hire") {
    firstName = props.firstName2;
    lastName = props.lastName2;
    city = props.city2;
    state = props.state2;
    address = props.address2;
    zip = props.zip2;
    phoneNo = props.phoneNo2;
    service = props.service;
    uid = props.uid2;
  } else if (type === "service") {
    firstName = props.firstName1;
    lastName = props.lastName1;
    city = props.city1;
    state = props.state1;
    address = props.address1;
    zip = props.zip1;
    phoneNo = props.phoneNo1;
    uid = props.uid1;
  }
  console.log(phoneNo);
  const setUrl = () => {
    window.location.href = "http://localhost:3000/message?uid=" + uid;
  };
  return (
    <div>
      <Card className="text-center">
        <Card.Header as="h5">
          {firstName} {lastName}
        </Card.Header>
        <Card.Body>
          <Card.Title>{service}</Card.Title>
          <Card.Text>
            {address}
            <br></br>
            {city} {state},{zip}
          </Card.Text>
          <Card
            style={{
              backgroundColor: "#9fe2bf",
              color: "#e27d60",
              border: "3px solid black",
            }}
          >
            Phone no: {phoneNo}
          </Card>
          <br></br>
          <Button
            onClick={setUrl}
            style={{
              backgroundColor: "#9fe2bf",
              color: "#e27d60",
              border: "3px solid black",
            }}
          >
            Message
          </Button>
        </Card.Body>
      </Card>
      <br></br>
    </div>
  );
}

export default STAPCard;
