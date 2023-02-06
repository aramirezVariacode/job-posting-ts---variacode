import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react'


interface Props {
  password: string;
  passwordError: string | undefined;
  passwordTouched: boolean | undefined;
  handleChange :   (e: React.ChangeEvent<any>)=> void;
  name?:string;
}
export const PasswordInput = ({password,passwordError,passwordTouched,handleChange,name}:Props) => {

    const [showPassword, setShowPassword] = useState(false);

     const handleClickShowPassword = () => setShowPassword((show) => !show);

     const handleMouseDownPassword = (event: any) => {
       event.preventDefault();
     };

  return (
  
      <FormControl
        variant="outlined"
        error={passwordTouched && Boolean(passwordError)}
        fullWidth
      >
        <InputLabel htmlFor={name ? name : "password"}>Password</InputLabel>
        <OutlinedInput
          id={name ? name : "password"}
          name={name ? name : "password"}
          value={password}
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={name ? name : "password"}
        />
        <FormHelperText>{passwordTouched && passwordError}</FormHelperText>
      </FormControl>
   
  );
}
