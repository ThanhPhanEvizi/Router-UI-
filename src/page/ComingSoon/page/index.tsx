import React, { useEffect, useState } from "react";
import { Col } from "../../../components/elements";
import CountDown from "../components/CountDown";
import Header from "../components/Header";
import ImageEffect from "../components/ImageEffec";

const ComingSoonPage = () => {
  const [timer, setTimer] = useState(10000000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <Col
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#121831",
        position: "relative",
      }}
    >
      <Col sx={{ alignItems: "center", justifyContent: "center" }}>
        <Header />
        <ImageEffect />
      </Col>
      <Col
        sx={{
          position: "absolute",
          bottom: "0px",
          height: "25vh",
          width: "100%",
        }}
      >
        <CountDown timer={timer} />
      </Col>
    </Col>
  );
};

export default ComingSoonPage;
