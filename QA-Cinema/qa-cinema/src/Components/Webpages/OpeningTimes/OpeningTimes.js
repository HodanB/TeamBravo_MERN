import './OpeningTimes.css';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';

function OpeningTimes() {
    return (
        <>
            <div>
                <h1 id="OpenTimesh1">Opening Times</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Open</th>
                            <th>Close</th>
                            <th>Last Film start</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>09:00</td>
                            <td>00:00</td>
                            <td>22:00</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>11:00</td>
                            <td>00:00</td>
                            <td>23:00</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>11:00</td>
                            <td>00:00</td>
                            <td>23:00</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>11:00</td>
                            <td>00:00</td>
                            <td>23:00</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>09:00</td>
                            <td>01:00</td>
                            <td>23:30</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>09:00</td>
                            <td>01:00</td>
                            <td>00:00</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>09:00</td>
                            <td>01:00</td>
                            <td>00:00</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Times my vary - More Info</Accordion.Header>
                        <Accordion.Body>
                            Bank holiday times will mean that the Cinema will open 1 hour later and close 1 hour earlier. This means that the last viewing will also be 1 hour earlier.
                            <br />
                            Times are also subject to change if there are staff shortages.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}

// function OpeningTimes() {
//     return (
//         <div id="OpenTimesDiv">
//             <h1 id="OpenTimesh1">Opening Times</h1>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Monday</h2>
//                 <p id="OpenTimesp">09:00 - 00:00</p>
//             </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Tuesday</h2>
//                 <p id="OpenTimesp">11:00 - 00:00</p>
//             </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Wednesday</h2>
//                 <p id="OpenTimesp">11:00 - 00:00</p>
//             </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Thursday</h2>
//                 <p id="OpenTimesp">11:00 - 00:00</p>
//                 </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Friday</h2>
//                 <p id="OpenTimesp">09:00 - 00:00</p>
//                 </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Saturday</h2>
//                 <p id="OpenTimesp">09:00 - 01:00</p>
//             </div>
//             <div id="OpenTimesDiv2">
//                 <h2 id="OpenTimesh2">Sunday</h2>
//                 <p id="OpenTimesp">09:00 - 01:00</p>
//             </div>
//             <div id="OpenTimesDiv3">
//                 <p>Times are subject to change on Bank Holidays.</p>
//             </div>
//         </div>
//     );
// }

export default OpeningTimes;