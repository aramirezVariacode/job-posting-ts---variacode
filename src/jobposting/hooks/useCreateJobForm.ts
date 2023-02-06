import { FormikHelpers, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { getAccessTypeJob, getJobTypes } from '../../api/apiFunctions';
import jobPostingAPi from '../../api/jobPostingApi';
import { getCountriesSouthAmerica } from '../../api/restCountries/restCountries';
import { useAuthStore } from '../../auth/hooks';
import { generateXMlJob } from '../../helpers/generateXMlJob';
const validationSchema = yup.object({
  position: yup
    .string()
    .required("Campo requerido")
    .max(80, "Máximo 80 caracteres"),
  description: yup
    .string()
    .required("Campo requerido")
    .max(300, "Máxim0 50 caracteres"),
  location: yup
    .string()
    .max(80, "Máximo 80 caracteres")
    .required("Campo requerido"),
  recruiterId: yup.string().required("Campo requerido"),
  jobTypeId: yup.string().required("Campo requerido"),
  accessTypeId: yup
    .string()
    .max(80, "Máximo 80 caracteres")
    .required("Campo requerido"),
});

interface MyCreateJobForm {
  position: string;
  description: string;
  location: string;
  recruiterId: any;
  jobTypeId: string;
  accessTypeId: string;
}
export const useCreateJobForm = () => {

      const { user } = useAuthStore();

  const [jobTypes, setJobTypes] = useState([]);
  const [acceessType, setAccessType] = useState([]);
  const [countries, setCountries] = useState([]);
       useEffect(() => {
         getJobTypes().then(({ data }: any) => {
          console.log(data)
           setJobTypes(data.registros);
         });

         getAccessTypeJob().then(({ data }: any) => {
           setAccessType(data.registros);
         });
       }, []);

       useEffect(() => {
         getCountriesSouthAmerica().then((countries: any) => {
           setCountries(countries.data);
         });
       }, []);
     
      const onSubmitForm = async (values: MyCreateJobForm, actions : FormikHelpers<MyCreateJobForm>) => {
        try {
            const { description, position,jobTypeId,location } = values;
              const xml = generateXMlJob(
                position,
                description,
                jobTypeId,
                location
              );
              console.log(xml);

          await jobPostingAPi.post("/job", values);
        
          Swal.fire("Bien!!", "Registro creado con éxito", "success");
        } catch (error) {
          Swal.fire("Error", "Error al guardar el registro", "error");
        }
       /*  actions.resetForm(); */
      };

      const formik = useFormik({
        initialValues: {
          position: "",
          description: "",
          location: "",
          recruiterId: user.id,
          jobTypeId: "",
          accessTypeId: "",
        },
        validationSchema: validationSchema,
        onSubmit: onSubmitForm,
      });
  return {
    jobTypes,
    acceessType,
    countries,
    formik
  }
};
