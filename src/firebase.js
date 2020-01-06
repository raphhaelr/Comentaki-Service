import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
    'YOUR_FIREBASE_PROJECT_CONFIGS'
}

firebase.initializeApp(firebaseConfig)

export default firebase