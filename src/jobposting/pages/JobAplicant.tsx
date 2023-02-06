/* eslint-disable no-useless-escape */
import {
  Button,
  Card,
  CardContent, Grid, Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { JobPostingLayout } from "../layout/JobPostingLayout";

import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import jobPostingAPi from "../../api/jobPostingApi";
import { useAuthStore } from "../../auth/hooks";
import { alertError, alertSuccess } from "../../helpers/alertHandler";

const validationSchema = yup.object({
  curriculum: yup.mixed().required("Curriculum requerido"),
});

interface MyJobApplicantForm {
  curriculum: any;
}
export const JobAplicant = () => {
  const { user } = useAuthStore();
  //parametro id url

  const { id: jobId }  = useParams();

  const onSubmitForm = async (values : MyJobApplicantForm, actions : FormikHelpers<MyJobApplicantForm>) => {
    const formData = new FormData();
    const { curriculum } = values;

    formData.append("jobId", jobId!);
    formData.append("postulantId", user.id);
    formData.append("curriculum", curriculum);

    try {
      const res = await jobPostingAPi.post("/postulation", formData);
      console.log(res);
      alertSuccess("Acabas de postular al empleo correctamente");
      actions.resetForm();
    } catch (error : any) {
      console.log(error );
      alertError("Error al realizar la postulación");
    }
  };

  const formik = useFormik({
    initialValues: {
      curriculum: null,
    },
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    isSubmitting,
    setFieldValue,
  } = formik;

  const handleFileInput = (event : any) => {
    const { target } = event;

    if (target.files[0].size > 5242880) {
      //TODO:Mandar alerta
      Swal.fire(
        "Error",
        "El archivo debe tener un tamaño máximo de 5 mb",
        "error"
      );

      return;
    }
    if (target.files[0].type !== "application/pdf") {
      //TODO:Mandar alerta
      Swal.fire(
        "Error",
        "Solo se permite formato pdf para curriculum",
        "error"
      );
      return;
    }

    handleChange(event);
    setFieldValue("curriculum", target.files[0]);
  };
  return (
    <>
      <JobPostingLayout>
        <Grid
          container
          sx={{ minHeight: "75vh" }}
          display="grid"
          justifyContent="center"
          alignContent="center"
        >
          <Grid item sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              className="animate__animated
                animate__lightSpeedInLeft"
            >
              Adjunta tú curriculum
            </Typography>
            <hr />
          </Grid>

          <Card sx={{ width: { xs: "300px", md: "40vw" } }}>
            <CardContent>
              <Grid item>
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  style={{ width: "100%", display: "grid", gap: 20 }}
                >
                  <Grid item>
                    <input
                      id="curriculum"
                      name="curriculum"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileInput}
                      style={{ marginBottom: "12px" }}
                    />
                    {touched.curriculum && Boolean(errors.curriculum) && (
                      <Box>
                        <small
                          style={{
                            color: "#ff1744",
                            fontSize: "12px",
                            margin: "0px 14px  ",
                          }}
                        >
                          {touched.curriculum && errors.curriculum}
                        </small>
                      </Box>
                    )}
                  </Grid>

                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Guardar
                  </Button>
                </form>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </JobPostingLayout>
    </>
  );
};
