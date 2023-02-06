import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const SideBarMenuItems= ({menu = [{}]}) => {
  
    const [selectedItem, setSelectedItem] = useState<number>();

    const handleSelectItem = (index : number) => {
      setSelectedItem(index);
    };
   return (
     <List sx={{ pt: 0 }}>
       {menu.map((item : any, index) => (
         <ListItem key={item.label} disablePadding sx={{ padding: "4px" }}>
           <ListItemButton
             selected={index === selectedItem}
             onClick={() => handleSelectItem(index)}
           >
             <ListItemIcon sx={{color:'white'}}>{item.icon}</ListItemIcon>
             <NavLink
               style={{ textDecoration: "none", color: "white" }}
               to={item.path}
             >
               {item.label}
             </NavLink>
           </ListItemButton>
         </ListItem>
       ))}
     </List>
   );
}
