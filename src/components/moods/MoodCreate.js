import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './index.css'

const MoodCreate = (props) => {
    const [date, setDate] = useState('');
    const [timeOfDay, setTimeOfDay] = useState('');
    const [mood, setMood] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4000/moods/log`, {
            method: 'POST',
            body: JSON.stringify({log: {date: date, timeOfDay: timeOfDay, mood: mood, comment: comment}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setDate('');
            setTimeOfDay('');
            setMood('');
            setComment('');
            props.getMoods();
        }) 
    }
    
    return(
        <>
        <h3 className="greeting">How are you feeling today?</h3>
        <p className="greet">A safe place to keep track of your moods and feelings</p>
        <Form onSubmit = {handleSubmit}>
            <FormGroup>
                <Label htmlFor="currentDate">Date:</Label>
                <Input type='date' name='date' value={date} id='currentDate' onChange={(e) => setDate(e.target.value)}/>
            </FormGroup> 
            <FormGroup>
                <Label htmlFor="timeOfDay">Time of Day:</Label>
                <Input type='select' name='timeOfDay' value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)}>
                <option></option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="mood">Current Mood:</Label>
                <Input name="mood" value={mood} onChange={(e) => setMood(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="comment">Enter a comment or note about your mood:</Label>
                <Input type="textarea" name ="comment" id="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click to submit mood</Button>
        </Form>
        </>
    )
}

export default MoodCreate;