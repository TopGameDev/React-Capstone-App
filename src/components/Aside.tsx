import UserType from "../types/auth";
import { Link } from 'react-router-dom'


type Props = {
    playerName: string
    loggedInUser: UserType|null
    getPlayerName: () => void;
    delData: () => void;
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
}

export default function Aside({playerName, loggedInUser ,getPlayerName, handleChange, delData}: Props) {
  return (
    <div className="aside-bar">
            <div className="panel">
                <div className="player-form-contain">
                    <div className="get-player-form">
                        <div className="form-spacing">
                            <label className="player-name-field">Enter Player Name:</label>
                            <input type="text" value={playerName} onChange={handleChange} />
                            <button type="submit" onClick={getPlayerName}>Get Stats</button>
                            <button type="submit" onClick={delData}>Clear</button>
                        </div>
                    </div>
                </div>
                <div className="spacing-username">
                    <div className="username">@{loggedInUser?.username}</div>
                </div>
                <div className="spacing-profile-img">
                    <div className="profile-image">

                    </div>
                </div>
                <div className="edit-profile-btn">
                        <Link to={'/editprofile'}>
                            <button >Edit Profile</button>
                        </Link>
                </div>
                <div className="spacing-tab">
                    <div className="tab">

                    </div>
                </div>
                <div className="spacing-profile-details">
                    <div className="profile-details">

                    </div>
                </div>
            </div>
        </div>
  )
}