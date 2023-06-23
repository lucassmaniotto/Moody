export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3333/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
