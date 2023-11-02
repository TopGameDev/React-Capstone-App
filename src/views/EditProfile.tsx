import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { editUser, getUser } from '../lib/apiWrapper'
import UserType from '../types/auth'
import CategoryType from '../types/category'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

type Props = {
    flashMessage: (message: string|null, category: CategoryType|null) => void,
    user: UserType
    isLoggedIn: boolean
}

export default function EditProfile({ flashMessage, user, isLoggedIn }: Props) {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState<UserType|null>(null)
    const [editProfileInfo, setEditProfileInfo] = useState<Partial<UserType>>(
        {
            firstName: '', 
            lastName: '', 
            username: '', 
            email: '',
        }
    );

    useEffect(() => {
        
        getUser(localStorage.getItem('token') as string)
            .then(response => {
                if (response.data){
                    setCurrentUser(response.data)
                }
            })
        .catch(err => console.error(err))
        
      }, [currentUser])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEditProfileInfo({...editProfileInfo, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
        const token = localStorage.getItem('token') || ''
        let response = await editUser(token, user.id, editProfileInfo!)
        if (response.error) {
            flashMessage(response.error, 'danger')
        } else {
            flashMessage('Profile Edited Successfully', 'success')
            console.log(editProfileInfo)
            navigate('/playerstats')
        }
    }

  return (
    <>
        {isLoggedIn && (<div className="edit-user-content">
            <Card className='mt-3 edit-user-card'>
                <Card.Body>
                <h1 className="text-center edit-user-text">Register</h1>
                    <Form onSubmit={handleFormSubmit} className="edit-user-form">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name='firstName' value={editProfileInfo.firstName} onChange={handleInputChange}/>

                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name='lastName' value={editProfileInfo.lastName} onChange={handleInputChange}/>
                    
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type='email' value={editProfileInfo.email} onChange={handleInputChange}/>

                        <Form.Label>Username</Form.Label>
                        <Form.Control name='username' value={editProfileInfo.username} onChange={handleInputChange}/>
                        <div className="btn-edit-user">
                            <Button type='submit' variant='primary' className='w-50 mt-3 btn-edit-user-color'>Edit User</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>        
        </div>)}
    </>
  )
}