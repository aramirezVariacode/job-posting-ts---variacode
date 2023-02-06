import { TextField } from '@mui/material';
import React from 'react'

interface Props {
  email: string;
  emailError: string | undefined;
  emailTouched: boolean | undefined;
  handleChange: (e: React.ChangeEvent<any>) => void;
  name?: string;
}
export const EmailInput = ({emailTouched,emailError,handleChange,email,name} : Props) => {
  return (
    <TextField
      label="Correo"
      type="text"
      id={name ? name : "email"}
      name={name ? name : "email"}
      placeholder="correo@google.com "
      fullWidth
      value={email}
      onChange={handleChange}
      error={emailTouched && Boolean(emailError)}
      helperText={emailTouched && emailError}
    />
  );
}
