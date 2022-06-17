export const getPeople = async () => {
  return await fetch(`${process.env.BASE_API}get-people`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
