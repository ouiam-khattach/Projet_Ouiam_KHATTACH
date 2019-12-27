import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
function UsersForm({ cbCreate }) {
    const [newUser, setNewUser] = useState({})
    const createUser = () => {
        cbCreate(newUser)
       

    }
    return (
        <div style={{ margin: 20, width: "600px" }} >
            <h3>Creation Form</h3>
            <Form.Control size="md" style={{margin:5}} type="text" placeholder="name" value={newUser.name} onChange={(e)=> setNewUser({...newUser,name:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}} type="text" placeholder="gender" value={newUser.gender} onChange={(e)=> setNewUser({...newUser,gender:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}}type="date" placeholder="date" value={newUser.dob} onChange={(e)=> setNewUser({...newUser,dob:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}}type="boolean" placeholder="news" value={newUser.news} onChange={(e)=> setNewUser({...newUser,news:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}} type="text" placeholder="email" value={newUser.email} onChange={(e)=> setNewUser({...newUser,email:e.target.value})}/>
            <Button variant="primary" onClick={createUser}>Add</Button>

        </div>
    )
}

export default UsersForm
