import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login, getUser } from "../lib/apiWrapper"
import CategoryType from "../types/category"
import UserType from "../types/auth"
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

type LoginProps = {
    isLoggedIn: boolean,
    logUserIn: (user:UserType) => void,
    flashMessage: (message: string|null, category: CategoryType|null) => void,
}

export default function Login({ isLoggedIn, logUserIn, flashMessage }: LoginProps) {
    const navigate = useNavigate();

    if (isLoggedIn){
        navigate('/')
    }

    const [user, setUser] = useState<Partial<UserType>>({username: '', password: ''});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const handleFormSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        const response = await login(user.username!, user.password!)
        if (response.error){
            flashMessage(response.error, 'danger')
        } else {
            localStorage.setItem('token', response.data?.token as string)
            localStorage.setItem('tokenExp', response.data?.tokenExpiration as string)
            const userResponse = await getUser(response.data?.token as string)
            logUserIn(userResponse.data!);
            navigate('/')
        }
    }



  return (
    <>
        <div className="login-background">
                <Card className='mt-3 login-card-contain'>
                    <Card.Body className="login-card">
                    <h1 className = 'login-text text-center'><strong>Log In</strong></h1>
                        <Form onSubmit={handleFormSubmit} className='form-login'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control name='username' value={user.username} onChange={handleInputChange}/>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name="password" value={user.password} onChange={handleInputChange}/>
                            <div className="btn-login">
                                <Button type="submit" variant="primary" className="w-50 mt-4 btn-login-color">Log In</Button>
                            </div>
                        </Form>
                        <p className="text-center dont-have-text">Dont have an account? <strong><a href="/register" className="signup-hyper">Sign Up</a></strong></p>
                    </Card.Body>
                </Card>
        </div>
    </>
  )
}