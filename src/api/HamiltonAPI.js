// const fetchCommentByID = (wineID) => {
//   return fetch(`https://cors-anywhere.herokuapp.com/https://wineapi-cp.herokuapp.com/wines/${wineID}`)
//     .then((response) => response.json())
// }

const fetchComments = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://hamilton-backend.herokuapp.com/comments/`)
    .then((response) => response.json())
}

const addComment = (commentObject) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://hamilton-backend.herokuapp.com/comments`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(commentObject)
  })
}

export default {
  fetchComments,
  addComment
}