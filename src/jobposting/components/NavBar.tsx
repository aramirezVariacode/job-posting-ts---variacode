import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo } from "react";
import logo from "../../assets/variacode_ch_fn_rgb.webp";
import { useAuthStore } from "../../auth/hooks";
import MenuButtonOptions from "./MenuButtonOptions";

interface Props {
  drawerWith: number;
  handleDrawer: (event: any) => void;
  open:boolean;
}
export const NavBar = ({ drawerWith = 240, handleDrawer, open} : Props) => {

  const {status, user} = useAuthStore();
  
  const state = useMemo(() => open, [open]);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: open === true ? `calc(100% - ${drawerWith}px)` : "100%",
        ml: { sm: `${drawerWith}px` },
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          {status === "authenticated" && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={(e) => handleDrawer(e)}
            >
              <MenuOutlined />
            </IconButton>
          )}
          <img alt="variacode" src={logo} style={{ width: "5rem" }} />
        </Box>
        <Box>
           <Typography variant="body1">
              {user!.postulant}
           </Typography>
        </Box>
        <Box>
          <MenuButtonOptions />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
