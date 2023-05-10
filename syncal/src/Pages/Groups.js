import React, { useState } from "react";
import Navegationbar from './components/navbar';
import Chat from './components/chat';

function Groups() {
    return (
        <div>
            <Navegationbar></Navegationbar>
            <div>

                <Chat></Chat>
            </div>

        </div>
    );
}

export default Groups;