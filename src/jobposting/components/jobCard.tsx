import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../auth/hooks";
import { Job } from "../interfaces";

interface Props {
  job: Job;
}
export const JobCard = ({ job }: Props) => {
  const { user, status } = useAuthStore();
  const {
    position,
    description,
    location,
    recruiter,
    modality,
    postulationid,
  } = job;

  return (
    <>
      <Card
        sx={{
          width: { md: "320px", xs: "350px" },
          height: { md: "auto", xs: "auto" },
          boxShadow:
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
          borderTop: "4px solid #4f46e5",
          padding:1,
         /*  transition: "border 0.12s",
          ":hover": { border: "5px solid #4f46e5"}, */
        }}
      >
        <CardContent>
          <Typography variant="h5">{position}</Typography>
          <Divider />
          <p>{description}</p>
          <p>{location}</p>
          {recruiter && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Reclutador: {recruiter}
            </Typography>
          )}
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Modalidad: {modality}
          </Typography>
        </CardContent>
        <CardActions>
          {(!postulationid && user.role === "postulant") ||
          status === "not-authenticated" ? (
            <Link
              className="linkButton"
              to={
                status === "not-authenticated"
                  ? "/login"
                  : `/dashboard/jobApplicant/${job.id}`
              }
            >
              POSTULAR
            </Link>
          ) : (
            <Button variant="contained" color="error">Eliminar</Button>
          )}
          {(user.role === "recruiter" || user.role === "admin") && (
            <>
              <Link
                className="linkButtonPostulant"
                to={
                  status === "not-authenticated"
                    ? "/login"
                    : `/dashboard/postulantsByJob/${job.id}`
                }
              >
                Postulantes
              </Link>
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
};
