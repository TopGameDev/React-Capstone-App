import { useState } from "react";
import PostType from "../types/post";
import ContactUs from "../components/ContactUs";



type HomeProps = {
    isLoggedIn: boolean,
}

export default function Home({ isLoggedIn }: HomeProps) {
const [newMessage, setNewMessage] = useState<Partial<PostType>>({id: 1, title: '', email: '', message: ''})

const handleContactUsFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.name)
    setNewMessage({...newMessage, [event.target.name]: event.target.value})
}

  return (
    <>
        <div className="contain">
            <div className="box-contain">
                <div className="box1">
                    <div className="box1-spacing">
                        <h1>Welcome To</h1>
                        <h1>The Lounge</h1>
                        <h4>Welcome to the ultimate gaming haven, where socializing and gaming collide!</h4>
                    </div>
                </div>
                <div className="box2">
                    <div className="box2-spacing">
                        <img src="Saradomin_godsword_detail.webp" alt="" className="saragodsword"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="contain">
            <div className="box-contain">
                <div className="feature-one-image">
                    <div className="feature-one-image-spacing">
                        <img src="Highscore_Podium.png" alt="" className="podium-image"/>
                    </div>
                </div>
                <div className="feature-one-text">
                    <div className="feature-one-text-spacing">
                        <p>Unleash Your Inner Champion with our Highscore Tracker! Our latest feature lets you keep a vigilant eye on your gaming progress like never before. Track your highscores, conquer the leaderboards, and cement your place as the ultimate gaming virtuoso.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contain">
            <div className="box-contain">
                <div className="feature-two-text">
                    <div className="feature-two-text-spacing">
                        <p>Level Up Your Connections with our cutting-edge chat feature that brings gamers together like never before. Engage in real-time conversations, strategize with your squad, and form alliances with fellow gamers from around the globe.</p>
                    </div>
                </div>
                <div className="feature-two-image">
                    <div className="feature-two-image-spacing">
                        <img src="ChatBubbles.png" alt="" className="chatbubbles"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="contain">
            <div className="box-contain">
                <div className="feature-three-image">
                    <div className="feature-three-image-spacing">
                        <img src="market.png" alt="" className="market" />
                    </div>
                </div>
                <div className="feature-three-text">
                    <div className="feature-three-text-spacing">
                        <p>Master the In-Game Economy with LootMarket Pro! Our market data tracker empowers you to navigate the intricate world of in-game items and their price fluctuations. Stay one step ahead by monitoring the rise and fall of your virtual treasures, making informed decisions about when to buy, sell, or trade.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="form-contain">
            <div className="form-box-contain">
                <ContactUs handleChange={handleContactUsFormChange} newMessage={newMessage} isLoggedIn={isLoggedIn}/>
            </div>
        </div>
    </>
  )
}