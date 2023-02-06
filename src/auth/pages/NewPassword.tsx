import {
  Button, Divider, Grid, Typography
} from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { updatePassword } from "../../api/apiFunctions/auth";
import { PasswordInput } from "../../components/PasswordInput";
import { alertError, alertSuccess } from "../../helpers/alertHandler";
import { AuthLayout } from "../layout/AuthLayout";

const validationSchema = yup.object({
  pass: yup
    .string()
    .min(6, "La contraseña debe tener por lo menos 6 caracteres")
    .max(20, "La contraseña debe tener maximo 20 caracteres")
    .required("Campo Obligatorio"),
  duplicatePass: yup
    .string()
    .required("Campo Obligatorio")
    .oneOf([yup.ref("pass"), null], "Las contraseñas deben ser iguales"),
});

interface MyFormProps {
  pass: string;
  duplicatePass: string;
}
export const NewPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  

  const onSubmit = ( values: MyFormProps,actions: FormikHelpers<MyFormProps> ) => {
    updatePassword(token!, values).then((res: any) => {
      console.log(res);
      if (res.status !== 200) {
        alertError("Error, no se pudo reestrablecer su contraseña");
      }

      alertSuccess(
        "Contraseña reestablecida, realice el proceso de  login de forma normal"
      );
      navigate("/login");
      actions.resetForm();
    });
  };
  const formik = useFormik({
    initialValues: {
      pass: "",
      duplicatePass: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const { handleSubmit, handleChange, isSubmitting, values, errors, touched } =
    formik;

  const { pass, duplicatePass } = values;
  const { pass: passwordTouched, duplicatePass: duplicatePassTouched } =
    touched;
  const { pass: passwordError, duplicatePass: duplicatePassError } = errors;
  return (
    <AuthLayout>
      <Grid
        container
        spacing={2}
        sx={{ width: "100%" }}
        display="flex"
        justifyContent="space-between"
        alignContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="h6" mb={2}>
            Actualiza tu contraseña
          </Typography>
          <Divider />

          <form onSubmit={handleSubmit}>
            {/* contraseña */}
            <Grid item xs={12} mb={2} mt={2}>
              <PasswordInput
                handleChange={handleChange}
                password={pass}
                passwordError={passwordError}
                passwordTouched={passwordTouched}
                name={"pass"}
              />
            </Grid>

            {/*  password2 */}
            <Grid item xs={12} mb={2}>
              <PasswordInput
                handleChange={handleChange}
                password={duplicatePass}
                passwordError={duplicatePassError}
                passwordTouched={duplicatePassTouched}
                name={"duplicatePass"}
              />
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
              <Link className="link-button-cancel" to={`/login`}>
                Cancelar
              </Link>

              <Button type="submit" sx={{ ml: 1 }} variant="contained">
                Guardar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
