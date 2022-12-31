import { child, get, ref, set } from "firebase/database";
import { firebaseDatabase } from "../firebase-config";

export const UserModel = {
  /**
   * Collection name
   */
  path: "user/",

  /**
   * Sync user detail from firebase realtime database
   */
  async syncUser() {
    const dbRef = ref(firebaseDatabase);
    return get(child(dbRef, this.path))
  },

  /**
   * Created user in firebase realtime database
   */
  async createUser(user) {
    set(ref(firebaseDatabase, this.path), user);
  },
};

