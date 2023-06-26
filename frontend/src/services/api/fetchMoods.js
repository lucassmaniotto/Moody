import { swalApiError } from "../../util/swalApiError";

export const getMoodOptions = async () => {
  try {
    const response = await fetch('http://localhost:3333/moods');
    const data = await response.json();
    return data;
  } catch (error) {
    swalApiError();
  }
};
