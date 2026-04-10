export const get = async (url, method= "GET", body= {}, ) => {
    const solicitud = await fetch(`http://localhost:3000/${url}`);
    const data = await solicitud.json()
    return data;
}