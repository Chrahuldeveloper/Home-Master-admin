import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

class AllOrders {
  async fetchUsers() {
    try {
      const usersCollectionRef = collection(db, "USERS");

      const querySnapshot = await getDocs(usersCollectionRef);

      const enquiries = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return enquiries.map((enquiry) => enquiry.orders || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }
}

export default AllOrders;
