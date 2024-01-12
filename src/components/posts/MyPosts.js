import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { deletePost, getPostByUserId } from "../../services/postalService"



export const MyPosts = ({ currentUser }) => {
	const [myPosts, setMyPosts] = useState([])

	const getMyPosts = () => {
		if (currentUser) {
			getPostByUserId(currentUser.id).then((myPostArr) => {
				setMyPosts(myPostArr)
			})
		}
	}

	useEffect(() => {
		getMyPosts()
		
	}, [])

	const handleDelete = (deleteId) => {
		deletePost(deleteId).then(() => {
			getMyPosts()
		})
	}

	return (
		<div className="posts-container">
			<h2>My Posts</h2>
			{myPosts.map((postObj) => {
				return (
					<section  key={postObj.id}>
						<div >
							<Link to={`/posts/${postObj.id}`}>
								<div>{postObj.title}</div>
							</Link>
							<button
								className="delete-btn btn-primary"
								value={postObj.id}
								onClick={(event) => {
									handleDelete(event.target.value)
								}}
							>
								Delete Post
							</button>
						</div>
					</section>
				)
			})}
		</div>
	)
}