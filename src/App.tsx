import { App as AntdApp } from 'antd';
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ManageUsers from './features/UsersPage';
import LoginPage from './features/LoginPage';
import ProtectedRoute from './routes/ProtectedRoute';
import GuestRoute from './routes/GuestRoute';
import HomePage from './features/HomePage';
import AccountPage from './features/AccountPage';
import { UserProvider } from './context/userContext';
import DashboardPage from './features/DashboardPage';
import VendorPerformancePage from './features/VendorPerformancePage';
import DetailVendorPage from './features/DetailVendorPage';

function App() {
  return (
    <UserProvider>
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
              <Route index element={<ManageUsers />} />
              <Route path='/account' element={<AccountPage />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/vendor' element={<VendorPerformancePage />} />
              <Route path='/detail' element={<DetailVendorPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AntdApp>
    </UserProvider>

  )
}

export default App
