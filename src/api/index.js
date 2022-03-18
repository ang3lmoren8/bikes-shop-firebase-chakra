import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'bikeshop-a5fd3.firebaseapp.com',
  projectId: 'bikeshop-a5fd3',
  storageBucket: 'bikeshop-a5fd3.appspot.com',
  messagingSenderId: '401699745782',
  appId: '1:401699745782:web:ad2bbccd8ae4b3507061d7',
  measurementId: 'G-6M2K9TVS7Z',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const getBikes = async () => {
  const bikesCollection = collection(db, 'bikes')
  const bikesSnapshot = await getDocs(bikesCollection)
  const bikesList = bikesSnapshot.docs.map(doc => doc.data())
  return bikesList
}

export default {
  getBikes,
}
