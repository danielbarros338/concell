import { getAllParts } from "src/services/parts.js";

export const getParts = async () => {
  try {
    const response = await getAllParts();
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};
