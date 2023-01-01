import { child, get, ref, set } from "firebase/database";
import { getDownloadURL, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { firebaseDatabase, firebaseStorage } from "../firebase-config";
import { ref as sRef } from 'firebase/storage';
import {makeRandomNumber} from './random-id-generator'

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

  async setUserProfilePicture(imageFile, callback) {
    const storageRef = sRef(firebaseStorage, `${this.path}/${makeRandomNumber()}.jpg`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on('state_changed', 
      (snapshot) => {}, 
      (error) => {}, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await set(ref(firebaseDatabase, `${this.path}/imageUrl`), downloadURL);
          callback()
        });
      }
    );
  },

  get isAdmin() {
    return localStorage.getItem("secret") === "suboor@123";
  }
};

