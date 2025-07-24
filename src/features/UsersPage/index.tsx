import React, { useMemo, useState } from 'react';
import { Button, Space, Table } from 'antd';
import { Input, type TableProps } from "antd";
import '../UsersPage/style.scss'
import type { User } from '../../types';
import Formbase from '../../components/Form';
import ConfirmModal from '../../components/Modal/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { createUser, deleteUser, searchUser, updateUser } from './userSlice';

const { Search } = Input;

// const data: User[] = [
// 	{
// 		key: 1,
// 		name: 'John Brown',
// 		age: '32',
// 		email: 'jonhbrown@gmail.com',
// 		address: 'New York No. 1 Lake Park',

// 	},
// 	{
// 		key: 2,
// 		name: 'Jim Green',
// 		age: '42',
// 		email: 'jimgreen@yahoo.com',
// 		address: 'London No. 1 Lake Park',

// 	},
// 	{
// 		key: 3,
// 		name: 'Joe Black',
// 		age: '32',
// 		email: 'joeblack.32@gmail.com',
// 		address: 'Sydney No. 1 Lake Park',
// 	},
// ];

const ManageUsers: React.FC = () => {

	const dispatch = useDispatch();
	const users = useSelector((state: RootState) => state.user.users);
	

	const [editingUser, setEditingUser] = useState<User | null>(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
	const [titleModal, setTitleModal] = useState('');
	const [nameButton, setNameButton] = useState('');

	const filteredUsers = useMemo(() => {
		return users.filter((u) =>
			u.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [users, searchTerm]);

	const columns: TableProps<User>['columns'] = [
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
			width: 200,
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
			title: 'Action',
			key: 'action',
			render: (_, record: User) => (
				<Space size="middle">
					<Button

						onClick={() => {
							setTitleModal('Edit user');
							setEditingUser(record);
							setModalOpen(true);
							setNameButton('Save')
						}}
					>
						Edit
					</Button>
					<Button type='primary' danger
						onClick={() => setDeleteUserId(record.key)}>
						Delete
					</Button>
				</Space>
			),
		},
	];

	const handleSearch = (value: string) => {
		setSearchTerm(value);
		dispatch(searchUser(value));
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

	return (
		<>
			<div className='container'>
				<h2>Manage User</h2>
				<div className='title'>
					<Search className='search' placeholder="Search Name"
						allowClear
						onSearch={handleSearch}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)} />
					<Button className='create' type="primary"
						onClick={() => {
							setModalOpen(true)
							setEditingUser(null)
							setTitleModal("Create new user")
							setNameButton("Submit")
						}}>
						Create
					</Button>
				</div>
				<div className='table'>
					<Table<User> columns={columns} dataSource={filteredUsers}
						pagination={{
							current: 1,
							pageSize: 8,
						}}
						rowKey="key" />
				</div>
			</div>
			<Formbase
				title={titleModal}
				nameButton={nameButton}
				visible={modalOpen}
				onCancel={() => setModalOpen(false)}
				onSubmit={handleSubmit}
				initialValues={editingUser || { key: 0, name: '', age: '', email: '', address: '' }}
				user={editingUser}>
			</Formbase>
			<ConfirmModal
				visible={!!deleteUserId}
				onCancel={() => setDeleteUserId(null)}
				onConfirm={() => deleteUserId && handleDelete(deleteUserId)}
			/>
		</>
	)

}
export default ManageUsers;

