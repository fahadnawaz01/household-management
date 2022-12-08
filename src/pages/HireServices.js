import HireServicesForm from "../components/Services/HireServicesForm";
import { db } from "../firebase-config";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const HireServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "hireService");
    const q = query(
      collectionRef,
      where("uid", "==", localStorage.getItem("uid"))
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
  async function hireServiceHandler(serviceDetails) {
    if (services.length === 0) {
      const docRef = await addDoc(
        collection(db, "hireService"),
        serviceDetails
      );
      console.log("Document written with ID: ", docRef.id);
      console.log("added");
    }
  }

  return <HireServicesForm onHireService={hireServiceHandler} />;
};

export default HireServices;
