import { useEffect } from "react";
import { useState } from "react";
import { ServicesCategories } from "../../../domain/models/ServicesCategories";
import { Cbx } from "../utils/Cbx";
import Logo from "../../../assets/KraysonStudios.webp"


export function HeaderComponent() {

    const [ options,setOptions ] = useState([])

    useEffect(() => {
        const data = new ServicesCategories();
        
        const fetchedCategories = data.categories;
        setOptions(fetchedCategories);
    },[])

 

    return <header className="pr-8 pl-8 w-full p-2 flex justify-between mt-4 text-white items-center">
        <div className="flex items-center font-oswald">
            <img src={Logo} className="w-28" alt="" /> 
            <h2 className="text-3xl">Krayson</h2>
        </div>
        <nav className="">
            <ul className="h-20 text-white flex items-center gap-36  font-poppins">
                <li><a className=" text-lg" href="">Inicio</a></li>
                <li>
                    <Cbx options={options}/>
                </li>
                <li><a className="  text-lg" href="">Proyectos</a></li>
                <li><a className=" text-lg" href="">Contactar</a></li>
            </ul>
        </nav>
        <div className="w-14 bg-white h-14 rounded-full">

        </div>
        
    </header>
}