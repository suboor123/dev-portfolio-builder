import { child, get, push, ref, remove, set } from "firebase/database";
import {
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { firebaseDatabase, firebaseStorage } from "../firebase-config";
import { ref as sRef } from "firebase/storage";
import {makeRandomNumber} from './random-id-generator'


export const BlogModel = {
  /**
   * Collection name
   */
  path: "blogs/",

 
  async syncBlogs() {
    const dbRef = ref(firebaseDatabase);
    return get(child(dbRef, this.path));
  },


  async createBlog(blog) {
    push(ref(firebaseDatabase, this.path), blog);
  },

  /**
   * Upload project image to firebase storage
   * @param {*} imageFile
   * @param {*} callback
   */
  async uploadBlogImage(imageFile, callback) {
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

  async deleteBlog(blogId) {
    const dbRef = ref(firebaseDatabase);
    return remove(child(dbRef, this.path + blogId));
  },


  async syncBlogById(blogId) {
    const dbRef = ref(firebaseDatabase);
    return get(child(dbRef, this.path + blogId));
  }
};
