import React from "react";

export default function Input(props) {
    return <input className={props.className} type={props.type} value={props.value} id={props.id} name={props.name} placeholder={props.placeholder}/>
}
