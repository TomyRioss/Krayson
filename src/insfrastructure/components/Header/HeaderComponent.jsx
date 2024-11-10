export function HeaderComponent() {
    return <header className="max-w-full p-4 flex justify-between  items-center border-b-2">
        <h1 className="font-bold font-oswald text-4xl">Krayson</h1>
        <nav>
            <ul className="flex gap-8">
                <li><a className="text-slate-700 text-2xl" href="">Inicio</a></li>
                <li><a className="text-slate-700 text-2xl" href="">Servicio</a></li>
                <li><a className="text-slate-700 text-2xl" href="">Proyectos</a></li>
                <li><a className="text-slate-700 text-2xl" href="">Contactar</a></li>
                <li><img src="discord.png" alt="" /></li>
            </ul>
        </nav>
    </header>
}