export default async function getUsersDetails(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}