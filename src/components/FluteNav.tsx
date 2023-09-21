import { useEffect } from "react";
import { Link } from 'react-router-dom'


type Props = {}

export default function FluteNav({}: Props) {

    useEffect(() => {
        const list = document.querySelectorAll('.nav-bar li');
    
        function active(this: HTMLElement) {
            list.forEach((li) => li.classList.remove('active'));
            this.classList.add('active');
        }
    
        list.forEach((li) => li.addEventListener('click', active));
    }, [])

  return (
    <ul className="nav-bar">
            <div className="pill">
                <li className="active">
                    <a href="/playerstats">
                        <span className="icon"><i className="fa-regular fa-user"></i></span>
                        <span className="text">Profile</span>
                    </a>
                </li>
                <li>
                    <Link to='/hub'>
                        <span className="icon"><i className="fa-solid fa-globe"></i></span>
                        <span className="text" >HUB</span>
                    </Link>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fa-regular fa-message"></i></span>
                        <span className="text">Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fa-regular fa-bell"></i></span>
                        <span className="text">Alerts</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fa-solid fa-people-group"></i></span>
                        <span className="text">Crew</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fa-solid fa-chart-line"></i></span>
                        <span className="text">Market</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fa-solid fa-shop"></i></span>
                        <span className="text">Shop</span>
                    </a>
                </li>
            </div>
        </ul>
  )
}