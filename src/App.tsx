import { App as AntdApp } from 'antd';
import './App.css'
import ManageUsers from './features/UsersPage';

function App() {
  return (
    <AntdApp>
      <ManageUsers/>
    </AntdApp>
  )
}

export default App
