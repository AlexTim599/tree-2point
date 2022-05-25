import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, selectTodo } from "../../features/todo/todoSlice";

const Todo = () => {
    const dispath = useDispatch();
    const { todos: todoTree, selectedItem } = useSelector((state) => state.todo);
    console.log(Object.keys(selectedItem), 'selectedItem');

    return (
        <>
            <div className="container sm d-flex justify-content-sm-around text-center mt-5">
                <Card border="primary" style={{ width: "25rem", height: "40rem" }}>
                    <Card.Header>Todo</Card.Header>
                    <Card.Body style={{ overflow: "overlay" }}>

                        {todoTree?.map((item) => (

                            <Row key={item.id} onClick={() => dispath(selectTodo(item))}>
                                <Col style={{ border: "1px solid blue" }}>
                                    {item.content}
                                    {/* {item.id} */}
                                </Col>
                            </Row>
                        ))}
                    </Card.Body>
                </Card>

                <Card border="primary" style={{ width: "20rem", height: "40rem" }}>
                    <Card.Header>Data</Card.Header>
                    <Card.Body>

                        {Object.keys(selectedItem)?.map((item, index) =>

                            <Row key={index}>
                                <Col style={{ border: "1px solid blue" }}>
                                    {selectedItem[item]}

                                </Col>

                            </Row>

                        )}


                    </Card.Body>
                </Card>
            </div>
            <div className=" d-flex justify-content-end">
                <Button variant="primary" size="sm" onClick={() => dispath(getTodos())}>
                    Refrech
                </Button>
                <Button variant="primary" size="sm">
                    Delete
                </Button>
            </div>
        </>
    );
};
export default Todo;
