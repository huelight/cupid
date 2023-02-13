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
          <h1>My Queen 👸🏽❤️</h1>

          <hr></hr>
          <p>Happy Valentine's Day, my love:</p>

          <p>
              I am writing this letter to let you know just how much I love and appreciate you. From the moment I met you, I knew that you were someone special. Your beautiful smile, your kind heart, and your amazing personality all drew me to you, and I feel so lucky to have you in my life, I can remember when we started it’s all fresh like we started yesterday
            </p>

          <p> 
              Every moment I spend with you is a treasure, and I cherish every laugh, every conversation, and every shared experience. You make my life better in so many ways, and I am constantly amazed by your strength, your intelligence, and your beauty.
            </p>
            
            <p> 
              I am filled with gratitude for all the ways you have enriched my life. You inspire me to be a better person every day, and I am so grateful for your love and support, even though sometimes you get on my nerve I have no other choice than to accept it , because I really value you 
            </p>
            <p> 
              I know that we will face challenges and obstacles in the years ahead, but I am confident that we can overcome anything as long as we face it together. I promise to always be there for you, to support you, and to love you with all my heart.
            </p>
            <p>
              Thank you for being my partner, my confidante, and my best friend. I love you more than words could ever express.
            </p>
          
          <p>
          Forever yours,
          <br></br>
              Your baby boy ❤️❤️</p>
            

          <button onClick={() => setShowPopup1(!showPopup1)}>I'm Always Yours</button>
          {showPopup1 && (
            <div className="pop-up-background">
        <div className="popup-container">
          <h3>I love you princess</h3>
                  <p>
                    My love for you burns bright<br></br>
                    As constant as day and night.
          </p>
                  <p>...Emmanuel</p>
                  <div>
                    <h6>This song expresses my emotions; please listen to it.</h6>
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