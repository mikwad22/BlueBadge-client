import React from 'react';
import {Table, Button} from 'reactstrap';
import './index.css'

const MoodTable = (props) => {
    const deleteMood = (mood) => {
        fetch(`http://localhost:4000/moods/log/${mood.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.getMoods())
    }
const moodMapper = () => {
    return props.moods.map((mood, index) => {
        return(
            <tr key={index}>
                <th scope ="row">{mood.id}</th>
                <td>{mood.date}</td>
                <td>{mood.timeOfDay}</td>
                <td>{mood.mood}</td>
                <td>{mood.comment}</td>
                <td>
                    <Button color="info" onClick={() => {props.editUpdateMood(mood); props.updateOn()}}>Edit</Button>
                    <Button color="secondary" onClick={() => {deleteMood(mood)}}>Delete</Button>
                </td>
            </tr>
        )
    })
}
return(
    <>
    <h3 className="history">Mood History:</h3>
    <hr/>
    <Table striped>
        <thead>
            <tr>
                <th>Log #</th>
                <th>Date</th>
                <th>Time of Day</th>
                <th>Mood</th>
                <th>Comment</th>
            </tr>
        </thead>
        <tbody>
            {moodMapper()}
        </tbody>
    </Table>
    </>
)
}
export default MoodTable;