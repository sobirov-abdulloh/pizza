import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import "./ProductDetail.css";
import DialogAlert from "../DialogAlert/DialogAlert";
export default function AlertDialog({ pro }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined fl" onClick={handleClickOpen}>
        Выбрать
      </Button>
      <Dialog
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="Dialog">
          <DialogAlert pro={pro} />
        </div>

      </Dialog>
    </div>
  );
}
