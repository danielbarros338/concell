import * as problems from "src/services/problems.js";

export const getAllOs = async ({ commit }) => {
  try {
    const response = await problems.getProblems();
    commit("SET_OS_LIST", response);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const createNewOs = async (store, payload) => {
  try {
    const response = problems.createOs(payload);
    console.log(response);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};
