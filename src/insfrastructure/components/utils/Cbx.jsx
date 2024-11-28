import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

export function Cbx({ options, label }) {
  return (
    <div className="flex w-full justify-center items-center ">
      <div className="dropdown inline-block relative">
        <button className=" dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span className="mr-1">Ver Servicios</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 dark:text-gray-300 pt-1">
          {options.map((item, index) => (
            <li key={index}>
              <Link
                to={"/category/" + item.id}
                className="rounded-t  dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
