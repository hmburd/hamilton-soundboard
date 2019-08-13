const fetchComments = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://hamilton-backend.herokuapp.com/comments/`,{
    headers: {
      'Content-Type': 'application/json',
      'X-Request-With': 'XMLHttpRequest'
    }
  })
    .then((response) => response.json())
}

const addComment = (commentObject) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://hamilton-backend.herokuapp.com/comments/`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Request-With': 'XMLHttpRequest'
    },
    method: 'POST',
    body: JSON.stringify(commentObject)
  })
}

export default {
  fetchComments,
  addComment
}