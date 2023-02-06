import { Divider, Grid, Typography } from "@mui/material";
import { JobPostingLayout } from "../../jobposting/layout/JobPostingLayout";

export const UserList = () => {
  return (
    <>
      <JobPostingLayout>
        <Grid
          container
          sx={{ width: "100%", height: "100%" }}
          display="flex"
          justifyContent="center"
        >
          <Grid
            item
            sx={{ width: "100%", marginBottom: 3, textAlign: "center" }}
            display="grid"
            xs={12}
          >
            <Typography
              sx={{ marginBottom: 1 }}
              variant="h5"
              className="animate__animated
                animate__lightSpeedInLeft"
            >
              Usuarios
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={12}>
                    
          </Grid>
        </Grid>
      </JobPostingLayout>
    </>
  );
};
