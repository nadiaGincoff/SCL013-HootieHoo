import React, { useState, useEffect } from 'react'

const useThemeSwitcher = () => {
    const [mode, setMode] = useState(() => localStorage.getItem('mode'));
    
    useEffect(() => {
        if(mode === 'dark') {
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'dark');
        }
    }, [mode])
    return (
        <a className='cursor-pointer' onClick={() => setMode(mode => mode === 'dark' ? 'light' : 'dark')} >
            <small>{mode === 'dark' ? 'Light' : 'Dark'} Mode</small>
        </a>
    )
}

export default useThemeSwitcher