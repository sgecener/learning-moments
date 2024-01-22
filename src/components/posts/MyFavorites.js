import { useEffect, useState } from "react"
import { getLikedPostByUserId, deleteLike } from "../../services/likeService"




export const MyFavorites = ({ currentUser }) => {
    const [myFav, setMyFav] = useState([])

    const likedPostsByUserId = () => {
        getLikedPostByUserId(currentUser.id).then((postArr) => {
            
            setMyFav(postArr)
        })
    }

    useEffect(() => {
        likedPostsByUserId()
    }, [])

    const handleLikeRemoval = (id) => {
        deleteLike(id).then(() => {
            likedPostsByUserId()
        })
    }
    
    
    return (
        <div className="post">
            <h1>My Favorites</h1>
            <div>
                {myFav.map((favorite) => {
                    return (
                        <div>
                            <div>Title: {favorite.post.title}
                            <span><button
                            key={favorite.id}
                            value={favorite.id} 
                            onClick={(e) => {
                                handleLikeRemoval(e.target.value)
                                }}>Remove</button></span></div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
        )

}