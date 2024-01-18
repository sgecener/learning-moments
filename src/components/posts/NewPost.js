import { useEffect, useState } from "react"
import {  newPost } from "../../services/postalService"
import { getAllTopics } from "../../services/topicService"
import { useNavigate } from "react-router-dom"


export const NewPost = ( { currentUser } ) => {

        const [allTopics, setAllTopics] = useState([])
        const [topic, setTopic] = useState(0)
        const [title, setTitle] = useState("")
        const [body, setBody] = useState("")

    const navigate = useNavigate()


    useEffect(() => {
		getAllTopics().then((topicsArray) => {
			setAllTopics(topicsArray)
		})
	}, [])

    useEffect(() => {
		setTopic(topic)
	
	}, [])


    const handleSavePost = (event) => {
        event.preventDefault()
        console.log("clicked");
    
        const editedPost =  {
            
            userId: currentUser.id,
            topicId: parseInt(topic),
            title: title,
            body: body,
            date: new Date().toLocaleDateString(),
            likes: 0
        }
    
        newPost(editedPost).then(() => {
            navigate(`/posts`)
        })
      } 

    return (

        <form >
      <h2>New Post</h2>
      <fieldset>
        <div>
            <label>Topic: </label>
            <select
                required
                onChange={(event) => {
                    setTopic(event.target.value)
                }}
            >
                <option className="topic-option" value={topic} key={0}>
                    Select a Topic...
                </option>
                {allTopics.map((topicObj) => {
                    return (
                        <option
                            value={topicObj.id}
                            key={topicObj.id} 
                            required
                        >
                            {topicObj.name}
                        </option>
                    )
                })}
            </select>
        </div>
		</fieldset>
      <fieldset>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            placeholder="Enter text..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Body</label>
          <textarea
            type="text"
            placeholder="Enter text..."
            value= {body}
            onChange={(event) => 
                setBody(event.target.value)
            }
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSavePost}>Post</button>
        </div>
      </fieldset>
    </form>
    )
}