//Nav Buttons
//Used to show tha nav bar for the game
//contains various button
import React from 'react'
import RulesButton from './RulesButton';
import Dashboard from './Dashboard';
import About from './About';

export default function NavButtons() {

    return (
        <div className='flex flex-col justify-center items-center gap-y-16 nav-border absolute z-10 inset-0 bg-[#d2bb8c] md:mt-1.5 md:py-[15px]'>
            <RulesButton />
            <Dashboard />
            <About />
        </div>
    )
}
