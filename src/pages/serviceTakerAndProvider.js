import STAPList from "../components/CardsList/serviceTakerAndProviderList";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { onSnapshot, collection, query, where } from "firebase/firestore";

const STAP = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const type = urlParam.get("type");
    const collectionRef = collection(db, "serviceTakerAndProvider");
    let q = "";
    if (type === "service") {
      q = query(
        collectionRef,
        where("uid2", "==", localStorage.getItem("uid"))
      );
    } else if (type === "hire") {
      q = query(
        collectionRef,
        where("uid1", "==", localStorage.getItem("uid"))
      );
    }
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
  console.log(localStorage.getItem("uid"));

  const content = <STAPList services={services} />;
  return (
    <section>
      <section>{content}</section>
    </section>
  );
};

export default STAP;
