export const getComments = async() => {
    const solicitud = await fetch(`http://localhost:3000/comments`);
    const data = await solicitud.json()
    return data;
}