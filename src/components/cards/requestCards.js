import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { doc, deleteDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useEffect, useState } from "react";
import { onSnapshot, query, where } from "firebase/firestore";
import "./requestCards.css";
function RequestCards(props) {
  const [user1, setUser1] = useState();
  const [user2, setUser2] = useState();
  const urlParam = new URLSearchParams(window.location.search);
  const type = urlParam.get("type");

  useEffect(() => {
    const collectionRef = collection(db, "user");
    const q = query(collectionRef, where("uid", "==", props.uid1));
    const unsub = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUser1(items);
    });
    return () => {
      unsub();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const collectionRef = collection(db, "user");
    const q = query(collectionRef, where("uid", "==", props.uid2));
    const unsub = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUser2(items);
    });
    return () => {
      unsub();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rejectHandler = async () => {
    if (type === "hire") {
      await deleteDoc(doc(db, "hireRequests", props.id));
    } else if (type === "service") {
      await deleteDoc(doc(db, "serviceRequests", props.id));
    }
  };
  const acceptHandler = async () => {
    if (type === "hire") {
      await deleteDoc(doc(db, "hireRequests", props.id));
      const docRef = await addDoc(collection(db, "serviceTakerAndProvider"), {
        uid1: props.uid1,
        uid2: props.uid2,
        firstName1: user1[0].firstName,
        lastName1: user1[0].secondName,
        city1: user1[0].city,
        state1: user1[0].state,
        address1: user1[0].address,
        zip1: user1[0].zip,
        phoneNo1: user1[0].phoneNo,
        firstName2: user2[0].firstName,
        lastName2: user2[0].secondName,
        city2: user2[0].city,
        state2: user2[0].state,
        address2: user2[0].address,
        zip2: user2[0].zip,
        phoneNo2: user2[0].phoneNo,
        service: props.service,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("added");
    } else if (type === "service") {
      await deleteDoc(doc(db, "serviceRequests", props.id));
      const docRef = await addDoc(collection(db, "serviceTakerAndProvider"), {
        uid1: props.uid2,
        uid2: props.uid1,
        firstName1: user2[0].firstName,
        lastName1: user2[0].secondName,
        city1: user2[0].city,
        state1: user2[0].state,
        address1: user2[0].address,
        zip1: user2[0].zip,
        phoneNo1: user2[0].phoneNo,
        firstName2: user1[0].firstName,
        lastName2: user1[0].secondName,
        city2: user1[0].city,
        state2: user1[0].state,
        address2: user1[0].address,
        zip2: user1[0].zip,
        phoneNo2: user1[0].phoneNo,
        service: props.service,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("added");
    }
  };
  return (
    <div>
      <Card className="text-center">
        <Card.Header as={Row} md="4">
          {props.firstName} {props.lastName}
          <div className="left">
            <Row>
              <Col>
                <Button className="accbutton" onClick={acceptHandler}>
                  Accept
                </Button>
              </Col>

              <Col>
                <Button className="rejbutton" onClick={rejectHandler}>
                  Reject
                </Button>
              </Col>
            </Row>
          </div>
        </Card.Header>
      </Card>
      <br></br>
    </div>
  );
}

export default RequestCards;
