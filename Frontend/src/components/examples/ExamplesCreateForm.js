import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
function ExamplesForm({ cbCreate }) {
    const [newExample, setNewExample] = useState({})
    const createExample = () => {
        cbCreate(newExample)
        setNewExample({})

    }
    return (
        <div style={{ margin: 20, width: "600px" }} >
            <h3>Creation Form</h3>
            <Form.Control size="md" style={{margin:5}} type="text" placeholder="name" value={newExample.name} onChange={(e)=> setNewExample({...newExample,name:e.target.value})}/>
            <Form.Control  size="md" style={{margin:5}} type="number" placeholder="price" value={newExample.price} onChange={(e)=> setNewExample({...newExample,price:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}}type="number" placeholder="quantity" value={newExample.qte} onChange={(e)=> setNewExample({...newExample,qte:e.target.value})}/>
            <Button variant="primary" onClick={createExample}>Add</Button>
        </div>
    )
}

export default ExamplesForm
