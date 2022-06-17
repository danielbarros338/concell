import * as person from "src/services/person.js";

export const getAllPeople = async ({ commit }) => {
  try {
    const response = await person.getPeople();
    console.log(response);
    commit("SET_PEOPLE", response);
  } catch (err) {
    throw new Error(err.message);
  }
};
