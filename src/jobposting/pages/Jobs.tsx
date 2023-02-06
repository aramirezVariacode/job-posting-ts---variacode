import { Divider, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { CheckingAuthComponent } from "../../ui/components";
import { JobCard } from "../components";
import { useJobsStore } from "../hooks/useJobsStore";
import { JobPostingLayout } from "../layout/JobPostingLayout";

export const Jobs = () => {
  const { startLoadJobs, jobs, isLoadingJobs } = useJobsStore();

  useEffect(() => {
    startLoadJobs();

  }, []);

  if (isLoadingJobs) return <CheckingAuthComponent />;

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
              Tablero de Empleos
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
            {jobs.length === 0 ? (
              <Typography variant="body1">No existen empleos</Typography>
            ) : (
              <>
                {jobs?.map((job: any) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </JobPostingLayout>
    </>
  );
};
