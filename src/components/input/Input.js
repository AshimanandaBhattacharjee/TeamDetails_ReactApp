import { useState } from "react";
import "./Input.css";

export default function Input(props) {
    const { formValues, setFormValues } = useState({});
    const handleOnChange = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value }) 
        console.log(formValues)
    }

    return (
        <div className="out">
            {/* <span className="title"><h1>Team Details</h1></span> */}

            <div className="column">
                <span className="name">{props.field} </span>
                <input className={props.class} type={props.type} id={props.id} value={formValues} onChange={handleOnChange} />
            </div>

            {/* <div className="field">
        <span className="name">Member Title</span>
            <input className="fill" type="text" />
    </div>

    <div className="field" id="img">
        <span className="name">Member Picture</span>
            <input className="fill" type="file" />
    </div>

    <div className="field">
        <span className="name">Member Hobbies</span>
            <input className="fill" type="file" />
    </div> */}


        </div>

    );
}

//export default Input;