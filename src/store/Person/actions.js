import * as person from "src/services/person.js";

export const getAllPeople = async ({ commit }) => {
  try {
    const response = await person.getPeople();
    commit("SET_PEOPLE", response);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const insertPeople = async (store, payload) => {
  try {
    const response = await person.createUser(payload);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};
