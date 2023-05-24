
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import NewCalendar from './Pages/Newcalendar.js';
import NewGroup from './Pages/Newgroup.js';
import NewEvent from './Pages/NewEvent.js';
import Groups from './Pages/Groups';
import Schedule from './Pages/Schedule';
import Profile from './Pages/ProfilePage.js';
import ChatPagep from './Pages/ChatPagep';
import Schedule2 from './Pages/Schedule2';
import Profile2 from './Pages/ProfilePage2.js';

const App = () => {
   return (

      <>
         <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
         </head>

         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/newcalendar" element={<NewCalendar />} />
            <Route path="/newgroup" element={<NewGroup />} />
            <Route path="/newevent" element={<NewEvent />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/calendar" element={<Schedule />} />
            <Route path="/calendar_groups" element={<Schedule2 />} />
            <Route path="/JoãoDias" element={<Profile />} />
            <Route path="/RafaelLeão" element={<Profile2 />} />
            <Route path="/chat" element={<ChatPagep />} />


         </Routes>
      </>
   );
};

export default App;