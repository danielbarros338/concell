export const SET_STEP_ONE = (state, payload) => {
  state.name = payload.name;
  state.surname = payload.surname;
  state.rg = payload.rg;
  state.cpf = payload.cpf;
};

export const SET_STEP_TWO = (state, payload) => {
  state.state = payload.state;
  state.city = payload.city;
  state.district = payload.district;
  state.street = payload.street;
  state.comp = payload.comp;
  state.cep = payload.cep;
};

export const SET_STEP_THREE = (state, payload) => {
  state.cellphone = payload.cellphone;
  state.email = payload.email;
};
