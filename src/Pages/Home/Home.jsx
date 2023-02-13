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
          <h1>Hey Sugar 💕...</h1>

          <hr></hr>
          <p>My dearest Natalie,</p>

          <p>
            As I sit down to write this message, I can't help but smile at the memories of the past year. It's been a year since we started this journey of love and happiness together, and I couldn't be more grateful for having you by my side.
          </p>

          <p> 
          You have brought so much joy, laughter and love into my life, and I am blessed to have you as my partner in every aspect. Your kindness, understanding, and unwavering support have been a constant source of comfort and inspiration to me.?
            </p>
            
            <p> 
              Today, on this special day of Valentine's and our first anniversary, I want you to know that my love for you only grows stronger each day. I promise to always be there for you, to support you, and to cherish you
               </p>
            <p> 
           Happy Valentine's Day, my love. Happy 1st anniversary. Here's to many more years of love, laughter, and happiness together.
            </p>
          
          <p>
          Yours always,
          <br></br>
              Daniel</p>
            

          <button onClick={() => setShowPopup1(!showPopup1)}>I'm Always Yours</button>
          {showPopup1 && (
            <div className="pop-up-background">
        <div className="popup-container">
          <h3>You own my Heart Mi Amor</h3>
          <p>Infinite love, a feeling so <strong>true,</strong><br></br>
            In my heart, my love, I'll always cherish <strong> you.</strong><br></br>
            Forever yours, till the end of <strong>time,</strong><br></br>
            You're the beat of my heart, my love <strong>divine.</strong>
          </p>
                  <p>...Daniel</p>
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
          <p>Shey you dey whine me? Close it and go and click on "I'm always Yours"</p>
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