import { Grid, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

interface Props{
  children:ReactElement | ReactElement[]
}
export const AuthLayout = ({ children } : Props) => {

  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(40deg, #4f46e5,#9E46E5)",
          padding: 4,
        }}
      >
        <Grid item>
          <Typography
            variant="h2"
            sx={{ mb: 5, color: "white", cursor: "pointer" }}
            className="animate__animated
                animate__lightSpeedInLeft"
            onClick={() => navigate("/home")}
          >
            VARIACODE
          </Typography>
        </Grid>
        <Grid
          item
          className="box-shadow"
          xs={3}
          sx={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            width: { md: 500, xs: "85vw" },
          }}
        >
          {children}
        </Grid>
      </Grid>
    </>
  );
};
