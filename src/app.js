import React, { Component } from 'react'
import { View } from 'react-native'
import { Header } from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDWkQcs8oZeN9wRryQ2xLKMeoCAN3A3tPk',
      authDomain: 'auth-react-native-ba781.firebaseapp.com',
      databaseURL: 'https://auth-react-native-ba781.firebaseio.com',
      storageBucket: 'auth-react-native-ba781.appspot.com',
      messagingSenderId: '491299144224'
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App