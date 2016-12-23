import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: null,
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDWkQcs8oZeN9wRryQ2xLKMeoCAN3A3tPk',
      authDomain: 'auth-react-native-ba781.firebaseapp.com',
      databaseURL: 'https://auth-react-native-ba781.firebaseio.com',
      storageBucket: 'auth-react-native-ba781.appspot.com',
      messagingSenderId: '491299144224',
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    if (this.state.loggedIn === null) {
      return (
        <View style={styles.buttonContainerStyle}>
          <Spinner size="small" />
        </View>
      )
    } else if (this.state.loggedIn) {
      return (
        <View style={styles.buttonContainerStyle}>
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        </View>
      )
    }

    return <LoginForm />
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row',
  },
}

export default App
