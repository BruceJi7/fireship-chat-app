import React from 'react'

import './App.css'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChatRoom from './components/ChatRoom/ChatRoom'

firebase.initializeApp({
  apiKey: "AIzaSyAytGV6Szp0XJ8aZPzA_Rij3bGNnFJZk2s",
  authDomain: "chat-app-c439b.firebaseapp.com",
  projectId: "chat-app-c439b",
  storageBucket: "chat-app-c439b.appspot.com",
  messagingSenderId: "692423105722",
  appId: "1:692423105722:web:f7dc55bdde1f1fe9d1b683",
  measurementId: "G-GZM73HWHRX"
})

const auth = firebase.auth()
const firestore = firebase.firestore()



export {auth}
export {firebase}
export {firestore}


export default function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>
        EMPTY
      </header>

      <section>

        {user ? <ChatRoom/> : <SignIn />}

      </section>

    </div>
  )
}

