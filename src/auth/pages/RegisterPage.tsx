
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { EmailInput } from "../../components/EmailInput";
import { GenericInput } from "../../components/GenericInput";

import { PasswordInput } from "../../components/PasswordInput";
import { useRegisterForm } from "../hooks/useRegisterForm";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {

  const { formik } = useRegisterForm();

  const { values, errors, handleChange, handleSubmit, touched, isSubmitting} = formik;
  const { password, lastname, name, phone,email } = values;

  const {
    password: passwordTouched,
    lastname: lastNameTouched,
    name: nameTouched,
    phone: phoneTouched,
    email: emailTouched
  } = touched;
  
  const {
    password: passwordError,
    lastname: lastNameError,
    name: nameError,
    phone: phoneError,
    email: emailError
  } = errors;

  return (
    <>
      <AuthLayout>
        <form
          className="animate__animated animate__fadeIn animate__faster"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Crear cuenta</Typography>
            </Grid>

            {/*    name */}
            <Grid item xs={12}>
              <GenericInput
                handleChange={handleChange}
                label={"Nombre"}
                name={"name"}
                value={name}
                valueError={nameError}
                valueTouched={nameTouched}
              />
            </Grid>

            {/* lastName */}

            <Grid item xs={12}>
              <GenericInput
                handleChange={handleChange}
                label={"Apellidos"}
                name={"lastname"}
                value={lastname}
                valueError={lastNameError}
                valueTouched={lastNameTouched}
              />
            </Grid>

            {/* email */}
            <Grid item xs={12}>
              <EmailInput
                email={email}
                emailError={emailError}
                emailTouched={emailTouched}
                handleChange={handleChange}
              />
            </Grid>

            {/* phone */}
            <Grid item xs={12}>
              <GenericInput
                handleChange={handleChange}
                label={"Teléfono"}
                name={"phone"}
                value={phone}
                valueError={phoneError}
                valueTouched={phoneTouched}
              />
            </Grid>

            {/* contraseña */}
            <Grid item xs={12}>
              <PasswordInput
                password={password}
                passwordError={passwordError}
                passwordTouched={passwordTouched}
                handleChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disabled={isSubmitting}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
          <Link color="inherit" component={RouterLink} to="/login">
            Login
          </Link>
        </Grid>
      </AuthLayout>
    </>
  );
};
