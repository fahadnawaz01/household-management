import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../../firebase-config";
import "./basic example.css";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

function Cards(props) {
  const [users, setUsers] = useState([]);
  const [request, setRequest] = useState([]);
  let content = "";

  useEffect(() => {
    const collectionRef = collection(db, "user"); //get the values of first and last name from the profile
    const q = query(
      collectionRef,
      where("uid", "==", localStorage.getItem("uid"))
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items);
    });
    return () => {
      unsub();
    };
  }, []);
  async function requestHandler() {
    if (props.time) {
      const docRef = await addDoc(collection(db, "serviceRequests"), {
        //posting all the values in the request database
        uid1: localStorage.getItem("uid"),
        uid2: props.uid,
        firstName: users[0].firstName,
        lastName: users[0].secondName,
        service: props.service,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("added");
    } else if (props.responseTime) {
      const docRef = await addDoc(collection(db, "hireRequests"), {
        //posting all the values in the request database
        uid1: localStorage.getItem("uid"),
        uid2: props.uid,
        firstName: users[0].firstName,
        lastName: users[0].secondName,
        service: props.service,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("added");
    }
  }

  useEffect(() => {
    let requestRef;
    if (props.time) {
      requestRef = collection(db, "serviceRequests");
    } //get the values of first and last name from the profile
    else if (props.responseTime) {
      requestRef = collection(db, "hireRequests");
    }
    const q1 = query(
      requestRef,
      where(
        "uid1",
        "==",
        localStorage.getItem("uid"),
        "&&",
        "uid2",
        "==",
        props.uid
      )
    );

    const unsub = onSnapshot(q1, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setRequest(items);
    });
    return () => {
      unsub();
    };
  }, [props.uid, props.responseTime, props.time]);

  content = (
    <Button variant="primary" onClick={requestHandler}>
      Request
    </Button>
  );

  for (let i = 0; i < request.length; i++) {
    if (request[i].uid2 === props.uid) {
      content = <Form.Label>Request Sent</Form.Label>;
    }
  }

  return (
    <div>
      <Card
        className="text-center"
        style={{ backgroundColor: "#e27d60", border: "3px solid black" }}
      >
        <Card.Header as="h5">
          {props.firstName} {props.lastName}
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.service}</Card.Title>
          <Card.Text>
            {props.address}
            <br></br>
            {props.city},{props.zip}
          </Card.Text>
          {props.description && (
            <Card
              style={{
                backgroundColor: "#9fe2bf",
                border: "3px solid black",
                color: "black",
              }}
            >
              {props.description}
            </Card>
          )}
          <br></br>
          <Row>
            <Col>
              {props.responseTime && (
                <Card
                  style={{
                    backgroundColor: "#9fe2bf",
                    border: "3px solid black",
                    color: "black",
                  }}
                >
                  Response Time : {props.responseTime}
                </Card>
              )}
            </Col>
            {props.time && (
              <Card
                style={{
                  backgroundColor: "#9fe2bf",
                  border: "3px solid black",
                  color: "black",
                }}
              >
                Prefered Time : {props.time}
              </Card>
            )}
            <Col>
              {props.startTime && (
                <Card
                  style={{
                    backgroundColor: "#9fe2bf",
                    border: "3px solid black",
                    color: "black",
                  }}
                >
                  Working Time : {props.startTime} - {props.endTime}
                </Card>
              )}
            </Col>
          </Row>
          <br></br>
          {content}
        </Card.Body>
      </Card>
      <br></br>
    </div>
  );
}

export default Cards;
