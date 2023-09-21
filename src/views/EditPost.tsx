import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getPostById, editPostById, deletePostById } from "../lib/apiWrapper";
import CategoryType from "../types/category";
import PostType from "../types/post";
import UserType from "../types/auth";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

type EditPostProps = {
    flashMessage: (message: string|null, category: CategoryType|null) => void,
    currentUser: UserType|null
    isLoggedIn: boolean
}

export default function EditPost({ flashMessage, currentUser, isLoggedIn }: EditPostProps) {
    const { postId } = useParams();
    console.log(postId);
    const navigate = useNavigate();

    const [postToEdit, setPostToEdit] = useState<PostType|null>(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        async function getPost(){
            let response = await getPostById(postId!);
            if (response.error){
                flashMessage(response.error, 'danger')
                navigate('/hub')
            } else {
                setPostToEdit(response.data!)
                navigate('/hub')
            }
        }
        getPost()
    }, [flashMessage, navigate, postId])

    useEffect(() => {
        if (postToEdit){
            if (postToEdit.author.id !== currentUser?.id){
                flashMessage('You do not have permission to edit this post. Who do you think you are?!', 'danger');
            }

        }
    }, [postToEdit?.id])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostToEdit({...postToEdit, [event.target.name]: event.target.value} as PostType)
    }

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let token = localStorage.getItem('token') || ''
        let response = await editPostById(token, postId!, postToEdit!);
        if (response.error){
            flashMessage(response.error, 'danger')
        } else {
            flashMessage(`Post has been updated successfully`, 'success')
            navigate('/hub')
        }
    }

    const handleDeletePost = async () => {
        const token = localStorage.getItem('token') || ''
        const response = await deletePostById(token, postId!);
        if (response.error){
            flashMessage(response.error, 'danger')
        } else {
            flashMessage(response.data!, 'primary')
            navigate('/hub')
        }
    }


  return (
    <>
        {isLoggedIn && postToEdit &&
        (<div className="edit-post-contain">
            <Card className="edit-post-card">
                <Card.Body>
                    <h1 className="text-center edit-post-text">Register</h1>
                    <Form onSubmit={handleFormSubmit} className="edit-post-form">
                        <Form.Label>Edit Post Body</Form.Label>
                        <Form.Control name='body' as='textarea' value={postToEdit?.body} onChange={handleInputChange}/>
                        <div className="btn-contain">
                            <Button className="mt-3 w-50 btn-submit" type="submit">Edit Post</Button>
                            <Button className="mt-3 w-50 btn-delete" onClick={openModal}>Delete Post</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>)}
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this post? This action cannot be undone.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
                <Button variant="danger" onClick={handleDeletePost}>Delete Post</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}