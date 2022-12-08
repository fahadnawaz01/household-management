import ApplyForServicesForm from "../components/Services/FillServicesForm";
import { db } from "../firebase-config";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc
} from "firebase/firestore";
import { useEffect, useState } from "react";
const FillServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "serviceDetails");
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
  async function addServiceProviderHandler(serviceDetails) {
    if (services.length === 0) {
      const docRef = await addDoc(
        collection(db, "serviceDetails"),
        serviceDetails
      );
      console.log("Document written with ID: ", docRef.id);
      console.log("added");
    }
  }

  return (
    <ApplyForServicesForm
      onAddServiceProviderDetails={addServiceProviderHandler}
    />
  );
};

export default FillServices;
