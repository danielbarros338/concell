import { getAllParts, addNewPart } from "src/services/parts.js";

export const getParts = async ({ commit }) => {
  try {
    const response = await getAllParts();
    commit("SET_ALL_PARTS", response);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const setPart = async ({ commit }, payload) => {
  try {
    await addNewPart(payload);
  } catch (err) {
    throw new Error(err.message);
  }
};
