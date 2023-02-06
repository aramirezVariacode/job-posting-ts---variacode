import { Box } from '@mui/system';
import React, { ReactElement, useState } from 'react'
import { NavBar,Sidebar } from '../components';


const drawerWith = 240;

interface Props{
  children: ReactElement | ReactElement[]
}
export const JobPostingLayout = ({children} : Props) => {
     const [open, setOpen] = useState(false);

     const handleDrawer = (event : any) => {
   
         if (
           event.type === "keydown" &&
           (event.key === "Tab" || event.key === "Shift")
         ) {
           return;
         }
       setOpen(!open);
     };

  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
      sx={{ display: "flex" }}
    >
      {/*navbar*/}
      <NavBar drawerWith={drawerWith} handleDrawer={handleDrawer} open={open} />
      {/*sidebar*/}

      <Sidebar
        drawerWith={drawerWith}
        openDrawer={open}
        handleDrawer={handleDrawer}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 1, mt:10,ml:2,mr:2,display:"flex" ,justifyContent:"center"}}>
        {children}
      </Box>
    </Box>
  );
}
