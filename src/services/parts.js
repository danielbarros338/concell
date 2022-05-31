export const getAllParts = async () => {
  const response = await fetch(`${process.env.BASE_API}get-parts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
