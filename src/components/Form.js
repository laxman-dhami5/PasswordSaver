import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Modal from './Modal'
const Form = (props) => {
    const [title,setTitle]=useState('')
    const [password,setPassword]=useState('')
    const titleHandler=(event)=>{
       setTitle(event.target.value)
    }
    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value)
    }
    const formSubmitHandler=(event)=>{
     event.preventDefault();
     const formData={
        title:title,
        password:password,
        
     }
     console.log(formData)
     props.submitData(formData)
    }
  return (
    <Modal onClose={props.onClose}>
    <Card style={{ width: '18rem', margin: '0 auto', padding: '20px', marginTop: '20px' }}>
      <Card.Body>
        <div style={{ textAlign: 'center' }}>
          <form onSubmit={formSubmitHandler}>
            <div className='mb-3'>
              <label >Title</label>
              <input type="text" onChange={titleHandler} value={title}  />
            </div>
            <div className='mb-3'>
              <label >Password</label>
              <input type="password" onChange={passwordChangeHandler} value={password}  />
            </div>
            <Button type='submit' className='me-2' varient='Primary'>Add</Button>
            <Button onClick={props.onClose} type='button' variant='danger'>X</Button>
          </form>
        </div>
      </Card.Body>
    </Card>
    </Modal>
  );
}

export default Form;
