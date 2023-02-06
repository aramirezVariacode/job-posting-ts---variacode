import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { GenericInput } from "../../components/GenericInput";
import { useCreateJobForm } from "../hooks/useCreateJobForm";

import { JobPostingLayout } from "../layout/JobPostingLayout";

export const CreateJob = () => {
  const { formik, acceessType, jobTypes, countries } = useCreateJobForm();

  const { values, errors, handleChange, handleSubmit, touched, isSubmitting } =
    formik;
  const { position, description, jobTypeId, accessTypeId, location, recruiterId, } = values;

  const {
    position: positionTouched,
    description: descriptionTouched,
    jobTypeId: jobTypeIdTouched,
    accessTypeId: accesTypeIdTouched,
    location: locationTouched,
    recruiterId: recruiterTouched,
  } = touched;

  const {
    position: positionError,
    description: descriptionError,
    jobTypeId: jobTypeIdError,
    accessTypeId: accesTypeIdError,
    location: locationError,
    recruiterId: recruiterError,
  } = errors;

  return (
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
            Crear empleo
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
                {/* position */}
                <GenericInput
                  label="Cargo"
                  name="position"
                  handleChange={handleChange}
                  value={position}
                  valueError={positionError}
                  valueTouched={positionTouched}
                />
                {/* description */}
                <GenericInput
                multiline
                  label="Descripción"
                  name="description"
                  handleChange={handleChange}
                  value={description}
                  valueError={descriptionError}
                  valueTouched={descriptionTouched}
                />
                {/* location */}
                <FormControl error={locationTouched && Boolean(locationError)}>
                  <InputLabel id="location">Ubicación</InputLabel>
                  <Select
                    labelId="location"
                    name="location"
                    value={location}
                    onChange={handleChange}
                    label="location"
                  >
                    {countries.map(({ name, capital }: any) => (
                      <MenuItem
                        key={name.common}
                        value={`${name.common}, ${capital[0]}`}
                      >
                        {name.common}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {locationTouched && locationError}
                  </FormHelperText>
                </FormControl>

                {/*jobTypeId*/}
                <FormControl
                  error={jobTypeIdTouched && Boolean(jobTypeIdError)}
                >
                  <InputLabel id="jobTypeId">Modalidad de trabajo</InputLabel>
                  <Select
                    labelId="jobtypeId"
                    name="jobTypeId"
                    label="Lugar de Trabajo"
                    value={jobTypeId}
                    onChange={handleChange}
                  >
                    {jobTypes.map((jobType: any) => (
                      <MenuItem key={jobType.id} value={jobType.id}>
                        {jobType.jobtype}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {jobTypeIdTouched && jobTypeIdError}
                  </FormHelperText>
                </FormControl>

                {/*accesstype*/}
                <FormControl
                  error={accesTypeIdTouched && Boolean(accesTypeIdError)}
                >
                  <InputLabel id="accessTypeId">Tipo de acceso</InputLabel>
                  <Select
                    labelId="accessTypeId"
                    name="accessTypeId"
                    label="Lugar de Trabajo"
                    value={accessTypeId}
                    onChange={handleChange}
                  >
                    {acceessType.map(({ id, accesstype  }) => (
                      <MenuItem key={id} value={id}>
                        {accesstype}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {accesTypeIdTouched && accesTypeIdError}
                  </FormHelperText>
                </FormControl>

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
  );
};
