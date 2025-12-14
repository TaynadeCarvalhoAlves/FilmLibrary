import React, { useState } from "react";
import { ContainerSideBar, MenuItem, SidebarContent, styleIcon } from "./style.ts";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { NavLink } from "react-router-dom";

export default function SideBar() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
 
  return (
    <>
    <ContainerSideBar open={openMenu}>
         <SidebarContent >
        <NavLink to="/" style={{ textDecoration: "none"}}>
            <MenuItem><HomeOutlinedIcon style={styleIcon}/></MenuItem>
        </NavLink>
        <NavLink to="/CreateMovie" style={{ textDecoration: "none"}}>
          <MenuItem><AddCircleOutlineOutlinedIcon style={styleIcon}/></MenuItem>
        </NavLink>

        </SidebarContent>
    </ContainerSideBar>
    
      </>
  );
}