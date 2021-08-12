import axios from "axios"
    
async function getUsers() {
  try {
    const users = await axios.get("https://random-data-api.com/api/users/random_user?size=20");
    return users.data;
  } catch(err) {
    console.log("error: ", err);
  }
}
  
export default getUsers