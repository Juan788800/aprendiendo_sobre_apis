export const createComments = ({postId, name, body}) => {
    fetch(`http://localhost:3000/comments`, {
        method: 'POST',
        body: JSON.stringify({
            postId,
            name,
            body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}