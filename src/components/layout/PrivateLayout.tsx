import React, { memo } from "react";
import { Box } from "@mui/system";
import { Col } from "../elements";
import Navigation from "./Navigation";
import { getUserCredentialFromStorage } from "../../services/auth";
import { useAppSelector } from "../../app/hooks";
import { selectRole } from "../../redux/app/appSlice";

interface Props {
  children: React.ReactNode;
}

const PrivateLayout = ({ children }: Props) => {
  const role = useAppSelector(selectRole) || getUserCredentialFromStorage();

  return (
    <Col sx={{}}>
      <Navigation role={role || ""} />
      <Box
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {children}
      </Box>
    </Col>
  );
};

export default memo(PrivateLayout);
