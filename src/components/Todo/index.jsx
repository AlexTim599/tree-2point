import { Button, Card, Col, Container, Row } from "react-bootstrap"


const Todo = () => {
    return (
        <>
            <div className="container sm d-flex justify-content-sm-around text-center mt-5">

                <Card border="primary" style={{ width: '25rem', height: '40rem', }}>
                    <Card.Header>Todo</Card.Header>
                    <Card.Body style={{ overflow: 'overlay' }}>
                        <Row >
                            <Col style={{ border: '1px solid blue' }}>wwwwwwwwwwwwwwwwwwww</Col>
                            <Col>wwwwwwwwwwwwwwwwwwww</Col>


                        </Row>
                    </Card.Body>
                </Card>


                <Card border="primary" style={{ width: '20rem', height: '40rem' }}>
                    <Card.Header>Data</Card.Header>
                    <Card.Body>
                        <Row >
                            <Col >id</Col>
                            <Col>label</Col>
                            <Col>parentId</Col>


                        </Row>
                    </Card.Body>
                </Card>

            </div>
            <div className=" d-flex justify-content-end">
                <Button variant="primary" size="sm">
                    Refrech
                </Button>
                <Button variant="primary" size="sm">
                    Delete
                </Button>
            </div>


        </>
    )
}
export default Todo