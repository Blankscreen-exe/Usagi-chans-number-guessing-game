//Dashboard for player statistics roster
//not currently used in this version of the game
import React from "react";
import Popup from 'reactjs-popup';

export default function Dashboard(props) {

    return (
        <Popup trigger={<button className='border-4 border-[#e12407] btn-shadow py-3 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] min-w-44 hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0 md:text-[18pt] md:min-w-58 lg:min-w-auto lg:text-[15pt]' >🥕 Roster</button>} modal >
            <div>
                <div className="relative">
                    <div className="text-center px-6 max-w-[400px] md:max-w-2xl lg:min-w-[800px] lg:max-w-none lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-1/2 lg:px-0">
                        <div className="text-white">
                            <h2 className="text-[1.3em] md:text-[1.5em]">This section is currently under development. But nothing's stopping you from playing the game so why not have a go at it since you are here?</h2>

                        </div>
                    </div>
                </div>
            </div>
        </Popup>

    )
}
