import { PrimeReactProvider } from 'primereact/api'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
    </BrowserRouter>,
)
