import { Button } from "antd";
import type { ButtonProps } from "antd/es/button/button";
import * as React from "react";

interface Props {
  className: string;
  type?: ButtonProps['type'];
  onClick?:  () => void;
  nameButton?: string;
  shape?: string;
  icon?: React.ReactNode;
}

const ButtonBase: React.FC<Props> = ({ className, type, onClick, nameButton, shape, icon }) => {

  return <Button
    className={className}
    type={type}
    onClick={onClick}
    shape={shape}
    icon={icon}
  >
    {nameButton}
  </Button>
}

export default ButtonBase;