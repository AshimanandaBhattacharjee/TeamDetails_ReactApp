import "./Button.css";

export default function Button(props)
{
    return(
        <div className="click">
            <input type={props.button} className={props.class} value={props.value} />
        </div>
    );
}


//export default Button;