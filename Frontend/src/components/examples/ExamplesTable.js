import React from 'react'
import { Table, Button } from "react-bootstrap"
function ExamplesTable({ examples, cbDelete, cbSetUpdate }) {
    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>Example Name</th>
                    <th>Example Price</th>
                    <th>qte</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {examples.map((example, i) => (<tr key={i}>
                    <td>{example.name}</td>
                    <td>{example.price}</td>
                    <td>{example.qte}</td>
                    <td style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                        <Button variant="danger" onClick={()=> cbDelete(example._id)}>
                            delete
                        </Button>
                        <Button variant="warning" onClick={()=> cbSetUpdate(example)}>
                            Update
                        </Button>
                    </td>
                </tr>))}
            </tbody>
        </Table>

    )
}

export default ExamplesTable
