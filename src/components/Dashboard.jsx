//Dashboard for player statistics roster
//not currently used in this version of the game
import React from "react";
import Popup from 'reactjs-popup';

export default function Dashboard(props) {

    return (
        <Popup trigger={<button className='nav-button' >🥕 Roster</button>}  modal >
            <div className="popup-shadow">
                <div className="popup-box">
                    <div className="pup-content">
                        <div className="dashboard-container">
                            <h2 className="dashboard-header-field">This section is currently under development. But nothing's stopping you from playing the game so why not have a go at it since you are here?</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
        
    )
}
