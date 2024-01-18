


export const getAllPosts = async () => {
    return fetch(
        "http://localhost:8088/posts"
      ).then((res) => res.json());
}

export const getPostByPostId = (id) => {
  return fetch(`http://localhost:8088/posts?id=${id}&_expand=user`
  ).then((res) => res.json());
}

export const getPostByUserId = (currentUser) => {
	return fetch(
		`http://localhost:8088/posts?userId=${currentUser}&_expand=topic`
	).then((res) => res.json())
  }

  export const deletePost = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`, {
      method: "DELETE"
    })
  }

export const updatePost = (post) => {
  return fetch(`http://localhost:8088/posts/${post.id}` , {
    method: "PUT",
    headers: {
      "Content-Type" : 'application/json'
    },
    
    body: JSON.stringify(post)

  }) 


}

export const newPost = (post) => {
    return fetch("http://localhost:8088/posts" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)

    })
}