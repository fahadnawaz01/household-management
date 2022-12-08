import ApplyForService from "../components/CardsList/applyForServiceList";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { onSnapshot, collection, query, where } from "firebase/firestore";

const ApplyServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "hireService");
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


  const content = <ApplyForService services={services} />;
  return (
    <section>
      <section>{content}</section>
    </section>
  );
};

export default ApplyServices;
