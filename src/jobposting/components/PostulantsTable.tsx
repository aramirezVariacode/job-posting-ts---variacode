import { WhatsApp } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { Postulants } from "../interfaces";
import WhatsAppModal from "./WhatsAppModal";
import { sedMessageWhatsAppPostulant } from '../../api/apiFunctions/postulations';
import { sendMessageWhatsapp } from '../../helpers/sendMessageWhatsapp';

interface Props {
  postulants: Postulants[];
}

export const PostulantsTable = ({ postulants }: Props) => {

  const [open,setOpen] = useState(false);
  const [phonePostulant,setPhonePostulant] = useState('');


  const handleOpen = (phone:string) => {
    setOpen(true);
    setPhonePostulant(phone)
  };
  const handleClose = () => setOpen(false);
  
  const handleMessageWhatsApp = (id:string) =>{
 sendMessageWhatsapp(id);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Contacto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postulants.map((postulant) => (
              <TableRow
                key={postulant.postulant}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {postulant.postulant}
                </TableCell>
                <TableCell component="th" scope="row">
                  {postulant.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {postulant.phone}
                </TableCell>
                <TableCell component="th" scope="row">
                  <IconButton
                    onClick={() => handleMessageWhatsApp(postulant.id)}
                  >
                    <WhatsApp color="success" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <WhatsAppModal open={open} onClose={handleClose} phone={phonePostulant} />
    </>
  );
};
