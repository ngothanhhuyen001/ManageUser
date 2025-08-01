
import './style.scss'
import { Modal } from 'antd';

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ModalProps> = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      className='confirm-modal'
      open={visible}
      title="Confirm"
      closeIcon={null}
      onCancel={onCancel}
      onOk={onConfirm}
      okText="Yes"
      okButtonProps={{ type: "primary"}}
      cancelText="No"
      centered
    >
      Do you want to delete these user?
    </Modal>
  );
};

export default ConfirmModal;
