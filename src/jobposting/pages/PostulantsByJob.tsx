import {
  Grid, Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostulantsByJob } from "../../api/apiFunctions";
import { CheckingAuthComponent } from "../../ui/components";
import { PostulantsTable } from "../components/PostulantsTable";
import { Postulants } from "../interfaces";
import { JobPostingLayout } from "../layout/JobPostingLayout";



export const PostulantsByJob = () => {
  const [postulants, setPostulants] = useState<Postulants[]>([]);
  const [load, setLoad] = useState(true);

  const { id: idJob } = useParams();

  useEffect(() => {
    getPostulantsByJob(idJob!)
      .then(({ data }: any) => {
        console.log(data)
        setPostulants(data.registros);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (load) return <CheckingAuthComponent />;
  
  return (
    <JobPostingLayout>
      <Grid container spacing={5}>
        {postulants.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="body1">
              No existen postualciones a este empleo
            </Typography>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} textAlign="center">
              <Typography variant="h4">
                Postulantes a: {postulants[0]?.jobposition}{" "}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <PostulantsTable postulants={postulants} />
            </Grid>
          </>
        )}
        <Grid item>
          <Typography variant="body2">{`Postulantes: ${
            postulants.length ? postulants.length : "0"
          }`}</Typography>
        </Grid>
      </Grid>
    </JobPostingLayout>
  );
};
