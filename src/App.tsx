import { App as AntdApp } from 'antd';
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ManageUsers from './features/UsersPage';
import LoginPage from './features/LoginPage';

function App() {
  return (
    <AntdApp>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path='/' element={<ManageUsers />} />
        </Routes>
      </BrowserRouter>
    </AntdApp>
  )
}

export default App
