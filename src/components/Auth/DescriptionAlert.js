import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useUserContext } from "../../Context/userContext";

export default function DescriptionAlerts() {
  const { closeAlert } = useUserContext();

  return (
    <Stack style={{ width: "100%" }}>
      <Alert severity="error" onClose={closeAlert}>
        Invalid Login Details — <strong>Please Sign Up!</strong>
      </Alert>
    </Stack>
  );
}
