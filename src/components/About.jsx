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
                <div className="relative">
                    <img src={titlebg} className="popup-bg" />
                    <div className="absolute top-1/2 left-1/2 min-w-[800px] -translate-1/2 text-center">
                        <div className="text-left">
                            <h2 className="font-[yoster] font-bold text-[24pt] text-[#6e1b1b]">About:</h2>
                            <ul className="pl-0 list-none">
                                <li className="before:content-['🥕_'] text-[11pt] text-black">About stuff goes here</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>

    )
}
