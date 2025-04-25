//Nav Buttons
//Used to show tha nav bar for the game
//contains various button
import React, { useEffect, useState } from 'react'
import RulesButton from './RulesButton';
import Dashboard from './Dashboard';
import About from './About';
import CloseIcon from '@mui/icons-material/Close';

export default function NavButtons(props) {
    // State for the menu translation
    const [translate, setTranslate] = useState({
        transform: 'translateX(100%)',
        transition: 'transform 0.5s ease-in-out'
    });
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Shows the menu when user clicks the hamburger icon and hides it when the close icon is clicked
    useEffect(() => {
        if (props.toggleShow) {
            setTranslate({
                transform: 'translateX(0)',
                transition: 'transform 0.5s ease-in-out'
            });
            document.body.style.overflowY = 'hidden'; // Disable scrolling when menu is open
        } else {
            setTranslate({
                transform: 'translateX(100%)',
                transition: 'transform 0.5s ease-in-out'
            });
            document.body.style.overflowY = 'auto'; // Enable scrolling when menu is closed
        }
    }, [props.toggleShow]);

    // Custom style for the close icon
    const closeMenuStyle = {
        fontSize: '2.25rem',
        transition: 'color 0.3s ease-in-out',
    }

    return (
        <div style={width > 1024 ? {} : translate} className='flex flex-col justify-center items-center gap-y-16 nav-border absolute z-10 inset-0 bg-[#d2bb8c] md:gap-y-26 lg:flex-row lg:justify-around lg:static lg:mt-1.5 lg:py-[15px]'>
            <button className='absolute top-6 right-8 cursor-pointer lg:hidden' onClick={() => props.showMenu(false)}>
                <CloseIcon sx={closeMenuStyle} className='text-[brown] hover:text-[#d42a10]' />
            </button>
            <RulesButton />
            <Dashboard />
            <About />
        </div>
    )
}
