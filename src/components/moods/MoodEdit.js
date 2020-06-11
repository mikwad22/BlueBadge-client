import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import './index.css'

const MoodEdit = (props) => {
    const [editDate, setEditDate] = useState(props.moodToUpdate.date);
    const [editTime, setEditTime] = useState(props.moodToUpdate.timeOfDay);
    const [editMood, setEditMood] = useState(props.moodToUpdate.mood);
    const [editCom, setEditCom] = useState(props.moodToUpdate.comment);
    
    const moodUpdate = (event, mood) => {
        event.preventDefault();
        fetch(`http://localhost:4000/moods/log/${props.moodToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: {
                    date: editDate, 
                    timeOfDay: editTime, 
                    mood: editMood, 
                    comment: editCom}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then(() => {
            props.getMoods();
            props.updateOff();
        })
    }
    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit Your Mood Here</ModalHeader>
            <ModalBody>
                <Form onSubmit={moodUpdate}>
                    <FormGroup>
                        <Label htmlFor="currentDate">Edit Date:</Label>
                        <Input type="date" name="date" value={editDate} onChange={(e) => setEditDate(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="timeOfDay">Edit Time of Day:</Label>
                        <Input type="select" name="timeOfDay" value={editTime} onChange={(e) => setEditTime(e.target.value)}>
                        <option></option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="mood">Edit Mood:</Label>
                        <Input name="mood" value={editMood} onChange={(e) => setEditMood(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="comment">Edit Comment:</Label>
                        <Input type="textarea" name="comment" value={editCom} onChange={(e) => setEditCom(e.target.value)}></Input>
                    </FormGroup>
                    <Button type="submit">Update Mood Log</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}
export default MoodEdit;