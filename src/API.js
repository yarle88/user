const URL="https://randomuser.me/api/?results=500"

export const getUsers=async () =>{
    const users = await fetch(URL);
    return await users.json();
}