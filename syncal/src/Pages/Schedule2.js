import React, { useState } from "react";
import Navegationbar from './components/navbar';
import Calendar from "./components/calendar_group_chat";

function Schedule() {
    return (
        <div id='page'>
            <Navegationbar></Navegationbar>
            <div>
                <Calendar></Calendar>
            </div>
        </div>
    );
}

export default Schedule;