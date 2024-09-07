import React, { ReactNode, forwardRef } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SxProps,
  Theme,
} from "@mui/material";

interface ButtonProps extends Omit<MuiButtonProps, "sx" | "ref"> {
  icon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  sx?: SxProps<Theme>;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, onClick, sx }, ref) => {
    return (
      <MuiButton ref={ref} onClick={onClick} sx={sx} startIcon={icon}>
        {children} {/* Use children here */}
      </MuiButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
