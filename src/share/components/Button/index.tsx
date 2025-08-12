import { Button } from "antd";
import type { ButtonProps } from "antd/es/button/button";

interface Props {
  className: string;
  type?: ButtonProps['type'];
  onClick?:  () => void;
  nameButton: string;
  shape?: string;
}

const ButtonBase: React.FC<Props> = ({ className, type, onClick, nameButton, shape }) => {

  return <Button
    className={className}
    type={type}
    onClick={onClick}
    shape={shape}
  >
    {nameButton}
  </Button>
}

export default ButtonBase;