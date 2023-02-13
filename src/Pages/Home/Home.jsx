import React, { useState } from 'react'
import { Background } from '../../Component'
import AudioPlayer from '../../Component/Audio/AudioPlayer.jsx'
import {i1, i2, i3, i4, i5} from '../../Assets'
import './Home.css'





const Home = () => {

  
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const images = [i1, i2, i3, i4, i5];
  



  return (
    <div>
        <Background images={images}>
        <div className='cupid__landing'>
          <div className='cupid__content'>
          <h1>Hey Cutie 👸🏽</h1>

          <hr></hr>
          <p>Happy Valentine's Day,</p>

          <p>
              I just wanted to let you know how special you are to me and how grateful I am for your friendship.
            </p>

          <p> 
              Your kindness and warmth always brighten my day and bring a smile to my face. You are a true gem and I feel lucky to have you in my life.
            </p>
            
            <p> 
              I hope this Valentine's Day is as wonderful as you are and that it brings you all the love and happiness you deserve.
            </p>

            <p> 
              Wishing you a day filled with joy and love, princess. 
            </p>
          
          <p>
          You are always in my thoughts.
          <br></br>
              Daniel❤️</p>
            

          <button onClick={() => setShowPopup1(!showPopup1)}>Yea, I am your friend</button>
          {showPopup1 && (
            <div className="pop-up-background">
        <div className="popup-container">
          <h3>Paulina</h3>
                  <p>
                  Our friendship will be strong, that's a fact<br />
                  We're bonded by laughter, no turning back<br />
                  You make me smile, even when I frown,<br />
                  Together we'll conquer this crazy town. <br />

          </p>
                  <p>...Daniel</p>
                  <div>
                    <h6>I hope you like this song, please listen to it.</h6>
                    <AudioPlayer />
                  </div>
                  
          <button onClick={() => setShowPopup1(!showPopup1)}>Close</button>
        </div>
        </div>
      )}

          <button onClick={() => setShowPopup2(!showPopup2)}>Sorry, not Interested</button>
          {showPopup2 && (
            <div className="pop-up-background">
        <div className="popup-container">
          <h3>🤔🤔👀!!!</h3>
          <p>I'm sorry but this is not an option</p>
          <button onClick={() => setShowPopup2(!showPopup2)}>Close</button>
        </div>
        </div>
      )}


          </div>
          
        </div>

        </Background>
        
    </div>
  )
}

export default Home