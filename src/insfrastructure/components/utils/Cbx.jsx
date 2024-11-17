export function Cbx({options,label}) {
  return (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="cbx"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="cbx"
        className="font-poppins text-xl border-b-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent focus:bg-transparent"
      >
        <option value="Default" selected>Ver Servicios</option>
        { options.map((item,index) => 
            <option className="focus:bg-transparent bg-black" key={index} value={item.val}>{item.text}</option>
        ) }
      </select>
    </form>
  );
}
