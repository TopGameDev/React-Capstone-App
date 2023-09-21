import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { getUser } from './lib/apiWrapper';
import Home from './views/Home'
import PlayerStats from './views/PlayerStats';
import Register from './views/Register';
import Login from './views/Login';
import HUB from './views/HUB';
import EditPost from './views/EditPost';
import EditProfile from './views/EditProfile';
import Navigation from "./components/Navigation";
import AlertMessage from './components/AlertMessage';
import UserType from './types/auth';
import CategoryType from './types/category';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp') as string) > new Date()) || false)
  const [loggedInUser, setLoggedInUser] = useState<UserType|null>(null);

  const [message, setMessage] = useState<string|null>(null);
  const [category, setCategory] = useState<CategoryType|null>(null)

  const getPlayerName = () => {
    return 
  }

  const navigation = useNavigate()

  useEffect(() => {
    if (isLoggedIn){
        getUser(localStorage.getItem('token') as string)
            .then(response => {
                if (response.data){
                    setLoggedInUser(response.data)
                    console.log(loggedInUser)
                }
            })
        .catch(err => console.error(err))
    }
  }, [isLoggedIn])

  const logUserIn = (user:UserType):void => {
    setIsLoggedIn(true);
    setLoggedInUser(user);
    flashMessage(`${user.username} has logged in`, 'success');
  }

  const logUserOut = (): void => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExp')
    flashMessage('You have logged out', 'info');
    navigation('/')
  }

  const flashMessage = (newMessage:string|null, newCategory:CategoryType|null):void =>{
    setMessage(newMessage);
    setCategory(newCategory)
  }

  return (
    <>
      <div>
        <Navigation isLoggedIn={isLoggedIn} handleClick={logUserOut}/>
          {message && <AlertMessage category={category!} message={message} flashMessage={flashMessage}/>}
          <Routes>
              <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} />
              <Route path='/login' element={<Login isLoggedIn={isLoggedIn} logUserIn={logUserIn} flashMessage={flashMessage} />} />
              <Route path='/register' element={<Register logUserIn={logUserIn} flashMessage={flashMessage}/>} />
              <Route path='/playerstats' element={<PlayerStats loggedInUser={loggedInUser} isLoggedIn={isLoggedIn}/>} />
              <Route path='/hub' element={<HUB isLoggedIn={isLoggedIn} flashMessage={flashMessage} loggedInUser={loggedInUser} getPlayerName={getPlayerName} playerName={''}/>} />
              <Route path='/editprofile' element={<EditProfile flashMessage={flashMessage} user={loggedInUser as UserType} isLoggedIn={isLoggedIn}/>} />
              <Route path='/post/:postId' element={<EditPost flashMessage={flashMessage} currentUser={loggedInUser} isLoggedIn={isLoggedIn}/>} />
          </Routes>
      </div>
    </>
  )
}