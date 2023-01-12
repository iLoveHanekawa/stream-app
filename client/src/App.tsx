import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Splash from './components/Splash'
import Chat from './components/Chat'

export default function App() {    
  return (
    <>
      <Routes>
        <Route index = {true} element = {<Splash />} />
        <Route path = {'/home'} element = {<Home />}>
          <Route path = {':id'} element = {<Chat />} />
        </Route>
      </Routes>
    </>
  )
}

