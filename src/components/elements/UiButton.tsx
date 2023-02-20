import { Button, ButtonBaseProps } from "@mui/material";

interface UiButtonProps extends ButtonBaseProps {
  icon?: any;
}

const UiButton = ({ sx, children, icon }: UiButtonProps) => {
  return (
    <Button
      startIcon={icon}
      sx={{
        color: "white",
        textTransform: "none",
        padding: "10px 10px",
        borderRadius: "12px",
        backgroundColor: "rgb(96, 109, 136)",
        "&:hover": {
          backgroundColor: "rgb(96, 109, 136)",
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default UiButton;
