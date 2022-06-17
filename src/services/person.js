export const getPeople = async () => {
  const response = await fetch(`${process.env.BASE_API}get-people`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
