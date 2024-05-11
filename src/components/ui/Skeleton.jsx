import { Skeleton } from "@mui/material";
import React from "react";

function MySkeleton() {
  return (
    <>
      <Skeleton
        sx={{ margin: "12px", bgcolor: "rgba(69, 69, 69, 0.8)" , borderRadius : '12px' }}
        variant="rectangular"
        animation="wave"
        width={300}
        height={300}
      />
    </>
  );
}

export default MySkeleton;
