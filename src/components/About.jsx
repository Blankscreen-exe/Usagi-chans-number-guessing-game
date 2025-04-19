//About
//about popup for the game
//displays credit info
// uses popup package
import React from "react";
import Popup from 'reactjs-popup';

import titlebg from '/titlebg.png';

export default function RulesButton() {
    return (
        <Popup trigger={<button className='border-4 border-[#e12407] btn-shadow py-2.5 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0' >🥕 About</button>} modal >
            <div className="popup-shadow">
                <div className="popup-box">
                    <img src={titlebg} className="popup-bg" />
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
