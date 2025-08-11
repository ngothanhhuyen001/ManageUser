import { Button, Space } from "antd";
import type { User } from "../../share/types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const userColumns = (props: { handleEditUser: (record: User) => void, setDeleteUserId: (id: number) => void, isSmallView?: boolean }) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    ellipsis: true,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
  },
  {
    title: 'Action',
    key: 'action',
    width: 200,
    render: (record: User) => (
      <Space size="middle">
        <Button
          icon={<EditOutlined />}
          onClick={() => {

            props.handleEditUser(record)
          }}
          size={props.isSmallView ? 'small' : 'middle'}
        >
          {!props.isSmallView && 'Edit'}
        </Button>
        <Button
          icon={<DeleteOutlined />}
          type="primary"
          danger
          onClick={() => props.setDeleteUserId(record.key)}
          size={props.isSmallView ? 'small' : 'middle'}
        >
          {!props.isSmallView && 'Delete'}
        </Button>
      </Space>
    ),
  },
];




