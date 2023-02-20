import { Button, SxProps, TextField, Typography } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Col, Row } from "../../../components/elements";
import UiButton from "../../../components/elements/UiButton";

interface Props {
  timer: number;
}

export function convertingMilliseconds(milliseconds: number) {
  const milliSecond = Math.floor(milliseconds % 60);
  const seconds = Math.floor(milliseconds / 100) % 60; // 1s second -> milliSecond * 1000
  const minutes = Math.floor(milliseconds / 6000) % 60;
  const hours = Math.floor(milliseconds / 360000) % 24;
  return {
    minutes: minutes,
    seconds: seconds,
    hours: hours,
    milliSecond: milliSecond,
  };
}

const BoxStyle = (p: any) => {
  return (
    <Row
      sx={{
        borderRadius: "12px",
        border: "1px solid black",
        width: "100px",
        height: "80px",
        alignItems: "center",
        justifyContent: "center",
        color: "rgb(213, 217, 233)",
        backgroundColor: "rgb(7, 14, 19)",
      }}
      {...p}
    />
  );
};

const TextFieldStyle: SxProps = {
  margin: "0px",
  width: "65%",
  "& .MuiFormLabel-root": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "button.primary",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "button.primary",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    fontSize: "16px",
    paddingLeft: "5px",
    padding: "0px",
    "& fieldset": {
      borderColor: "rgb(213, 217, 233)",
    },
    "&:hover fieldset": {
      borderColor: "rgb(213, 217, 233)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(213, 217, 233)",
    },
  },

  input: {
    color: "white",
  },
};

const CountDown = ({ timer }: Props) => {
  const { hours, minutes, seconds } = convertingMilliseconds(timer);

  return (
    <Col
      sx={{
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Row
        sx={{
          justifyContent: "space-between",
          width: "50vh",
        }}
      >
        <BoxStyle>
          <Typography sx={{ fontSize: "3em", fontWeight: "bold" }}>
            {hours}
          </Typography>
        </BoxStyle>
        <BoxStyle>
          <Typography sx={{ fontSize: "3em", fontWeight: "bold" }}>
            {minutes}
          </Typography>
        </BoxStyle>
        <BoxStyle>
          <Typography sx={{ fontSize: "3em", fontWeight: "bold" }}>
            {seconds}
          </Typography>
        </BoxStyle>
      </Row>
      <Row
        sx={{
          width: "50vh",
          marginTop: "25px",
          justifyContent: "space-between",
        }}
      >
        <TextField
          placeholder="Email Address"
          label="Email Address"
          sx={{
            ...TextFieldStyle,
          }}
        />
        <UiButton icon={<NotificationsActiveIcon />}>Notify Me</UiButton>
      </Row>
    </Col>
  );
};

export default CountDown;
