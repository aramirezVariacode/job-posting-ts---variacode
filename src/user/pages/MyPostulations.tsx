import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getMyPostulations } from "../../api/apiFunctions";
import { useAuthStore } from "../../auth/hooks";
import { JobCard } from "../../jobposting/components";
import { JobPostingLayout } from "../../jobposting/layout/JobPostingLayout";
import { CheckingAuthComponent } from "../../ui/components";

export const MyPostulations = () => {
  const { user } = useAuthStore();

  const [postulations, setPostulations] = useState([]);
  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
    getMyPostulations(user!.id)
      .then(({ data }: any) => {
        console.log(data);
        setPostulations(data.registros);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <CheckingAuthComponent />;


  return (
    <>
      <JobPostingLayout>
        <Grid
          container
          sx={{ width: "100%", height: "100%" }}
          display="flex"
          justifyContent="center"
        >
          {postulations.length === 0 ? (
            <Typography variant="body1">
              Usted no tiene postulaciones activas a ningun empleo
            </Typography>
          ) : (
            <>
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
                  Mis Postulaciones
                </Typography>
                <Divider />
              </Grid>

              <Grid
                item
                display="flex"
                sx={{ flexWrap: "wrap" }}
                justifyContent="space-evenly"
                alignItems="start"
                gap={3}
                mb={5}
                xs={12}
              >
                {postulations.map((job: any) => (
                  <JobCard key={job.jobid} job={job} />
                ))}
              </Grid>
            </>
          )}
        </Grid>
      </JobPostingLayout>
    </>
  );
};
