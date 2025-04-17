import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Chat from './components/Chat/Chat'
import Layout from './Layout'
import VoiceAssistant from './components/VoiceAssistant/VoiceAssistant'
import About from './components/About/About'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/assistant" element={<VoiceAssistant />}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
