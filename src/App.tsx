
import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './Login'
import Signup from './Signup'
import TodoPage from './TodoPage'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="/login/todo" element={<TodoPage />} />

    </Routes>
  )
}

export default App