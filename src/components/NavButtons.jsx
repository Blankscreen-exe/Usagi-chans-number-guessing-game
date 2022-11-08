//Nav Buttons
//Used to show tha nav bar for the game
//contains various button
import React from 'react'
import RulesButton from './RulesButton';
import Dashboard from './Dashboard';
import About from './About';

export default function NavButtons () {
    
    return (
    <div className='nav'>
        <RulesButton />
        <Dashboard />
        <About />
    </div>
    )
}
