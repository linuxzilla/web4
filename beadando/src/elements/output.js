import React from "react";

function Output(props) {

    if (props.data.isAgree) {
        return (
            <div>
                <fieldset>
                    <h1>ÖSSZEGZÉS:</h1>
                    <h2>Name: {props.data.name}</h2>
                    <p>
                        Születési dátum: <b>{props.data.birthDate}</b><br/>
                        Email: {props.data.email}<br/>
                        Nem:
                        {props.data.gender === "male" && <b> Férfi</b>}
                        {props.data.gender === "female" && <b> Nő</b>}
                        {props.data.gender === "nobinary" && <b> Nem bináris</b>}
                        <br/>
                        Telefonszám: {props.data.phone}<br/>
                    </p>
                    <label><b>Végezség: </b></label>
                    {
                        props.data.education === "none" &&
                        <p>Nincs végeztséged!</p>
                    }
                    {
                        props.data.education === "elementary" &&
                        <p>Elvégezted az általános iskolát!</p>
                    }
                    {
                        props.data.education === "worker_qualification" &&
                        <p>Szakmunkás képzőt végeztél!</p>
                    }
                    {
                        props.data.education === "graduation" &&
                        <p>Éretségivel rendelkezel!.</p>
                    }
                    {
                        props.data.education === "diploma" &&
                        <p>Diplomás végzetséged van!</p>
                    }
                    {
                        props.data.education === "master" &&
                        <p>Mester diplomád van!</p>
                    }<br/>
                    <label><b>Pár mondatban:</b></label>
                    <p>{props.data.about}</p>
                    <label>Jártaságaid:</label>
                    <ul>
                        {props.data.skills.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <button
                        className="add"
                        type="button"
                        onClick={props.send}
                    >
                        Elküld
                    </button>
                </fieldset>
            </div>
        )
    } else {
        return (<b></b>);
    }
}

export default Output