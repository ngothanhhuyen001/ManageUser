
import './style.scss'
import React from 'react';
import { Modal } from 'antd';

interface DeleteConfirmModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<DeleteConfirmModalProps> = ({ visible, onCancel, onConfirm }) => {
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
