import React, { useState } from "react";
import { Drawer } from "antd";
import { HeartFilled } from "@ant-design/icons";

function _Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <header id="header">
        <div className="margin">
          <img src="#" alt="logo" />
        </div>
        <div id="fav" className="margin">
          <HeartFilled />
        </div>
        <div className="bars__menu margin" onClick={showDrawer}>
          <span className="line1__bars-menu"></span>
          <span className="line2__bars-menu"></span>
          <span className="line3__bars-menu"></span>
        </div>
      </header>
      <Drawer
        title="Basic Drawer"
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
        key="bottom"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </React.Fragment>
  );
}

export default _Header;
