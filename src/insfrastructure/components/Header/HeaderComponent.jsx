import { useEffect } from "react";
import { useState } from "react";
import { ServicesCategories } from "../../../domain/models/ServicesCategories";
import { Cbx } from "../utils/Cbx";

export function HeaderComponent() {

    const [ options,setOptions ] = useState([])

    useEffect(() => {
        const data = new ServicesCategories();
        
        const fetchedCategories = data.categories;
        setOptions(fetchedCategories);
    },[])

 

    return <header className="pr-16 pl-16  p-4 flex justify-between  dark:text-white items-center">
        <img src="https://github.com/KraysonStudios/.github/raw/main/assets/Krayson%20Studios.png" className="w-28" alt="" />
        <nav>
            <ul className="h-20 text-white flex items-center gap-16  font-poppins">
                <li><a className=" text-lg" href="">Inicio</a></li>
                <li>
                    <Cbx options={options}/>
                </li>
                <li><a className="  text-lg" href="">Proyectos</a></li>
                <li><a className=" text-lg" href="">Contactar</a></li>
            </ul>
        </nav>
        <li><img src="discord.png" alt="" /></li>
    </header>
}