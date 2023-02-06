import Swal from 'sweetalert2';
import { sedMessageWhatsAppPostulant } from '../api/apiFunctions/postulations';


export const sendMessageWhatsapp = (id:string) => {
 Swal.fire({
   title: "¿Desea contactar al postulante?",
   /* text: "You won't be able to revert this!", */
   icon: "info",
   showCancelButton: true,
   confirmButtonColor: "#3085d6",
   cancelButtonColor: "#d33",
   confirmButtonText: "Contactar",
 }).then((result) => {
   if (result.isConfirmed) {
      sedMessageWhatsAppPostulant({
        postulantId: id,
        templateName: "hello_world", //registered_application //  hello_world
      })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
   }
 });
}
