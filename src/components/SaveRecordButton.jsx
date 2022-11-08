//Save Record Button
//Used to download a screen shot of the final result
//this will first become an HTML canvas in which the result card will be designed
//Then using the "html-to-image" package, we will convert the html to png and download it
//not used in the current game version 
import React from "react";
import Popup from 'reactjs-popup';

import titlebg from '/titlebg.png';

export default function RulesButton(props) {
    return (
        <Popup trigger={<button className='io-button save-record-button' onClick={props.saveDaRecord}>🥕 Save Record</button>}  modal >
            <div className="popup-shadow">
                <div className="popup-box">
                    <img src={titlebg} className="popup-bg"/>
                    <div className="pup-content">
                        <div className="rules">
                            <h2>Save HTML box</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
        
    )
}