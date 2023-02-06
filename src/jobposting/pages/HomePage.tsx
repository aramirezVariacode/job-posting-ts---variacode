import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getRecentJobs } from "../../api/apiFunctions";
import { RegistroJobs } from "../../api/interfaces/interfaces";
import foto from "../../assets/illustration-concept-abstrait-equipe-dev.webp";
import { JobCard } from "../components";
import { JobPostingLayout } from "../layout/JobPostingLayout";
export const HomePage = () => {

  const [jobs, setJobs] = useState<RegistroJobs[]>([]);


  useEffect(() => {
    getRecentJobs().then(({ data }) => {
        setJobs(data.registros);
      }).catch(error =>{
        console.log(error)
      });
  }, []);


  return (
    <>
      <JobPostingLayout>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="start"
          sx={{ minHeight: "85vh", width: "90vw" }}
          gap={5}
        >
          <Grid
            container
            display="grid"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 5 }}
          >
            <Grid
              item
              xs={12}
              display="grid"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h2"
                color="primary"
                className="animate__animated animate__zoomIn"
              >
                VARIACODE
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              display="grid"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                Digital Progress Through Technical Acceleration
              </Typography>
            </Grid>
          </Grid>

          <Grid container sx={{ display: { md: "flex", xs: "grid" } }}>
            <Grid
              item
              xs={12}
              display="flex"
              alignItems="start"
              textAlign="start"
              mt={2}
              mb={2}
            >
              <Typography variant="h4">Últimas ofertas de empleo</Typography>
            </Grid>

            {/* TODO: JOBCARD con ultimos empleos creados */}

            <Grid
              className="animate__animated animate__zoomIn"
              item
              display="flex"
              sx={{
                flexWrap: "wrap",
                padding: "5px 0",
              }}
              justifyContent="start"
              alignItems="start"
              gap={3}
              mb={5}
              xs={12}
            >
              {jobs.map((job: any) => (
                <JobCard key={job.id} job={job} />
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: { xs: "grid", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "500px", md: "350px" },
              width: "90vw",
              backgroundColor: "primary.main",
              color: "white",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              textAlign="center"
              sx={{ display: { xs: "grid" } }}
            >
              <img src={foto} alt="imagen" />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              textAlign="center"
              sx={{ padding: "0 10px", display: { xs: "grid" } }}
            >
              <Typography variant="h5">Our Hystory</Typography>

              <Typography variant="body1">
                Established in 2016, we are a leading IT solutions company. We
                enhance digital progress through technical acceleration using
                our tech knowledge and cross-industry experience. Focused on
                quality with agile methodologies and a passion for technology,
                we have collaborated with several companies and brands along the
                road, bringing development, accomplishment, and even investors
                to our clients. Founded by engineers who wanted to boost the
                growth of startups, we’ve created true and long-lasting value in
                every business relationship. With our top-tier engineers, we can
                virtually operate in every single time zone to secure your
                business operations success anytime, anywhere.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </JobPostingLayout>
    </>
  );
};
