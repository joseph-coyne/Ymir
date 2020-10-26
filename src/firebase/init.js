import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyCe6CSzOUs6_Ij_VHa6hancdEi6CNBtw7c',
  authDomain: 'projectdomain.com',
  databaseURL: 'https://project.firebaseio.com',
  projectId: 'project',
  storageBucket: 'project.appspot.com',
  messagingSenderId: '458464977217'
}

firebase.initializeApp(config)
