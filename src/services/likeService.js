

export const likePost = (post) => {
    return fetch(`http://localhost:8088/likes` , {
      method: "POST",
      headers: {
        "Content-Type" : 'application/json'
      },
      
      body: JSON.stringify(post)
  
    }) 
  }

  export const deleteLike = (id) => {
    return fetch(`http://localhost:8088/likes/${id}`, {
      method: "DELETE"
    })
  }

  export const getLikedPostByUserId = (userId) => {
    return fetch(`http://localhost:8088/likes?userId=${userId}&_expand=user&_expand=post`).then((res) => res.json())
  }