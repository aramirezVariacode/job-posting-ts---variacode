import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getJobsByIdRecruiter } from '../../api/apiFunctions';
import { useAuthStore } from '../../auth/hooks';
import { CheckingAuthComponent } from '../../ui/components';
import { JobCard } from '../components';
import { JobPostingLayout } from '../layout/JobPostingLayout';

export const MyCreatedJobs = () => {

      const {user} = useAuthStore();
      const [jobs, setJobs] = useState([]);
      const [load, setLoad] = useState(true);

      useEffect(() => {
        getJobsByIdRecruiter(user!.id).then(({ data } : any) => {
          setJobs(data.registros);
          setLoad(false);
        });
      }, []);
    if (load) return <CheckingAuthComponent />;
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
              Mis Empleos creados
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
              <Typography>Usted no tiene empleos creados</Typography>
            ) : (
              <>
                {jobs.map((job: any) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </JobPostingLayout>
    </>
  );
}
