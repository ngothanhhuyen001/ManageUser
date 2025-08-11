import { useMemo, useState } from 'react';
import { Button, Grid, List, Table } from 'antd';
import { Input } from "antd";
import '../UsersPage/style.scss'
import type { User } from '../../share/types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { createUser, deleteUser, updateUser } from '../../share/slices/userSlice';
import { CheckOutlined, DeleteOutlined, EditOutlined, StopOutlined, UserAddOutlined } from '@ant-design/icons';
import { FormBase, ModalBase } from '../../share/components';
import { userColumns } from './utils';
const { useBreakpoint } = Grid;

const { Search } = Input;

const ManageUsers: React.FC = () => {

	const dispatch = useDispatch();
	const users = useSelector((state: RootState) => state.user.users);

	const [editingUser, setEditingUser] = useState<User | null>(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
	const [titleModal, setTitleModal] = useState('');
	const [nameButton, setNameButton] = useState('');
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
	const [selectedRows, setSelectedRows] = useState<User[]>([]);

	const screens = useBreakpoint();
	const isSmallView = !screens.lg;

	const filteredUsers = useMemo(() => {
		return users.filter((u) =>
			u.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [users, searchTerm]);

	const handleUpdateStatus = (newStatus: string) => {
		selectedRows.forEach(user => {
			dispatch(updateUser({ ...user, status: newStatus }));
		});
		setSelectedRowKeys([])
		setSelectedRows([])
	};

	const handleSearch = (text: string) => {
		setSearchTerm(text)
	};

	const handleDelete = (id: number) => {
		dispatch(deleteUser(id));
		setDeleteUserId(null);
	};

	const handleSubmit = (user: User) => {
		if (editingUser) {
			dispatch(updateUser(user));
		} else {
			const maxKey = Math.max(0, ...users.map((u) => u.key));
			dispatch(createUser({ ...user, key: maxKey + 1 }));
		}
		setEditingUser(null);
		setModalOpen(false);
	};

	const handleEditUser = (user: User) => {
		setTitleModal('Edit user');
		setEditingUser(user);
		setModalOpen(true);
		setNameButton('Save');
	}

	return (
		<>
			<div className='container'>
				<h2>Manage User</h2>
				<div className='title'>
					<Search className='search' placeholder="Search Name"
						allowClear
						onSearch={(e: string) => handleSearch(e)}
					/>
					<div className='group-btn'>
						<Button className='create' type="primary"
							icon={<UserAddOutlined />}
							onClick={() => {
								setModalOpen(true)
								setEditingUser(null)
								setTitleModal("Create new user")
								setNameButton("Submit")
							}}>
							{!isSmallView && 'Create'}
						</Button>
						<Button className='active'
							icon={<CheckOutlined />}
							onClick={() => { handleUpdateStatus('active') }}
							disabled={selectedRowKeys.length === 0}
						>
							<span className="button-text">Active</span>
						</Button>
						<Button className='inactive'
							icon={<StopOutlined />}
							onClick={() => { handleUpdateStatus('inactive') }}
							disabled={selectedRowKeys.length === 0}>
							<span className="button-text">Inactive</span>
						</Button>
					</div>
				</div>
				<div className='table'>
					{isSmallView ?
						(
							<List
								dataSource={filteredUsers}
								renderItem={(user) => (
									<List.Item
										actions={[
											<Button
												icon={<EditOutlined />}
												onClick={() => {
													setTitleModal('Edit user');
													setEditingUser(user);
													setModalOpen(true);
													setNameButton('Save');
												}}
												size="small"
											/>,
											<Button
												icon={<DeleteOutlined />}
												danger
												onClick={() => setDeleteUserId(user.key)}
												size="small"
											/>,
										]}
									>
										<List.Item />
										<div><b>Name:</b> {user.name}</div>
										<div><b>Age:</b> {user.age}</div>
										<div><b>Email:</b> {user.email}</div>
										<div><b>Address:</b> {user.address}</div>
										<div><b>Status123:</b> {user.status}</div>
									</List.Item>
								)}
							/>
						)
						:
						<Table<User>
							data-testid="table"
							rowClassName={(record) => {
								return record.status === 'inactive' ? 'row-inactive' : '';
							}}
							rowSelection={{
								selectedRowKeys,
								onChange: (keys, rows) => {
									setSelectedRowKeys(keys);
									setSelectedRows(rows);
								},
							}}
							columns={userColumns({ handleEditUser, setDeleteUserId, isSmallView })}
							dataSource={filteredUsers}
							pagination={{
								current: 1,
								pageSize: 8,
							}}
							rowKey="key" />
					}
				</div>
			</div>
			<FormBase
				title={titleModal}
				nameButton={nameButton}
				visible={modalOpen}
				onCancel={() => setModalOpen(false)}
				onSubmit={handleSubmit}
				initialValues={editingUser || { key: 0, name: '', age: '', email: '', address: '', status: '' }}
				user={editingUser}>
			</FormBase>
			<ModalBase
				title='Confirm'
				visible={!!deleteUserId}
				onCancel={() => setDeleteUserId(null)}
				onConfirm={() => deleteUserId && handleDelete(deleteUserId)}
			>
				Do you want to delete these user?
			</ModalBase>
		</>
	)
}
export default ManageUsers;

