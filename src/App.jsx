import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div></div>
    // <RouterProvider router={router}/>
  )
}

export default App
