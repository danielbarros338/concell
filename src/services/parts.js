export const getAllParts = async () => {
  const response = await fetch(`${process.env.BASE_API}get-parts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const addNewPart = async (payload) => {
  const response = await fetch(`${process.env.BASE_API}add-part`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};

export const deleteSomePart = async (payload) => {
  const response = await fetch(`${process.env.BASE_API}delete-part`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};

export const updateSomePart = async (payload) => {
  const response = await fetch(`${process.env.BASE_API}add-some-part`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};

export const getAllUsedParts = async (payload) => {
  const response = await fetch(`${process.env.BASE_API}get-used-parts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
