import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import App from './App.tsx'
import persistStore from 'redux-persist/es/persistStore'
import store from './redux/store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from './components/ui/toaster.tsx'
const persistor = persistStore(store);

createRoot(document.getElementById('root')!).render(
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster />
        <App />
        </PersistGate>



  </Provider>,
)
