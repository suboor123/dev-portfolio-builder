import { child, get, push, ref, remove, set } from "firebase/database";
import { firebaseDatabase, firebaseStorage } from "../firebase-config";
import { ref as sRef } from "firebase/storage";

export const SkillModel = {
  /**
   * Collection name
   */
  path: "skills/",

  /**
   * Creates a new skill in firebase realtime database
   * @param {*} skill
   */
  createSkill(skill) {
    push(ref(firebaseDatabase, this.path), skill);
  },

  /**
   * Fetches list of skills from firebase realtime database
   * @returns 
   */
  async syncSkills() {
    const dbRef = ref(firebaseDatabase);
    return get(child(dbRef, this.path));
  },

  async deleteSkill(skillId) {
    const dbRef = ref(firebaseDatabase);
    return remove(child(dbRef, this.path + skillId));
  }
};
