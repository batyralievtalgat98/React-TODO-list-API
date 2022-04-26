import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../contexts/TodoContext';

const EditTodo = () => {
  const { taskToEdit, saveTask } = useContext(TodoContext)

  const [newEditItem, setnewEditItem] = useState(taskToEdit)

  const navigate = useNavigate()

  function handleEditInput(e) {
    let newTask = {
      ...newEditItem,
      task: e.target.value,
    }
    setnewEditItem(newTask);
  }

  useEffect(() => {
    setnewEditItem(taskToEdit)
  }, [taskToEdit])


  return (
    <div className='d-flex m-3'>
      {newEditItem ? (<> <Form.Control type='text'
        placeholder='add todo'
        className="w-25"
        value={newEditItem.task}
        onChange={handleEditInput}
      />
        <Button variant="warning"
          onClick={() => {
            saveTask(newEditItem);
            navigate('/')
          }} >
          save
        </Button></>
      ) : (
        'Loading...'
      )}




    </div>
  );
};

export default EditTodo;