//About
//about popup for the game
//displays credit info
// uses popup package
import React from "react";
import Popup from 'reactjs-popup';

import titlebg from '/titlebg.png';

export default function RulesButton() {
    return (
        <Popup trigger={<button className='border-4 border-[#e12407] btn-shadow py-3 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] min-w-44 hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0 md:text-[18pt] md:min-w-58 lg:min-w-auto lg:text-[15pt]' >🥕 About</button>} modal >
            <div className="popup-shadow">
                <div className="relative">
                    <img src={titlebg} className="popup-bg w-[90vw] max-w-96 h-36 lg:w-auto lg:max-w-none lg:h-auto" />
                    <div className="absolute top-1/2 -translate-y-1/2 text-center px-8 lg:-translate-1/2 lg:left-1/2 lg:min-w-[800px] lg:px-0">
                        <div className="text-left">
                            <h2 className="font-[yoster] font-bold text-[22pt] text-[#6e1b1b] mb-4 md:text-[24pt] md:mb-7">About:</h2>
                            <ul className="pl-0 list-none">
                                <li className="before:content-['🥕_'] text-black text-[10pt] md:text-[11pt]">About stuff goes here</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>

    )
}
