export const getProblems = async () => {
  const response = await fetch(`${process.env.BASE_API}get-os`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const createOs = async (payload) => {
  const response = await fetch(`${process.env.BASE_API}create-os`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};
