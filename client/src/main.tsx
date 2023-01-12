import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import IdContextProvider from './context/Id'
import './index.css'
import SessionProvider from './context/Session'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <SessionProvider>
        <IdContextProvider>
          <App />
        </IdContextProvider>
      </SessionProvider>
    </BrowserRouter>
)
