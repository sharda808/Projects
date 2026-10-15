import React, { useContext } from 'react';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { ThemeContext } from '../context/ThemeContext';

const ToggleTheme = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    // <button onClick={setTheme}
    //   className = " text-2xl p-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white">
    //   {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    // </button>
       <button className="m-3 rounded-full bg-purple-600 p-3 text-2xl  text-white" onClick={toggleTheme}>
      {theme=== 'light' ? <CiLight /> : <CiDark />}
    </button>
  );
};
export default ToggleTheme