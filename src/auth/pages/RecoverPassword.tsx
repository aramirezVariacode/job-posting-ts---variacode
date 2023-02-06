import { Button, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { EmailInput } from "../../components/EmailInput";
import { useRecoverPassForm } from "../hooks/useRecoverPassForm";
import { AuthLayout } from "../layout/AuthLayout";

export const RecoverPassword = () => {
  const { formik } = useRecoverPassForm();

  const { handleSubmit, handleChange, values, errors, touched, isSubmitting } = formik;

  const { email } = values;
  const { email: emailTouched } = touched;
  const { email: emailError } = errors;
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
            Recupera tu cuenta
          </Typography>
          <Divider />

          <form onSubmit={handleSubmit}>
            <Grid item sx={{mb:2}}>
              <EmailInput
                email={email}
                emailError={emailError}
                emailTouched={emailTouched}
                handleChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
              <Link className="link-button-cancel" to={`/login`}>
                Cancelar
              </Link>

              <Button
                type="submit"
                sx={{ ml: 1 }}
                variant="contained"
                disabled={isSubmitting}
              >
                Buscar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
