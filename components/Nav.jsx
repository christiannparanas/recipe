import { FcLike } from "react-icons/fc";
import { RiSearchLine } from "react-icons/ri";
import axios from 'axios'

function Nav() {

  return (
    <div className="nav">
      <div className="logo">Recipe</div>
      <div className="search">
        <input type="text" placeholder="Find a Recipe" />
        <div className="fav">
          <FcLike />
        </div>
      </div>
    </div>
  );
}

export default Nav;
