export const getPeople = async () => {
  const response = await fetch(`${process.env.BASE_API}get-people`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const createUser = async (payload) => {
  const response = await fetch(`${process.env.BASE_API}create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};
