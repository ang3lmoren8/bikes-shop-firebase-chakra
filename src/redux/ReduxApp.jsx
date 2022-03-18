import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

const ReduxApp = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading='Loading' persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxApp
