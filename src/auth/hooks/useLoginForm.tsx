import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";


import { useMemo } from "react";
import { useAuthStore } from "./useAuthStore";

interface MyFormProps {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Debés ingresar un email valido")
    .required("Campo obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener por lo menos 6 caracteres")
    .max(20, "La contraseña debe tener maximo 20 caracteres")
    .required("Campo Obligatorio"),
});

export const useLoginForm = () => {

     const { status, startLoginUser } = useAuthStore();

     const isAuthenticating = useMemo(() => status === "checking", [status]);

     const onSubmit = (
       values: MyFormProps,
       actions: FormikHelpers<MyFormProps>
     ) => {
       startLoginUser(values);
       actions.resetForm();
     };

     const formik = useFormik({
       initialValues: {
         email: "",
         password: "",
       },
       validationSchema: validationSchema,
       onSubmit: onSubmit,
     });
  return {
    isAuthenticating,
    onSubmit,
    formik,


  };
};
