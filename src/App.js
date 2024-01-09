import { ApplicationView } from './views/ApplicationView'
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Authorized } from './views/Authorized'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      <Route path="*" element={
        <Authorized>
          <ApplicationView />
        </Authorized>
      } />
      
    </Routes>
  );
};