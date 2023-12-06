import React from 'react'
import { Table } from "react-bootstrap";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
const ImpDates = () => {
  return (<div>
   <Header active="dates" />
    <div className="container" >
    <h1 className="mt-5 mb-3 green-heading">Important Dates</h1>

    {/* <Table bordered > */}

    <Table bordered >
      <tbody>
        {/* <tr>
          <td>Paper Submission open </td>
          <td>April 1, 2023</td>
        </tr> */}
        <tr>
          <td>Full Paper Submission</td>
          <td> July 15, 2024 </td>
        </tr>
        <tr>
          <td>Acceptance Notification due </td>
          <td> July 25, 2024 </td>
        </tr>
        {/* <tr>
          <td>Workshop Proposal due </td>
          <td> November 30, 2023 </td>
        </tr>
        <tr>
          <td>Camera Ready Paper due   </td>
          <td>December 31, 2023</td>
        </tr> */}

        <tr>
          <td>Registration due  </td>
          <td>August 05, 2024</td>
        </tr>

        <tr>
          <td>Conference dates </td>
          <td >August 23-24, 2024</td>
        </tr>
      </tbody>
    </Table>
    {/* <div style={{height:"50vh"}}>

    </div> */}

    </div>
    <div style={{ position: "absolute", bottom: "0" }}>
      <Footer />
    </div>
  </div>)
}

export default ImpDates