import ServiceList from "../components/CardsList/serviceList";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { onSnapshot, collection, query, where } from "firebase/firestore";

const LookForServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "serviceDetails");
    const q = query(
      collectionRef,
      where("uid", "!=", localStorage.getItem("uid"))
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setServices(items);
    });
    return () => {
      unsub();
    };
  }, []);
  console.log(localStorage.getItem("uid"));
  const content = <ServiceList services={services} />;
  return (
    <section>
      <section>{content}</section>
    </section>
  );
};

export default LookForServices;
