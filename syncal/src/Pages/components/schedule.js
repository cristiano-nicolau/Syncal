import React from 'react';
import PopupButton from './buttons';
import '../css/homebox.css';
function Schedule() {
    return (<div id='schedbut'>
        <h5>From 11pm to 12pm</h5>
        <PopupButton />
        <h5>From 14pm to 16pm</h5>
        <PopupButton />
        <h5>From 18pm to 20pm</h5>
        <PopupButton />
        <h5>From 20pm to 22pm</h5>
        <PopupButton />
    </div>
    );
}


export default Schedule;

