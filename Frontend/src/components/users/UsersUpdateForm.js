import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
function UsersForm({ cbUpdate, user={} ,setUser}) {

    const UpdateUser = () => {
        cbUpdate(user._id,user )

    }
    return (
        <div style={{ margin: 20, width: "600px" }} >
            <h3>Update Form</h3>
            <Form.Control size="md" style={{margin:5}} type="text" placeholder="name" value={user.name} onChange={(e)=> setUser({...user,name:e.target.value})}/>
            <Form.Control  size="md" style={{margin:5}} type="text" placeholder="gender" value={user.gender} onChange={(e)=> setUser({...user,gender:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}} type="date" placeholder="date" value={user.dob} onChange={(e)=> setUser({...user,dob:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}} type="boolean" placeholder="news" value={user.news} onChange={(e)=> setUser({...user,news:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}} type="text" placeholder="email" value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})}/>
            <Button variant="primary" style={{margin:5}} onClick={UpdateUser}>Update</Button>
        </div>
    )
}

export default UsersForm
