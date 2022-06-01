import { getAllParts, addNewPart, updateSomePart } from "src/services/parts.js";

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
    const response = await addNewPart(payload);

    if (response.status == 201) return true;
    if (response.status != 201) return false;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateQuantityPart = async ({ commit }, payload) => {
  try {
    const response = await updateSomePart(payload);

    if (response.status == 200) return true;
    if (response.status != 200) return false;
  } catch (err) {
    throw new Error(err.message);
  }
};
