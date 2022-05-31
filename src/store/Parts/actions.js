import { getAllParts } from "src/services/parts.js";

export const getParts = async ({ commit }) => {
  try {
    const response = await getAllParts();
    console.log(response);
    commit("SET_ALL_PARTS", response);
  } catch (err) {
    throw new Error(err.message);
  }
};
