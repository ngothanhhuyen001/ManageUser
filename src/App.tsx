import { App as AntdApp } from 'antd';
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ManageUsers from './features/UsersPage';
import LoginPage from './features/LoginPage';
import ProtectedRoute from './routes/ProtectedRoute';
import GuestRoute from './routes/GuestRoute';
import HomePage from './features/HomePage';

function App() {
  return (
    <AntdApp>
      <BrowserRouter>
        <Routes>
          <Route path="/login"
            element={
              <GuestRoute>
                <LoginPage />
              </GuestRoute>

            }
          />
          <Route path='/' element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }>
            <Route index element={<ManageUsers />}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </AntdApp>
  )
}

export default App
