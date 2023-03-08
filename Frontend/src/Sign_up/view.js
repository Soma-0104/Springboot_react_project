import React,{ useEffect,useState} from "react";
import './view.css';
import axios from "axios";
function DataBaseView(){
    const [content, addContent]=useState([]);
    useEffect(()=>{

    axios.get('http://localhost:8080/login/get').then(function (response) {
    // console.log(response.data);
    addContent(response.data);
    });
    })
    return(
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Mode</th>
                    <th>Mobile Number</th>
                    <th>Type Of Dance</th>
                </tr>
                {content.map((value)=>(
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.emailId}</td>
                        <td>{value.gender}</td>
                        <td>{value.age}</td>
                        <td>{value.mode}</td>
                        <td>{value.mobileNumber}</td>
                        <td>{value.typeOfDance}</td>
                    </tr>
                ))}
                    
            </table>
            {/* <div id="deleteUser">
                    Delete User:
                    <input id="delete-input" type="text"></input>
            </div> */}
        </div>
    )
}
export default DataBaseView;