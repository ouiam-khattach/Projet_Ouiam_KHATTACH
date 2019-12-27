import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
function ExamplesForm({ cbUpdate, example={} ,setExample}) {

    const UpdateExample = () => {
        cbUpdate(example._id,example )

    }
    return (
        <div style={{ margin: 20, width: "600px" }} >
            <h3>Update Form</h3>
            <Form.Control size="md" style={{margin:5}} type="text" placeholder="name" value={example.name} onChange={(e)=> setExample({...example,name:e.target.value})}/>
            <Form.Control  size="md" style={{margin:5}} type="number" placeholder="price" value={example.price} onChange={(e)=> setExample({...example,price:e.target.value})}/>
            <Form.Control size="md" style={{margin:5}} type="number" placeholder="quantity" value={example.qte} onChange={(e)=> setExample({...example,qte:e.target.value})}/>
            <Button variant="primary" style={{margin:5}} onClick={UpdateExample}>Update</Button>
        </div>
    )
}

export default ExamplesForm
