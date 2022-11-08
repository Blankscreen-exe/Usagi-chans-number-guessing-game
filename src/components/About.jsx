//About
//about popup for the game
//displays credit info
// uses popup package
import React from "react";
import Popup from 'reactjs-popup';

import titlebg from '/titlebg.png';

export default function RulesButton() {
    return (
        <Popup trigger={<button className='nav-button' >🥕 About</button>}  modal >
            <div className="popup-shadow">
                <div className="popup-box">
                    <img src={titlebg} className="popup-bg"/>
                    <div className="pup-content">
                        <div className="rules">
                            <h2>About:</h2>
                            <ul>
                                <li>About stuff goes here</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
        
    )
}
