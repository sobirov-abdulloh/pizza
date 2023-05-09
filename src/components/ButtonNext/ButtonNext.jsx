import React from 'react'
import "./ButtonNext.css"
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
function ButtonNext() {
  return (
    <div className="ButtonNext">
      <Stack spacing={0}>
        <Pagination count={10} boundaryCount={0} />
      </Stack>
    </div>
  );
}

export default ButtonNext