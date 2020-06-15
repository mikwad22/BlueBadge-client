let APIURL = '';

switch (window.location.hostname) {
    // this is the local host name of your react app
    case 'localhost' || '127.0.0.1':
    // this is the local host name of your server/API
    APIURL = 'http://localhost:4000';
    break;
    // this is the deployed react application
    case 'moodtrackerapp.herokuapp.com' :
        // this is the full URL of your deployed server/API
        APIURL = 'https://moodtracker-server.herokuapp.com'
}

export default APIURL;