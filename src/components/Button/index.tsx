import { Button } from "antd";
import type { ButtonProps } from "antd/es/button/button";
import type React from "react";

interface Props {
  className: string;
  type?: ButtonProps['type'];
  onClick?:  () => void;
  nameButton: string
}

const ButtonBase: React.FC<Props> = ({ className, type, onClick, nameButton }) => {

  return <Button
    className={className}
    type={type}
    onClick={onClick}
  >
    {nameButton}
  </Button>
}

export default ButtonBase;