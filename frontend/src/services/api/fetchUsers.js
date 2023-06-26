import { swalApiError } from "../../util/swalApiError";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3333/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return response;
  } catch (error) {
    swalApiError();
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const response = await fetch('http://localhost:3333/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    return response;
  } catch (error) {
    swalApiError();
  }
}
