import { child, get, push, ref, remove, set } from "firebase/database";
import {
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { firebaseDatabase, firebaseStorage } from "../firebase-config";
import { ref as sRef } from "firebase/storage";
import {makeRandomNumber} from './random-id-generator'


export const ProjectModel = {
  /**
   * Collection name
   */
  path: "projects/",

  /**
   * Sync projects from firebase realtime database
   */
  async syncProjects() {
    const dbRef = ref(firebaseDatabase);
    return get(child(dbRef, this.path));
  },

  /**
   * Created project in firebase realtime database
   */
  async createProject(project) {
    push(ref(firebaseDatabase, this.path), project);
  },

  /**
   * Upload project image to firebase storage
   * @param {*} imageFile
   * @param {*} callback
   */
  async uploadProjectImage(imageFile, callback) {
    const storageRef = sRef(
      firebaseStorage,
      `${this.path}/${
        makeRandomNumber()
      }.jpg`
    );
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          callback(downloadURL);
        });
      }
    );
  },

  async deleteProject(projectId) {
    const dbRef = ref(firebaseDatabase);
    return remove(child(dbRef, this.path + projectId));
  },


  async syncProjectById(projectId) {
    const dbRef = ref(firebaseDatabase);
    return get(child(dbRef, this.path + projectId));
  }
};
