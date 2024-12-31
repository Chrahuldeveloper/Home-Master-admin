import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

class Enquires {
  async fetchUsers() {
    try {
      const usersCollectionRef = collection(db, "USERS");

      const querySnapshot = await getDocs(usersCollectionRef);

      const enquiries = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return enquiries.map((enquiry) => enquiry.contactusers || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }
}

export default Enquires;
