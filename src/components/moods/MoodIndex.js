import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import MoodCreate from './MoodCreate';
import MoodTable from './MoodTable';
import MoodEdit from './MoodEdit';
import './index.css'

const MoodIndex = (props) => {
    const [moods, setMoods] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [moodToUpdate, setMoodToUpdate] = useState({});
    console.log(moods)
    const getMoods = () => {
        fetch(`http://localhost:4000/moods/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            setMoods(logData.logs)
            console.log(logData)
        })
    }
    useEffect(() => {
        getMoods();
    }, [])

    const editUpdateMood = (mood) => {
        setMoodToUpdate(mood);
        console.log(mood);
    }
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false);
    }
    return(
        <>
        <Container>
            <Row>
                <Col className="moods" md="6">
                    <MoodCreate getMoods={getMoods} token={props.token}/>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col md="12">
                    <MoodTable moods={moods} editUpdateMood={editUpdateMood}
                    updateOn={updateOn} getMoods={getMoods} token={props.token}/>
                </Col>
                {updateActive ? <MoodEdit moodToUpdate={moodToUpdate}
                updateOff={updateOff} token={props.token} getMoods={getMoods}/> : <></>}
            </Row>
        </Container>
        </>
    )
}
export default MoodIndex;