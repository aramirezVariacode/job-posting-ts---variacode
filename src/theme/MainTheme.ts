import { createTheme } from "@mui/material";
import {red} from '@mui/material/colors'

export const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#4f46e5",
      light: "#6861E5",
      dark: "#413AC3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9E46E5",
      light: "#A95EE5",
      dark: "883CC6",
      contrastText: "#fff",
    },

    error: {
      main: red.A400,
    },
  },
});
