import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const MainStack = createStackNavigator()

export const AppNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
    </MainStack.Navigator>
  )
}
