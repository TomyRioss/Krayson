import { useEffect } from "react";
import { useState } from "react";
import ThemeButton from "../utils/ThemeButton";

export function HeaderComponent() {

    const [ theme,setTheme ] = useState("light");

    useEffect(() => {
        console.log(theme);
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark');
        } else {
            document.querySelector('html')?.classList.remove('dark');
        }
    },[theme]);
    
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return <header className="pr-16 mt-10 pl-16  p-4 flex justify-between  dark:text-white items-center">
        <h1 className="font-bold font-oswald text-4xl bg-s">Krayson</h1>
        <nav>
            <ul className="flex gap-16 text-slate-700 dark:text-gray-300 font-poppins">
                <li><a className=" text-xl" href="">Inicio</a></li>
                <li><a className=" text-xl" href="">Servicio</a></li>
                <li><a className="  text-xl" href="">Proyectos</a></li>
                <li><a className=" text-xl" href="">Contactar</a></li>
                <li><img src="discord.png" alt="" /></li>
            </ul>
        </nav>
        <ThemeButton changeTheme={changeTheme}/>
    </header>
}