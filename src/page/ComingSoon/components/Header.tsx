import { Col, Text } from "../../../components/elements";

const Header = () => {
  return (
    <Col
      sx={{
        color: "white ",
        alignItems: "center",
        padding: "20px 0px",
      }}
    >
      <Text sx={{ fontSize: "2.5em", fontWeight: "bold" }}>Coming Soon</Text>
      <Text sx={{ marginTop: "10px" }}>Something new it on it's way</Text>
    </Col>
  );
};

export default Header;
