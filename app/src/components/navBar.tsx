import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import "../scss/nav/nav.css";
import {
  BiHomeAlt,
  BiMessageAlt,
  BiUser,
  BiMenu,
  BiSearch,
} from "react-icons/bi";
import { GlobalContext } from "../App";
interface Props {
  id: number;
  user_name: string;
  avatar_src: string;
  gender: string;
}
const Nav: FC<Props> = ({ avatar_src, gender, id, user_name }) => {
  const src: string = `../images/${avatar_src}`;
  return (
    <>
      <div className="nav-container">
        <nav>
          <button className="side-nav-btn">
            <BiMenu />
          </button>
          <a>
            <Link to={"/"}>
              <BiHomeAlt />
            </Link>
          </a>
          <a>
            <Link to={"/profile"}>
              <BiUser />
            </Link>
          </a>
          <a>
            <Link to={"/chat"}>
              <BiMessageAlt />
            </Link>
          </a>
          <a onClick={() => alert("search")}>
            <Link to={""}>
              <BiSearch />
            </Link>
          </a>
          <img
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            src={src}
          ></img>
        </nav>
      </div>
    </>
  );
};
export default Nav;
