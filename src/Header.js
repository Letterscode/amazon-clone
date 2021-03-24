import React from "react";
import "./Header.css";
import { Search, ShoppingBasket } from "@material-ui/icons";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hola,Invitado</span>
          <span className="header__optionLineTwo">Iniciar Sesion</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Devoluciones</span>
          <span className="header__optionLineTwo">& Pedidos</span>
        </div>
      </div>
      <div className="header__optionBasket">
        <ShoppingBasket />
        <span className="header__optionLineTwo header__basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;
