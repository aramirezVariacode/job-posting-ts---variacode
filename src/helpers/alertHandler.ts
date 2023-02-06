import Swal from "sweetalert2";

export const alertSuccess = (message : string) =>{
    Swal.fire('Bien!',message,'success')
}

export const alertError = (message : string) =>{
    Swal.fire('Error',message,'error')
}