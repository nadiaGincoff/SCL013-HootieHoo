import React, { useState, useEffect } from 'react'
import DarkModeToggle from "react-dark-mode-toggle";

const useThemeSwitcher = () => {
    const [mode, setMode] = useState(() => localStorage.getItem('mode'));
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    useEffect(() => {
        if(mode === 'dark') {
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light');
        }
    }, [mode])

    const onChangeTumama = () => {
        setIsDarkMode,
        setMode(mode => mode === 'dark' ? 'light' : 'dark')
        
    }
    const checkeado = () => {
        isDarkMode
        mode
    }

    return (
        // <a className='cursor-pointer' onClick={() => setMode(mode => mode === 'dark' ? 'light' : 'dark')} >
        //     <small>{mode === 'dark' ? 'Light' : 'Dark'} Mode</small>
        // </a>
        <div onClick={() => setMode(mode => mode === 'dark' ? 'light' : 'dark')}>
            <DarkModeToggle
                onClick={() => setMode(mode => mode === 'dark' ? 'light' : 'dark')}
                onChange = {setIsDarkMode}
                checked = {isDarkMode}
                size={150}
            >
            {mode === 'dark' ? 'Light' : 'Dark'}
            </DarkModeToggle>
        </div>
    )
}

export default useThemeSwitcher