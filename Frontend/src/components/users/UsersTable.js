import React from 'react'
import { Table, Button } from "react-bootstrap"
function UsersTable({ users, cbDelete, cbSetUpdate }) {
    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>gender</th>
                    <th>Date of Birth </th>
                    <th>news </th>
                    <th>Email </th>
                   
                </tr>
            </thead>
            <tbody>
                {users.map((user, i) => (<tr key={i}>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.dob}</td>
                    <td>{user.news}</td>
                    <td>{user.email}</td>
                    <td style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                        <Button variant="danger" onClick={()=> cbDelete(user._id)}>
                            delete
                        </Button>
                        <Button variant="warning" onClick={()=> cbSetUpdate(user)}>
                            Update
                        </Button>
                    </td>
                </tr>))}
            </tbody>
        </Table>

    )
}

export default UsersTable
