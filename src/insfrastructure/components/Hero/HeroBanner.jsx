export function HeroBanner() {
  return (
    <section className="w-full font-semibold  flex flex-col gap-8 font-montserrat items-start h-2/5 text-white mt-28">
      <div className="w-1/2 flex flex-col items-start gap-6 pl-8">
        <div className="text-start bg-gradient-to-b animate-fade-in-down  from-white to-gray-400 text-transparent bg-clip-text pb-2">
          <h3 className="text-3xl pl-2">Innovación a tu medida en</h3>
          <h1 className="text-9xl bg-gradient-to-b from-gray-300 to-white bg-clip-text text-transparent drop-shadow-lg">
            Krayson Studio
          </h1>
        </div>
        <p className="w-1/2 pl-2 text-lg text-start animate-fade-in-down font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
          enim est magnam aspernatur reprehenderit magni obcaecati quis
          accusamus accusantium commodi iste beatae. Voluptas amet rem corporis
          veniam consectetur accusantium inventore.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg mt-4 shadow-lg transition-all ml-2">
          Explorar Servicios
        </button>
      </div>
      {/* <div className="absolute right-8 top-1/3 text-white">
        <span className="text-5xl font-bold animate-floating animate-floating opacity-80">
          Innovación
        </span>
        <span className="text-5xl font-bold animate-floating2 opacity-70 block mt-4">
          Creatividad
        </span>
        <span className="text-5xl font-bold animate-floating3 opacity-60 block mt-4">
          Espacio
        </span>
      </div> */}
    </section>
  );
}
