import { FormikHelpers, useFormik } from "formik";
import { recoverPassword } from "../../api/apiFunctions/auth";
import { alertError, alertSuccess } from "../../helpers";
import * as yup from 'yup';
 const validationSchema = yup.object({
   email: yup
     .string()
     .email("Debés ingresar un email valido")
     .required("Campo obligatorio"),
 });

 interface MyFormProps {
   email: string;
 }

export const useRecoverPassForm = () => {

     const onSubmit = (
       values: MyFormProps,
       actions: FormikHelpers<MyFormProps>
     ) => {
       recoverPassword(values.email).then((response: any) => {
         if (response.status !== 200) {
           return alertError(
             "Error del servidor o el email ingresado no existe en la base de datos"
           );
         }

         alertSuccess(
           "Por favor revise la bandeja de su correo y haga click en el enlace"
         );
         actions.setSubmitting(false);
         actions.resetForm();
       });
     };
     const formik = useFormik({
       initialValues: {
         email: "",
       },
       validationSchema: validationSchema,
       onSubmit: onSubmit,
     });
  return{
    formik
  }
}
