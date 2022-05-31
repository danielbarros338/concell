export const getAllParts = async () => {
  const response = await fetch(`${process.env.BASE_API}/get-parts`, {
    method: "GET",
  });

  return JSON.parse(response);
};
