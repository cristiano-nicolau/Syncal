import React from 'react';
import Schedule from './schedule';
import Schedule2 from './schedule2';
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
                Welcome João Dias,
            </h1>

            <div id='HomeButtons' class="container space-around" >
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        New
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/newcalendar">Calendar</Dropdown.Item>
                        <Dropdown.Item href="/newgroup">Group</Dropdown.Item>
                        <Dropdown.Item href="/newevent">Event</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <a href="/calendar">
                <button  href="/calendar" type="button" class="btn btn-outline-secondary">My schedules</button>
                </a>
                <button type="button" class="btn btn-outline-secondary">Sharing Options</button>

                <a href="/groups">
                    <button type="button" href='/groups' class="btn btn-outline-secondary">Group chat</button>
                </a>
            </div>
            <h2>
                Today events ({day})
            </h2>
            <Schedule></Schedule>
            <h2>
                This month events ({month})
            </h2>
            <Schedule2></Schedule2>
        </div>
    );
}

export default Homebox;