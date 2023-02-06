import { TextField } from "@mui/material";

interface Props {
  label: string;
  placeholder?: string;
  value: string;
  name: string;
  valueTouched: boolean | undefined;
  valueError: string | undefined;
  multiline?:boolean;
  handleChange: (e: React.ChangeEvent<any>) => void;
}
export const GenericInput = ({label,placeholder,name,value,handleChange,valueTouched,valueError,multiline}:Props) => {

  return (
    <>
      <TextField 
       multiline={multiline}
        fullWidth
        id={name}
        name={name}
        label={label}
        value={value}
        onChange={handleChange}
        error={valueTouched && Boolean(valueError)}
        helperText={valueTouched && valueError}
        placeholder={placeholder}
      />
    </>
  );
}
