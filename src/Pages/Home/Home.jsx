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
          <h1>My Princess 👸🏽❤️</h1>

          <hr></hr>
          <p>Happy Valentine's Day, my love:</p>

          <p>
             Although distance separates us, my love for you grows stronger each day.  </p>

          <p> 
              Your warmth and kindness shines through even the miles between us. I cherish the memories we have made and look forward to creating more in the future.
            </p>
            
            <p> 
              You hold a special place in my heart and I can't wait to hold you in my arms.
            </p>

            <p> 
              Sending you all my love, hugs and kisses from afar. 
            </p>
          
          <p>
          You are always in my thoughts.
          <br></br>
              Daniel❤️❤️</p>
            

          <button onClick={() => setShowPopup1(!showPopup1)}>I'm Always Yours</button>
          {showPopup1 && (
            <div className="pop-up-background">
        <div className="popup-container">
          <h3>I love you princess</h3>
                  <p>
                    With every sunrise, my love for you grows,<br />
                    Like the gentle morning dew, it softly flows.<br />
                    You fill my days with joy, my nights with peace,<br />
                    I thank the stars above, for this love's release. <br />
                    Without you, my life was just a lonely tune, <br />
                    But now it's a beautiful melody, all because of you, my moon.<br />

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