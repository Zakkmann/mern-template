import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Root = () => {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>This is React Router v6</div>} />
        <Route path="/test" element={<div>This is Test Route!</div>} />
        <Route path="/*" element={<h3>Не туда! Уходи!</h3>} />
      </Routes>
    </BrowserRouter>
   )
}
export default Root 
