//Rules Button
//Button config for the rules display
//uses "popup" package
import React from "react";
import Popup from 'reactjs-popup';

import titlebg from '/titlebg.png';

export default function RulesButton() {
    return (
        <Popup trigger={<button className='nav-button' >🥕 Da Rules</button>}  modal >
            <div className="popup-shadow">
                <div className="popup-box">
                    <img src={titlebg} className="popup-bg"/>
                    <div className="pup-content">
                        <div className="rules">
                            <h2>Da Rules:</h2>
                            <ul>
                                <li>I'll show you a <span className="highlight">number</span> between 0-9</li>
                                <li>Just <span className="highlight">guess</span> if the next number is <span className="highlight">larger</span> or <span className="highlight">smaller</span>.</li>
                                <li>If your guess is correct you will get a <span className="highlight">point</span>.</li>
                                <li>If it is wrong, then you <span className="highlight">lose a heart</span>"❤️" !</li>
                                <li>If all of your hearts are gone, then it's <span className="highlight">game over</span></li>
                                <li>Let's see how many points can you get! ~Good Luck</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
        
    )
}
