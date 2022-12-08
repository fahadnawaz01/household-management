import RequestList from "../components/CardsList/requestList";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { onSnapshot, collection, query, where } from "firebase/firestore";

const Request = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const type = urlParam.get("type");
    let collectionRef = "";
    if (type === "hire") {
      collectionRef = collection(db, "hireRequests");
    } else if (type === "service") {
      collectionRef = collection(db, "serviceRequests");
    }
    const q = query(
      collectionRef,
      where("uid2", "==", localStorage.getItem("uid"))
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, data: doc.data() });
      });
      setServices(items);
    });
    return () => {
      unsub();
    };
  }, []);

  console.log(services);

  const content = <RequestList services={services} />;
  return (
    <section>
      <section>{content}</section>
    </section>
  );
};

export default Request;
