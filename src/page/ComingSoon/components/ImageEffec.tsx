import { CardMedia } from "@mui/material";
import { Col } from "../../../components/elements";
import mui1 from "../../../assets/mui1.svg";
import mui2 from "../../../assets/mui2.svg";
import mui3 from "../../../assets/mui3.svg";
import mui4 from "../../../assets/mui4.svg";

const ImageEffect = () => {
  return (
    <Col
      sx={{
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        image={mui1}
        alt="Paella dish"
        sx={{
          zIndex: "100000",
          animation: "wings 12s ease-in-out 0s infinite normal none running",
          "@keyframes wings": {
            "0%,100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-50px)" },
          },
        }}
      />
      <CardMedia
        component="img"
        image={mui2}
        alt="Paella dish"
        sx={{
          position: "absolute",
          zIndex: "9999",
          animation: "wings 15s ease-in-out 0s infinite normal none running",
          "@keyframes wings": {
            "0%,100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-40px)" },
          },
        }}
      />
      <CardMedia
        component="img"
        image={mui3}
        alt="Paella dish"
        sx={{
          position: "absolute",
          animation: "hidden 8s ease-in-out 0s infinite normal none running",
          "@keyframes hidden": {
            "50%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
        }}
      />
      <CardMedia
        component="img"
        image={mui4}
        alt="Paella dish"
        sx={{ position: "absolute" }}
      />
    </Col>
  );
};

export default ImageEffect;
