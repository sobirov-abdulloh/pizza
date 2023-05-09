import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { StateContext } from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
export default function Dropdown() {
  const { setAccaunt, anchorEl, setAnchorEl } = React.useContext(StateContext);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.setItem("userData", JSON.stringify(""));
    navigate("/");
    setAccaunt("");
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link className="link1" to={"acount"}>
            Аккаунт
          </Link>
        </MenuItem>

        <MenuItem onClick={logOut}>
          <h1 className="link1">Выйти</h1>
        </MenuItem>
      </Menu>
    </div>
  );
}
