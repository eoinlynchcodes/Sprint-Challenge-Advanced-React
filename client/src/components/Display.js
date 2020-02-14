import React from 'react';

export default function Display(props){

    return(
        <div><br></br>
            Name: {props.name} <br></br>
            Country: {props.country} <br></br>
            Searches: {props.searches} <br></br>
            ID: {props.id} <br></br>
            <br></br>
        </div>
    )
}
