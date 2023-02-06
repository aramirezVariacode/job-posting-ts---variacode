import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import Swal from "sweetalert2";
import * as yup from "yup";
import jobPostingAPi from "../../api/jobPostingApi";
import { JobPostingLayout } from "../../jobposting/layout/JobPostingLayout";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Campo requerido")
    .matches(
      /^[^$%&|<>#*!¿?¡]*$/,
      "Nombre no puede contener caracteres especiales ($%&|<>#*)"
    )
    .max(50, "Máximo 50 caracteres"),
  lastname: yup
    .string()
    .matches(
      /^[^$%&|<>#*!¿?¡]*$/,
      "Nombre no puede contener caracteres especiales ($%&|<>#*)"
    )
    .required("Campo requerido")
    .max(50, "Máxim0 50 caracteres"),
  email: yup
    .string()
    .email("Ingresa un email valido")
    .required("El email es requerido")
    .max(50, "Máxim0 50 caracteres"),
});

interface MyFormProps {
  name: string;
  lastname:string;
  email:string;
  roleId: string;
}

export const CreateRecruiter = () => {

  const onSubmitForm = async (values : MyFormProps, actions : FormikHelpers<MyFormProps>) => {
    console.log(values);

    try {
      await jobPostingAPi.post("/admin/newrecruiter", values);
      Swal.fire("Creado", "Reclutador creado con éxito", "success");

    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error",
        "No se pudo guardar el registro, posiblemente ya exista un reclutaddor con el mismo email en la base de datos",
        "error"
      );
    }
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",

      //TODO: IdRole
      roleId: "d96a2209",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });

  const { values, errors, handleChange, handleSubmit, touched, isSubmitting } =
    formik;

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
              className="animate__animated
                animate__lightSpeedInLeft"
              variant="h5"
            >
              Crear reclutador
            </Typography>
            <hr />
          </Grid>

          <Card sx={{ width: { xs: "300px", md: "40vw" } }}>
            <CardContent>
              <Grid item>
                <form
                  onSubmit={handleSubmit}
                  style={{ width: "100%", display: "grid", gap: 20 }}
                >
                  {/* name */}
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Nombre"
                    placeholder="Nombre del reclutador"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  {/* lastName */}
                  <TextField
                    fullWidth
                    multiline
                    id="lastname"
                    name="lastname"
                    label="Apellidos"
                    value={values.lastname}
                    onChange={handleChange}
                    error={touched.lastname && Boolean(errors.lastname)}
                    helperText={touched.lastname && errors.lastname}
                  />

                  {/* email */}
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="Ej: abcd@gmail.com"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />

                  {/*role*/}

                  <TextField
                    fullWidth
                    id="roleId"
                    name="roleId"
                    label="Rol"
                    defaultValue="Recruiter"
                    onChange={handleChange}
                    disabled
                  />

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
