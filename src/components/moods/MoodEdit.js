import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../helpers/enviroment';
import './index.css';

const MoodEdit = (props) => {

    console.log(props)
    const [editDate, setEditDate] = useState(props.updateMood.date);
    const [editTime, setEditTime] = useState(props.updateMood.timeOfDay);
    const [editMood, setEditMood] = useState(props.updateMood.mood);
    const [editCom, setEditCom] = useState(props.updateMood.comment);
   
    const moodUpdate = (event, mood) => {
        event.preventDefault();
        fetch(`${APIURL}/moods/log/${props.updateMood.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                    date: editDate, 
                    timeOfDay: editTime, 
                    mood: editMood, 
                    comment: editCom}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.getMoods();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader className="edit">Edit Your Mood Here</ModalHeader>
            <ModalBody>
                <Form onSubmit={moodUpdate}>
                    <FormGroup>
                        <Label htmlFor="currentDate">Edit Date:</Label>
                        <Input type="date" name="date" value={editDate} onChange={e => setEditDate(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="timeOfDay">Edit Time of Day:</Label>
                        <Input type="select" name="timeOfDay" value={editTime} onChange={e => setEditTime(e.target.value)}>
                        <option></option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="mood">Edit Mood:</Label>
                        <Input name="mood" value={editMood} onChange={e => setEditMood(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="comment">Edit Comment:</Label>
                        <Input type="textarea" name="comment" value={editCom} onChange={e => setEditCom(e.target.value)}></Input>
                    </FormGroup>
                    <Button color="info" className="button" type="submit">Update Mood Log</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
export default MoodEdit;