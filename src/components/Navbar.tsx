import { Link } from "@tanstack/react-router";
import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="navbar w-full bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Doctrinaire
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-4 [&_.active]:bg-primary [&_.active]:font-bold [&_.active]:text-primary-content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
