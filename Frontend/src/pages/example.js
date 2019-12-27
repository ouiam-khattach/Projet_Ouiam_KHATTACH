import axios from "axios"
import React, { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap"
import ExampleTable from "../components/examples/ExampleTable"
import ExampleCreateForm from "../components/examples/ExampleCreateForm"
import ExampleUpdateForm from "../components/examples/ExampleUpdateForm"
function Example() {
    const [examples, setExample] = useState([])
    const [exampleToUpdate, setExampleToUpdate] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/examples")
            .then(result => {
                setExample(result.data)
            })
            .catch(err => console.log(err))
    }, [])

    const cbDelete = id => {
        axios.delete(`http://localhost:3000/examples/${id}`)
            .then(result => {
                console.log(result)
                setExample(examples.filter(example => example._id != id))
            })
            .catch(err => console.log(err))

    }
    const cbUpdate = (id, data) => {
        axios.put(`http://localhost:3000/examples/${id}`,
            data
        )
            .then(result => {
                console.log(result)
                setExample(examples.map(example => example._id == id ? data : example))
            })
            .catch(err => console.log(err))
    }
    const cbSetUpdate = (example) => {
        setExampleToUpdate(example)
    }
    const cbCreate = data => {
        axios.post("http://localhost:3000/examples",
            data
        )
            .then(result => {
                setExample([...examples, result.data])
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>examples </h1>
            <Row>
                <Col>
                    <ExampleCreateForm cbCreate={cbCreate} />

                </Col>
                <Col>
                    <ExampleUpdateForm cbUpdate={cbUpdate} example={exampleToUpdate} setExample={setExampleToUpdate} />

                </Col>
            </Row>
            <div >
                <ExampleTable examples={examples} cbDelete={cbDelete} cbSetUpdate={cbSetUpdate} />
            </div>



        </div>
    )
}

export default Example
