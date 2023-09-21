import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

type NavigationProps = {
    isLoggedIn: boolean,
    handleClick: ()=>void
}

export default function Navigation({ isLoggedIn, handleClick }:NavigationProps) {

    return (
        <Navbar bg='dark' data-bs-theme='dark'>
                <Navbar.Brand as={Link} to='/' className='lounge-logo'>Gamer Lounge</Navbar.Brand>
                <Nav className='me-auto nav-links'>
                    { isLoggedIn ? (
                        <>
                            <Nav.Link as={Link} to='/' >Home</Nav.Link>
                            <Nav.Link as={Link} to='/'>Features</Nav.Link>
                            <Nav.Link as={Link} to='/'>FAQ</Nav.Link>
                            <Nav.Link as={Link} to='/'>About Us</Nav.Link>
                            <Nav.Link as={Link} to='/playerstats'>Dashboard</Nav.Link>
                        </>
                    ):(
                        <>
                        <Nav.Link as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link as={Link} to='/'>Features</Nav.Link>
                        <Nav.Link as={Link} to='/register'>Sign Up</Nav.Link>
                        <Nav.Link as={Link} to='/'>FAQ</Nav.Link>
                        <Nav.Link as={Link} to='/'>About Us</Nav.Link>
                        
                        </>

                    )}
                </Nav>
                {isLoggedIn ? (<Nav.Link as='button' onClick={handleClick} className='log-out'>Log Out</Nav.Link>) : (<Nav.Link as={Link} to='/login' className='log-in'>Log In</Nav.Link>)}
        </Navbar>
        
    )
}