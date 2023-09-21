import { useState, useEffect } from "react"
import { getAllPosts, createPost } from "../lib/apiWrapper"
import FluteNav from "../components/FluteNav"
import Aside from "../components/Aside"
import Post from "../components/Post"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PostType from "../types/post"
import CategoryType from "../types/category"
import UserType from "../types/auth"


type Props = {
    isLoggedIn: boolean,
    flashMessage: (message: string|null, category: CategoryType|null) => void,
    getPlayerName: () => void
    loggedInUser: UserType|null
    playerName: string
}

export default function HUB({isLoggedIn, flashMessage, getPlayerName, loggedInUser, playerName}: Props) {
const [posts, setPosts] = useState<PostType[]>([]);
const [newPost, setNewPost] = useState<Partial<PostType>>({id: 1, title: '', body: ''})



useEffect(() => {
    async function fetchData(){
        const response = await getAllPosts();
        console.log(response)
        if (response.data){
            let posts = response.data
            posts.sort((a,b) => (new Date(a.dateCreated) > new Date(b.dateCreated) ? -1 : 1))
            setPosts(posts)
        }
    };

    fetchData();
}, [newPost.id])

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.name)
    setNewPost({...newPost, [event.target.name]: event.target.value})
}

const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const token = localStorage.getItem('token') || ''
    const response = await createPost(token, newPost);
    if(response.error){
        flashMessage(response.error, 'danger')
    } else {
        setNewPost({id: posts.length + 2, title: '', body: ''})
        flashMessage(`New Post has been created`, 'success')
    }
}
const clearData = () => {
    window.location.reload()
}

const handlePlayerNameChange = (event :React.ChangeEvent<HTMLInputElement>) => {
    return event
};
  return (
    <>
        {isLoggedIn && (<div className="content-hub">
            <FluteNav />
                <div className="form-body">
                    <div className="form-box">
                        <div className="post-box">
                            <Form className="post-form" onSubmit={handleFormSubmit}>
                                <Form.Label></Form.Label>
                                <Form.Control name='body' as={'textarea'} onChange={handleInputChange} value={newPost.body} placeholder='Any cool loot today?' />
                                <div className="btn-post-spacing">
                                    <Button className='mt-3 w-100 btn-post' variant='primary' type ='submit' >Create Post</Button>
                                </div>
                            </Form>
                        </div>
                        {isLoggedIn && posts.map(p => <Post post={p} key={p.id} currentUser={loggedInUser}/>)}
                    </div>
                </div>
            <Aside getPlayerName={getPlayerName} playerName={playerName} handleChange={handlePlayerNameChange} delData={clearData} loggedInUser={loggedInUser}/>
        </div>)}
    </>
  )
}