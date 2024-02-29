import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './BtnToggle.css'
import IconMoon from "../../assets/icon-moon.svg"
import IconSun from "../../assets/icon-sun.svg"

export default function BtnToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <button onClick={toggleTheme} className={theme ? "button-theme dark-theme" : "button-theme light-theme"}>
      {theme ? "LIGHT" : "DARK"}
      <img src={theme ? IconSun : IconMoon} alt="icon" />
    </button>
  )
}
