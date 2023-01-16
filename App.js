import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './src/navigation/MainNavigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/redux/store/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

      <NavigationContainer>
        <MainNavigation/>
      </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}