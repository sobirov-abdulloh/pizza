import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { StateContext } from "../../context/AuthProvider";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertComponenet() {
  const {
    alertIn,
    alertText,
    openAlert,
    setOpenAlert,
  } = React.useContext(StateContext);


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
 
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertIn} sx={{ width: "100%" }}>
          {alertText}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
