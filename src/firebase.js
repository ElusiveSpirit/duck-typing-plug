import Firebase from 'firebase'

export const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyCAe-IT0qq8TawE5jBvOuPAhOQu2iyJ8yk',
  authDomain: 'ducktyping-ru.firebaseapp.com',
  databaseURL: 'https://ducktyping-ru.firebaseio.com',
  projectId: 'ducktyping-ru',
  storageBucket: '',
  messagingSenderId: '45671810873'
})

export const db = firebaseApp.database()

export const refs = {
  emails: db.ref('emails'),
  refLinks: db.ref('refLinks')
}
