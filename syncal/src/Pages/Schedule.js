import React, { useState } from "react";
import Navegationbar from './components/navbar';
import calendariotafoda from "./components/calendar";

function Schedule() {
    return (
        <div>
            <Navegationbar></Navegationbar>
            <div>
                <calendariotafoda></calendariotafoda>
            </div>
        </div>
    );
}

export default Schedule;