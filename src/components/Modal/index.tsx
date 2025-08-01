
import './style.scss'
import { Modal as AntdModal } from 'antd';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  okText?: string;
  cancelText?: string;
  children: React.ReactNode,
}

const Modal: React.FC<ModalProps> = ({children ,  title, visible, onCancel, onConfirm, okText = 'Yes', cancelText = 'No' }) => {
  return (
    <AntdModal
      className='modal-wrapper'
      open={visible}
      title={title}
      closeIcon={null}
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
