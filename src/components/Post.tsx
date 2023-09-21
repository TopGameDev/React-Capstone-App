import { Link } from 'react-router-dom'
import PostType from '../types/post'
import UserType from '../types/auth'
import Button from 'react-bootstrap/Button'



type Props = {
    post: PostType
    currentUser: UserType|null,
}

export default function Post({post, currentUser}: Props) {
  return (
    <div className="post-card text-center">
            <h5>@{post.author.username}</h5>
            <hr />
        <div className='card-body'>
            <p>{post.body}</p>
            <img src={post.imageUrl} alt="" className='post-image'/>
            { currentUser?.id === post.author.id && (
              <Link to={`/post/${post.id}`}>
                <Button variant='primary' className='btn-edit-post'>Edit Post</Button>
              </Link>
            )}
        </div>
    </div>
  )
}