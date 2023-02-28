import "./Title.css";

export default function Title(props)
{
    return(
        <div className="top">
            <span className="header"><h1>{props.heading}</h1></span>
        </div>
    );
}


//export default Title;