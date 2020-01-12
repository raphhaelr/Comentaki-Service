import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDZJ76Bi8zrNiT5INTbgGOmVIV1NRNczOU",
    authDomain: "comentaki-service.firebaseapp.com",
    databaseURL: "https://comentaki-service.firebaseio.com",
    projectId: "comentaki-service",
    storageBucket: "comentaki-service.appspot.com",
    messagingSenderId: "128227872936",
    appId: "1:128227872936:web:480552c67f3ad122c0b29d"
}

firebase.initializeApp(firebaseConfig)

export default firebase