import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";





interface MyFormProps {
  message: string;
  phone: string;
}

const validationSchema = yup.object({
  message: yup
    .string()
    .required("Campo obligatorio"),
  phone: yup
    .string()
    .required("Campo requerido")
    .matches(/^\+5[0-9]\d{9}$/, "Número telefonico no valido"),
});

export const useWhatsAppForm = (phone:string) => {


    
     const onSubmit = (
       values: MyFormProps,
       actions: FormikHelpers<MyFormProps>
     ) => {
     console.log(values)
       actions.resetForm();
     };

     const formik = useFormik({
       initialValues: {
         message: "",
         phone: phone,
       },
       validationSchema: validationSchema,
       onSubmit: onSubmit,
       enableReinitialize :true,
     });
  return {
    onSubmit,
    formik,


  };
};
