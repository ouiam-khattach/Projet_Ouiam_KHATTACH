import axios from "axios"
import React, { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap"
import UsersTable from "../components/users/UsersTable"
import UsersCreateForm from "../components/users/UsersCreateForm"
import UsersUpdateForm from "../components/users/UsersUpdateForm"
function Users() {
    const [users, setUsers] = useState([])
    const [userToUpdate, setUserToUpdate] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then(result => {
                setUsers(result.data)
            })
            .catch(err => console.log(err))
    }, [])

    const cbDelete = id => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(result => {
                console.log(result)
                setUsers(users.filter(user => user._id != id))
            })
            .catch(err => console.log(err))

    }
    const cbUpdate = (id, data) => {
        axios.put(`http://localhost:3000/users/${id}`,
            data
        )
            .then(result => {
                console.log(result)
                setUsers(users.map(user => user._id == id ? data : user))
            })
            .catch(err => console.log(err))
    }
    const cbSetUpdate = (user) => {
        setUserToUpdate(user)
    }
    const cbCreate = data => {
        axios.post("http://localhost:3000/users",
            data
        )
            .then(result => {
                setUsers([...users, result.data])
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>users </h1>
            <Row>
                <Col>
                    <UsersCreateForm cbCreate={cbCreate} />

                </Col>
                <Col>
                    <UsersUpdateForm cbUpdate={cbUpdate} user={userToUpdate} setUser={setUserToUpdate} />

                </Col>
            </Row>
            <div >
                <UsersTable users={users} cbDelete={cbDelete} cbSetUpdate={cbSetUpdate} />
            </div>



        </div>
    )
}

export default Users
