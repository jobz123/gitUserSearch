import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
    const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

    const toggleTheme = () =>{
        setTheme(!theme)
    }

   

    if(theme){
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
      
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;