import { Routes, Route } from 'react-router-dom'
import Contenido from './views/Contenido'
import Login from './views/Login'
import { useState } from 'react'
import UserContext from './context/UserContext'
import PrivateRoute from './components/PrivateRoute'
import Register from './views/Register'
import Reserva from './views/reservas/Reserva'
import ServiceList from './views/servicios/ServiceList'
import ServiceUpdate from './views/servicios/ServiceUpdate'
import ReserList from './views/reservas/ReserList'
import ServiceNew from './views/servicios/ServiceNew'
import ReserDetail from './views/reservas/ReserDetail'
import Home from './views/Home'

function App() {

  const userDetails = JSON.parse(localStorage.getItem('user'));
  const userInfo = userDetails ? userDetails : null;
  const [user, setUser] = useState(userInfo)
  const setUserKeyValue = (clave, valor) => {
    setUser({ ...user, [clave]: valor })
  }
  const objetoContexto = {
    user,
    setUser,
    setUserKeyValue
  }

  return (
    <UserContext.Provider value={objetoContexto}>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/" element={
          <Contenido />
        } />
        <Route path="/login" element={
          <Login />
        } />
        <Route path="/register" element={
          <Register />
        } />
        <Route path='/reserva' element={
          <PrivateRoute>
            <Reserva />
          </PrivateRoute>} />
        <Route path='/:id/update' element={
          <PrivateRoute>
            <ServiceUpdate />
          </PrivateRoute>} />
        <Route path='/servicios' element={
          <PrivateRoute>
            <ServiceList />
          </PrivateRoute>} />
        <Route path='/reservas' element={
          <PrivateRoute>
            <ReserList />
          </PrivateRoute>
        } />
        <Route path='/servicios/new' element={
          <PrivateRoute>
            <ServiceNew />
          </PrivateRoute>
        }></Route>

        <Route path='reservas/:id/detail' element={
          <PrivateRoute>
            <ReserDetail />
          </PrivateRoute>
        }></Route>
      </Routes>
    </UserContext.Provider>
  )
}

export default App
