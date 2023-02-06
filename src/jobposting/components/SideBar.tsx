import { Add, List, Person } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer, Typography
} from "@mui/material";
import { useAuthStore } from "../../auth/hooks";
import { SideBarMenuItems } from "./SideBarMenuItems";


/* const menu = [
  { label: "Home", icon: <Home />, path: "/" },
  { label: "Linkedin", icon: <LinkedIn />, path: "/jobPosting" },
];

 */
const jobMenu = [
  { label: "Tablero de empleos", icon: <List />, path: "/dashboard/jobs" },

  {
    label: "Mis empleos creados",
    icon: <List />,
    path: "/dashboard/jobsByRecruiter",
  },
  { label: "Crear empleo", icon: <Add />, path: "/dashboard/createJob" },
];



const adminMenu = [
  { label: "Crear reclutador", icon: <Add />, path: "/dashboard/createRecruiter" },
 
];

const userMenu = [
  { label: "Mi cuenta", icon: <Person />, path: "/dashboard/user" },
  { label: "Tablero de empleos", icon: <List />, path: "/dashboard/jobs" },
  { label: "Mis Postulaciones", icon: <List />, path: "/dashboard/postulations" },
];

interface Props {
  drawerWith: number;
  handleDrawer: (event: any) => void;
  openDrawer: boolean;
}

export const Sidebar = ({ drawerWith = 240, openDrawer, handleDrawer }: Props) => {

  const {user} = useAuthStore();
  
  return (
    <Box component="nav" sx={{ flexShrink: { sm: 0 } }}>
      <Drawer
        open={openDrawer}
        onClose={(e) => handleDrawer(e)}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWith,
            background: " linear-gradient(40deg, #9E46E5, #4f46e5)",
          },
        }}
      >
        <Divider />

        {user.role === "postulant" ? (
          <>
            {/*user menu*/}

            <SideBarMenuItems menu={userMenu} />
          </>
        ) : (
          <>
            {/*   menuJob */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 16px",
              }}
            >
              <Typography variant="h6" noWrap component="div">
                Empleos
              </Typography>
            </Box>

            <Divider />

            <SideBarMenuItems menu={jobMenu} />

            
            {/* <Divider /> 

            admin menu

           {/*  <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 16px",
              }}
            >
              <Typography variant="h6" noWrap component="div">
                Administración
              </Typography>
            </Box>

            <Divider />

            <SideBarMenuItems menu={adminMenu} />
            <Divider /> */}
          </>
        )}
      </Drawer>
    </Box>
  );
};




