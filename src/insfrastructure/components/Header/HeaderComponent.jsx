import { useEffect } from "react";
import { useState } from "react";
import { Categories_services } from "../../../domain/services/Categories.service";
import { Cbx } from "../utils/Cbx";
import Logo from "../../../assets/KraysonStudios.webp"
import { Link, NavLink } from "react-router-dom";

export function HeaderComponent() {

    const [ options,setOptions ] = useState([])

    useEffect(() => {
        const data = new Categories_services();
        
        const fetchedCategories = data.categories.list;
        setOptions(fetchedCategories);
    },[])

    return <header className="w-full flex flex-wrap justify-between items-center p-4 text-white">
    <div className="flex items-center gap-3 font-oswald">
      <img src={Logo} className="w-16 sm:w-20" alt="Logo" />
      <h2 className="text-2xl sm:text-3xl">Krayson</h2>
    </div>
  
    <nav className="w-full sm:w-auto mt-4 sm:mt-0">
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 font-poppins">
        <li><NavLink to="/" className="text-lg hover:text-gray-400" href="#">Inicio</NavLink></li>
        <li><Cbx options={options} /></li>
        <li><a className="text-lg hover:text-gray-400" href="#">Proyectos</a></li>
        <li><a className="text-lg hover:text-gray-400" href="#contactUs">Contactar</a></li>
      </ul>
    </nav>
  
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full overflow-hidden flex-shrink-0">
      <img src="" alt="Perfil" className="w-full h-full object-cover" />
    </div>
  </header>
}