import React from 'react'

import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { Store } from './src/store'

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App
