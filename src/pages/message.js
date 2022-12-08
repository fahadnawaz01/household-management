import { useRef, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { db } from "../firebase-config";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import MessageList from "../components/CardsList/messageList";

const Message = () => {
  const enteredMessage = useRef("");
  const urlParam = new URLSearchParams(window.location.search);
  const uid2 = urlParam.get("uid");
  const [msg, setMsg] = useState([]);
  let filteredMsg = new Array();
  let j = 0;

  useEffect(() => {
    const collectionRef = collection(db, "message");
    const q = query(collectionRef, orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMsg(items);
    });
    return () => {
      unsub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  for (let i = 0; i < msg.length; i++) {
    if (localStorage.getItem("uid") === msg[i].uid1 && uid2 === msg[i].uid2) {
      filteredMsg[j] = { msg: msg[i].message, type: "right" };
      j++;
    } else if (
      (uid2 === msg[i].uid2 && localStorage.getItem("uid") === msg[i].uid) ||
      (localStorage.getItem("uid") === msg[i].uid2 && uid2 === msg[i].uid1)
    ) {
      filteredMsg[j] = { msg: msg[i].message, type: "left" };
      j++;
    }
  }
  async function messageSendHandler(event) {
    event.preventDefault();
    const form = document.getElementById("profile");
    const docRef = await addDoc(collection(db, "message"), {
      message: enteredMessage.current.value,
      uid1: localStorage.getItem("uid"),
      uid2: uid2,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    console.log("added");
    form.reset();
  }
  console.log(filteredMsg);

  return (
    <div
      style={{
        backgroundColor: "#e27d60",
      }}
    >
      <Card>
        <MessageList msg={filteredMsg} />
      </Card>
      <Form id="profile" onSubmit={messageSendHandler}>
        <Row>
          <Col>
            <Form.Control ref={enteredMessage}></Form.Control>
            <Button
              style={{
                backgroundColor: "#9fe2bf",
                color: "#e27d60",
                border: "3px solid black",
              }}
              type="submit"
            >
              Send
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Message;
