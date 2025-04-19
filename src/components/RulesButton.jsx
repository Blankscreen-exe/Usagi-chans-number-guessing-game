//Rules Button
//Button config for the rules display
//uses "popup" package
import React from "react";
import Popup from 'reactjs-popup';

import titlebg from '/titlebg.png';

export default function RulesButton() {
    return (
        <Popup trigger={<button className='border-4 border-[#e12407] btn-shadow py-3 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0' >🥕 Da Rules</button>} modal >
            <div>
                <div className="relative">
                    <img src={titlebg} />
                    <div className="absolute top-1/2 left-1/2 min-w-[800px] -translate-1/2 text-center">
                        <div className="text-left">
                            <h2 className="font-[yoster] font-bold text-[24pt] text-[#6e1b1b]">Da Rules:</h2>
                            <ul className="pl-0 list-none">
                                <li className="before:content-['🥕_'] text-[11pt] text-black">I'll show you a <span className="text-orange-600 font-bold underline">number</span> between 0-9</li>
                                <li className="before:content-['🥕_'] text-[11pt] text-black">Just <span className="text-orange-600 font-bold underline">guess</span> if the next number is <span className="highlight">larger</span> or <span className="highlight">smaller</span>.</li>
                                <li className="before:content-['🥕_'] text-[11pt] text-black">If your guess is correct you will get a <span className="text-orange-600 font-bold underline">point</span>.</li>
                                <li className="before:content-['🥕_'] text-[11pt] text-black">If it is wrong, then you <span className="text-orange-600 font-bold underline">lose a heart</span>"❤️" !</li>
                                <li className="before:content-['🥕_'] text-[11pt] text-black">If all of your hearts are gone, then it's <span className="text-orange-600 font-bold underline">game over</span></li>
                                <li className="before:content-['🥕_'] text-[11pt] text-black">Let's see how many points can you get! ~Good Luck</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>

    )
}
