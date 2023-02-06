import { Button } from "@mui/material"

import { useSearchParams } from "react-router-dom"





export const VerifyMail =  () => {

const [params] = useSearchParams();



console.log(params.get('token'))

  return (
   <>
        <h1>Verificar mail presionando el boton</h1>

        <Button>Verificar cuenta</Button>
   </>
  )
}
