import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { GenericInput } from "../../components/GenericInput";
import { useWhatsAppForm } from '../hooks/useWhatsAppForm';

const style = {
  bgcolor: "background.paper",
  border: "1px solid #fff",
  borderRadius: "8px",
  boxShadow: 24,
  left: "50%",
  p: 3,
  position: "absolute" as "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
};

interface Props {
  open: boolean;
  phone:string;
  onClose: () => void;
}
export default function WhatsAppModal({ open, onClose, phone }: Props) {
  const { formik } = useWhatsAppForm(phone);

  const { touched, errors, values, handleChange, handleSubmit } = formik;
  const { message } = values;

  const { message: messageTocuhed } = touched;

  const { message: messageError } = errors;

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-whatsapp">
          <Grid container>
            <Grid item xs={12}>
              <form
                style={{ width: "100%", display: "grid", gap: "1rem" }}
                onSubmit={handleSubmit}
              >
                <Grid item xs={12}>
                  <GenericInput
                    label="Mensaje"
                    placeholder="Escriba su mensaje"
                    name="message"
                    value={message}
                    handleChange={handleChange}
                    valueTouched={messageTocuhed}
                    valueError={messageError}
                  />
                </Grid>

                <Grid item xs={12} textAlign="end">
                  <Button type="submit" variant="contained">Enviar</Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
