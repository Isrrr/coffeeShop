import React from 'react'

import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { Store } from './src/store'
import { AppNavigation } from './src/navigation'

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
