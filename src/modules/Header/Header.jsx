import { NavLink, Link } from "react-router-dom";
import sprite from "../../images/svg/sprite.svg";
import s from "./header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <Link className={s.logoLink} to={"/"}>
        <svg className={s.logo}>
          <use href={sprite + "#icon-film"} />
        </svg>
      </Link>
      <nav className={s.nav}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? `${s.activeLink}` : `${s.link}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/movies"}
          className={({ isActive }) =>
            isActive ? `${s.activeLink}` : `${s.link}`
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
