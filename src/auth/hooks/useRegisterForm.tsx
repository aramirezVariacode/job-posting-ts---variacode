import { useMemo } from "react";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import jobPostingAPi from "../../api/jobPostingApi";
import { alertError, alertSuccess } from "../../helpers";
import { useAuthStore } from "./useAuthStore";
const validationSchema = yup.object({
  name: yup
    .string()
    .required("Campo requerido")
    .matches(
      /^[^$%&|<>#*!¿?¡]*$/,
      "Nombre no puede contener caracteres especiales ($%&|<>#*)"
    )
    .max(50, "Máximo 50 caracteres"),
  lastname: yup
    .string()
    .required("Campo requerido")
    .matches(
      /^[^$%&|<>#*!¿?¡]*$/,
      "Nombre no puede contener caracteres especiales ($%&|<>#*)"
    ),
  email: yup
    .string()
    .email("Ingresa un email valido")
    .required("Campo requerido")
    .max(50, "Máxim0 50 caracteres"),
  phone: yup
    .string()
    .required("Campo requerido")
    .matches(/^\+5[0-9]\d{9}$/, "Número telefonico no valido"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener por lo menos 6 caracteres")
    .max(20, "La contraseña debe tener maximo 20 caracteres")
    .required("Campo Obligatorio"),
});

interface MyFormProps {
  name: string;
  password: string;
  lastname: string;
  email: string;
  phone: string;
  roleId: string;
}

export const useRegisterForm = () => {

     const { status } = useAuthStore();
     const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmitForm = async (
    values: MyFormProps,
    actions: FormikHelpers<MyFormProps>
  ) => {
    try {
      const res = await jobPostingAPi.post("/postulant", values);
      if (res.status === 201 || 200) {
        alertSuccess(
          "Cuenta creada con éxito, dirijase a su bandeja de correo electronico para verificar su cuenta"
        );
        actions.setSubmitting(false);
        actions.resetForm();
      }
    } catch (error) {
      console.log(error);
      alertError("Error al realizar la acción");
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      lastname: "",
      email: "",
      phone: "",
      roleId: "9654e0b7",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });
  return {
    formik,
    isAuthenticating
  };
};
