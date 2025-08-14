
import './style.scss'
import { Modal as AntdModal } from 'antd';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  okText?: string;
  cancelText?: string;
  children: React.ReactNode;
  className?: string;
  closeIcon?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, title, visible, onCancel, onConfirm, okText = 'Yes', cancelText = 'No', className,closeIcon }) => {
  return (
    <AntdModal
      className={className}
      open={visible}
      title={title}
      closeIcon={closeIcon}
      onCancel={onCancel}
      onOk={onConfirm}
      okText={okText}
      okButtonProps={{ type: "primary" }}
      cancelText={cancelText}
      centered
    >
      {children}
    </AntdModal>
  );
};

export default Modal;
