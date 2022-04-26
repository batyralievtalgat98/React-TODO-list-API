import React, { useContext, useEffect } from 'react';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TodoContext } from '../../contexts/TodoContext';
const TodoList = () => {
    const { todos, getTodos, changeStatus, deleteTask, editTodo } = useContext(TodoContext);
    useEffect(() => {
        getTodos()
    }, []);

    return (
        <div>
            {todos.map((item) => (
                <Card border="primary" style={{ width: '18rem' }} key={item.id}>
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                        <input type="checkbox" checked={item.status} onChange={() => changeStatus(item.id)} />
                        <span className={item.status ? "completed" : ''}>{item.task}</span>
                        <div>
                            <Button variant='danger' size='sm' onClick={() => deleteTask(item.id)}>Delete</Button>
                            <Link to='/edit'>
                                <Button variant='warning' size='sm' onClick={() => editTodo(item.id)} >EDIT</Button>
                            </Link>
                        </div>

                    </Card.Header>
                </Card>
            ))}
        </div >
    );
};

export default TodoList;