import { Avatar, Container } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { Col, Row, Text } from "../../../components/elements";
import { TESTAMENT_LIST } from "../../../constants";

const Testaments = () => {
  return (
    <Col
      sx={{
        backgroundColor: "#12172f",
        minHeight: "100vh",
        color: "white",
        padding: "50px 0px ",
      }}
    >
      <Container>
        <Col>
          <Col sx={{ alignItems: "center", marginBottom: "50px" }}>
            <Text sx={{ fontSize: "2.15em", fontWeight: "bold" }}>
              Testaments
            </Text>
            <Text sx={{ textAlign: "center" }}>
              We are so grateful for your positive review and appreciate your
              support of our product
            </Text>
          </Col>
          <Masonry>
            {TESTAMENT_LIST.map((testament) => {
              return (
                <Col
                  sx={{
                    borderRadius: "12px",
                    padding: "15px  ",
                    backgroundColor: "#030614",
                    cursor: "pointer",
                    transitionDuration: "0.5s",
                    "&:hover": {
                      transform: "scale(1.01)",
                      boxShadow:
                        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    },
                  }}
                >
                  <Row
                    sx={{
                      marginBottom: "15px",
                    }}
                  >
                    <Avatar />
                    <Col sx={{ marginLeft: "10px" }}>
                      <Text sx={{ fontWeight: "bold" }}>{testament.name}</Text>
                      <Text sx={{ opacity: "0.6", fontSize: "0.75em" }}>
                        {testament.role}
                      </Text>
                    </Col>
                  </Row>
                  <Text>{testament.testament}</Text>
                </Col>
              );
            })}
          </Masonry>
        </Col>
      </Container>
    </Col>
  );
};

export default Testaments;
