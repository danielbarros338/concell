import * as partService from "src/services/parts.js";

export const getParts = async ({ commit }) => {
  try {
    const response = await partService.getAllParts();
    commit("SET_ALL_PARTS", response);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const setPart = async ({ commit }, payload) => {
  try {
    const response = await partService.addNewPart(payload);

    if (response.status == 201) return true;
    if (response.status != 201) return false;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteQuantityPart = async ({ commit }, payload) => {
  try {
    const response = await partService.deleteSomePart(payload);

    if (response.status == 200) return true;
    if (response.status != 200) return false;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateQuantityPart = async ({ commit }, payload) => {
  try {
    const response = await partService.updateSomePart(payload);

    if (response.status == 200) return true;
    if (response.status != 200) return false;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getUsedParts = async ({ commit }) => {
  try {
    const response = await partService.getAllUsedParts();
    commit("SET_ALL_USED_PARTS", response);
  } catch (err) {
    throw new Error(err.message);
  }
};
