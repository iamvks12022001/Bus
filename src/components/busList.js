import React from 'react'
import { Table ,Badge } from 'reactstrap';

function displayLocation(){
    console.log("clicked")
}


function BusList(props) {
    const busLi= props.buses.map((bus)=>{
        return(
            <tr key={bus.busNo} onClick={displayLocation}>
            <td>{bus.busNo}</td>
            <td>{bus.route}</td>
            <td>{bus.days.map((day)=>{
                return(
                    <Badge style={badStyle}>{day}</Badge>
                )
            })
            }
            </td>            
           
            </tr>
        )
    });
    
    return (
        <div className="container">
            <Table>
                <thead>
                    <tr>
                    <th>Bus Number</th>
                    <th>Bus Route</th>
                    <th>Days</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {busLi}
                </tbody>
            </Table>
        </div> 
    )
}

const badStyle={
    background:"red",
    margin:2
}
export default BusList
