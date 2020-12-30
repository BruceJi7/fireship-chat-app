import React, { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import ChatMessage from '../ChatMessage/ChatMessage'


import {firebase, firestore, auth} from "../../App"

export default function ChatRoom() {

    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(query, {idField: 'id'})

    const [formValue, setFormValue] = useState('')

    const sendMessage = async(e) => {
        e.preventDefault();
        
        const { uid, photoURL } = auth.currentUser

        await messagesRef.add({
            text:formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('')

    }


    return (
        <>
        <div>
           {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)} 
        </div>

        <form className="message-form" onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

            <button type="submit" on>SENDO</button>

        </form>
        </>
    )
}


// Up to 6:28