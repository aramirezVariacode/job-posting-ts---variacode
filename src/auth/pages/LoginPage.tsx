import { Button, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import { useLoginForm } from "../hooks/useLoginForm";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const { formik, isAuthenticating } = useLoginForm();

  const { handleSubmit, handleChange, values, errors, touched } = formik;

  const { password, email } = values;
  const { password: passwordTouched, email: emailTouched } = touched;
  const { password: passwordError, email: emailError } = errors;
  return (
    <AuthLayout>
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Login</Typography>
          </Grid>
          {/* correo */}
          <Grid item xs={12}>
            <EmailInput
              email={email}
              emailTouched={emailTouched}
              emailError={emailError}
              handleChange={handleChange}
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

          {/* buttons */}
          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Button
                type="submit"
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
        <Link mr={2} color="inherit" component={RouterLink} to="/register">
          Crear cuenta
        </Link>
        <Link color="inherit" component={RouterLink} to="/recoverPassword">
          ¿Olvidaste tu contraseña?
        </Link>
      </Grid>
    </AuthLayout>
  );
};
