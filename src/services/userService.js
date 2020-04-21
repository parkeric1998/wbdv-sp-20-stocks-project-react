import { apiUrl } from '../constants'


const registerUser = async (user) => {
  const response = await fetch(`${apiUrl}/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    }
  });
  return await response.json();
};


/*
returns:
{
name: "John Smith",
stocks: ["AAPL"],
}
 */

const findProfile = async () => {
   const response = await fetch(`${apiUrl}/profile`);
   return await response.json();
 };


export default {
  findProfile,
  registerUser
}