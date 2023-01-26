import React, { useState } from 'react';

const ThemeChange = () => {
    const [colorSelected, setColorSelected] = useState();
    const root = document.querySelector(':root');

    const handleColorChangeOrange = () => { root.style.setProperty('--accent', "#EC994B") }
    const handleColorChangeGreen = () => { root.style.setProperty('--accent', "#03C988") }
    const handleColorChangeBlue = () => { root.style.setProperty('--accent', "#1C82AD") }
    const handleColorChangePurple = () => { root.style.setProperty('--accent', "#C060A1") }
    const handleColorChangeYellow = () => { root.style.setProperty('--accent', "#FFD56F") }
    const handleColorChangeRed = () => { root.style.setProperty('--accent', "#DD5353") }
    const handleColorChangeMarine = () => { root.style.setProperty('--accent', "#628E90") }
    const handleColorChangeGold = () => { root.style.setProperty('--accent', "#FFE15D") }

    return (
        <div className='parent-container'>
            <div className='child-container'>
                <h2 className='theme-title'>ThemeChange</h2>
                <div className='child-container'>
                    <ul>
                        <li key="0X" className='theme-li'>
                            <button onClick={handleColorChangeOrange} className='theme-button orange'></button>
                        </li>
                        <li key="7X" className='theme-li'>
                            <button onClick={handleColorChangeGold} className='theme-button gold'></button>
                        </li>
                        <li key="1X" className='theme-li'>
                            <button onClick={handleColorChangeGreen} className='theme-button green'></button>
                        </li>
                        <li key="2X" className='theme-li'>
                            <button onClick={handleColorChangeBlue} className='theme-button blue'></button>
                        </li>
                        <li key="3X" className='theme-li'>
                            <button onClick={handleColorChangePurple} className='theme-button purple'></button>
                        </li>
                        <li key="4X" className='theme-li'>
                            <button onClick={handleColorChangeYellow} className='theme-button yellow'></button>
                        </li>
                        <li key="5X" className='theme-li'>
                            <button onClick={handleColorChangeRed} className='theme-button red'></button>
                        </li>
                        <li key="6X" className='theme-li'>
                            <button onClick={handleColorChangeMarine} className='theme-button marine'></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ThemeChange