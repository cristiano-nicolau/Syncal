import React from 'react';
import Schedule from './schedule';
import Dropdown from 'react-bootstrap/Dropdown';
function Homebox() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date();
    var day = days[now.getDay()];
    var month = months[now.getMonth()];
    return (
        <div id='homebox'>
            <h1>
                Welcome Joaquim,
            </h1>

            <div id='HomeButtons' class="container space-around" >
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        New
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Calendar</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Group</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Event</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <button type="button" class="btn btn-outline-secondary">Groups</button>
                <button type="button" class="btn btn-outline-secondary">Secondary</button>
                <button type="button" class="btn btn-outline-secondary">Secondary</button>
            </div>
            <h2>
                Today events ({day})
            </h2>
            <Schedule></Schedule>
            <h2>
                This month events ({month})
            </h2>
            <Schedule></Schedule>
        </div>
    );
}

export default Homebox;