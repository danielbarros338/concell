export const getProblems = async () => {
  const response = await fetch(`${process.env.BASE_API}get-os`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
