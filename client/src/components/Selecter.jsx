import React from "react";
import {
  SearchOutlined,
  ShoppingOutlined,
  TableOutlined,
} from "@ant-design/icons";

function Selecter() {
  return (
    <React.Fragment>
      <div id="bot-menu">
        <div id="select">
          <div className="select-opc">
            <span className="select-option" id="shop">
              <ShoppingOutlined />
            </span>
          </div>
          <div className="select-opc">
            <span className="select-option">
              <SearchOutlined />
            </span>
          </div>
          <div className="select-opc">
            <span className="select-option" id="catalog">
              <TableOutlined />
            </span>
          </div>
        </div>
        <div id="location">
          <span id="location-txt">location</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Selecter;
