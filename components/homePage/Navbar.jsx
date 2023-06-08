import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const links = [
    {
      path: "/",
      name: "Inicio",
    },
    {
      path: "/nosotros",
      name: "Nosotros",
    },
    {
      path: "/servicios",
      name: "Servicios",
    },
  ];

  return (
    <>
      <div className="w-full h-16"></div>
      <div className="w-full px-5 sm:px-1 bg-base-100 shadow-md fixed top-0 z-50">
        <div className="navbar container lg mx-auto">
          <div className="navbar-start">
            <Image src="/imgs/logo.svg" alt="Logo" width={100} height={100} />
          </div>
          <div className="text-neutral navbar-center hidden lg:flex">
            {/* Links Desktop */}

            <ul className="menu menu-horizontal px-1 gap-2">
              {links.map((link, index) => (
                <li className="hover text-neutral" key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <Link href="/contacto" className="btn btn-primary hidden sm:flex">
              Contactanos!
            </Link>
          </div>
          <div className="dropdown dropdown-end ml-1">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* Links menu toogle */}

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links.map((link, index) => (
                <li className="hover-bordered" key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
              <li className="btn btn-primary m-2 sm:hidden">
                <Link href="/contacto">Contactanos!</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
