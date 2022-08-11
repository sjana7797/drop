import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { navMenu } from "../../../configs/header";

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="flex items-center gap-2 md:gap-3">
      {navMenu.map((menu, index) => (
        <div key={index}>
          <Link
            to={menu.link}
            className="cursor-pointer p-4 text-xl font-medium capitalize transition-colors duration-200 hover:text-primary-300"
          >
            {menu.title}
          </Link>
        </div>
      ))}
      <div>
        <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-primary-300 px-4 py-2 text-xl font-medium capitalize text-slate-900 shadow-button transition-colors duration-200 hover:bg-primary-400">
          <ShoppingCartIcon className="h-5 w-5" />
          <span>cart</span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
