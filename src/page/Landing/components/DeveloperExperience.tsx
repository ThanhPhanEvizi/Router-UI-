import { CardMedia, Grid } from "@mui/material";
import { Container } from "@mui/system";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Col, Row, Text } from "../../../components/elements";
import {
  EASY_DEVELOPER_EXPERIENCE,
  FIGMA_DESIGN_SYSTEM,
} from "../../../constants";
import girl from "../../../assets/landing/girl.png";
import boy from "../../../assets/landing/boy.png";

const Li = ({ label }: { label: string }) => {
  return (
    <Row sx={{ alignItems: "center", padding: "5px 0px" }}>
      <CheckCircleOutlineIcon sx={{ color: "rgb(236, 64, 122)" }} />
      <Text sx={{ marginLeft: "10px" }}>{label}</Text>
    </Row>
  );
};

const DeveloperExperience = () => {
  return (
    <Col
      sx={{ minHeight: "100vh", backgroundColor: "#030614", color: "white" }}
    >
      <Container sx={{ padding: "50px 0PX" }}>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Grid item xs={5}>
            <CardMedia component="img" image={girl} />
          </Grid>
          <Grid item xs={5}>
            <Col>
              <Text sx={{ fontSize: "2em", fontWeight: "bold" }}>
                Easy Developer Experience
              </Text>
              <Text sx={{ padding: "15px 0px" }}>
                Berry has made it easy for developers of any skill level to use
                their product.
              </Text>
              <Col>
                {EASY_DEVELOPER_EXPERIENCE.map((label, index) => {
                  return <Li key={index} label={label} />;
                })}
              </Col>
            </Col>
          </Grid>

          <Grid item xs={5}>
            <Col>
              <Text sx={{ fontSize: "2em", fontWeight: "bold" }}>
                Figma Design System
              </Text>
              <Text sx={{ padding: "5px 0px" }}>
                Streamlining the development process and saving you time and
                effort in the initial design phase.
              </Text>
              <Col>
                {FIGMA_DESIGN_SYSTEM.map((label, index) => {
                  return <Li key={index} label={label} />;
                })}
              </Col>
            </Col>
          </Grid>
          <Grid item xs={5}>
            <CardMedia component="img" image={boy} />
          </Grid>
        </Grid>
      </Container>
    </Col>
  );
};

export default DeveloperExperience;
