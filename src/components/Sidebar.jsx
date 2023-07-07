import { Button, Drawer } from "@mui/material";
import React from "react";

const Sidebar = (props) => {
  return (
    <Drawer open={props.open} className="sidebar">
      <div>
        <Button>Home</Button>
        <Button>Shop</Button>
      </div>
    </Drawer>
  );
};

export default Sidebar;
