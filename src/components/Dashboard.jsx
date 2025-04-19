//Dashboard for player statistics roster
//not currently used in this version of the game
import React from "react";
import Popup from 'reactjs-popup';

export default function Dashboard(props) {

    return (
        <Popup trigger={<button className='border-4 border-[#e12407] btn-shadow py-2.5 px-5 text-[15pt] font-bold font-[yoster] bg-[#ffd8d2] cursor-pointer text-[#e12407] hover:bg-[#ff7a65] hover:border-[#d42a10] hover:text-white focus:outline-0 focus-visible:outline-0' >🥕 Roster</button>} modal >
            <div className="popup-shadow">
                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 min-w-[800px] -translate-1/2 text-center">
                        <div className="text-white">
                            <h2 className="dashboard-header-field">This section is currently under development. But nothing's stopping you from playing the game so why not have a go at it since you are here?</h2>

                        </div>
                    </div>
                </div>
            </div>
        </Popup>

    )
}
