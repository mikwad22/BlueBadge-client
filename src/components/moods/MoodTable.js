import React from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../helpers/enviroment';
import './index.css';

const MoodTable = (props) => {
    const deleteMood = (mood) => {
        fetch(`${APIURL}/moods/log/${mood.id}`, {
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
        console.log(mood)
        let convertDate = mood.date;
        let sliced = convertDate.slice(0, 10)
        return(
            <tr key={index}>
                <th scope ="row">{sliced}</th>
                <td>{mood.timeOfDay}</td>
                <td>{mood.mood}</td>
                <td>{mood.comment}</td>
                <td>
                    <Button className="button" outline color="info" onClick={() => {props.editUpdateMood(mood); props.updateOn()}}>Edit</Button>
                    <Button className="button" outline color="danger" onClick={() => {deleteMood(mood)}}>Delete</Button>
                </td>
            </tr>
        )
    })
}
return(
    <div className="tab">
    <h3 className="history">Mood History</h3>
    <hr/>
    <Table size="sm" striped className="table">
        <thead className="thead">
            <tr>
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
    </div>
)
}
export default MoodTable;