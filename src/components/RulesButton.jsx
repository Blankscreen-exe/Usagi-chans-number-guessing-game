//Rules Button
//Button config for the rules display
//uses "popup" package
import React from "react";
import Popup from 'reactjs-popup';

import titlebg from '/titlebg.png';

export default function RulesButton() {
    return (
        <Popup trigger={<button className='border-4 border-[#e12407] btn-shadow py-3 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] min-w-44 hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0 md:text-[18pt] md:min-w-58' >🥕 Da Rules</button>} modal >
            <div>
                <div className="relative">
                    <img src={titlebg} className="h-[38rem] object-fill w-[90vw] max-w-96" />
                    <div className="absolute top-1/2 -translate-y-1/2 text-center px-8 lg:left-1/2 lg:-translate-1/2 lg:min-w-[800px]">
                        <div className="text-left">
                            <h2 className="font-[yoster] font-bold text-[22pt] text-[#6e1b1b] mb-4 md:mb-7 md:text-[24pt]">Da Rules:</h2>
                            <ul className="pl-0 list-none max-w-[340px]">
                                <li className="before:content-['🥕_'] text-[10pt] text-black leading-6 md:text-[11pt]">I'll show you a <span className="text-orange-600 font-bold underline">number</span> between 0-9</li>
                                <li className="before:content-['🥕_'] text-[10pt] text-black leading-6 md:text-[11pt]">Just <span className="text-orange-600 font-bold underline">guess</span> if the next number is <span className="highlight">larger</span> or <span className="highlight">smaller</span>.</li>
                                <li className="before:content-['🥕_'] text-[10pt] text-black leading-6 md:text-[11pt]">If your guess is correct you will get a <span className="text-orange-600 font-bold underline">point</span>.</li>
                                <li className="before:content-['🥕_'] text-[10pt] text-black leading-6 md:text-[11pt]">If it is wrong, then you <span className="text-orange-600 font-bold underline">lose a heart</span>"❤️" !</li>
                                <li className="before:content-['🥕_'] text-[10pt] text-black leading-6 md:text-[11pt]">If all of your hearts are gone, then it's <span className="text-orange-600 font-bold underline">game over</span></li>
                                <li className="before:content-['🥕_'] text-[10pt] text-black leading-6 md:text-[11pt]">Let's see how many points can you get! ~Good Luck</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>

    )
}
